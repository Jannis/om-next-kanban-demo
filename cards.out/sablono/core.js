// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__20231__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__20230 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20230,(0),null);
var body = cljs.core.nthnext(vec__20230,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__20231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20232__i = 0, G__20232__a = new Array(arguments.length -  0);
while (G__20232__i < G__20232__a.length) {G__20232__a[G__20232__i] = arguments[G__20232__i + 0]; ++G__20232__i;}
  args = new cljs.core.IndexedSeq(G__20232__a,0);
} 
return G__20231__delegate.call(this,args);};
G__20231.cljs$lang$maxFixedArity = 0;
G__20231.cljs$lang$applyTo = (function (arglist__20233){
var args = cljs.core.seq(arglist__20233);
return G__20231__delegate(args);
});
G__20231.cljs$core$IFn$_invoke$arity$variadic = G__20231__delegate;
return G__20231;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5758__auto__ = (function sablono$core$update_arglists_$_iter__20240(s__20241){
return (new cljs.core.LazySeq(null,(function (){
var s__20241__$1 = s__20241;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20241__$1);
if(temp__4425__auto__){
var s__20241__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20241__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__20241__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__20243 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__20242 = (0);
while(true){
if((i__20242 < size__5757__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__20242);
cljs.core.chunk_append(b__20243,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__20246 = (i__20242 + (1));
i__20242 = G__20246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20243),sablono$core$update_arglists_$_iter__20240(cljs.core.chunk_rest(s__20241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20243),null);
}
} else {
var args = cljs.core.first(s__20241__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__20240(cljs.core.rest(s__20241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6051__auto__ = [];
var len__6044__auto___20254 = arguments.length;
var i__6045__auto___20255 = (0);
while(true){
if((i__6045__auto___20255 < len__6044__auto___20254)){
args__6051__auto__.push((arguments[i__6045__auto___20255]));

var G__20256 = (i__6045__auto___20255 + (1));
i__6045__auto___20255 = G__20256;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5758__auto__ = (function sablono$core$iter__20248(s__20249){
return (new cljs.core.LazySeq(null,(function (){
var s__20249__$1 = s__20249;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20249__$1);
if(temp__4425__auto__){
var s__20249__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20249__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__20249__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__20251 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__20250 = (0);
while(true){
if((i__20250 < size__5757__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__20250);
cljs.core.chunk_append(b__20251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__20257 = (i__20250 + (1));
i__20250 = G__20257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20251),sablono$core$iter__20248(cljs.core.chunk_rest(s__20249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20251),null);
}
} else {
var style = cljs.core.first(s__20249__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__20248(cljs.core.rest(s__20249__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq20247){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20247));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__20262 = goog.dom.getDocument().body;
var G__20263 = (function (){var G__20264 = "script";
var G__20265 = {"src": src};
return goog.dom.createDom(G__20264,G__20265);
})();
return goog.dom.appendChild(G__20262,G__20263);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to20266 = (function sablono$core$link_to20266(var_args){
var args__6051__auto__ = [];
var len__6044__auto___20269 = arguments.length;
var i__6045__auto___20270 = (0);
while(true){
if((i__6045__auto___20270 < len__6044__auto___20269)){
args__6051__auto__.push((arguments[i__6045__auto___20270]));

var G__20271 = (i__6045__auto___20270 + (1));
i__6045__auto___20270 = G__20271;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return sablono.core.link_to20266.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

sablono.core.link_to20266.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to20266.cljs$lang$maxFixedArity = (1);

sablono.core.link_to20266.cljs$lang$applyTo = (function (seq20267){
var G__20268 = cljs.core.first(seq20267);
var seq20267__$1 = cljs.core.next(seq20267);
return sablono.core.link_to20266.cljs$core$IFn$_invoke$arity$variadic(G__20268,seq20267__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to20266);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to20272 = (function sablono$core$mail_to20272(var_args){
var args__6051__auto__ = [];
var len__6044__auto___20277 = arguments.length;
var i__6045__auto___20278 = (0);
while(true){
if((i__6045__auto___20278 < len__6044__auto___20277)){
args__6051__auto__.push((arguments[i__6045__auto___20278]));

var G__20279 = (i__6045__auto___20278 + (1));
i__6045__auto___20278 = G__20279;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return sablono.core.mail_to20272.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

sablono.core.mail_to20272.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__20275){
var vec__20276 = p__20275;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20276,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4986__auto__ = content;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to20272.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to20272.cljs$lang$applyTo = (function (seq20273){
var G__20274 = cljs.core.first(seq20273);
var seq20273__$1 = cljs.core.next(seq20273);
return sablono.core.mail_to20272.cljs$core$IFn$_invoke$arity$variadic(G__20274,seq20273__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to20272);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20280 = (function sablono$core$unordered_list20280(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5758__auto__ = (function sablono$core$unordered_list20280_$_iter__20287(s__20288){
return (new cljs.core.LazySeq(null,(function (){
var s__20288__$1 = s__20288;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20288__$1);
if(temp__4425__auto__){
var s__20288__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20288__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__20288__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__20290 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__20289 = (0);
while(true){
if((i__20289 < size__5757__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__20289);
cljs.core.chunk_append(b__20290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20293 = (i__20289 + (1));
i__20289 = G__20293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20290),sablono$core$unordered_list20280_$_iter__20287(cljs.core.chunk_rest(s__20288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20290),null);
}
} else {
var x = cljs.core.first(s__20288__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list20280_$_iter__20287(cljs.core.rest(s__20288__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list20280);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20294 = (function sablono$core$ordered_list20294(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5758__auto__ = (function sablono$core$ordered_list20294_$_iter__20301(s__20302){
return (new cljs.core.LazySeq(null,(function (){
var s__20302__$1 = s__20302;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20302__$1);
if(temp__4425__auto__){
var s__20302__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20302__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__20302__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__20304 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__20303 = (0);
while(true){
if((i__20303 < size__5757__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__20303);
cljs.core.chunk_append(b__20304,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20307 = (i__20303 + (1));
i__20303 = G__20307;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20304),sablono$core$ordered_list20294_$_iter__20301(cljs.core.chunk_rest(s__20302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20304),null);
}
} else {
var x = cljs.core.first(s__20302__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list20294_$_iter__20301(cljs.core.rest(s__20302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list20294);
/**
 * Create an image element.
 */
sablono.core.image20308 = (function sablono$core$image20308(var_args){
var args20309 = [];
var len__6044__auto___20312 = arguments.length;
var i__6045__auto___20313 = (0);
while(true){
if((i__6045__auto___20313 < len__6044__auto___20312)){
args20309.push((arguments[i__6045__auto___20313]));

var G__20314 = (i__6045__auto___20313 + (1));
i__6045__auto___20313 = G__20314;
continue;
} else {
}
break;
}

var G__20311 = args20309.length;
switch (G__20311) {
case 1:
return sablono.core.image20308.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20308.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20309.length)].join('')));

}
});

sablono.core.image20308.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image20308.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image20308.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image20308);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20316_SHARP_,p2__20317_SHARP_){
return [cljs.core.str(p1__20316_SHARP_),cljs.core.str("["),cljs.core.str(p2__20317_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20318_SHARP_,p2__20319_SHARP_){
return [cljs.core.str(p1__20318_SHARP_),cljs.core.str("-"),cljs.core.str(p2__20319_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20320 = (function sablono$core$color_field20320(var_args){
var args20321 = [];
var len__6044__auto___20388 = arguments.length;
var i__6045__auto___20389 = (0);
while(true){
if((i__6045__auto___20389 < len__6044__auto___20388)){
args20321.push((arguments[i__6045__auto___20389]));

var G__20390 = (i__6045__auto___20389 + (1));
i__6045__auto___20389 = G__20390;
continue;
} else {
}
break;
}

var G__20323 = args20321.length;
switch (G__20323) {
case 1:
return sablono.core.color_field20320.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20320.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20321.length)].join('')));

}
});

sablono.core.color_field20320.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.color_field20320.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.color_field20320.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.color_field20320.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field20320);

/**
 * Creates a date input field.
 */
sablono.core.date_field20324 = (function sablono$core$date_field20324(var_args){
var args20325 = [];
var len__6044__auto___20392 = arguments.length;
var i__6045__auto___20393 = (0);
while(true){
if((i__6045__auto___20393 < len__6044__auto___20392)){
args20325.push((arguments[i__6045__auto___20393]));

var G__20394 = (i__6045__auto___20393 + (1));
i__6045__auto___20393 = G__20394;
continue;
} else {
}
break;
}

var G__20327 = args20325.length;
switch (G__20327) {
case 1:
return sablono.core.date_field20324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20325.length)].join('')));

}
});

sablono.core.date_field20324.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.date_field20324.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.date_field20324.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.date_field20324.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field20324);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20328 = (function sablono$core$datetime_field20328(var_args){
var args20329 = [];
var len__6044__auto___20396 = arguments.length;
var i__6045__auto___20397 = (0);
while(true){
if((i__6045__auto___20397 < len__6044__auto___20396)){
args20329.push((arguments[i__6045__auto___20397]));

var G__20398 = (i__6045__auto___20397 + (1));
i__6045__auto___20397 = G__20398;
continue;
} else {
}
break;
}

var G__20331 = args20329.length;
switch (G__20331) {
case 1:
return sablono.core.datetime_field20328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20329.length)].join('')));

}
});

sablono.core.datetime_field20328.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.datetime_field20328.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.datetime_field20328.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.datetime_field20328.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field20328);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20332 = (function sablono$core$datetime_local_field20332(var_args){
var args20333 = [];
var len__6044__auto___20400 = arguments.length;
var i__6045__auto___20401 = (0);
while(true){
if((i__6045__auto___20401 < len__6044__auto___20400)){
args20333.push((arguments[i__6045__auto___20401]));

var G__20402 = (i__6045__auto___20401 + (1));
i__6045__auto___20401 = G__20402;
continue;
} else {
}
break;
}

var G__20335 = args20333.length;
switch (G__20335) {
case 1:
return sablono.core.datetime_local_field20332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20333.length)].join('')));

}
});

sablono.core.datetime_local_field20332.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.datetime_local_field20332.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.datetime_local_field20332.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.datetime_local_field20332.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field20332);

/**
 * Creates a email input field.
 */
sablono.core.email_field20336 = (function sablono$core$email_field20336(var_args){
var args20337 = [];
var len__6044__auto___20404 = arguments.length;
var i__6045__auto___20405 = (0);
while(true){
if((i__6045__auto___20405 < len__6044__auto___20404)){
args20337.push((arguments[i__6045__auto___20405]));

var G__20406 = (i__6045__auto___20405 + (1));
i__6045__auto___20405 = G__20406;
continue;
} else {
}
break;
}

var G__20339 = args20337.length;
switch (G__20339) {
case 1:
return sablono.core.email_field20336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20337.length)].join('')));

}
});

sablono.core.email_field20336.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.email_field20336.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.email_field20336.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.email_field20336.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field20336);

/**
 * Creates a file input field.
 */
sablono.core.file_field20340 = (function sablono$core$file_field20340(var_args){
var args20341 = [];
var len__6044__auto___20408 = arguments.length;
var i__6045__auto___20409 = (0);
while(true){
if((i__6045__auto___20409 < len__6044__auto___20408)){
args20341.push((arguments[i__6045__auto___20409]));

var G__20410 = (i__6045__auto___20409 + (1));
i__6045__auto___20409 = G__20410;
continue;
} else {
}
break;
}

var G__20343 = args20341.length;
switch (G__20343) {
case 1:
return sablono.core.file_field20340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20341.length)].join('')));

}
});

sablono.core.file_field20340.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.file_field20340.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.file_field20340.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.file_field20340.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field20340);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20344 = (function sablono$core$hidden_field20344(var_args){
var args20345 = [];
var len__6044__auto___20412 = arguments.length;
var i__6045__auto___20413 = (0);
while(true){
if((i__6045__auto___20413 < len__6044__auto___20412)){
args20345.push((arguments[i__6045__auto___20413]));

var G__20414 = (i__6045__auto___20413 + (1));
i__6045__auto___20413 = G__20414;
continue;
} else {
}
break;
}

var G__20347 = args20345.length;
switch (G__20347) {
case 1:
return sablono.core.hidden_field20344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20345.length)].join('')));

}
});

sablono.core.hidden_field20344.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.hidden_field20344.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.hidden_field20344.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.hidden_field20344.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field20344);

/**
 * Creates a month input field.
 */
sablono.core.month_field20348 = (function sablono$core$month_field20348(var_args){
var args20349 = [];
var len__6044__auto___20416 = arguments.length;
var i__6045__auto___20417 = (0);
while(true){
if((i__6045__auto___20417 < len__6044__auto___20416)){
args20349.push((arguments[i__6045__auto___20417]));

var G__20418 = (i__6045__auto___20417 + (1));
i__6045__auto___20417 = G__20418;
continue;
} else {
}
break;
}

var G__20351 = args20349.length;
switch (G__20351) {
case 1:
return sablono.core.month_field20348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20349.length)].join('')));

}
});

sablono.core.month_field20348.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.month_field20348.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.month_field20348.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.month_field20348.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field20348);

/**
 * Creates a number input field.
 */
sablono.core.number_field20352 = (function sablono$core$number_field20352(var_args){
var args20353 = [];
var len__6044__auto___20420 = arguments.length;
var i__6045__auto___20421 = (0);
while(true){
if((i__6045__auto___20421 < len__6044__auto___20420)){
args20353.push((arguments[i__6045__auto___20421]));

var G__20422 = (i__6045__auto___20421 + (1));
i__6045__auto___20421 = G__20422;
continue;
} else {
}
break;
}

var G__20355 = args20353.length;
switch (G__20355) {
case 1:
return sablono.core.number_field20352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20353.length)].join('')));

}
});

sablono.core.number_field20352.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.number_field20352.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.number_field20352.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.number_field20352.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field20352);

/**
 * Creates a password input field.
 */
sablono.core.password_field20356 = (function sablono$core$password_field20356(var_args){
var args20357 = [];
var len__6044__auto___20424 = arguments.length;
var i__6045__auto___20425 = (0);
while(true){
if((i__6045__auto___20425 < len__6044__auto___20424)){
args20357.push((arguments[i__6045__auto___20425]));

var G__20426 = (i__6045__auto___20425 + (1));
i__6045__auto___20425 = G__20426;
continue;
} else {
}
break;
}

var G__20359 = args20357.length;
switch (G__20359) {
case 1:
return sablono.core.password_field20356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20357.length)].join('')));

}
});

sablono.core.password_field20356.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.password_field20356.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.password_field20356.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.password_field20356.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field20356);

/**
 * Creates a range input field.
 */
sablono.core.range_field20360 = (function sablono$core$range_field20360(var_args){
var args20361 = [];
var len__6044__auto___20428 = arguments.length;
var i__6045__auto___20429 = (0);
while(true){
if((i__6045__auto___20429 < len__6044__auto___20428)){
args20361.push((arguments[i__6045__auto___20429]));

var G__20430 = (i__6045__auto___20429 + (1));
i__6045__auto___20429 = G__20430;
continue;
} else {
}
break;
}

var G__20363 = args20361.length;
switch (G__20363) {
case 1:
return sablono.core.range_field20360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20361.length)].join('')));

}
});

sablono.core.range_field20360.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.range_field20360.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.range_field20360.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.range_field20360.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field20360);

/**
 * Creates a search input field.
 */
sablono.core.search_field20364 = (function sablono$core$search_field20364(var_args){
var args20365 = [];
var len__6044__auto___20432 = arguments.length;
var i__6045__auto___20433 = (0);
while(true){
if((i__6045__auto___20433 < len__6044__auto___20432)){
args20365.push((arguments[i__6045__auto___20433]));

var G__20434 = (i__6045__auto___20433 + (1));
i__6045__auto___20433 = G__20434;
continue;
} else {
}
break;
}

var G__20367 = args20365.length;
switch (G__20367) {
case 1:
return sablono.core.search_field20364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20365.length)].join('')));

}
});

sablono.core.search_field20364.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.search_field20364.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.search_field20364.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.search_field20364.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field20364);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20368 = (function sablono$core$tel_field20368(var_args){
var args20369 = [];
var len__6044__auto___20436 = arguments.length;
var i__6045__auto___20437 = (0);
while(true){
if((i__6045__auto___20437 < len__6044__auto___20436)){
args20369.push((arguments[i__6045__auto___20437]));

var G__20438 = (i__6045__auto___20437 + (1));
i__6045__auto___20437 = G__20438;
continue;
} else {
}
break;
}

var G__20371 = args20369.length;
switch (G__20371) {
case 1:
return sablono.core.tel_field20368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20369.length)].join('')));

}
});

sablono.core.tel_field20368.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.tel_field20368.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.tel_field20368.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.tel_field20368.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field20368);

/**
 * Creates a text input field.
 */
sablono.core.text_field20372 = (function sablono$core$text_field20372(var_args){
var args20373 = [];
var len__6044__auto___20440 = arguments.length;
var i__6045__auto___20441 = (0);
while(true){
if((i__6045__auto___20441 < len__6044__auto___20440)){
args20373.push((arguments[i__6045__auto___20441]));

var G__20442 = (i__6045__auto___20441 + (1));
i__6045__auto___20441 = G__20442;
continue;
} else {
}
break;
}

var G__20375 = args20373.length;
switch (G__20375) {
case 1:
return sablono.core.text_field20372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20373.length)].join('')));

}
});

sablono.core.text_field20372.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.text_field20372.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.text_field20372.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.text_field20372.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field20372);

/**
 * Creates a time input field.
 */
sablono.core.time_field20376 = (function sablono$core$time_field20376(var_args){
var args20377 = [];
var len__6044__auto___20444 = arguments.length;
var i__6045__auto___20445 = (0);
while(true){
if((i__6045__auto___20445 < len__6044__auto___20444)){
args20377.push((arguments[i__6045__auto___20445]));

var G__20446 = (i__6045__auto___20445 + (1));
i__6045__auto___20445 = G__20446;
continue;
} else {
}
break;
}

var G__20379 = args20377.length;
switch (G__20379) {
case 1:
return sablono.core.time_field20376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20377.length)].join('')));

}
});

sablono.core.time_field20376.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.time_field20376.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.time_field20376.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.time_field20376.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field20376);

/**
 * Creates a url input field.
 */
sablono.core.url_field20380 = (function sablono$core$url_field20380(var_args){
var args20381 = [];
var len__6044__auto___20448 = arguments.length;
var i__6045__auto___20449 = (0);
while(true){
if((i__6045__auto___20449 < len__6044__auto___20448)){
args20381.push((arguments[i__6045__auto___20449]));

var G__20450 = (i__6045__auto___20449 + (1));
i__6045__auto___20449 = G__20450;
continue;
} else {
}
break;
}

var G__20383 = args20381.length;
switch (G__20383) {
case 1:
return sablono.core.url_field20380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20381.length)].join('')));

}
});

sablono.core.url_field20380.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.url_field20380.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.url_field20380.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.url_field20380.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field20380);

/**
 * Creates a week input field.
 */
sablono.core.week_field20384 = (function sablono$core$week_field20384(var_args){
var args20385 = [];
var len__6044__auto___20452 = arguments.length;
var i__6045__auto___20453 = (0);
while(true){
if((i__6045__auto___20453 < len__6044__auto___20452)){
args20385.push((arguments[i__6045__auto___20453]));

var G__20454 = (i__6045__auto___20453 + (1));
i__6045__auto___20453 = G__20454;
continue;
} else {
}
break;
}

var G__20387 = args20385.length;
switch (G__20387) {
case 1:
return sablono.core.week_field20384.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20384.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20385.length)].join('')));

}
});

sablono.core.week_field20384.cljs$core$IFn$_invoke$arity$1 = (function (name__20219__auto__){
return sablono.core.week_field20384.cljs$core$IFn$_invoke$arity$2(name__20219__auto__,null);
});

sablono.core.week_field20384.cljs$core$IFn$_invoke$arity$2 = (function (name__20219__auto__,value__20220__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__20219__auto__,value__20220__auto__);
});

sablono.core.week_field20384.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field20384);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20456 = (function sablono$core$check_box20456(var_args){
var args20457 = [];
var len__6044__auto___20460 = arguments.length;
var i__6045__auto___20461 = (0);
while(true){
if((i__6045__auto___20461 < len__6044__auto___20460)){
args20457.push((arguments[i__6045__auto___20461]));

var G__20462 = (i__6045__auto___20461 + (1));
i__6045__auto___20461 = G__20462;
continue;
} else {
}
break;
}

var G__20459 = args20457.length;
switch (G__20459) {
case 1:
return sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20457.length)].join('')));

}
});

sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box20456.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box20456.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box20456);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20464 = (function sablono$core$radio_button20464(var_args){
var args20465 = [];
var len__6044__auto___20468 = arguments.length;
var i__6045__auto___20469 = (0);
while(true){
if((i__6045__auto___20469 < len__6044__auto___20468)){
args20465.push((arguments[i__6045__auto___20469]));

var G__20470 = (i__6045__auto___20469 + (1));
i__6045__auto___20469 = G__20470;
continue;
} else {
}
break;
}

var G__20467 = args20465.length;
switch (G__20467) {
case 1:
return sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20465.length)].join('')));

}
});

sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button20464.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button20464.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button20464);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__20473 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__20473);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20474 = (function sablono$core$select_options20474(coll){
var iter__5758__auto__ = (function sablono$core$select_options20474_$_iter__20485(s__20486){
return (new cljs.core.LazySeq(null,(function (){
var s__20486__$1 = s__20486;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20486__$1);
if(temp__4425__auto__){
var s__20486__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20486__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__20486__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__20488 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__20487 = (0);
while(true){
if((i__20487 < size__5757__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__20487);
cljs.core.chunk_append(b__20488,((cljs.core.sequential_QMARK_(x))?(function (){var vec__20493 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20493,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20493,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20493,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options20474(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__20495 = (i__20487 + (1));
i__20487 = G__20495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20488),sablono$core$select_options20474_$_iter__20485(cljs.core.chunk_rest(s__20486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20488),null);
}
} else {
var x = cljs.core.first(s__20486__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__20494 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20494,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options20474(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options20474_$_iter__20485(cljs.core.rest(s__20486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options20474);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20496 = (function sablono$core$drop_down20496(var_args){
var args20497 = [];
var len__6044__auto___20500 = arguments.length;
var i__6045__auto___20501 = (0);
while(true){
if((i__6045__auto___20501 < len__6044__auto___20500)){
args20497.push((arguments[i__6045__auto___20501]));

var G__20502 = (i__6045__auto___20501 + (1));
i__6045__auto___20501 = G__20502;
continue;
} else {
}
break;
}

var G__20499 = args20497.length;
switch (G__20499) {
case 2:
return sablono.core.drop_down20496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20496.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20497.length)].join('')));

}
});

sablono.core.drop_down20496.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20496.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down20496.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down20496.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down20496);
/**
 * Creates a text area element.
 */
sablono.core.text_area20504 = (function sablono$core$text_area20504(var_args){
var args20505 = [];
var len__6044__auto___20508 = arguments.length;
var i__6045__auto___20509 = (0);
while(true){
if((i__6045__auto___20509 < len__6044__auto___20508)){
args20505.push((arguments[i__6045__auto___20509]));

var G__20510 = (i__6045__auto___20509 + (1));
i__6045__auto___20509 = G__20510;
continue;
} else {
}
break;
}

var G__20507 = args20505.length;
switch (G__20507) {
case 1:
return sablono.core.text_area20504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20505.length)].join('')));

}
});

sablono.core.text_area20504.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20504.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area20504.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area20504.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area20504);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20512 = (function sablono$core$label20512(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label20512);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20513 = (function sablono$core$submit_button20513(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button20513);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20514 = (function sablono$core$reset_button20514(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button20514);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20515 = (function sablono$core$form_to20515(var_args){
var args__6051__auto__ = [];
var len__6044__auto___20523 = arguments.length;
var i__6045__auto___20524 = (0);
while(true){
if((i__6045__auto___20524 < len__6044__auto___20523)){
args__6051__auto__.push((arguments[i__6045__auto___20524]));

var G__20525 = (i__6045__auto___20524 + (1));
i__6045__auto___20524 = G__20525;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return sablono.core.form_to20515.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

sablono.core.form_to20515.cljs$core$IFn$_invoke$arity$variadic = (function (p__20518,body){
var vec__20519 = p__20518;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20519,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20519,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__20520 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__20521 = "_method";
var G__20522 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__20520,G__20521,G__20522) : sablono.core.hidden_field.call(null,G__20520,G__20521,G__20522));
})()], null)),body));
});

sablono.core.form_to20515.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20515.cljs$lang$applyTo = (function (seq20516){
var G__20517 = cljs.core.first(seq20516);
var seq20516__$1 = cljs.core.next(seq20516);
return sablono.core.form_to20515.cljs$core$IFn$_invoke$arity$variadic(G__20517,seq20516__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to20515);
