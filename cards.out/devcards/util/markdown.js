// Compiled by ClojureScript 1.7.145 {}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.showdown');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4425__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4425__auto__)){
var ws = temp__4425__auto__;
return ws.length;
} else {
return null;
}
});
var conv_class_16885 = Showdown.converter;
var converter_16886 = (new conv_class_16885());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_16885,converter_16886){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_16886.makeHtml(markdown_txt);
});})(conv_class_16885,converter_16886))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches.call(null,/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__6007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6011__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.util.markdown","block-parser"),((function (method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__,hierarchy__6011__auto__){
return (function (p__16887,line){
var map__16888 = p__16887;
var map__16888__$1 = ((((!((map__16888 == null)))?((((map__16888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16888):map__16888);
var stage = cljs.core.get.call(null,map__16888__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_.call(null,line))?new cljs.core.Keyword(null,"delim","delim",1621565472):new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__,hierarchy__6011__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__16890,line){
var map__16891 = p__16890;
var map__16891__$1 = ((((!((map__16891 == null)))?((((map__16891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16891):map__16891);
var st = map__16891__$1;
var stage = cljs.core.get.call(null,map__16891__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,clojure.string.trim.call(null,line));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__16893,line){
var map__16894 = p__16893;
var map__16894__$1 = ((((!((map__16894 == null)))?((((map__16894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16894):map__16894);
var st = map__16894__$1;
var stage = cljs.core.get.call(null,map__16894__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,cljs.core.subs.call(null,line,new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085).cljs$core$IFn$_invoke$arity$1(stage)));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__16896,line){
var map__16897 = p__16896;
var map__16897__$1 = ((((!((map__16897 == null)))?((((map__16897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16897):map__16897);
var st = map__16897__$1;
var stage = cljs.core.get.call(null,map__16897__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__16897__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
var lang = cljs.core.second.call(null,devcards.util.markdown.matches_delim_QMARK_.call(null,line));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"lang","lang",-1819677104),(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,lang))?null:lang),new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085),devcards.util.markdown.leading_space_count.call(null,line),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__16899,line){
var map__16900 = p__16899;
var map__16900__$1 = ((((!((map__16900 == null)))?((((map__16900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16900):map__16900);
var st = map__16900__$1;
var stage = cljs.core.get.call(null,map__16900__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__16900__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
return cljs.core.reduce.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.PersistentVector.EMPTY], null),clojure.string.split.call(null,m,"\n"));
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__16908 = devcards.util.markdown.parse_out_blocks_STAR_.call(null,m);
var map__16908__$1 = ((((!((map__16908 == null)))?((((map__16908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16908):map__16908);
var stage = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__16908__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.map.call(null,((function (map__16908,map__16908__$1,stage,accum){
return (function (x){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),((function (map__16908,map__16908__$1,stage,accum){
return (function (p1__16902_SHARP_){
return clojure.string.join.call(null,"\n",p1__16902_SHARP_);
});})(map__16908,map__16908__$1,stage,accum))
);
});})(map__16908,map__16908__$1,stage,accum))
,cljs.core.filter.call(null,((function (map__16908,map__16908__$1,stage,accum){
return (function (p__16910){
var map__16911 = p__16910;
var map__16911__$1 = ((((!((map__16911 == null)))?((((map__16911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16911):map__16911);
var content = cljs.core.get.call(null,map__16911__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.not_empty.call(null,content);
});})(map__16908,map__16908__$1,stage,accum))
,cljs.core.conj.call(null,accum,stage)));
});

//# sourceMappingURL=markdown.js.map