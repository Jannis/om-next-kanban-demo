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
document.body.addEventListener("figwheel.js-reload",(function (p1__16355_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__16355_SHARP_.detail], null));
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
var len__6152__auto___16359 = arguments.length;
var i__6153__auto___16360 = (0);
while(true){
if((i__6153__auto___16360 < len__6152__auto___16359)){
args__6159__auto__.push((arguments[i__6153__auto___16360]));

var G__16361 = (i__6153__auto___16360 + (1));
i__6153__auto___16360 = G__16361;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16357){
var vec__16358 = p__16357;
var options = cljs.core.nth.call(null,vec__16358,(0),null);
var options_16362__$1 = (function (){var or__5094__auto__ = options;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"default-options","default-options",430743650),devcards.core.assert_options_map.call(null,options_16362__$1));

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = (0);

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$applyTo = (function (seq16356){
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16356));
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__5082__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__5082__auto__){
var map__16369 = c;
var map__16369__$1 = ((((!((map__16369 == null)))?((((map__16369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16369):map__16369);
var path = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"func","func",-238706040));
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
var base__12893__auto___16375 = {"componentDidMount": (function (){
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
devcards.core.CodeHighlight = React.createClass(base__12893__auto___16375);
}

var seq__16371_16376 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16372_16377 = null;
var count__16373_16378 = (0);
var i__16374_16379 = (0);
while(true){
if((i__16374_16379 < count__16373_16378)){
var property__12894__auto___16380 = cljs.core._nth.call(null,chunk__16372_16377,i__16374_16379);
if(cljs.core.truth_((base__12893__auto___16375[property__12894__auto___16380]))){
(devcards.core.CodeHighlight.prototype[property__12894__auto___16380] = (base__12893__auto___16375[property__12894__auto___16380]));
} else {
}

var G__16381 = seq__16371_16376;
var G__16382 = chunk__16372_16377;
var G__16383 = count__16373_16378;
var G__16384 = (i__16374_16379 + (1));
seq__16371_16376 = G__16381;
chunk__16372_16377 = G__16382;
count__16373_16378 = G__16383;
i__16374_16379 = G__16384;
continue;
} else {
var temp__4425__auto___16385 = cljs.core.seq.call(null,seq__16371_16376);
if(temp__4425__auto___16385){
var seq__16371_16386__$1 = temp__4425__auto___16385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16371_16386__$1)){
var c__5897__auto___16387 = cljs.core.chunk_first.call(null,seq__16371_16386__$1);
var G__16388 = cljs.core.chunk_rest.call(null,seq__16371_16386__$1);
var G__16389 = c__5897__auto___16387;
var G__16390 = cljs.core.count.call(null,c__5897__auto___16387);
var G__16391 = (0);
seq__16371_16376 = G__16388;
chunk__16372_16377 = G__16389;
count__16373_16378 = G__16390;
i__16374_16379 = G__16391;
continue;
} else {
var property__12894__auto___16392 = cljs.core.first.call(null,seq__16371_16386__$1);
if(cljs.core.truth_((base__12893__auto___16375[property__12894__auto___16392]))){
(devcards.core.CodeHighlight.prototype[property__12894__auto___16392] = (base__12893__auto___16375[property__12894__auto___16392]));
} else {
}

var G__16393 = cljs.core.next.call(null,seq__16371_16386__$1);
var G__16394 = null;
var G__16395 = (0);
var G__16396 = (0);
seq__16371_16376 = G__16393;
chunk__16372_16377 = G__16394;
count__16373_16378 = G__16395;
i__16374_16379 = G__16396;
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
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16397){
var map__16398 = p__16397;
var map__16398__$1 = ((((!((map__16398 == null)))?((((map__16398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16398):map__16398);
var content = cljs.core.get.call(null,map__16398__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__16400){
var map__16401 = p__16400;
var map__16401__$1 = ((((!((map__16401 == null)))?((((map__16401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16401):map__16401);
var block = map__16401__$1;
var content = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16405 = arguments.length;
var i__6153__auto___16406 = (0);
while(true){
if((i__6153__auto___16406 < len__6152__auto___16405)){
args__6159__auto__.push((arguments[i__6153__auto___16406]));

var G__16407 = (i__6153__auto___16406 + (1));
i__6153__auto___16406 = G__16407;
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
var attrs16404 = cljs.core.map.call(null,devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16404))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs16404)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16404))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16404)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq16403){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16403));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"className": (function (){var G__16409 = devcards.system.devcards_rendered_card_class;
var G__16409__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__16409),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__16409);
var G__16409__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__16409__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__16409__$1);
return G__16409__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args16410 = [];
var len__6152__auto___16419 = arguments.length;
var i__6153__auto___16420 = (0);
while(true){
if((i__6153__auto___16420 < len__6152__auto___16419)){
args16410.push((arguments[i__6153__auto___16420]));

var G__16421 = (i__6153__auto___16420 + (1));
i__6153__auto___16420 = G__16421;
continue;
} else {
}
break;
}

var G__16412 = args16410.length;
switch (G__16412) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16410.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__16413 = card;
var map__16413__$1 = ((((!((map__16413 == null)))?((((map__16413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16413):map__16413);
var path = cljs.core.get.call(null,map__16413__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__16413__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs16415 = (cljs.core.truth_(path)?React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__16413,map__16413__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__16413,map__16413__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," "):(function (){var attrs16416 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs16416))?sablono.interpreter.attributes.call(null,attrs16416):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16416))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16416)], null))));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16415))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs16415)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16415))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16415)], null))));
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
var base__12893__auto___16430 = {"getInitialState": (function (){
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
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs16425 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16425))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs16425)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16425))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16425)], null))));
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
devcards.core.DevcardBase = React.createClass(base__12893__auto___16430);
}

var seq__16426_16431 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16427_16432 = null;
var count__16428_16433 = (0);
var i__16429_16434 = (0);
while(true){
if((i__16429_16434 < count__16428_16433)){
var property__12894__auto___16435 = cljs.core._nth.call(null,chunk__16427_16432,i__16429_16434);
if(cljs.core.truth_((base__12893__auto___16430[property__12894__auto___16435]))){
(devcards.core.DevcardBase.prototype[property__12894__auto___16435] = (base__12893__auto___16430[property__12894__auto___16435]));
} else {
}

var G__16436 = seq__16426_16431;
var G__16437 = chunk__16427_16432;
var G__16438 = count__16428_16433;
var G__16439 = (i__16429_16434 + (1));
seq__16426_16431 = G__16436;
chunk__16427_16432 = G__16437;
count__16428_16433 = G__16438;
i__16429_16434 = G__16439;
continue;
} else {
var temp__4425__auto___16440 = cljs.core.seq.call(null,seq__16426_16431);
if(temp__4425__auto___16440){
var seq__16426_16441__$1 = temp__4425__auto___16440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16426_16441__$1)){
var c__5897__auto___16442 = cljs.core.chunk_first.call(null,seq__16426_16441__$1);
var G__16443 = cljs.core.chunk_rest.call(null,seq__16426_16441__$1);
var G__16444 = c__5897__auto___16442;
var G__16445 = cljs.core.count.call(null,c__5897__auto___16442);
var G__16446 = (0);
seq__16426_16431 = G__16443;
chunk__16427_16432 = G__16444;
count__16428_16433 = G__16445;
i__16429_16434 = G__16446;
continue;
} else {
var property__12894__auto___16447 = cljs.core.first.call(null,seq__16426_16441__$1);
if(cljs.core.truth_((base__12893__auto___16430[property__12894__auto___16447]))){
(devcards.core.DevcardBase.prototype[property__12894__auto___16447] = (base__12893__auto___16430[property__12894__auto___16447]));
} else {
}

var G__16448 = cljs.core.next.call(null,seq__16426_16441__$1);
var G__16449 = null;
var G__16450 = (0);
var G__16451 = (0);
seq__16426_16431 = G__16448;
chunk__16427_16432 = G__16449;
count__16428_16433 = G__16450;
i__16429_16434 = G__16451;
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
var base__12893__auto___16456 = {"getInitialState": (function (){
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
devcards.core.DomComponent = React.createClass(base__12893__auto___16456);
}

var seq__16452_16457 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16453_16458 = null;
var count__16454_16459 = (0);
var i__16455_16460 = (0);
while(true){
if((i__16455_16460 < count__16454_16459)){
var property__12894__auto___16461 = cljs.core._nth.call(null,chunk__16453_16458,i__16455_16460);
if(cljs.core.truth_((base__12893__auto___16456[property__12894__auto___16461]))){
(devcards.core.DomComponent.prototype[property__12894__auto___16461] = (base__12893__auto___16456[property__12894__auto___16461]));
} else {
}

var G__16462 = seq__16452_16457;
var G__16463 = chunk__16453_16458;
var G__16464 = count__16454_16459;
var G__16465 = (i__16455_16460 + (1));
seq__16452_16457 = G__16462;
chunk__16453_16458 = G__16463;
count__16454_16459 = G__16464;
i__16455_16460 = G__16465;
continue;
} else {
var temp__4425__auto___16466 = cljs.core.seq.call(null,seq__16452_16457);
if(temp__4425__auto___16466){
var seq__16452_16467__$1 = temp__4425__auto___16466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16452_16467__$1)){
var c__5897__auto___16468 = cljs.core.chunk_first.call(null,seq__16452_16467__$1);
var G__16469 = cljs.core.chunk_rest.call(null,seq__16452_16467__$1);
var G__16470 = c__5897__auto___16468;
var G__16471 = cljs.core.count.call(null,c__5897__auto___16468);
var G__16472 = (0);
seq__16452_16457 = G__16469;
chunk__16453_16458 = G__16470;
count__16454_16459 = G__16471;
i__16455_16460 = G__16472;
continue;
} else {
var property__12894__auto___16473 = cljs.core.first.call(null,seq__16452_16467__$1);
if(cljs.core.truth_((base__12893__auto___16456[property__12894__auto___16473]))){
(devcards.core.DomComponent.prototype[property__12894__auto___16473] = (base__12893__auto___16456[property__12894__auto___16473]));
} else {
}

var G__16474 = cljs.core.next.call(null,seq__16452_16467__$1);
var G__16475 = null;
var G__16476 = (0);
var G__16477 = (0);
seq__16452_16457 = G__16474;
chunk__16453_16458 = G__16475;
count__16454_16459 = G__16476;
i__16455_16460 = G__16477;
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
return (function (p1__16478_SHARP_){
return !(p1__16478_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__16487 = opts;
var map__16487__$1 = ((((!((map__16487 == null)))?((((map__16487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16487):map__16487);
var name = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__16487__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
})()], null),cljs.core.mapv.call(null,((function (map__16487,map__16487__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__16479_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__16479_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__16487,map__16487__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))):null))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs16495 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs16495))?sablono.interpreter.attributes.call(null,attrs16495):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16495))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16495)], null))));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs16499 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16499))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs16499)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16499))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16499)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs16500 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16500))?sablono.interpreter.attributes.call(null,attrs16500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16500)], null))));
})(),((cljs.core.map_QMARK_.call(null,opts))?sablono.interpreter.interpret.call(null,(function (){var attrs16501 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16501))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs16501)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16501)], null))));
})()):null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__16502_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__16502_SHARP_);
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

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16504,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16506 = (((k16504 instanceof cljs.core.Keyword))?k16504.fqn:null);
switch (G__16506) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16504,else__5711__auto__);

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

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16503){
var self__ = this;
var G__16503__$1 = this;
return (new cljs.core.RecordIter((0),G__16503__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16503){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16507 = cljs.core.keyword_identical_QMARK_;
var expr__16508 = k__5716__auto__;
if(cljs.core.truth_(pred__16507.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16508))){
return (new devcards.core.IdentiyOptions(G__16503,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16503),null));
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

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16503){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__16503,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__16505){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16505),null,cljs.core.dissoc.call(null,G__16505,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__16511){
var map__16514 = p__16511;
var map__16514__$1 = ((((!((map__16514 == null)))?((((map__16514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16514):map__16514);
var devcard_opts = map__16514__$1;
var options = cljs.core.get.call(null,map__16514__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__16514,map__16514__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__16514,map__16514__$1,devcard_opts,options))
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

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16517,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16519 = (((k16517 instanceof cljs.core.Keyword))?k16517.fqn:null);
switch (G__16519) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16517,else__5711__auto__);

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

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16516){
var self__ = this;
var G__16516__$1 = this;
return (new cljs.core.RecordIter((0),G__16516__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16516){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16520 = cljs.core.keyword_identical_QMARK_;
var expr__16521 = k__5716__auto__;
if(cljs.core.truth_(pred__16520.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16521))){
return (new devcards.core.AtomLikeOptions(G__16516,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16516),null));
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

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16516){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__16516,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__16518){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16518),null,cljs.core.dissoc.call(null,G__16518,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k16527,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__16529 = (((k16527 instanceof cljs.core.Keyword))?k16527.fqn:null);
switch (G__16529) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16527,else__5711__auto__);

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

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16526){
var self__ = this;
var G__16526__$1 = this;
return (new cljs.core.RecordIter((0),G__16526__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__16526){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__16530 = cljs.core.keyword_identical_QMARK_;
var expr__16531 = k__5716__auto__;
if(cljs.core.truth_(pred__16530.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__16531))){
return (new devcards.core.EdnLikeOptions(G__16526,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5716__auto__,G__16526),null));
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

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__16526){
var self__ = this;
var this__5707__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__16526,self__.__extmap,self__.__hash));
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

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__16528){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__16528),null,cljs.core.dissoc.call(null,G__16528,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
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
var opts__$1 = cljs.core.update.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_)),new cljs.core.Keyword(null,"options","options",99638489),(function (p1__16544_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"default-options","default-options",430743650).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__16544_SHARP_);
}));
if((function (){var G__16546 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__16546 == null))){
if((false) || (G__16546.devcards$core$IDevcard$)){
return true;
} else {
if((!G__16546.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__16546);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__16546);
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
var map__16549 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__16549__$1 = ((((!((map__16549 == null)))?((((map__16549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16549):map__16549);
var history = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__16553 = cljs.core.deref.call(null,history_atom);
var map__16553__$1 = ((((!((map__16553 == null)))?((((map__16553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16553):map__16553);
var history = cljs.core.get.call(null,map__16553__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16553__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__16557 = cljs.core.deref.call(null,history_atom);
var map__16557__$1 = ((((!((map__16557 == null)))?((((map__16557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16557):map__16557);
var history = cljs.core.get.call(null,map__16557__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__16557__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
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
var map__16561 = cljs.core.deref.call(null,history_atom);
var map__16561__$1 = ((((!((map__16561 == null)))?((((map__16561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16561):map__16561);
var history = cljs.core.get.call(null,map__16561__$1,new cljs.core.Keyword(null,"history","history",-247395220));
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
return (function (p__16563){
var map__16564 = p__16563;
var map__16564__$1 = ((((!((map__16564 == null)))?((((map__16564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16564):map__16564);
var ha = map__16564__$1;
var pointer = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__16564__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
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
var _STAR_current_env_STAR_16579 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_16579;
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
var attrs16580 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16580))?sablono.interpreter.attributes.call(null,attrs16580):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16580))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16580)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__16581,body){
var map__16585 = p__16581;
var map__16585__$1 = ((((!((map__16585 == null)))?((((map__16585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16585):map__16585);
var message = cljs.core.get.call(null,map__16585__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs16587 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs16587))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs16587)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16587))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16587)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__16588){
var map__16591 = p__16588;
var map__16591__$1 = ((((!((map__16591 == null)))?((((map__16591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16591):map__16591);
var m = map__16591__$1;
var expected = cljs.core.get.call(null,map__16591__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return devcards.core.display_message.call(null,m,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs16595 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs16595))?sablono.interpreter.attributes.call(null,attrs16595):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16595))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16595)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs16596 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16596))?sablono.interpreter.attributes.call(null,attrs16596):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16596))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16596)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__16597){
var map__16598 = p__16597;
var map__16598__$1 = ((((!((map__16598 == null)))?((((map__16598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16598):map__16598);
var testing_contexts = cljs.core.get.call(null,map__16598__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs16600 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__16598,map__16598__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__16598,map__16598__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16600))?sablono.interpreter.attributes.call(null,attrs16600):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16600)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs16605 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__16606,t){
var map__16607 = p__16606;
var map__16607__$1 = ((((!((map__16607 == null)))?((((map__16607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16607):map__16607);
var last_context = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__16607__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16605))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs16605)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16605))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16605)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__16621){
var map__16622 = p__16621;
var map__16622__$1 = ((((!((map__16622 == null)))?((((map__16622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16622):map__16622);
var type = cljs.core.get.call(null,map__16622__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__16620 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__16620__$1 = ((((!((map__16620 == null)))?((((map__16620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16620):map__16620);
var fail = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__16620__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1))
)},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join('')):null)),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),((((fail + error__$1) === (0)))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1){
return (function (p__16625){
var map__16626 = p__16625;
var map__16626__$1 = ((((!((map__16626 == null)))?((((map__16626.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16626.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16626):map__16626);
var type = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),((((pass == null)) || ((pass === (0))))?null:sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1){
return (function (p__16628){
var map__16629 = p__16628;
var map__16629__$1 = ((((!((map__16629 == null)))?((((map__16629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16629):map__16629);
var type = cljs.core.get.call(null,map__16629__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__16620,map__16620__$1,fail,pass,error,error__$1))
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
return (function (state_16717){
var state_val_16718 = (state_16717[(1)]);
if((state_val_16718 === (7))){
var state_16717__$1 = state_16717;
var statearr_16719_16768 = state_16717__$1;
(statearr_16719_16768[(2)] = false);

(statearr_16719_16768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (20))){
var inst_16658 = (state_16717[(7)]);
var inst_16677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16658);
var state_16717__$1 = state_16717;
var statearr_16720_16769 = state_16717__$1;
(statearr_16720_16769[(2)] = inst_16677);

(statearr_16720_16769[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (27))){
var inst_16682 = (state_16717[(8)]);
var inst_16692 = (state_16717[(9)]);
var inst_16696 = inst_16682.call(null,inst_16692);
var state_16717__$1 = state_16717;
var statearr_16721_16770 = state_16717__$1;
(statearr_16721_16770[(2)] = inst_16696);

(statearr_16721_16770[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (1))){
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16717__$1,(2),devcards.core.test_channel);
} else {
if((state_val_16718 === (24))){
var state_16717__$1 = state_16717;
var statearr_16722_16771 = state_16717__$1;
(statearr_16722_16771[(2)] = null);

(statearr_16722_16771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (4))){
var state_16717__$1 = state_16717;
var statearr_16723_16772 = state_16717__$1;
(statearr_16723_16772[(2)] = false);

(statearr_16723_16772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (15))){
var state_16717__$1 = state_16717;
var statearr_16724_16773 = state_16717__$1;
(statearr_16724_16773[(2)] = false);

(statearr_16724_16773[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (21))){
var inst_16658 = (state_16717[(7)]);
var state_16717__$1 = state_16717;
var statearr_16725_16774 = state_16717__$1;
(statearr_16725_16774[(2)] = inst_16658);

(statearr_16725_16774[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (13))){
var inst_16715 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16717__$1,inst_16715);
} else {
if((state_val_16718 === (22))){
var inst_16681 = (state_16717[(10)]);
var inst_16680 = (state_16717[(2)]);
var inst_16681__$1 = cljs.core.get.call(null,inst_16680,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_16682 = cljs.core.get.call(null,inst_16680,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_16717__$1 = (function (){var statearr_16726 = state_16717;
(statearr_16726[(8)] = inst_16682);

(statearr_16726[(10)] = inst_16681__$1);

return statearr_16726;
})();
if(cljs.core.truth_(inst_16681__$1)){
var statearr_16727_16775 = state_16717__$1;
(statearr_16727_16775[(1)] = (23));

} else {
var statearr_16728_16776 = state_16717__$1;
(statearr_16728_16776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (29))){
var inst_16706 = (state_16717[(2)]);
var inst_16707 = cljs.test.clear_env_BANG_.call(null);
var state_16717__$1 = (function (){var statearr_16729 = state_16717;
(statearr_16729[(11)] = inst_16707);

(statearr_16729[(12)] = inst_16706);

return statearr_16729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16717__$1,(30),devcards.core.test_channel);
} else {
if((state_val_16718 === (6))){
var state_16717__$1 = state_16717;
var statearr_16730_16777 = state_16717__$1;
(statearr_16730_16777[(2)] = true);

(statearr_16730_16777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (28))){
var inst_16682 = (state_16717[(8)]);
var inst_16698 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_16699 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_16700 = cljs.core.PersistentHashMap.fromArrays(inst_16698,inst_16699);
var inst_16701 = devcards.core.collect_test.call(null,inst_16700);
var inst_16702 = cljs.test.get_current_env.call(null);
var inst_16703 = cljs.core.assoc.call(null,inst_16702,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_16704 = inst_16682.call(null,inst_16703);
var state_16717__$1 = (function (){var statearr_16731 = state_16717;
(statearr_16731[(13)] = inst_16701);

return statearr_16731;
})();
var statearr_16732_16778 = state_16717__$1;
(statearr_16732_16778[(2)] = inst_16704);

(statearr_16732_16778[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (25))){
var inst_16713 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16733_16779 = state_16717__$1;
(statearr_16733_16779[(2)] = inst_16713);

(statearr_16733_16779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (17))){
var state_16717__$1 = state_16717;
var statearr_16734_16780 = state_16717__$1;
(statearr_16734_16780[(2)] = true);

(statearr_16734_16780[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (3))){
var inst_16635 = (state_16717[(14)]);
var inst_16640 = inst_16635.cljs$lang$protocol_mask$partition0$;
var inst_16641 = (inst_16640 & (64));
var inst_16642 = inst_16635.cljs$core$ISeq$;
var inst_16643 = (inst_16641) || (inst_16642);
var state_16717__$1 = state_16717;
if(cljs.core.truth_(inst_16643)){
var statearr_16735_16781 = state_16717__$1;
(statearr_16735_16781[(1)] = (6));

} else {
var statearr_16736_16782 = state_16717__$1;
(statearr_16736_16782[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (12))){
var inst_16658 = (state_16717[(7)]);
var inst_16662 = (inst_16658 == null);
var inst_16663 = cljs.core.not.call(null,inst_16662);
var state_16717__$1 = state_16717;
if(inst_16663){
var statearr_16737_16783 = state_16717__$1;
(statearr_16737_16783[(1)] = (14));

} else {
var statearr_16738_16784 = state_16717__$1;
(statearr_16738_16784[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (2))){
var inst_16635 = (state_16717[(14)]);
var inst_16635__$1 = (state_16717[(2)]);
var inst_16637 = (inst_16635__$1 == null);
var inst_16638 = cljs.core.not.call(null,inst_16637);
var state_16717__$1 = (function (){var statearr_16739 = state_16717;
(statearr_16739[(14)] = inst_16635__$1);

return statearr_16739;
})();
if(inst_16638){
var statearr_16740_16785 = state_16717__$1;
(statearr_16740_16785[(1)] = (3));

} else {
var statearr_16741_16786 = state_16717__$1;
(statearr_16741_16786[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (23))){
var inst_16681 = (state_16717[(10)]);
var inst_16685 = (state_16717[(15)]);
var inst_16685__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_16686 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16687 = devcards.core.run_card_tests.call(null,inst_16681);
var inst_16688 = [inst_16687,inst_16685__$1];
var inst_16689 = (new cljs.core.PersistentVector(null,2,(5),inst_16686,inst_16688,null));
var state_16717__$1 = (function (){var statearr_16742 = state_16717;
(statearr_16742[(15)] = inst_16685__$1);

return statearr_16742;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16717__$1,(26),inst_16689);
} else {
if((state_val_16718 === (19))){
var inst_16672 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16743_16787 = state_16717__$1;
(statearr_16743_16787[(2)] = inst_16672);

(statearr_16743_16787[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (11))){
var inst_16635 = (state_16717[(14)]);
var inst_16655 = (state_16717[(2)]);
var inst_16656 = cljs.core.get.call(null,inst_16655,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_16657 = cljs.core.get.call(null,inst_16655,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_16658 = inst_16635;
var state_16717__$1 = (function (){var statearr_16744 = state_16717;
(statearr_16744[(7)] = inst_16658);

(statearr_16744[(16)] = inst_16656);

(statearr_16744[(17)] = inst_16657);

return statearr_16744;
})();
var statearr_16745_16788 = state_16717__$1;
(statearr_16745_16788[(2)] = null);

(statearr_16745_16788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (9))){
var inst_16635 = (state_16717[(14)]);
var inst_16652 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16635);
var state_16717__$1 = state_16717;
var statearr_16746_16789 = state_16717__$1;
(statearr_16746_16789[(2)] = inst_16652);

(statearr_16746_16789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (5))){
var inst_16650 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
if(cljs.core.truth_(inst_16650)){
var statearr_16747_16790 = state_16717__$1;
(statearr_16747_16790[(1)] = (9));

} else {
var statearr_16748_16791 = state_16717__$1;
(statearr_16748_16791[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (14))){
var inst_16658 = (state_16717[(7)]);
var inst_16665 = inst_16658.cljs$lang$protocol_mask$partition0$;
var inst_16666 = (inst_16665 & (64));
var inst_16667 = inst_16658.cljs$core$ISeq$;
var inst_16668 = (inst_16666) || (inst_16667);
var state_16717__$1 = state_16717;
if(cljs.core.truth_(inst_16668)){
var statearr_16749_16792 = state_16717__$1;
(statearr_16749_16792[(1)] = (17));

} else {
var statearr_16750_16793 = state_16717__$1;
(statearr_16750_16793[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (26))){
var inst_16685 = (state_16717[(15)]);
var inst_16691 = (state_16717[(2)]);
var inst_16692 = cljs.core.nth.call(null,inst_16691,(0),null);
var inst_16693 = cljs.core.nth.call(null,inst_16691,(1),null);
var inst_16694 = cljs.core.not_EQ_.call(null,inst_16693,inst_16685);
var state_16717__$1 = (function (){var statearr_16751 = state_16717;
(statearr_16751[(9)] = inst_16692);

return statearr_16751;
})();
if(inst_16694){
var statearr_16752_16794 = state_16717__$1;
(statearr_16752_16794[(1)] = (27));

} else {
var statearr_16753_16795 = state_16717__$1;
(statearr_16753_16795[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (16))){
var inst_16675 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
if(cljs.core.truth_(inst_16675)){
var statearr_16754_16796 = state_16717__$1;
(statearr_16754_16796[(1)] = (20));

} else {
var statearr_16755_16797 = state_16717__$1;
(statearr_16755_16797[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (30))){
var inst_16709 = (state_16717[(2)]);
var inst_16658 = inst_16709;
var state_16717__$1 = (function (){var statearr_16756 = state_16717;
(statearr_16756[(7)] = inst_16658);

return statearr_16756;
})();
var statearr_16757_16798 = state_16717__$1;
(statearr_16757_16798[(2)] = null);

(statearr_16757_16798[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (10))){
var inst_16635 = (state_16717[(14)]);
var state_16717__$1 = state_16717;
var statearr_16758_16799 = state_16717__$1;
(statearr_16758_16799[(2)] = inst_16635);

(statearr_16758_16799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (18))){
var state_16717__$1 = state_16717;
var statearr_16759_16800 = state_16717__$1;
(statearr_16759_16800[(2)] = false);

(statearr_16759_16800[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16718 === (8))){
var inst_16647 = (state_16717[(2)]);
var state_16717__$1 = state_16717;
var statearr_16760_16801 = state_16717__$1;
(statearr_16760_16801[(2)] = inst_16647);

(statearr_16760_16801[(1)] = (5));


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
var statearr_16764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16764[(0)] = devcards$core$state_machine__9880__auto__);

(statearr_16764[(1)] = (1));

return statearr_16764;
});
var devcards$core$state_machine__9880__auto____1 = (function (state_16717){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_16717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e16765){if((e16765 instanceof Object)){
var ex__9883__auto__ = e16765;
var statearr_16766_16802 = state_16717;
(statearr_16766_16802[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16803 = state_16717;
state_16717 = G__16803;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
devcards$core$state_machine__9880__auto__ = function(state_16717){
switch(arguments.length){
case 0:
return devcards$core$state_machine__9880__auto____0.call(this);
case 1:
return devcards$core$state_machine__9880__auto____1.call(this,state_16717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__9880__auto____0;
devcards$core$state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__9880__auto____1;
return devcards$core$state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_16767 = f__9945__auto__.call(null);
(statearr_16767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_16767;
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
var base__12893__auto___16808 = {"componentWillMount": (function (){
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
devcards.core.TestDevcard = React.createClass(base__12893__auto___16808);
}

var seq__16804_16809 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__16805_16810 = null;
var count__16806_16811 = (0);
var i__16807_16812 = (0);
while(true){
if((i__16807_16812 < count__16806_16811)){
var property__12894__auto___16813 = cljs.core._nth.call(null,chunk__16805_16810,i__16807_16812);
if(cljs.core.truth_((base__12893__auto___16808[property__12894__auto___16813]))){
(devcards.core.TestDevcard.prototype[property__12894__auto___16813] = (base__12893__auto___16808[property__12894__auto___16813]));
} else {
}

var G__16814 = seq__16804_16809;
var G__16815 = chunk__16805_16810;
var G__16816 = count__16806_16811;
var G__16817 = (i__16807_16812 + (1));
seq__16804_16809 = G__16814;
chunk__16805_16810 = G__16815;
count__16806_16811 = G__16816;
i__16807_16812 = G__16817;
continue;
} else {
var temp__4425__auto___16818 = cljs.core.seq.call(null,seq__16804_16809);
if(temp__4425__auto___16818){
var seq__16804_16819__$1 = temp__4425__auto___16818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16804_16819__$1)){
var c__5897__auto___16820 = cljs.core.chunk_first.call(null,seq__16804_16819__$1);
var G__16821 = cljs.core.chunk_rest.call(null,seq__16804_16819__$1);
var G__16822 = c__5897__auto___16820;
var G__16823 = cljs.core.count.call(null,c__5897__auto___16820);
var G__16824 = (0);
seq__16804_16809 = G__16821;
chunk__16805_16810 = G__16822;
count__16806_16811 = G__16823;
i__16807_16812 = G__16824;
continue;
} else {
var property__12894__auto___16825 = cljs.core.first.call(null,seq__16804_16819__$1);
if(cljs.core.truth_((base__12893__auto___16808[property__12894__auto___16825]))){
(devcards.core.TestDevcard.prototype[property__12894__auto___16825] = (base__12893__auto___16808[property__12894__auto___16825]));
} else {
}

var G__16826 = cljs.core.next.call(null,seq__16804_16819__$1);
var G__16827 = null;
var G__16828 = (0);
var G__16829 = (0);
seq__16804_16809 = G__16826;
chunk__16805_16810 = G__16827;
count__16806_16811 = G__16828;
i__16807_16812 = G__16829;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16834 = arguments.length;
var i__6153__auto___16835 = (0);
while(true){
if((i__6153__auto___16835 < len__6152__auto___16834)){
args__6159__auto__.push((arguments[i__6153__auto___16835]));

var G__16836 = (i__6153__auto___16835 + (1));
i__6153__auto___16835 = G__16836;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core16831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core16831 = (function (test_thunks,meta16832){
this.test_thunks = test_thunks;
this.meta16832 = meta16832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core16831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16833,meta16832__$1){
var self__ = this;
var _16833__$1 = this;
return (new devcards.core.t_devcards$core16831(self__.test_thunks,meta16832__$1));
});

devcards.core.t_devcards$core16831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16833){
var self__ = this;
var _16833__$1 = this;
return self__.meta16832;
});

devcards.core.t_devcards$core16831.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core16831.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core16831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta16832","meta16832",325984527,null)], null);
});

devcards.core.t_devcards$core16831.cljs$lang$type = true;

devcards.core.t_devcards$core16831.cljs$lang$ctorStr = "devcards.core/t_devcards$core16831";

devcards.core.t_devcards$core16831.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"devcards.core/t_devcards$core16831");
});

devcards.core.__GT_t_devcards$core16831 = (function devcards$core$__GT_t_devcards$core16831(test_thunks__$1,meta16832){
return (new devcards.core.t_devcards$core16831(test_thunks__$1,meta16832));
});

}

return (new devcards.core.t_devcards$core16831(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq16830){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16830));
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

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs16838 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16838))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs16838)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16838))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16838)], null))));
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
return React.render((function (){var attrs16840 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs16840))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs16840)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16840))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16840)], null))));
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
return (function (state_16870){
var state_val_16871 = (state_16870[(1)]);
if((state_val_16871 === (1))){
var inst_16861 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_16870__$1 = state_16870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16870__$1,(2),inst_16861);
} else {
if((state_val_16871 === (2))){
var inst_16863 = (state_16870[(2)]);
var inst_16864 = cljs.core.async.timeout.call(null,(100));
var state_16870__$1 = (function (){var statearr_16872 = state_16870;
(statearr_16872[(7)] = inst_16863);

return statearr_16872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16870__$1,(3),inst_16864);
} else {
if((state_val_16871 === (3))){
var inst_16866 = (state_16870[(2)]);
var inst_16867 = (function (){return ((function (inst_16866,state_val_16871,c__9944__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_16866,state_val_16871,c__9944__auto__))
})();
var inst_16868 = setTimeout(inst_16867,(0));
var state_16870__$1 = (function (){var statearr_16873 = state_16870;
(statearr_16873[(8)] = inst_16866);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16870__$1,inst_16868);
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
var statearr_16877 = [null,null,null,null,null,null,null,null,null];
(statearr_16877[(0)] = devcards$core$mount_namespace_$_state_machine__9880__auto__);

(statearr_16877[(1)] = (1));

return statearr_16877;
});
var devcards$core$mount_namespace_$_state_machine__9880__auto____1 = (function (state_16870){
while(true){
var ret_value__9881__auto__ = (function (){try{while(true){
var result__9882__auto__ = switch__9879__auto__.call(null,state_16870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9882__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9882__auto__;
}
break;
}
}catch (e16878){if((e16878 instanceof Object)){
var ex__9883__auto__ = e16878;
var statearr_16879_16881 = state_16870;
(statearr_16879_16881[(5)] = ex__9883__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16882 = state_16870;
state_16870 = G__16882;
continue;
} else {
return ret_value__9881__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__9880__auto__ = function(state_16870){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__9880__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__9880__auto____1.call(this,state_16870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__9880__auto____0;
devcards$core$mount_namespace_$_state_machine__9880__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__9880__auto____1;
return devcards$core$mount_namespace_$_state_machine__9880__auto__;
})()
;})(switch__9879__auto__,c__9944__auto__))
})();
var state__9946__auto__ = (function (){var statearr_16880 = f__9945__auto__.call(null);
(statearr_16880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9944__auto__);

return statearr_16880;
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