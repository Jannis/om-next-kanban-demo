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
var G__19313__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19312,(0),null);
var body = cljs.core.nthnext(vec__19312,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19314__i = 0, G__19314__a = new Array(arguments.length -  0);
while (G__19314__i < G__19314__a.length) {G__19314__a[G__19314__i] = arguments[G__19314__i + 0]; ++G__19314__i;}
  args = new cljs.core.IndexedSeq(G__19314__a,0);
} 
return G__19313__delegate.call(this,args);};
G__19313.cljs$lang$maxFixedArity = 0;
G__19313.cljs$lang$applyTo = (function (arglist__19315){
var args = cljs.core.seq(arglist__19315);
return G__19313__delegate(args);
});
G__19313.cljs$core$IFn$_invoke$arity$variadic = G__19313__delegate;
return G__19313;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5940__auto__ = (function sablono$core$update_arglists_$_iter__19322(s__19323){
return (new cljs.core.LazySeq(null,(function (){
var s__19323__$1 = s__19323;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19323__$1);
if(temp__4425__auto__){
var s__19323__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19323__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__19323__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__19325 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__19324 = (0);
while(true){
if((i__19324 < size__5939__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__19324);
cljs.core.chunk_append(b__19325,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19328 = (i__19324 + (1));
i__19324 = G__19328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19325),sablono$core$update_arglists_$_iter__19322(cljs.core.chunk_rest(s__19323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19325),null);
}
} else {
var args = cljs.core.first(s__19323__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19322(cljs.core.rest(s__19323__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(arglists);
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
var args__6233__auto__ = [];
var len__6226__auto___19336 = arguments.length;
var i__6227__auto___19337 = (0);
while(true){
if((i__6227__auto___19337 < len__6226__auto___19336)){
args__6233__auto__.push((arguments[i__6227__auto___19337]));

var G__19338 = (i__6227__auto___19337 + (1));
i__6227__auto___19337 = G__19338;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5940__auto__ = (function sablono$core$iter__19330(s__19331){
return (new cljs.core.LazySeq(null,(function (){
var s__19331__$1 = s__19331;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19331__$1);
if(temp__4425__auto__){
var s__19331__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19331__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__19331__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__19333 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__19332 = (0);
while(true){
if((i__19332 < size__5939__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__19332);
cljs.core.chunk_append(b__19333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19339 = (i__19332 + (1));
i__19332 = G__19339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19333),sablono$core$iter__19330(cljs.core.chunk_rest(s__19331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19333),null);
}
} else {
var style = cljs.core.first(s__19331__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19330(cljs.core.rest(s__19331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19329){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19329));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19344 = goog.dom.getDocument().body;
var G__19345 = (function (){var G__19346 = "script";
var G__19347 = {"src": src};
return goog.dom.createDom(G__19346,G__19347);
})();
return goog.dom.appendChild(G__19344,G__19345);
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
sablono.core.link_to19348 = (function sablono$core$link_to19348(var_args){
var args__6233__auto__ = [];
var len__6226__auto___19351 = arguments.length;
var i__6227__auto___19352 = (0);
while(true){
if((i__6227__auto___19352 < len__6226__auto___19351)){
args__6233__auto__.push((arguments[i__6227__auto___19352]));

var G__19353 = (i__6227__auto___19352 + (1));
i__6227__auto___19352 = G__19353;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.link_to19348.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.link_to19348.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19348.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19348.cljs$lang$applyTo = (function (seq19349){
var G__19350 = cljs.core.first(seq19349);
var seq19349__$1 = cljs.core.next(seq19349);
return sablono.core.link_to19348.cljs$core$IFn$_invoke$arity$variadic(G__19350,seq19349__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19348);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19354 = (function sablono$core$mail_to19354(var_args){
var args__6233__auto__ = [];
var len__6226__auto___19359 = arguments.length;
var i__6227__auto___19360 = (0);
while(true){
if((i__6227__auto___19360 < len__6226__auto___19359)){
args__6233__auto__.push((arguments[i__6227__auto___19360]));

var G__19361 = (i__6227__auto___19360 + (1));
i__6227__auto___19360 = G__19361;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19354.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.mail_to19354.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19357){
var vec__19358 = p__19357;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19358,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5168__auto__ = content;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19354.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19354.cljs$lang$applyTo = (function (seq19355){
var G__19356 = cljs.core.first(seq19355);
var seq19355__$1 = cljs.core.next(seq19355);
return sablono.core.mail_to19354.cljs$core$IFn$_invoke$arity$variadic(G__19356,seq19355__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19354);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19362 = (function sablono$core$unordered_list19362(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5940__auto__ = (function sablono$core$unordered_list19362_$_iter__19369(s__19370){
return (new cljs.core.LazySeq(null,(function (){
var s__19370__$1 = s__19370;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19370__$1);
if(temp__4425__auto__){
var s__19370__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19370__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__19370__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__19372 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__19371 = (0);
while(true){
if((i__19371 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__19371);
cljs.core.chunk_append(b__19372,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19375 = (i__19371 + (1));
i__19371 = G__19375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19372),sablono$core$unordered_list19362_$_iter__19369(cljs.core.chunk_rest(s__19370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19372),null);
}
} else {
var x = cljs.core.first(s__19370__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19362_$_iter__19369(cljs.core.rest(s__19370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19362);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19376 = (function sablono$core$ordered_list19376(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5940__auto__ = (function sablono$core$ordered_list19376_$_iter__19383(s__19384){
return (new cljs.core.LazySeq(null,(function (){
var s__19384__$1 = s__19384;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19384__$1);
if(temp__4425__auto__){
var s__19384__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19384__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__19384__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__19386 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__19385 = (0);
while(true){
if((i__19385 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__19385);
cljs.core.chunk_append(b__19386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19389 = (i__19385 + (1));
i__19385 = G__19389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19386),sablono$core$ordered_list19376_$_iter__19383(cljs.core.chunk_rest(s__19384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19386),null);
}
} else {
var x = cljs.core.first(s__19384__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19376_$_iter__19383(cljs.core.rest(s__19384__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19376);
/**
 * Create an image element.
 */
sablono.core.image19390 = (function sablono$core$image19390(var_args){
var args19391 = [];
var len__6226__auto___19394 = arguments.length;
var i__6227__auto___19395 = (0);
while(true){
if((i__6227__auto___19395 < len__6226__auto___19394)){
args19391.push((arguments[i__6227__auto___19395]));

var G__19396 = (i__6227__auto___19395 + (1));
i__6227__auto___19395 = G__19396;
continue;
} else {
}
break;
}

var G__19393 = args19391.length;
switch (G__19393) {
case 1:
return sablono.core.image19390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19391.length)].join('')));

}
});

sablono.core.image19390.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19390.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19390.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19390);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19398_SHARP_,p2__19399_SHARP_){
return [cljs.core.str(p1__19398_SHARP_),cljs.core.str("["),cljs.core.str(p2__19399_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19400_SHARP_,p2__19401_SHARP_){
return [cljs.core.str(p1__19400_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19401_SHARP_)].join('');
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
sablono.core.color_field19402 = (function sablono$core$color_field19402(var_args){
var args19403 = [];
var len__6226__auto___19470 = arguments.length;
var i__6227__auto___19471 = (0);
while(true){
if((i__6227__auto___19471 < len__6226__auto___19470)){
args19403.push((arguments[i__6227__auto___19471]));

var G__19472 = (i__6227__auto___19471 + (1));
i__6227__auto___19471 = G__19472;
continue;
} else {
}
break;
}

var G__19405 = args19403.length;
switch (G__19405) {
case 1:
return sablono.core.color_field19402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19403.length)].join('')));

}
});

sablono.core.color_field19402.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.color_field19402.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.color_field19402.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.color_field19402.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19402);

/**
 * Creates a date input field.
 */
sablono.core.date_field19406 = (function sablono$core$date_field19406(var_args){
var args19407 = [];
var len__6226__auto___19474 = arguments.length;
var i__6227__auto___19475 = (0);
while(true){
if((i__6227__auto___19475 < len__6226__auto___19474)){
args19407.push((arguments[i__6227__auto___19475]));

var G__19476 = (i__6227__auto___19475 + (1));
i__6227__auto___19475 = G__19476;
continue;
} else {
}
break;
}

var G__19409 = args19407.length;
switch (G__19409) {
case 1:
return sablono.core.date_field19406.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19406.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19407.length)].join('')));

}
});

sablono.core.date_field19406.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.date_field19406.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.date_field19406.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.date_field19406.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19406);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19410 = (function sablono$core$datetime_field19410(var_args){
var args19411 = [];
var len__6226__auto___19478 = arguments.length;
var i__6227__auto___19479 = (0);
while(true){
if((i__6227__auto___19479 < len__6226__auto___19478)){
args19411.push((arguments[i__6227__auto___19479]));

var G__19480 = (i__6227__auto___19479 + (1));
i__6227__auto___19479 = G__19480;
continue;
} else {
}
break;
}

var G__19413 = args19411.length;
switch (G__19413) {
case 1:
return sablono.core.datetime_field19410.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19410.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19411.length)].join('')));

}
});

sablono.core.datetime_field19410.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.datetime_field19410.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.datetime_field19410.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.datetime_field19410.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19410);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19414 = (function sablono$core$datetime_local_field19414(var_args){
var args19415 = [];
var len__6226__auto___19482 = arguments.length;
var i__6227__auto___19483 = (0);
while(true){
if((i__6227__auto___19483 < len__6226__auto___19482)){
args19415.push((arguments[i__6227__auto___19483]));

var G__19484 = (i__6227__auto___19483 + (1));
i__6227__auto___19483 = G__19484;
continue;
} else {
}
break;
}

var G__19417 = args19415.length;
switch (G__19417) {
case 1:
return sablono.core.datetime_local_field19414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19415.length)].join('')));

}
});

sablono.core.datetime_local_field19414.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.datetime_local_field19414.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.datetime_local_field19414.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.datetime_local_field19414.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19414);

/**
 * Creates a email input field.
 */
sablono.core.email_field19418 = (function sablono$core$email_field19418(var_args){
var args19419 = [];
var len__6226__auto___19486 = arguments.length;
var i__6227__auto___19487 = (0);
while(true){
if((i__6227__auto___19487 < len__6226__auto___19486)){
args19419.push((arguments[i__6227__auto___19487]));

var G__19488 = (i__6227__auto___19487 + (1));
i__6227__auto___19487 = G__19488;
continue;
} else {
}
break;
}

var G__19421 = args19419.length;
switch (G__19421) {
case 1:
return sablono.core.email_field19418.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19418.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19419.length)].join('')));

}
});

sablono.core.email_field19418.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.email_field19418.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.email_field19418.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.email_field19418.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19418);

/**
 * Creates a file input field.
 */
sablono.core.file_field19422 = (function sablono$core$file_field19422(var_args){
var args19423 = [];
var len__6226__auto___19490 = arguments.length;
var i__6227__auto___19491 = (0);
while(true){
if((i__6227__auto___19491 < len__6226__auto___19490)){
args19423.push((arguments[i__6227__auto___19491]));

var G__19492 = (i__6227__auto___19491 + (1));
i__6227__auto___19491 = G__19492;
continue;
} else {
}
break;
}

var G__19425 = args19423.length;
switch (G__19425) {
case 1:
return sablono.core.file_field19422.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19423.length)].join('')));

}
});

sablono.core.file_field19422.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.file_field19422.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.file_field19422.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.file_field19422.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19422);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19426 = (function sablono$core$hidden_field19426(var_args){
var args19427 = [];
var len__6226__auto___19494 = arguments.length;
var i__6227__auto___19495 = (0);
while(true){
if((i__6227__auto___19495 < len__6226__auto___19494)){
args19427.push((arguments[i__6227__auto___19495]));

var G__19496 = (i__6227__auto___19495 + (1));
i__6227__auto___19495 = G__19496;
continue;
} else {
}
break;
}

var G__19429 = args19427.length;
switch (G__19429) {
case 1:
return sablono.core.hidden_field19426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19427.length)].join('')));

}
});

sablono.core.hidden_field19426.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.hidden_field19426.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.hidden_field19426.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.hidden_field19426.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19426);

/**
 * Creates a month input field.
 */
sablono.core.month_field19430 = (function sablono$core$month_field19430(var_args){
var args19431 = [];
var len__6226__auto___19498 = arguments.length;
var i__6227__auto___19499 = (0);
while(true){
if((i__6227__auto___19499 < len__6226__auto___19498)){
args19431.push((arguments[i__6227__auto___19499]));

var G__19500 = (i__6227__auto___19499 + (1));
i__6227__auto___19499 = G__19500;
continue;
} else {
}
break;
}

var G__19433 = args19431.length;
switch (G__19433) {
case 1:
return sablono.core.month_field19430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19431.length)].join('')));

}
});

sablono.core.month_field19430.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.month_field19430.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.month_field19430.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.month_field19430.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19430);

/**
 * Creates a number input field.
 */
sablono.core.number_field19434 = (function sablono$core$number_field19434(var_args){
var args19435 = [];
var len__6226__auto___19502 = arguments.length;
var i__6227__auto___19503 = (0);
while(true){
if((i__6227__auto___19503 < len__6226__auto___19502)){
args19435.push((arguments[i__6227__auto___19503]));

var G__19504 = (i__6227__auto___19503 + (1));
i__6227__auto___19503 = G__19504;
continue;
} else {
}
break;
}

var G__19437 = args19435.length;
switch (G__19437) {
case 1:
return sablono.core.number_field19434.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19434.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19435.length)].join('')));

}
});

sablono.core.number_field19434.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.number_field19434.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.number_field19434.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.number_field19434.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19434);

/**
 * Creates a password input field.
 */
sablono.core.password_field19438 = (function sablono$core$password_field19438(var_args){
var args19439 = [];
var len__6226__auto___19506 = arguments.length;
var i__6227__auto___19507 = (0);
while(true){
if((i__6227__auto___19507 < len__6226__auto___19506)){
args19439.push((arguments[i__6227__auto___19507]));

var G__19508 = (i__6227__auto___19507 + (1));
i__6227__auto___19507 = G__19508;
continue;
} else {
}
break;
}

var G__19441 = args19439.length;
switch (G__19441) {
case 1:
return sablono.core.password_field19438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19439.length)].join('')));

}
});

sablono.core.password_field19438.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.password_field19438.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.password_field19438.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.password_field19438.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19438);

/**
 * Creates a range input field.
 */
sablono.core.range_field19442 = (function sablono$core$range_field19442(var_args){
var args19443 = [];
var len__6226__auto___19510 = arguments.length;
var i__6227__auto___19511 = (0);
while(true){
if((i__6227__auto___19511 < len__6226__auto___19510)){
args19443.push((arguments[i__6227__auto___19511]));

var G__19512 = (i__6227__auto___19511 + (1));
i__6227__auto___19511 = G__19512;
continue;
} else {
}
break;
}

var G__19445 = args19443.length;
switch (G__19445) {
case 1:
return sablono.core.range_field19442.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19442.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19443.length)].join('')));

}
});

sablono.core.range_field19442.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.range_field19442.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.range_field19442.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.range_field19442.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19442);

/**
 * Creates a search input field.
 */
sablono.core.search_field19446 = (function sablono$core$search_field19446(var_args){
var args19447 = [];
var len__6226__auto___19514 = arguments.length;
var i__6227__auto___19515 = (0);
while(true){
if((i__6227__auto___19515 < len__6226__auto___19514)){
args19447.push((arguments[i__6227__auto___19515]));

var G__19516 = (i__6227__auto___19515 + (1));
i__6227__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var G__19449 = args19447.length;
switch (G__19449) {
case 1:
return sablono.core.search_field19446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19447.length)].join('')));

}
});

sablono.core.search_field19446.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.search_field19446.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.search_field19446.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.search_field19446.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19446);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19450 = (function sablono$core$tel_field19450(var_args){
var args19451 = [];
var len__6226__auto___19518 = arguments.length;
var i__6227__auto___19519 = (0);
while(true){
if((i__6227__auto___19519 < len__6226__auto___19518)){
args19451.push((arguments[i__6227__auto___19519]));

var G__19520 = (i__6227__auto___19519 + (1));
i__6227__auto___19519 = G__19520;
continue;
} else {
}
break;
}

var G__19453 = args19451.length;
switch (G__19453) {
case 1:
return sablono.core.tel_field19450.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19450.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19451.length)].join('')));

}
});

sablono.core.tel_field19450.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.tel_field19450.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.tel_field19450.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.tel_field19450.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19450);

/**
 * Creates a text input field.
 */
sablono.core.text_field19454 = (function sablono$core$text_field19454(var_args){
var args19455 = [];
var len__6226__auto___19522 = arguments.length;
var i__6227__auto___19523 = (0);
while(true){
if((i__6227__auto___19523 < len__6226__auto___19522)){
args19455.push((arguments[i__6227__auto___19523]));

var G__19524 = (i__6227__auto___19523 + (1));
i__6227__auto___19523 = G__19524;
continue;
} else {
}
break;
}

var G__19457 = args19455.length;
switch (G__19457) {
case 1:
return sablono.core.text_field19454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19455.length)].join('')));

}
});

sablono.core.text_field19454.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.text_field19454.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.text_field19454.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.text_field19454.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19454);

/**
 * Creates a time input field.
 */
sablono.core.time_field19458 = (function sablono$core$time_field19458(var_args){
var args19459 = [];
var len__6226__auto___19526 = arguments.length;
var i__6227__auto___19527 = (0);
while(true){
if((i__6227__auto___19527 < len__6226__auto___19526)){
args19459.push((arguments[i__6227__auto___19527]));

var G__19528 = (i__6227__auto___19527 + (1));
i__6227__auto___19527 = G__19528;
continue;
} else {
}
break;
}

var G__19461 = args19459.length;
switch (G__19461) {
case 1:
return sablono.core.time_field19458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19459.length)].join('')));

}
});

sablono.core.time_field19458.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.time_field19458.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.time_field19458.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.time_field19458.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19458);

/**
 * Creates a url input field.
 */
sablono.core.url_field19462 = (function sablono$core$url_field19462(var_args){
var args19463 = [];
var len__6226__auto___19530 = arguments.length;
var i__6227__auto___19531 = (0);
while(true){
if((i__6227__auto___19531 < len__6226__auto___19530)){
args19463.push((arguments[i__6227__auto___19531]));

var G__19532 = (i__6227__auto___19531 + (1));
i__6227__auto___19531 = G__19532;
continue;
} else {
}
break;
}

var G__19465 = args19463.length;
switch (G__19465) {
case 1:
return sablono.core.url_field19462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19463.length)].join('')));

}
});

sablono.core.url_field19462.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.url_field19462.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.url_field19462.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.url_field19462.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19462);

/**
 * Creates a week input field.
 */
sablono.core.week_field19466 = (function sablono$core$week_field19466(var_args){
var args19467 = [];
var len__6226__auto___19534 = arguments.length;
var i__6227__auto___19535 = (0);
while(true){
if((i__6227__auto___19535 < len__6226__auto___19534)){
args19467.push((arguments[i__6227__auto___19535]));

var G__19536 = (i__6227__auto___19535 + (1));
i__6227__auto___19535 = G__19536;
continue;
} else {
}
break;
}

var G__19469 = args19467.length;
switch (G__19469) {
case 1:
return sablono.core.week_field19466.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19466.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19467.length)].join('')));

}
});

sablono.core.week_field19466.cljs$core$IFn$_invoke$arity$1 = (function (name__19301__auto__){
return sablono.core.week_field19466.cljs$core$IFn$_invoke$arity$2(name__19301__auto__,null);
});

sablono.core.week_field19466.cljs$core$IFn$_invoke$arity$2 = (function (name__19301__auto__,value__19302__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__19301__auto__,value__19302__auto__);
});

sablono.core.week_field19466.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19466);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19538 = (function sablono$core$check_box19538(var_args){
var args19539 = [];
var len__6226__auto___19542 = arguments.length;
var i__6227__auto___19543 = (0);
while(true){
if((i__6227__auto___19543 < len__6226__auto___19542)){
args19539.push((arguments[i__6227__auto___19543]));

var G__19544 = (i__6227__auto___19543 + (1));
i__6227__auto___19543 = G__19544;
continue;
} else {
}
break;
}

var G__19541 = args19539.length;
switch (G__19541) {
case 1:
return sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19539.length)].join('')));

}
});

sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19538.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19538.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19538);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19546 = (function sablono$core$radio_button19546(var_args){
var args19547 = [];
var len__6226__auto___19550 = arguments.length;
var i__6227__auto___19551 = (0);
while(true){
if((i__6227__auto___19551 < len__6226__auto___19550)){
args19547.push((arguments[i__6227__auto___19551]));

var G__19552 = (i__6227__auto___19551 + (1));
i__6227__auto___19551 = G__19552;
continue;
} else {
}
break;
}

var G__19549 = args19547.length;
switch (G__19549) {
case 1:
return sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19547.length)].join('')));

}
});

sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19546.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19546.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19546);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19555 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19555);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19556 = (function sablono$core$select_options19556(coll){
var iter__5940__auto__ = (function sablono$core$select_options19556_$_iter__19567(s__19568){
return (new cljs.core.LazySeq(null,(function (){
var s__19568__$1 = s__19568;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19568__$1);
if(temp__4425__auto__){
var s__19568__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19568__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__19568__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__19570 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__19569 = (0);
while(true){
if((i__19569 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__19569);
cljs.core.chunk_append(b__19570,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19575 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19575,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19556(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19577 = (i__19569 + (1));
i__19569 = G__19577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19570),sablono$core$select_options19556_$_iter__19567(cljs.core.chunk_rest(s__19568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19570),null);
}
} else {
var x = cljs.core.first(s__19568__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19576 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19576,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19576,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19576,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19556(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19556_$_iter__19567(cljs.core.rest(s__19568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19556);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19578 = (function sablono$core$drop_down19578(var_args){
var args19579 = [];
var len__6226__auto___19582 = arguments.length;
var i__6227__auto___19583 = (0);
while(true){
if((i__6227__auto___19583 < len__6226__auto___19582)){
args19579.push((arguments[i__6227__auto___19583]));

var G__19584 = (i__6227__auto___19583 + (1));
i__6227__auto___19583 = G__19584;
continue;
} else {
}
break;
}

var G__19581 = args19579.length;
switch (G__19581) {
case 2:
return sablono.core.drop_down19578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19578.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19579.length)].join('')));

}
});

sablono.core.drop_down19578.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19578.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19578.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19578.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19578);
/**
 * Creates a text area element.
 */
sablono.core.text_area19586 = (function sablono$core$text_area19586(var_args){
var args19587 = [];
var len__6226__auto___19590 = arguments.length;
var i__6227__auto___19591 = (0);
while(true){
if((i__6227__auto___19591 < len__6226__auto___19590)){
args19587.push((arguments[i__6227__auto___19591]));

var G__19592 = (i__6227__auto___19591 + (1));
i__6227__auto___19591 = G__19592;
continue;
} else {
}
break;
}

var G__19589 = args19587.length;
switch (G__19589) {
case 1:
return sablono.core.text_area19586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19587.length)].join('')));

}
});

sablono.core.text_area19586.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19586.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19586.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area19586.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19586);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19594 = (function sablono$core$label19594(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19594);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19595 = (function sablono$core$submit_button19595(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19595);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19596 = (function sablono$core$reset_button19596(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19596);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19597 = (function sablono$core$form_to19597(var_args){
var args__6233__auto__ = [];
var len__6226__auto___19605 = arguments.length;
var i__6227__auto___19606 = (0);
while(true){
if((i__6227__auto___19606 < len__6226__auto___19605)){
args__6233__auto__.push((arguments[i__6227__auto___19606]));

var G__19607 = (i__6227__auto___19606 + (1));
i__6227__auto___19606 = G__19607;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.form_to19597.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.form_to19597.cljs$core$IFn$_invoke$arity$variadic = (function (p__19600,body){
var vec__19601 = p__19600;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19602 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19603 = "_method";
var G__19604 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19602,G__19603,G__19604) : sablono.core.hidden_field.call(null,G__19602,G__19603,G__19604));
})()], null)),body));
});

sablono.core.form_to19597.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19597.cljs$lang$applyTo = (function (seq19598){
var G__19599 = cljs.core.first(seq19598);
var seq19598__$1 = cljs.core.next(seq19598);
return sablono.core.form_to19597.cljs$core$IFn$_invoke$arity$variadic(G__19599,seq19598__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19597);
