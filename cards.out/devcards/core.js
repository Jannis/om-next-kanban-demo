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
devcards.core.react_element_type_symbol = (function (){var or__4986__auto__ = (function (){var and__4974__auto__ = typeof Symbol !== 'undefined';
if(and__4974__auto__){
var and__4974__auto____$1 = cljs.core.fn_QMARK_(Symbol);
if(and__4974__auto____$1){
var and__4974__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__4974__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__4974__auto____$2;
}
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
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
document.body.addEventListener("figwheel.js-reload",(function (p1__21479_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$jsreload,p1__21479_SHARP_.detail], null));
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
var and__4974__auto__ = cljs.core.map_QMARK_(c);
if(and__4974__auto__){
var map__21486 = c;
var map__21486__$1 = ((((!((map__21486 == null)))?((((map__21486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21486):map__21486);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21486__$1,cljs.core.cst$kw$path);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21486__$1,cljs.core.cst$kw$func);
cljs.core.vector_QMARK_(path);

cljs.core.not_empty(path);

cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_(func);
} else {
return and__4974__auto__;
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
var base__20614__auto___21498 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node(this$);
}), "render": (function (){
var this$ = this;
var G__21488 = "pre";
var G__21489 = {"className": (cljs.core.truth_(devcards.core.get_hljs())?"com-rigsomelight-devcards-code-highlighting":"")};
var G__21490 = (function (){var G__21491 = "code";
var G__21492 = {"className": (function (){var or__4986__auto__ = (devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$lang) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$lang));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return "";
}
})(), "ref": "code-ref"};
var G__21493 = sablono.interpreter.interpret((devcards.core.get_props.cljs$core$IFn$_invoke$arity$2 ? devcards.core.get_props.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$code) : devcards.core.get_props.call(null,this$,cljs.core.cst$kw$code)));
return React.createElement(G__21491,G__21492,G__21493);
})();
return React.createElement(G__21488,G__21489,G__21490);
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__20614__auto___21498);
}

var seq__21494_21499 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21495_21500 = null;
var count__21496_21501 = (0);
var i__21497_21502 = (0);
while(true){
if((i__21497_21502 < count__21496_21501)){
var property__20615__auto___21503 = chunk__21495_21500.cljs$core$IIndexed$_nth$arity$2(null,i__21497_21502);
if(cljs.core.truth_((base__20614__auto___21498[property__20615__auto___21503]))){
(devcards.core.CodeHighlight.prototype[property__20615__auto___21503] = (base__20614__auto___21498[property__20615__auto___21503]));
} else {
}

var G__21504 = seq__21494_21499;
var G__21505 = chunk__21495_21500;
var G__21506 = count__21496_21501;
var G__21507 = (i__21497_21502 + (1));
seq__21494_21499 = G__21504;
chunk__21495_21500 = G__21505;
count__21496_21501 = G__21506;
i__21497_21502 = G__21507;
continue;
} else {
var temp__4425__auto___21508 = cljs.core.seq(seq__21494_21499);
if(temp__4425__auto___21508){
var seq__21494_21509__$1 = temp__4425__auto___21508;
if(cljs.core.chunked_seq_QMARK_(seq__21494_21509__$1)){
var c__5789__auto___21510 = cljs.core.chunk_first(seq__21494_21509__$1);
var G__21511 = cljs.core.chunk_rest(seq__21494_21509__$1);
var G__21512 = c__5789__auto___21510;
var G__21513 = cljs.core.count(c__5789__auto___21510);
var G__21514 = (0);
seq__21494_21499 = G__21511;
chunk__21495_21500 = G__21512;
count__21496_21501 = G__21513;
i__21497_21502 = G__21514;
continue;
} else {
var property__20615__auto___21515 = cljs.core.first(seq__21494_21509__$1);
if(cljs.core.truth_((base__20614__auto___21498[property__20615__auto___21515]))){
(devcards.core.CodeHighlight.prototype[property__20615__auto___21515] = (base__20614__auto___21498[property__20615__auto___21515]));
} else {
}

var G__21516 = cljs.core.next(seq__21494_21509__$1);
var G__21517 = null;
var G__21518 = (0);
var G__21519 = (0);
seq__21494_21499 = G__21516;
chunk__21495_21500 = G__21517;
count__21496_21501 = G__21518;
i__21497_21502 = G__21519;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
var G__21522 = devcards.core.CodeHighlight;
var G__21523 = {"code": code_str, "lang": lang};
return React.createElement(G__21522,G__21523);
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__5899__auto__ = (function (){var G__21524 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21524) : cljs.core.atom.call(null,G__21524));
})();
var prefer_table__5900__auto__ = (function (){var G__21525 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21525) : cljs.core.atom.call(null,G__21525));
})();
var method_cache__5901__auto__ = (function (){var G__21526 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21526) : cljs.core.atom.call(null,G__21526));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__21527 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21527) : cljs.core.atom.call(null,G__21527));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","markdown-block->react"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__21528){
var map__21529 = p__21528;
var map__21529__$1 = ((((!((map__21529 == null)))?((((map__21529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21529):map__21529);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21529__$1,cljs.core.cst$kw$content);
return devcards.core.react_raw(devcards.util.markdown.markdown_to_html(content));
}));
devcards.core.markdown_block__GT_react.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$code_DASH_block,(function (p__21531){
var map__21532 = p__21531;
var map__21532__$1 = ((((!((map__21532 == null)))?((((map__21532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21532):map__21532);
var block = map__21532__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21532__$1,cljs.core.cst$kw$content);
var G__21534 = devcards.core.CodeHighlight;
var G__21535 = {"code": cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(block), "lang": cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(block)};
return React.createElement(G__21534,G__21535);
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6051__auto__ = [];
var len__6044__auto___21541 = arguments.length;
var i__6045__auto___21542 = (0);
while(true){
if((i__6045__auto___21542 < len__6044__auto___21541)){
args__6051__auto__.push((arguments[i__6045__auto___21542]));

var G__21543 = (i__6045__auto___21542 + (1));
i__6045__auto___21542 = G__21543;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
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
var attrs21537 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21537))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs21537], 0))):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21537))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21537)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

var G__21538 = "div";
var G__21539 = {"style": {"color": "#a94442"}};
var G__21540 = sablono.interpreter.interpret(message);
return React.createElement(G__21538,G__21539,G__21540);
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq21536){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21536));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$classname], null));
var padding_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$padding], null));
var G__21550 = "div";
var G__21551 = {"className": (function (){var G__21553 = devcards.system.devcards_rendered_card_class;
var G__21553__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__21553),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__21553);
var G__21553__$2 = (cljs.core.truth_(cljs.core.not_empty(classname))?[cljs.core.str(G__21553__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__21553__$1);
return G__21553__$2;
})()};
var G__21552 = sablono.interpreter.interpret(children);
return React.createElement(G__21550,G__21551,G__21552);
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args21554 = [];
var len__6044__auto___21574 = arguments.length;
var i__6045__auto___21575 = (0);
while(true){
if((i__6045__auto___21575 < len__6044__auto___21574)){
args21554.push((arguments[i__6045__auto___21575]));

var G__21576 = (i__6045__auto___21575 + (1));
i__6045__auto___21575 = G__21576;
continue;
} else {
}
break;
}

var G__21556 = args21554.length;
switch (G__21556) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21554.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__21557 = card;
var map__21557__$1 = ((((!((map__21557 == null)))?((((map__21557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21557):map__21557);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21557__$1,cljs.core.cst$kw$options);
if(cljs.core.not(cljs.core.cst$kw$hidden.cljs$core$IFn$_invoke$arity$1(options))){
if(cljs.core.cst$kw$heading.cljs$core$IFn$_invoke$arity$1(options) === false){
var G__21559 = "div";
var G__21560 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(cljs.core.cst$kw$hide_DASH_border.cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')};
var G__21561 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__21559,G__21560,G__21561);
} else {
var G__21563 = "div";
var G__21564 = {"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"};
var G__21565 = (function (){var attrs21562 = (cljs.core.truth_(path)?(function (){var G__21567 = "a";
var G__21568 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__21567,G__21563,G__21564,map__21557,map__21557__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__21567,G__21563,G__21564,map__21557,map__21557__$1,path,options))
)};
var G__21569 = sablono.interpreter.interpret(cljs.core.name(cljs.core.last(path)));
var G__21570 = " ";
return React.createElement(G__21567,G__21568,G__21569,G__21570);
})():(function (){var attrs21571 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21571))?sablono.interpreter.attributes(attrs21571):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21571))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21571)], null))));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21562))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs21562], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21562))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21562)], null))));
})();
var G__21566 = sablono.interpreter.interpret(devcards.core.naked_card(children,card));
return React.createElement(G__21563,G__21564,G__21565,G__21566);
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
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (devcards.core._devcard_options[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5642__auto__.call(null,this$,devcard_opts));
} else {
var m__5642__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5642__auto____$1.call(null,this$,devcard_opts));
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
var x__5641__auto__ = (((this$ == null))?null:this$);
var m__5642__auto__ = (devcards.core._devcard[goog.typeOf(x__5641__auto__)]);
if(!((m__5642__auto__ == null))){
return (m__5642__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto__.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5642__auto__.call(null,this$,devcard_opts));
} else {
var m__5642__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__5642__auto____$1 == null))){
return (m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5642__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,devcard_opts) : m__5642__auto____$1.call(null,this$,devcard_opts));
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
var data = (function (){var or__4986__auto__ = cljs.core.cst$kw$initial_DASH_data.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card));
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
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
var base__20614__auto___21588 = {"getInitialState": (function (){
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
return this$.setState((function (){var or__4986__auto__ = (function (){var and__4974__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(and__4974__auto__)){
return this$.state;
} else {
return and__4974__auto__;
}
})();
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
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
if(cljs.core.truth_((function (){var and__4974__auto__ = data_atom;
if(cljs.core.truth_(and__4974__auto__)){
return id;
} else {
return and__4974__auto__;
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
var edn = (cljs.core.truth_(cljs.core.cst$kw$inspect_DASH_data.cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs21580 = devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21580))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs21580], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21580))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21580)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$hide_DASH_border], null),true):card);
var children = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(cljs.core.cst$kw$frame.cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2(children,card__$1);
} else {
var G__21581 = "div";
var G__21582 = {"className": "com-rigsomelight-devcards-frameless"};
var G__21583 = sablono.interpreter.interpret(children);
return React.createElement(G__21581,G__21582,G__21583);
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__20614__auto___21588);
}

var seq__21584_21589 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21585_21590 = null;
var count__21586_21591 = (0);
var i__21587_21592 = (0);
while(true){
if((i__21587_21592 < count__21586_21591)){
var property__20615__auto___21593 = chunk__21585_21590.cljs$core$IIndexed$_nth$arity$2(null,i__21587_21592);
if(cljs.core.truth_((base__20614__auto___21588[property__20615__auto___21593]))){
(devcards.core.DevcardBase.prototype[property__20615__auto___21593] = (base__20614__auto___21588[property__20615__auto___21593]));
} else {
}

var G__21594 = seq__21584_21589;
var G__21595 = chunk__21585_21590;
var G__21596 = count__21586_21591;
var G__21597 = (i__21587_21592 + (1));
seq__21584_21589 = G__21594;
chunk__21585_21590 = G__21595;
count__21586_21591 = G__21596;
i__21587_21592 = G__21597;
continue;
} else {
var temp__4425__auto___21598 = cljs.core.seq(seq__21584_21589);
if(temp__4425__auto___21598){
var seq__21584_21599__$1 = temp__4425__auto___21598;
if(cljs.core.chunked_seq_QMARK_(seq__21584_21599__$1)){
var c__5789__auto___21600 = cljs.core.chunk_first(seq__21584_21599__$1);
var G__21601 = cljs.core.chunk_rest(seq__21584_21599__$1);
var G__21602 = c__5789__auto___21600;
var G__21603 = cljs.core.count(c__5789__auto___21600);
var G__21604 = (0);
seq__21584_21589 = G__21601;
chunk__21585_21590 = G__21602;
count__21586_21591 = G__21603;
i__21587_21592 = G__21604;
continue;
} else {
var property__20615__auto___21605 = cljs.core.first(seq__21584_21599__$1);
if(cljs.core.truth_((base__20614__auto___21588[property__20615__auto___21605]))){
(devcards.core.DevcardBase.prototype[property__20615__auto___21605] = (base__20614__auto___21588[property__20615__auto___21605]));
} else {
}

var G__21606 = cljs.core.next(seq__21584_21599__$1);
var G__21607 = null;
var G__21608 = (0);
var G__21609 = (0);
seq__21584_21589 = G__21606;
chunk__21585_21590 = G__21607;
count__21586_21591 = G__21608;
i__21587_21592 = G__21609;
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
var G__21610 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21611 = node;
return (node_fn.cljs$core$IFn$_invoke$arity$2 ? node_fn.cljs$core$IFn$_invoke$arity$2(G__21610,G__21611) : node_fn.call(null,G__21610,G__21611));
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__20614__auto___21618 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_dom_DASH_component_DASH_))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__4974__auto__ = devcards.core.get_props(this$,cljs.core.cst$kw$node_fn);
if(cljs.core.truth_(and__4974__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_props(this$,cljs.core.cst$kw$node_fn),(prevP["node_fn"]));
} else {
return and__4974__auto__;
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
var G__21612 = {"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state(this$,cljs.core.cst$kw$unique_id)};
var G__21613 = "Card has not mounted DOM node.";
return React.DOM.div(G__21612,G__21613);
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__20614__auto___21618);
}

var seq__21614_21619 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__21615_21620 = null;
var count__21616_21621 = (0);
var i__21617_21622 = (0);
while(true){
if((i__21617_21622 < count__21616_21621)){
var property__20615__auto___21623 = chunk__21615_21620.cljs$core$IIndexed$_nth$arity$2(null,i__21617_21622);
if(cljs.core.truth_((base__20614__auto___21618[property__20615__auto___21623]))){
(devcards.core.DomComponent.prototype[property__20615__auto___21623] = (base__20614__auto___21618[property__20615__auto___21623]));
} else {
}

var G__21624 = seq__21614_21619;
var G__21625 = chunk__21615_21620;
var G__21626 = count__21616_21621;
var G__21627 = (i__21617_21622 + (1));
seq__21614_21619 = G__21624;
chunk__21615_21620 = G__21625;
count__21616_21621 = G__21626;
i__21617_21622 = G__21627;
continue;
} else {
var temp__4425__auto___21628 = cljs.core.seq(seq__21614_21619);
if(temp__4425__auto___21628){
var seq__21614_21629__$1 = temp__4425__auto___21628;
if(cljs.core.chunked_seq_QMARK_(seq__21614_21629__$1)){
var c__5789__auto___21630 = cljs.core.chunk_first(seq__21614_21629__$1);
var G__21631 = cljs.core.chunk_rest(seq__21614_21629__$1);
var G__21632 = c__5789__auto___21630;
var G__21633 = cljs.core.count(c__5789__auto___21630);
var G__21634 = (0);
seq__21614_21619 = G__21631;
chunk__21615_21620 = G__21632;
count__21616_21621 = G__21633;
i__21617_21622 = G__21634;
continue;
} else {
var property__20615__auto___21635 = cljs.core.first(seq__21614_21629__$1);
if(cljs.core.truth_((base__20614__auto___21618[property__20615__auto___21635]))){
(devcards.core.DomComponent.prototype[property__20615__auto___21635] = (base__20614__auto___21618[property__20615__auto___21635]));
} else {
}

var G__21636 = cljs.core.next(seq__21614_21629__$1);
var G__21637 = null;
var G__21638 = (0);
var G__21639 = (0);
seq__21614_21619 = G__21636;
chunk__21615_21620 = G__21637;
count__21616_21621 = G__21638;
i__21617_21622 = G__21639;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4986__auto__ = x === true;
if(or__4986__auto__){
return or__4986__auto__;
} else {
var or__4986__auto____$1 = x === false;
if(or__4986__auto____$1){
return or__4986__auto____$1;
} else {
var or__4986__auto____$2 = (x == null);
if(or__4986__auto____$2){
return or__4986__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be boolean or nil",cljs.core.cst$kw$value,x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts,key);
var or__4986__auto__ = typeof x === 'string';
if(or__4986__auto__){
return or__4986__auto__;
} else {
var or__4986__auto____$1 = (x == null);
if(or__4986__auto____$1){
return or__4986__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,key,cljs.core.cst$kw$message,"should be string or nil",cljs.core.cst$kw$value,x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__4986__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_(opts)){
var propagated_errors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$propagated_DASH_errors], null));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (propagated_errors){
return (function (p1__21640_SHARP_){
return !(p1__21640_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__21649 = opts;
var map__21649__$1 = ((((!((map__21649 == null)))?((((map__21649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21649):map__21649);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$name);
var main_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$main_DASH_obj);
var initial_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$initial_DASH_data);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649__$1,cljs.core.cst$kw$options);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4986__auto__ = cljs.core.map_QMARK_(options);
if(or__4986__auto__){
return or__4986__auto__;
} else {
var or__4986__auto____$1 = (options == null);
if(or__4986__auto____$1){
return or__4986__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil",cljs.core.cst$kw$value,options], null);
}
}
})(),devcards.core.stringer_QMARK_(cljs.core.cst$kw$name,opts),devcards.core.stringer_QMARK_(cljs.core.cst$kw$documentation,opts),(function (){var or__4986__auto__ = (initial_data == null);
if(or__4986__auto__){
return or__4986__auto__;
} else {
var or__4986__auto____$1 = cljs.core.vector_QMARK_(initial_data);
if(or__4986__auto____$1){
return or__4986__auto____$1;
} else {
var or__4986__auto____$2 = cljs.core.map_QMARK_(initial_data);
if(or__4986__auto____$2){
return or__4986__auto____$2;
} else {
var or__4986__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,initial_data));
if(or__4986__auto____$3){
return or__4986__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$initial_DASH_data,cljs.core.cst$kw$message,"should be an Atom or a Map or nil.",cljs.core.cst$kw$value,initial_data], null);
}
}
}
}
})()], null),cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__21649,map__21649__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__21641_SHARP_){
return devcards.core.booler_QMARK_(p1__21641_SHARP_,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(opts));
});})(map__21649,map__21649__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frame,cljs.core.cst$kw$heading,cljs.core.cst$kw$padding,cljs.core.cst$kw$inspect_DASH_data,cljs.core.cst$kw$watch_DASH_atom,cljs.core.cst$kw$history,cljs.core.cst$kw$static_DASH_state], null))], 0));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Card should be a Map.",cljs.core.cst$kw$value,opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
var G__21673 = "div";
var G__21674 = {"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}};
var G__21675 = sablono.interpreter.interpret((function (){var G__21678 = "code";
var G__21679 = {"style": {"flex": "1 100px", "marginRight": "10px"}};
var G__21680 = sablono.interpreter.interpret((cljs.core.truth_(cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(e)], 0)):null));
return React.createElement(G__21678,G__21679,G__21680);
})());
var G__21676 = (function (){var G__21681 = "span";
var G__21682 = {"style": {"flex": "3 100px", "marginRight": "10px"}};
var G__21683 = sablono.interpreter.interpret(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(e));
return React.createElement(G__21681,G__21682,G__21683);
})();
var G__21677 = (function (){var G__21684 = "span";
var G__21685 = {"style": {"flex": "1 100px"}};
var G__21686 = " Received: ";
var G__21687 = (function (){var attrs21672 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(e)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21672))?sablono.interpreter.attributes(attrs21672):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21672))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21672)], null))));
})();
return React.createElement(G__21684,G__21685,G__21686,G__21687);
})();
return React.createElement(G__21673,G__21674,G__21675,G__21676,G__21677);
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_(m)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$propagated_DASH_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$label,cljs.core.cst$kw$options,cljs.core.cst$kw$message,"should be a Map or nil.",cljs.core.cst$kw$value,m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
var G__21701 = "div";
var G__21702 = {"className": "com-rigsomelight-devcards-card-base-no-pad"};
var G__21703 = (function (){var attrs21700 = [cljs.core.str((((cljs.core.map_QMARK_(opts)) && (typeof cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21700))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs21700], 0))):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21700))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21700)], null))));
})();
var G__21704 = sablono.interpreter.interpret(devcards.core.naked_card((function (){var G__21707 = "div";
var G__21708 = null;
var G__21709 = (function (){var attrs21705 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devcards.core.error_line,errors);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21705))?sablono.interpreter.attributes(attrs21705):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21705))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21705)], null))));
})();
var G__21710 = sablono.interpreter.interpret(((cljs.core.map_QMARK_(opts))?(function (){var attrs21711 = devcards.util.edn_renderer.html_edn(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),cljs.core.dissoc,cljs.core.cst$kw$propagated_DASH_errors));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21711))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs21711], 0))):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21711))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21711)], null))));
})():null));
return React.createElement(G__21707,G__21708,G__21709,G__21710);
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,true], null)], null)));
return React.createElement(G__21701,G__21702,G__21703,G__21704);
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null),(function (p1__21712_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$base_DASH_card_DASH_options.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state))),p1__21712_SHARP_], 0));
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options(card_options);
if(cljs.core.truth_(cljs.core.not_empty(errors))){
return devcards.core.render_errors(card_options,errors);
} else {
var G__21715 = devcards.core.DevcardBase;
var G__21716 = {"card": devcards.core.add_environment_defaults(card_options)};
return React.createElement(G__21715,G__21716);
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
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5600__auto__,k__5601__auto__){
var self__ = this;
var this__5600__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5600__auto____$1,k__5601__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k21718,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__21720 = (((k21718 instanceof cljs.core.Keyword))?k21718.fqn:null);
switch (G__21720) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21718,else__5603__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5614__auto__,writer__5615__auto__,opts__5616__auto__){
var self__ = this;
var this__5614__auto____$1 = this;
var pr_pair__5617__auto__ = ((function (this__5614__auto____$1){
return (function (keyval__5618__auto__){
return cljs.core.pr_sequential_writer(writer__5615__auto__,cljs.core.pr_writer,""," ","",opts__5616__auto__,keyval__5618__auto__);
});})(this__5614__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5615__auto__,pr_pair__5617__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__5616__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21717){
var self__ = this;
var G__21717__$1 = this;
return (new cljs.core.RecordIter((0),G__21717__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5594__auto__){
var self__ = this;
var this__5594__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5604__auto__){
var self__ = this;
var this__5604__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5595__auto__){
var self__ = this;
var this__5595__auto____$1 = this;
var h__5421__auto__ = self__.__hash;
if(!((h__5421__auto__ == null))){
return h__5421__auto__;
} else {
var h__5421__auto____$1 = cljs.core.hash_imap(this__5595__auto____$1);
self__.__hash = h__5421__auto____$1;

return h__5421__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5596__auto__,other__5597__auto__){
var self__ = this;
var this__5596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4974__auto__ = other__5597__auto__;
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (this__5596__auto____$1.constructor === other__5597__auto__.constructor);
if(and__4974__auto____$1){
return cljs.core.equiv_map(this__5596__auto____$1,other__5597__auto__);
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5609__auto__,k__5610__auto__){
var self__ = this;
var this__5609__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5610__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5609__auto____$1),self__.__meta),k__5610__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5610__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__21717){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__21721 = cljs.core.keyword_identical_QMARK_;
var expr__21722 = k__5608__auto__;
if(cljs.core.truth_((pred__21721.cljs$core$IFn$_invoke$arity$2 ? pred__21721.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__21722) : pred__21721.call(null,cljs.core.cst$kw$obj,expr__21722)))){
return (new devcards.core.IdentiyOptions(G__21717,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__21717),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5612__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__21717){
var self__ = this;
var this__5599__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__21717,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5605__auto__,entry__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5606__auto__)){
return cljs.core._assoc(this__5605__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5605__auto____$1,entry__5606__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__5634__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__5634__auto__,writer__5635__auto__){
return cljs.core._write(writer__5635__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__21719){
return (new devcards.core.IdentiyOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21719),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21719,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__21725){
var map__21728 = p__21725;
var map__21728__$1 = ((((!((map__21728 == null)))?((((map__21728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21728):map__21728);
var devcard_opts = map__21728__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21728__$1,cljs.core.cst$kw$options);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts,cljs.core.cst$kw$main_DASH_obj,((function (map__21728,map__21728__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom)));
});})(map__21728,map__21728__$1,devcard_opts,options))
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
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5600__auto__,k__5601__auto__){
var self__ = this;
var this__5600__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5600__auto____$1,k__5601__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k21731,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__21733 = (((k21731 instanceof cljs.core.Keyword))?k21731.fqn:null);
switch (G__21733) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21731,else__5603__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5614__auto__,writer__5615__auto__,opts__5616__auto__){
var self__ = this;
var this__5614__auto____$1 = this;
var pr_pair__5617__auto__ = ((function (this__5614__auto____$1){
return (function (keyval__5618__auto__){
return cljs.core.pr_sequential_writer(writer__5615__auto__,cljs.core.pr_writer,""," ","",opts__5616__auto__,keyval__5618__auto__);
});})(this__5614__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5615__auto__,pr_pair__5617__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__5616__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21730){
var self__ = this;
var G__21730__$1 = this;
return (new cljs.core.RecordIter((0),G__21730__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5594__auto__){
var self__ = this;
var this__5594__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5604__auto__){
var self__ = this;
var this__5604__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5595__auto__){
var self__ = this;
var this__5595__auto____$1 = this;
var h__5421__auto__ = self__.__hash;
if(!((h__5421__auto__ == null))){
return h__5421__auto__;
} else {
var h__5421__auto____$1 = cljs.core.hash_imap(this__5595__auto____$1);
self__.__hash = h__5421__auto____$1;

return h__5421__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5596__auto__,other__5597__auto__){
var self__ = this;
var this__5596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4974__auto__ = other__5597__auto__;
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (this__5596__auto____$1.constructor === other__5597__auto__.constructor);
if(and__4974__auto____$1){
return cljs.core.equiv_map(this__5596__auto____$1,other__5597__auto__);
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5609__auto__,k__5610__auto__){
var self__ = this;
var this__5609__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5610__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5609__auto____$1),self__.__meta),k__5610__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5610__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__21730){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__21734 = cljs.core.keyword_identical_QMARK_;
var expr__21735 = k__5608__auto__;
if(cljs.core.truth_((pred__21734.cljs$core$IFn$_invoke$arity$2 ? pred__21734.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__21735) : pred__21734.call(null,cljs.core.cst$kw$obj,expr__21735)))){
return (new devcards.core.AtomLikeOptions(G__21730,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__21730),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5612__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options(self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__21730){
var self__ = this;
var this__5599__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__21730,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5605__auto__,entry__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5606__auto__)){
return cljs.core._assoc(this__5605__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5605__auto____$1,entry__5606__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__5634__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__5634__auto__,writer__5635__auto__){
return cljs.core._write(writer__5635__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__21732){
return (new devcards.core.AtomLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21732),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21732,cljs.core.cst$kw$obj),null));
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
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5600__auto__,k__5601__auto__){
var self__ = this;
var this__5600__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5600__auto____$1,k__5601__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5602__auto__,k21741,else__5603__auto__){
var self__ = this;
var this__5602__auto____$1 = this;
var G__21743 = (((k21741 instanceof cljs.core.Keyword))?k21741.fqn:null);
switch (G__21743) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21741,else__5603__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5614__auto__,writer__5615__auto__,opts__5616__auto__){
var self__ = this;
var this__5614__auto____$1 = this;
var pr_pair__5617__auto__ = ((function (this__5614__auto____$1){
return (function (keyval__5618__auto__){
return cljs.core.pr_sequential_writer(writer__5615__auto__,cljs.core.pr_writer,""," ","",opts__5616__auto__,keyval__5618__auto__);
});})(this__5614__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5615__auto__,pr_pair__5617__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__5616__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21740){
var self__ = this;
var G__21740__$1 = this;
return (new cljs.core.RecordIter((0),G__21740__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$obj], null),cljs.core._iterator(self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5598__auto__){
var self__ = this;
var this__5598__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5594__auto__){
var self__ = this;
var this__5594__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5604__auto__){
var self__ = this;
var this__5604__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5595__auto__){
var self__ = this;
var this__5595__auto____$1 = this;
var h__5421__auto__ = self__.__hash;
if(!((h__5421__auto__ == null))){
return h__5421__auto__;
} else {
var h__5421__auto____$1 = cljs.core.hash_imap(this__5595__auto____$1);
self__.__hash = h__5421__auto____$1;

return h__5421__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5596__auto__,other__5597__auto__){
var self__ = this;
var this__5596__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4974__auto__ = other__5597__auto__;
if(cljs.core.truth_(and__4974__auto__)){
var and__4974__auto____$1 = (this__5596__auto____$1.constructor === other__5597__auto__.constructor);
if(and__4974__auto____$1){
return cljs.core.equiv_map(this__5596__auto____$1,other__5597__auto__);
} else {
return and__4974__auto____$1;
}
} else {
return and__4974__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5609__auto__,k__5610__auto__){
var self__ = this;
var this__5609__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$obj,null], null), null),k__5610__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5609__auto____$1),self__.__meta),k__5610__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5610__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5607__auto__,k__5608__auto__,G__21740){
var self__ = this;
var this__5607__auto____$1 = this;
var pred__21744 = cljs.core.keyword_identical_QMARK_;
var expr__21745 = k__5608__auto__;
if(cljs.core.truth_((pred__21744.cljs$core$IFn$_invoke$arity$2 ? pred__21744.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$obj,expr__21745) : pred__21744.call(null,cljs.core.cst$kw$obj,expr__21745)))){
return (new devcards.core.EdnLikeOptions(G__21740,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5608__auto__,G__21740),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5612__auto__){
var self__ = this;
var this__5612__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$obj,self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options(self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5599__auto__,G__21740){
var self__ = this;
var this__5599__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__21740,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5605__auto__,entry__5606__auto__){
var self__ = this;
var this__5605__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5606__auto__)){
return cljs.core._assoc(this__5605__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5606__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5605__auto____$1,entry__5606__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$obj], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__5634__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__5634__auto__,writer__5635__auto__){
return cljs.core._write(writer__5635__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__21742){
return (new devcards.core.EdnLikeOptions(cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__21742),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21742,cljs.core.cst$kw$obj),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__4974__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x));
if(and__4974__auto__){
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
return and__4974__auto__;
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
if((function (){var G__21759 = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__21759 == null))){
if((false) || (G__21759.devcards$core$IDevcard$)){
return true;
} else {
if((!G__21759.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__21759);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devcards.core.IDevcard,G__21759);
}
})()){
return devcards.core._devcard(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors(devcards.core._devcard_options(devcards.core.coerce_to_devcards_options(cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
var G__21762 = devcards.core.DomComponent;
var G__21763 = {"node_fn": node_fn, "data_atom": data_atom};
return React.createElement(G__21762,G__21763);
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
var map__21767 = (function (){var G__21768 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21768) : cljs.core.deref.call(null,G__21768));
})();
var map__21767__$1 = ((((!((map__21767 == null)))?((((map__21767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21767):map__21767);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21767__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21767__$1,cljs.core.cst$kw$pointer);
return ((pointer + (1)) < cljs.core.count(history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__21771 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21771) : cljs.core.deref.call(null,G__21771));
})()) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((cljs.core.cst$kw$pointer.cljs$core$IFn$_invoke$arity$1((function (){var G__21773 = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21773) : cljs.core.deref.call(null,G__21773));
})()) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21778 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21778__$1 = ((((!((map__21778 == null)))?((((map__21778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21778):map__21778);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21778__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21778__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_back(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer + (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21780_21782 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21781_21783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer + (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21780_21782,G__21781_21783) : cljs.core.reset_BANG_.call(null,G__21780_21782,G__21781_21783));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21788 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21788__$1 = ((((!((map__21788 == null)))?((((map__21788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21788):map__21788);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21788__$1,cljs.core.cst$kw$history);
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21788__$1,cljs.core.cst$kw$pointer);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(pointer - (1)),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21790_21792 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21791_21793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(history,(pointer - (1)));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21790_21792,G__21791_21793) : cljs.core.reset_BANG_.call(null,G__21790_21792,G__21791_21793));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
var map__21798 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(history_atom) : cljs.core.deref.call(null,history_atom));
var map__21798__$1 = ((((!((map__21798 == null)))?((((map__21798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21798):map__21798);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21798__$1,cljs.core.cst$kw$history);
if(cljs.core.truth_(devcards.core.can_go_forward(this$))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(history_atom,cljs.core.assoc,cljs.core.cst$kw$pointer,(0),cljs.core.array_seq([cljs.core.cst$kw$ignore_DASH_click,true], 0));

var G__21800_21802 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21801_21803 = cljs.core.first(history);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21800_21802,G__21801_21803) : cljs.core.reset_BANG_.call(null,G__21800_21802,G__21801_21803));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = (function (){var G__21858 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$devcards_DASH_history_DASH_runner_DASH_))].join(''), "history_atom": (function (){var G__21859 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$history,cljs.core.List.EMPTY,cljs.core.cst$kw$pointer,(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21859) : cljs.core.atom.call(null,G__21859));
})()};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(devcards.core.get_state(this$,cljs.core.cst$kw$history_atom),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$history], null),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__21860 = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21860) : cljs.core.deref.call(null,G__21860));
})()));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$unique_id);
var history_atom = devcards.core.get_state(this$,cljs.core.cst$kw$history_atom);
if(cljs.core.truth_((function (){var and__4974__auto__ = data_atom;
if(cljs.core.truth_(and__4974__auto__)){
return id;
} else {
return and__4974__auto__;
}
})())){
return cljs.core.add_watch(data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_(this$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__21861){
var map__21862 = p__21861;
var map__21862__$1 = ((((!((map__21862 == null)))?((((map__21862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21862):map__21862);
var ha = map__21862__$1;
var pointer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862__$1,cljs.core.cst$kw$pointer);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862__$1,cljs.core.cst$kw$history);
var ignore_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862__$1,cljs.core.cst$kw$ignore_DASH_click);
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
if(cljs.core.truth_((function (){var or__4986__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())){
var G__21864 = "div";
var G__21865 = {"style": {"display": (cljs.core.truth_((function (){var or__4986__auto__ = devcards.core.can_go_back(this$);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return devcards.core.can_go_forward(this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"};
var G__21866 = sablono.interpreter.interpret((function (){var action = ((function (G__21864,G__21865,this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_(this$);
});})(G__21864,G__21865,this$))
;
var G__21872 = "button";
var G__21873 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back(this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action};
var G__21874 = (function (){var G__21875 = "span";
var G__21876 = {"className": "com-rigsomelight-devcards-history-control-left"};
var G__21877 = "";
return React.createElement(G__21875,G__21876,G__21877);
})();
return React.createElement(G__21872,G__21873,G__21874);
})());
var G__21867 = sablono.interpreter.interpret((function (){var action = ((function (G__21864,G__21865,G__21866,this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props(this$,cljs.core.cst$kw$data_atom);
var G__21878 = data_atom;
var G__21879 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(data_atom) : cljs.core.deref.call(null,data_atom));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__21878,G__21879) : cljs.core.reset_BANG_.call(null,G__21878,G__21879));
});})(G__21864,G__21865,G__21866,this$))
;
var G__21882 = "button";
var G__21883 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__21884 = (function (){var G__21885 = "span";
var G__21886 = {"className": "com-rigsomelight-devcards-history-stop"};
var G__21887 = "";
return React.createElement(G__21885,G__21886,G__21887);
})();
return React.createElement(G__21882,G__21883,G__21884);
})());
var G__21868 = sablono.interpreter.interpret((function (){var action = ((function (G__21864,G__21865,G__21866,G__21867,this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_(this$);
});})(G__21864,G__21865,G__21866,G__21867,this$))
;
var G__21890 = "button";
var G__21891 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action};
var G__21892 = (function (){var G__21893 = "span";
var G__21894 = {"className": "com-rigsomelight-devcards-history-control-right"};
var G__21895 = "";
return React.createElement(G__21893,G__21894,G__21895);
})();
return React.createElement(G__21890,G__21891,G__21892);
})());
var G__21869 = sablono.interpreter.interpret((function (){var listener = ((function (G__21864,G__21865,G__21866,G__21867,G__21868,this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_(this$);
});})(G__21864,G__21865,G__21866,G__21867,G__21868,this$))
;
var G__21902 = "button";
var G__21903 = {"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward(this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener};
var G__21904 = (function (){var G__21907 = "span";
var G__21908 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__21907,G__21908);
})();
var G__21905 = (function (){var G__21909 = "span";
var G__21910 = {"className": "com-rigsomelight-devcards-history-control-small-arrow"};
return React.createElement(G__21909,G__21910);
})();
var G__21906 = (function (){var G__21911 = "span";
var G__21912 = {"className": "com-rigsomelight-devcards-history-control-block"};
return React.createElement(G__21911,G__21912);
})();
return React.createElement(G__21902,G__21903,G__21904,G__21905,G__21906);
})());
return React.createElement(G__21864,G__21865,G__21866,G__21867,G__21868,G__21869);
} else {
return null;
}
})};
return React.createClass(G__21858);
})();
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
var G__21915 = devcards.core.HistoryComponent;
var G__21916 = {"data_atom": data_atom};
return React.createElement(G__21915,G__21916);
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
var _STAR_current_env_STAR_21918 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$reporter,cljs.core.cst$kw$_devcards_test_card_reporter);

try{(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

return cljs.test.get_current_env();
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_21918;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__5899__auto__ = (function (){var G__21919 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21919) : cljs.core.atom.call(null,G__21919));
})();
var prefer_table__5900__auto__ = (function (){var G__21920 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21920) : cljs.core.atom.call(null,G__21920));
})();
var method_cache__5901__auto__ = (function (){var G__21921 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21921) : cljs.core.atom.call(null,G__21921));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__21922 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21922) : cljs.core.atom.call(null,G__21922));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.core","test-render"),cljs.core.cst$kw$type,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
var attrs21923 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21923))?sablono.interpreter.attributes(attrs21923):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21923))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21923)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__21924,body){
var map__21932 = p__21924;
var map__21932__$1 = ((((!((map__21932 == null)))?((((map__21932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21932):map__21932);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21932__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(message)){
var G__21935 = "div";
var G__21936 = null;
var G__21937 = (function (){var attrs21934 = message;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"span",((cljs.core.map_QMARK_(attrs21934))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs21934], 0))):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21934))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21934)], null))));
})();
var G__21938 = sablono.interpreter.interpret(body);
return React.createElement(G__21935,G__21936,G__21937,G__21938);
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__21939){
var map__21944 = p__21939;
var map__21944__$1 = ((((!((map__21944 == null)))?((((map__21944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21944):map__21944);
var m = map__21944__$1;
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21944__$1,cljs.core.cst$kw$expected);
return devcards.core.display_message(m,(function (){var G__21946 = devcards.core.CodeHighlight;
var G__21947 = {"code": devcards.util.utils.pprint_code(expected), "lang": "clojure"};
return React.createElement(G__21946,G__21947);
})());
});
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$pass,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fail,(function (m){
return devcards.core.render_pass_fail(m);
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$error,(function (m){
return devcards.core.display_message(m,(function (){var G__21951 = "div";
var G__21952 = null;
var G__21953 = React.createElement("strong",null,"Error: ");
var G__21954 = (function (){var attrs21950 = [cljs.core.str(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs21950))?sablono.interpreter.attributes(attrs21950):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21950))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21950)], null))));
})();
return React.createElement(G__21951,G__21952,G__21953,G__21954);
})());
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$test_DASH_doc,(function (m){
var attrs21955 = devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$documentation.cljs$core$IFn$_invoke$arity$1(m)], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21955))?sablono.interpreter.attributes(attrs21955):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21955)], null))));
}));
devcards.core.test_render.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$context,(function (p__21956){
var map__21957 = p__21956;
var map__21957__$1 = ((((!((map__21957 == null)))?((((map__21957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21957):map__21957);
var testing_contexts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21957__$1,cljs.core.cst$kw$testing_DASH_contexts);
var attrs21959 = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" / ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21957,map__21957__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#bbb"], null)], null),t," "], null);
});})(map__21957,map__21957__$1,testing_contexts))
,cljs.core.reverse(cljs.core.rest(testing_contexts))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.first(testing_contexts)], null))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21959))?sablono.interpreter.attributes(attrs21959):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21959))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21959)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
var G__21961 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$test_DASH_doc,cljs.core.cst$kw$documentation,s], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__21961) : cljs.test.report.call(null,G__21961));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),(devcards.core.test_render.cljs$core$IFn$_invoke$arity$1 ? devcards.core.test_render.cljs$core$IFn$_invoke$arity$1(t) : devcards.core.test_render.call(null,t))], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs21966 = cljs.core.cst$kw$html_DASH_list.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__21967,t){
var map__21968 = p__21967;
var map__21968__$1 = ((((!((map__21968 == null)))?((((map__21968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21968):map__21968);
var last_context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$last_DASH_context);
var html_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21968__$1,cljs.core.cst$kw$html_DASH_list);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$last_DASH_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t),cljs.core.cst$kw$html_DASH_list,(function (){var res = cljs.core._conj(cljs.core.List.EMPTY,devcards.core.test_renderer(t));
var res__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_context,cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons(devcards.core.test_renderer(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$context], null),cljs.core.select_keys(t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_contexts], null))], 0))),res):res));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(tests)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs21966))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs21966], 0))):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21966))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21966)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (error_QMARK_,tests){
return (function (p__22013){
var map__22014 = p__22013;
var map__22014__$1 = ((((!((map__22014 == null)))?((((map__22014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22014):map__22014);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22014__$1,cljs.core.cst$kw$type);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$test_DASH_doc);
});})(error_QMARK_,tests))
,cljs.core.cst$kw$_devcards_collect_tests.cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count(some_tests);
var map__22012 = cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(test_summary);
var map__22012__$1 = ((((!((map__22012 == null)))?((((map__22012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22012):map__22012);
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22012__$1,cljs.core.cst$kw$fail);
var pass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22012__$1,cljs.core.cst$kw$pass);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22012__$1,cljs.core.cst$kw$error);
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
var G__22017 = "div";
var G__22018 = {"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"};
var G__22019 = (function (){var G__22021 = "div";
var G__22022 = {"className": "com-rigsomelight-devcards-panel-heading"};
var G__22023 = (function (){var G__22027 = "a";
var G__22028 = {"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__22027,G__22021,G__22022,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_(devcards.system.app_state,path);
});})(G__22027,G__22021,G__22022,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1))
)};
var G__22029 = sablono.interpreter.interpret((cljs.core.truth_(path)?[cljs.core.str(cljs.core.name(cljs.core.last(path)))].join(''):null));
return React.createElement(G__22027,G__22028,G__22029);
})();
var G__22024 = (function (){var G__22030 = "button";
var G__22031 = {"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__22030,G__22021,G__22022,G__22023,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(G__22030,G__22021,G__22022,G__22023,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__22032 = sablono.interpreter.interpret(total_tests);
return React.createElement(G__22030,G__22031,G__22032);
})();
var G__22025 = sablono.interpreter.interpret(((((fail + error__$1) === (0)))?null:(function (){var G__22036 = "button";
var G__22037 = {"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__22036,G__22021,G__22022,G__22023,G__22024,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__22036,G__22021,G__22022,G__22023,G__22024,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1){
return (function (p__22039){
var map__22040 = p__22039;
var map__22040__$1 = ((((!((map__22040 == null)))?((((map__22040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22040):map__22040);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22040__$1,cljs.core.cst$kw$type);
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail,null,cljs.core.cst$kw$error,null], null), null).call(null,type);
});})(G__22036,G__22021,G__22022,G__22023,G__22024,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1))
});
});})(G__22036,G__22021,G__22022,G__22023,G__22024,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__22038 = sablono.interpreter.interpret([cljs.core.str((fail + error__$1))].join(''));
return React.createElement(G__22036,G__22037,G__22038);
})()));
var G__22026 = sablono.interpreter.interpret(((((pass == null)) || ((pass === (0))))?null:(function (){var G__22045 = "button";
var G__22046 = {"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_(((function (G__22045,G__22021,G__22022,G__22023,G__22024,G__22025,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (G__22045,G__22021,G__22022,G__22023,G__22024,G__22025,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1){
return (function (p__22048){
var map__22049 = p__22048;
var map__22049__$1 = ((((!((map__22049 == null)))?((((map__22049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22049):map__22049);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22049__$1,cljs.core.cst$kw$type);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$pass);
});})(G__22045,G__22021,G__22022,G__22023,G__22024,G__22025,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1))
});
});})(G__22045,G__22021,G__22022,G__22023,G__22024,G__22025,G__22017,G__22018,error_QMARK_,tests,some_tests,total_tests,map__22012,map__22012__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"};
var G__22047 = sablono.interpreter.interpret(pass);
return React.createElement(G__22045,G__22046,G__22047);
})()));
return React.createElement(G__22021,G__22022,G__22023,G__22024,G__22025,G__22026);
})();
var G__22020 = (function (){var G__22051 = "div";
var G__22052 = {"className": devcards.system.devcards_rendered_card_class};
var G__22053 = sablono.interpreter.interpret(devcards.core.layout_tests(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var or__4986__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$filter);
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return cljs.core.identity;
}
})(),tests)));
return React.createElement(G__22051,G__22052,G__22053);
})();
return React.createElement(G__22017,G__22018,G__22019,G__22020);
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
devcards.core.test_loop = (function (){var c__16904__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto__){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto__){
return (function (state_22140){
var state_val_22141 = (state_22140[(1)]);
if((state_val_22141 === (7))){
var state_22140__$1 = state_22140;
var statearr_22142_22191 = state_22140__$1;
(statearr_22142_22191[(2)] = false);

(statearr_22142_22191[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (20))){
var inst_22081 = (state_22140[(7)]);
var inst_22100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22081);
var state_22140__$1 = state_22140;
var statearr_22143_22192 = state_22140__$1;
(statearr_22143_22192[(2)] = inst_22100);

(statearr_22143_22192[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (27))){
var inst_22105 = (state_22140[(8)]);
var inst_22115 = (state_22140[(9)]);
var inst_22119 = (inst_22105.cljs$core$IFn$_invoke$arity$1 ? inst_22105.cljs$core$IFn$_invoke$arity$1(inst_22115) : inst_22105.call(null,inst_22115));
var state_22140__$1 = state_22140;
var statearr_22144_22193 = state_22140__$1;
(statearr_22144_22193[(2)] = inst_22119);

(statearr_22144_22193[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (1))){
var state_22140__$1 = state_22140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22140__$1,(2),devcards.core.test_channel);
} else {
if((state_val_22141 === (24))){
var state_22140__$1 = state_22140;
var statearr_22145_22194 = state_22140__$1;
(statearr_22145_22194[(2)] = null);

(statearr_22145_22194[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (4))){
var state_22140__$1 = state_22140;
var statearr_22146_22195 = state_22140__$1;
(statearr_22146_22195[(2)] = false);

(statearr_22146_22195[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (15))){
var state_22140__$1 = state_22140;
var statearr_22147_22196 = state_22140__$1;
(statearr_22147_22196[(2)] = false);

(statearr_22147_22196[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (21))){
var inst_22081 = (state_22140[(7)]);
var state_22140__$1 = state_22140;
var statearr_22148_22197 = state_22140__$1;
(statearr_22148_22197[(2)] = inst_22081);

(statearr_22148_22197[(1)] = (22));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (13))){
var inst_22138 = (state_22140[(2)]);
var state_22140__$1 = state_22140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22140__$1,inst_22138);
} else {
if((state_val_22141 === (22))){
var inst_22104 = (state_22140[(10)]);
var inst_22103 = (state_22140[(2)]);
var inst_22104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22103,cljs.core.cst$kw$tests);
var inst_22105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22103,cljs.core.cst$kw$callback);
var state_22140__$1 = (function (){var statearr_22149 = state_22140;
(statearr_22149[(10)] = inst_22104__$1);

(statearr_22149[(8)] = inst_22105);

return statearr_22149;
})();
if(cljs.core.truth_(inst_22104__$1)){
var statearr_22150_22198 = state_22140__$1;
(statearr_22150_22198[(1)] = (23));

} else {
var statearr_22151_22199 = state_22140__$1;
(statearr_22151_22199[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (29))){
var inst_22129 = (state_22140[(2)]);
var inst_22130 = cljs.test.clear_env_BANG_();
var state_22140__$1 = (function (){var statearr_22152 = state_22140;
(statearr_22152[(11)] = inst_22129);

(statearr_22152[(12)] = inst_22130);

return statearr_22152;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22140__$1,(30),devcards.core.test_channel);
} else {
if((state_val_22141 === (6))){
var state_22140__$1 = state_22140;
var statearr_22153_22200 = state_22140__$1;
(statearr_22153_22200[(2)] = true);

(statearr_22153_22200[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (28))){
var inst_22105 = (state_22140[(8)]);
var inst_22121 = [cljs.core.cst$kw$type,cljs.core.cst$kw$actual];
var inst_22122 = [cljs.core.cst$kw$error,"Tests timed out. Please check Dev Console for Exceptions"];
var inst_22123 = cljs.core.PersistentHashMap.fromArrays(inst_22121,inst_22122);
var inst_22124 = devcards.core.collect_test(inst_22123);
var inst_22125 = cljs.test.get_current_env();
var inst_22126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inst_22125,cljs.core.cst$kw$error,"Execution timed out!");
var inst_22127 = (inst_22105.cljs$core$IFn$_invoke$arity$1 ? inst_22105.cljs$core$IFn$_invoke$arity$1(inst_22126) : inst_22105.call(null,inst_22126));
var state_22140__$1 = (function (){var statearr_22154 = state_22140;
(statearr_22154[(13)] = inst_22124);

return statearr_22154;
})();
var statearr_22155_22201 = state_22140__$1;
(statearr_22155_22201[(2)] = inst_22127);

(statearr_22155_22201[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (25))){
var inst_22136 = (state_22140[(2)]);
var state_22140__$1 = state_22140;
var statearr_22156_22202 = state_22140__$1;
(statearr_22156_22202[(2)] = inst_22136);

(statearr_22156_22202[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (17))){
var state_22140__$1 = state_22140;
var statearr_22157_22203 = state_22140__$1;
(statearr_22157_22203[(2)] = true);

(statearr_22157_22203[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (3))){
var inst_22058 = (state_22140[(14)]);
var inst_22063 = inst_22058.cljs$lang$protocol_mask$partition0$;
var inst_22064 = (inst_22063 & (64));
var inst_22065 = inst_22058.cljs$core$ISeq$;
var inst_22066 = (inst_22064) || (inst_22065);
var state_22140__$1 = state_22140;
if(cljs.core.truth_(inst_22066)){
var statearr_22158_22204 = state_22140__$1;
(statearr_22158_22204[(1)] = (6));

} else {
var statearr_22159_22205 = state_22140__$1;
(statearr_22159_22205[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (12))){
var inst_22081 = (state_22140[(7)]);
var inst_22085 = (inst_22081 == null);
var inst_22086 = cljs.core.not(inst_22085);
var state_22140__$1 = state_22140;
if(inst_22086){
var statearr_22160_22206 = state_22140__$1;
(statearr_22160_22206[(1)] = (14));

} else {
var statearr_22161_22207 = state_22140__$1;
(statearr_22161_22207[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (2))){
var inst_22058 = (state_22140[(14)]);
var inst_22058__$1 = (state_22140[(2)]);
var inst_22060 = (inst_22058__$1 == null);
var inst_22061 = cljs.core.not(inst_22060);
var state_22140__$1 = (function (){var statearr_22162 = state_22140;
(statearr_22162[(14)] = inst_22058__$1);

return statearr_22162;
})();
if(inst_22061){
var statearr_22163_22208 = state_22140__$1;
(statearr_22163_22208[(1)] = (3));

} else {
var statearr_22164_22209 = state_22140__$1;
(statearr_22164_22209[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (23))){
var inst_22108 = (state_22140[(15)]);
var inst_22104 = (state_22140[(10)]);
var inst_22108__$1 = cljs.core.async.timeout(devcards.core.test_timeout);
var inst_22109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22110 = devcards.core.run_card_tests(inst_22104);
var inst_22111 = [inst_22110,inst_22108__$1];
var inst_22112 = (new cljs.core.PersistentVector(null,2,(5),inst_22109,inst_22111,null));
var state_22140__$1 = (function (){var statearr_22165 = state_22140;
(statearr_22165[(15)] = inst_22108__$1);

return statearr_22165;
})();
return cljs.core.async.ioc_alts_BANG_(state_22140__$1,(26),inst_22112);
} else {
if((state_val_22141 === (19))){
var inst_22095 = (state_22140[(2)]);
var state_22140__$1 = state_22140;
var statearr_22166_22210 = state_22140__$1;
(statearr_22166_22210[(2)] = inst_22095);

(statearr_22166_22210[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (11))){
var inst_22058 = (state_22140[(14)]);
var inst_22078 = (state_22140[(2)]);
var inst_22079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22078,cljs.core.cst$kw$tests);
var inst_22080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22078,cljs.core.cst$kw$callback);
var inst_22081 = inst_22058;
var state_22140__$1 = (function (){var statearr_22167 = state_22140;
(statearr_22167[(7)] = inst_22081);

(statearr_22167[(16)] = inst_22080);

(statearr_22167[(17)] = inst_22079);

return statearr_22167;
})();
var statearr_22168_22211 = state_22140__$1;
(statearr_22168_22211[(2)] = null);

(statearr_22168_22211[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (9))){
var inst_22058 = (state_22140[(14)]);
var inst_22075 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22058);
var state_22140__$1 = state_22140;
var statearr_22169_22212 = state_22140__$1;
(statearr_22169_22212[(2)] = inst_22075);

(statearr_22169_22212[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (5))){
var inst_22073 = (state_22140[(2)]);
var state_22140__$1 = state_22140;
if(cljs.core.truth_(inst_22073)){
var statearr_22170_22213 = state_22140__$1;
(statearr_22170_22213[(1)] = (9));

} else {
var statearr_22171_22214 = state_22140__$1;
(statearr_22171_22214[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (14))){
var inst_22081 = (state_22140[(7)]);
var inst_22088 = inst_22081.cljs$lang$protocol_mask$partition0$;
var inst_22089 = (inst_22088 & (64));
var inst_22090 = inst_22081.cljs$core$ISeq$;
var inst_22091 = (inst_22089) || (inst_22090);
var state_22140__$1 = state_22140;
if(cljs.core.truth_(inst_22091)){
var statearr_22172_22215 = state_22140__$1;
(statearr_22172_22215[(1)] = (17));

} else {
var statearr_22173_22216 = state_22140__$1;
(statearr_22173_22216[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (26))){
var inst_22108 = (state_22140[(15)]);
var inst_22114 = (state_22140[(2)]);
var inst_22115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22114,(0),null);
var inst_22116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22114,(1),null);
var inst_22117 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_22116,inst_22108);
var state_22140__$1 = (function (){var statearr_22174 = state_22140;
(statearr_22174[(9)] = inst_22115);

return statearr_22174;
})();
if(inst_22117){
var statearr_22175_22217 = state_22140__$1;
(statearr_22175_22217[(1)] = (27));

} else {
var statearr_22176_22218 = state_22140__$1;
(statearr_22176_22218[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (16))){
var inst_22098 = (state_22140[(2)]);
var state_22140__$1 = state_22140;
if(cljs.core.truth_(inst_22098)){
var statearr_22177_22219 = state_22140__$1;
(statearr_22177_22219[(1)] = (20));

} else {
var statearr_22178_22220 = state_22140__$1;
(statearr_22178_22220[(1)] = (21));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (30))){
var inst_22132 = (state_22140[(2)]);
var inst_22081 = inst_22132;
var state_22140__$1 = (function (){var statearr_22179 = state_22140;
(statearr_22179[(7)] = inst_22081);

return statearr_22179;
})();
var statearr_22180_22221 = state_22140__$1;
(statearr_22180_22221[(2)] = null);

(statearr_22180_22221[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (10))){
var inst_22058 = (state_22140[(14)]);
var state_22140__$1 = state_22140;
var statearr_22181_22222 = state_22140__$1;
(statearr_22181_22222[(2)] = inst_22058);

(statearr_22181_22222[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (18))){
var state_22140__$1 = state_22140;
var statearr_22182_22223 = state_22140__$1;
(statearr_22182_22223[(2)] = false);

(statearr_22182_22223[(1)] = (19));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22141 === (8))){
var inst_22070 = (state_22140[(2)]);
var state_22140__$1 = state_22140;
var statearr_22183_22224 = state_22140__$1;
(statearr_22183_22224[(2)] = inst_22070);

(statearr_22183_22224[(1)] = (5));


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
});})(c__16904__auto__))
;
return ((function (switch__16790__auto__,c__16904__auto__){
return (function() {
var devcards$core$state_machine__16791__auto__ = null;
var devcards$core$state_machine__16791__auto____0 = (function (){
var statearr_22187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22187[(0)] = devcards$core$state_machine__16791__auto__);

(statearr_22187[(1)] = (1));

return statearr_22187;
});
var devcards$core$state_machine__16791__auto____1 = (function (state_22140){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_22140);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e22188){if((e22188 instanceof Object)){
var ex__16794__auto__ = e22188;
var statearr_22189_22225 = state_22140;
(statearr_22189_22225[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22140);

return cljs.core.cst$kw$recur;
} else {
throw e22188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__22226 = state_22140;
state_22140 = G__22226;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
devcards$core$state_machine__16791__auto__ = function(state_22140){
switch(arguments.length){
case 0:
return devcards$core$state_machine__16791__auto____0.call(this);
case 1:
return devcards$core$state_machine__16791__auto____1.call(this,state_22140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__16791__auto____0;
devcards$core$state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__16791__auto____1;
return devcards$core$state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto__))
})();
var state__16906__auto__ = (function (){var statearr_22190 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_22190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto__);

return statearr_22190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto__))
);

return c__16904__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tests,tests,cljs.core.cst$kw$callback,(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__20614__auto___22231 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__20614__auto___22231);
}

var seq__22227_22232 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__22228_22233 = null;
var count__22229_22234 = (0);
var i__22230_22235 = (0);
while(true){
if((i__22230_22235 < count__22229_22234)){
var property__20615__auto___22236 = chunk__22228_22233.cljs$core$IIndexed$_nth$arity$2(null,i__22230_22235);
if(cljs.core.truth_((base__20614__auto___22231[property__20615__auto___22236]))){
(devcards.core.TestDevcard.prototype[property__20615__auto___22236] = (base__20614__auto___22231[property__20615__auto___22236]));
} else {
}

var G__22237 = seq__22227_22232;
var G__22238 = chunk__22228_22233;
var G__22239 = count__22229_22234;
var G__22240 = (i__22230_22235 + (1));
seq__22227_22232 = G__22237;
chunk__22228_22233 = G__22238;
count__22229_22234 = G__22239;
i__22230_22235 = G__22240;
continue;
} else {
var temp__4425__auto___22241 = cljs.core.seq(seq__22227_22232);
if(temp__4425__auto___22241){
var seq__22227_22242__$1 = temp__4425__auto___22241;
if(cljs.core.chunked_seq_QMARK_(seq__22227_22242__$1)){
var c__5789__auto___22243 = cljs.core.chunk_first(seq__22227_22242__$1);
var G__22244 = cljs.core.chunk_rest(seq__22227_22242__$1);
var G__22245 = c__5789__auto___22243;
var G__22246 = cljs.core.count(c__5789__auto___22243);
var G__22247 = (0);
seq__22227_22232 = G__22244;
chunk__22228_22233 = G__22245;
count__22229_22234 = G__22246;
i__22230_22235 = G__22247;
continue;
} else {
var property__20615__auto___22248 = cljs.core.first(seq__22227_22242__$1);
if(cljs.core.truth_((base__20614__auto___22231[property__20615__auto___22248]))){
(devcards.core.TestDevcard.prototype[property__20615__auto___22248] = (base__20614__auto___22231[property__20615__auto___22248]));
} else {
}

var G__22249 = cljs.core.next(seq__22227_22242__$1);
var G__22250 = null;
var G__22251 = (0);
var G__22252 = (0);
seq__22227_22232 = G__22249;
chunk__22228_22233 = G__22250;
count__22229_22234 = G__22251;
i__22230_22235 = G__22252;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6051__auto__ = [];
var len__6044__auto___22259 = arguments.length;
var i__6045__auto___22260 = (0);
while(true){
if((i__6045__auto___22260 < len__6044__auto___22259)){
args__6051__auto__.push((arguments[i__6045__auto___22260]));

var G__22261 = (i__6045__auto___22260 + (1));
i__6045__auto___22260 = G__22261;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core22254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core22254 = (function (test_thunks,meta22255){
this.test_thunks = test_thunks;
this.meta22255 = meta22255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core22254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22256,meta22255__$1){
var self__ = this;
var _22256__$1 = this;
return (new devcards.core.t_devcards$core22254(self__.test_thunks,meta22255__$1));
});

devcards.core.t_devcards$core22254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22256){
var self__ = this;
var _22256__$1 = this;
return self__.meta22255;
});

devcards.core.t_devcards$core22254.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core22254.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
var G__22257 = devcards.core.TestDevcard;
var G__22258 = {"test_thunks": self__.test_thunks, "path": path};
return React.createElement(G__22257,G__22258);
});

devcards.core.t_devcards$core22254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$test_DASH_thunks,cljs.core.cst$sym$meta22255], null);
});

devcards.core.t_devcards$core22254.cljs$lang$type = true;

devcards.core.t_devcards$core22254.cljs$lang$ctorStr = "devcards.core/t_devcards$core22254";

devcards.core.t_devcards$core22254.cljs$lang$ctorPrWriter = (function (this__5584__auto__,writer__5585__auto__,opt__5586__auto__){
return cljs.core._write(writer__5585__auto__,"devcards.core/t_devcards$core22254");
});

devcards.core.__GT_t_devcards$core22254 = (function devcards$core$__GT_t_devcards$core22254(test_thunks__$1,meta22255){
return (new devcards.core.t_devcards$core22254(test_thunks__$1,meta22255));
});

}

return (new devcards.core.t_devcards$core22254(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq22253){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22253));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str((function (){var G__22266 = (function (){var attrs22267 = devcards.system.render_cards(devcards.system.display_cards(card),devcards.system.app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22267))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs22267], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22267)], null))));
})();
return React.renderToString(G__22266);
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
var G__22273 = (function (){var attrs22275 = devcards.system.render_cards(devcards.system.display_cards(card),app_state);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs22275))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs22275], 0))):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs22275))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs22275)], null))));
})();
var G__22274 = devcards.system.devcards_app_node();
return React.render(G__22273,G__22274);
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

var c__16904__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16904__auto__){
return (function (){
var f__16905__auto__ = (function (){var switch__16790__auto__ = ((function (c__16904__auto__){
return (function (state_22305){
var state_val_22306 = (state_22305[(1)]);
if((state_val_22306 === (1))){
var inst_22296 = devcards.core.load_data_from_channel_BANG_();
var state_22305__$1 = state_22305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22305__$1,(2),inst_22296);
} else {
if((state_val_22306 === (2))){
var inst_22298 = (state_22305[(2)]);
var inst_22299 = cljs.core.async.timeout((100));
var state_22305__$1 = (function (){var statearr_22307 = state_22305;
(statearr_22307[(7)] = inst_22298);

return statearr_22307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22305__$1,(3),inst_22299);
} else {
if((state_val_22306 === (3))){
var inst_22301 = (state_22305[(2)]);
var inst_22302 = (function (){return ((function (inst_22301,state_val_22306,c__16904__auto__){
return (function (){
return devcards.core.render_ns(ns_symbol,devcards.system.app_state);
});
;})(inst_22301,state_val_22306,c__16904__auto__))
})();
var inst_22303 = setTimeout(inst_22302,(0));
var state_22305__$1 = (function (){var statearr_22308 = state_22305;
(statearr_22308[(8)] = inst_22301);

return statearr_22308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22305__$1,inst_22303);
} else {
return null;
}
}
}
});})(c__16904__auto__))
;
return ((function (switch__16790__auto__,c__16904__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__16791__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__16791__auto____0 = (function (){
var statearr_22312 = [null,null,null,null,null,null,null,null,null];
(statearr_22312[(0)] = devcards$core$mount_namespace_$_state_machine__16791__auto__);

(statearr_22312[(1)] = (1));

return statearr_22312;
});
var devcards$core$mount_namespace_$_state_machine__16791__auto____1 = (function (state_22305){
while(true){
var ret_value__16792__auto__ = (function (){try{while(true){
var result__16793__auto__ = switch__16790__auto__(state_22305);
if(cljs.core.keyword_identical_QMARK_(result__16793__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16793__auto__;
}
break;
}
}catch (e22313){if((e22313 instanceof Object)){
var ex__16794__auto__ = e22313;
var statearr_22314_22316 = state_22305;
(statearr_22314_22316[(5)] = ex__16794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22305);

return cljs.core.cst$kw$recur;
} else {
throw e22313;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16792__auto__,cljs.core.cst$kw$recur)){
var G__22317 = state_22305;
state_22305 = G__22317;
continue;
} else {
return ret_value__16792__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__16791__auto__ = function(state_22305){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__16791__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__16791__auto____1.call(this,state_22305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__16791__auto____0;
devcards$core$mount_namespace_$_state_machine__16791__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__16791__auto____1;
return devcards$core$mount_namespace_$_state_machine__16791__auto__;
})()
;})(switch__16790__auto__,c__16904__auto__))
})();
var state__16906__auto__ = (function (){var statearr_22315 = (f__16905__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16905__auto__.cljs$core$IFn$_invoke$arity$0() : f__16905__auto__.call(null));
(statearr_22315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16904__auto__);

return statearr_22315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16906__auto__);
});})(c__16904__auto__))
);

return c__16904__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_(ns_symbol);

return devcards.system.start_ui_with_renderer(devcards.core.devcard_event_chan,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
