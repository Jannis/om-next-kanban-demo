// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17185__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17184 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17184,(0),null);
var body = cljs.core.nthnext.call(null,vec__17184,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17186__i = 0, G__17186__a = new Array(arguments.length -  0);
while (G__17186__i < G__17186__a.length) {G__17186__a[G__17186__i] = arguments[G__17186__i + 0]; ++G__17186__i;}
  args = new cljs.core.IndexedSeq(G__17186__a,0);
} 
return G__17185__delegate.call(this,args);};
G__17185.cljs$lang$maxFixedArity = 0;
G__17185.cljs$lang$applyTo = (function (arglist__17187){
var args = cljs.core.seq(arglist__17187);
return G__17185__delegate(args);
});
G__17185.cljs$core$IFn$_invoke$arity$variadic = G__17185__delegate;
return G__17185;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17192(s__17193){
return (new cljs.core.LazySeq(null,(function (){
var s__17193__$1 = s__17193;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17193__$1);
if(temp__4425__auto__){
var s__17193__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17193__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17193__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17195 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17194 = (0);
while(true){
if((i__17194 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17194);
cljs.core.chunk_append.call(null,b__17195,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17196 = (i__17194 + (1));
i__17194 = G__17196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17195),sablono$core$update_arglists_$_iter__17192.call(null,cljs.core.chunk_rest.call(null,s__17193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17195),null);
}
} else {
var args = cljs.core.first.call(null,s__17193__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17192.call(null,cljs.core.rest.call(null,s__17193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,arglists);
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
var args__6159__auto__ = [];
var len__6152__auto___17202 = arguments.length;
var i__6153__auto___17203 = (0);
while(true){
if((i__6153__auto___17203 < len__6152__auto___17202)){
args__6159__auto__.push((arguments[i__6153__auto___17203]));

var G__17204 = (i__6153__auto___17203 + (1));
i__6153__auto___17203 = G__17204;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17198(s__17199){
return (new cljs.core.LazySeq(null,(function (){
var s__17199__$1 = s__17199;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17199__$1);
if(temp__4425__auto__){
var s__17199__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17199__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17199__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17201 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17200 = (0);
while(true){
if((i__17200 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17200);
cljs.core.chunk_append.call(null,b__17201,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17205 = (i__17200 + (1));
i__17200 = G__17205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17201),sablono$core$iter__17198.call(null,cljs.core.chunk_rest.call(null,s__17199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17201),null);
}
} else {
var style = cljs.core.first.call(null,s__17199__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17198.call(null,cljs.core.rest.call(null,s__17199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq17197){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17197));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17206 = (function sablono$core$link_to17206(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17209 = arguments.length;
var i__6153__auto___17210 = (0);
while(true){
if((i__6153__auto___17210 < len__6152__auto___17209)){
args__6159__auto__.push((arguments[i__6153__auto___17210]));

var G__17211 = (i__6153__auto___17210 + (1));
i__6153__auto___17210 = G__17211;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17206.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17206.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17206.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17206.cljs$lang$applyTo = (function (seq17207){
var G__17208 = cljs.core.first.call(null,seq17207);
var seq17207__$1 = cljs.core.next.call(null,seq17207);
return sablono.core.link_to17206.cljs$core$IFn$_invoke$arity$variadic(G__17208,seq17207__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17206);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17212 = (function sablono$core$mail_to17212(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17217 = arguments.length;
var i__6153__auto___17218 = (0);
while(true){
if((i__6153__auto___17218 < len__6152__auto___17217)){
args__6159__auto__.push((arguments[i__6153__auto___17218]));

var G__17219 = (i__6153__auto___17218 + (1));
i__6153__auto___17218 = G__17219;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17212.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17212.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17215){
var vec__17216 = p__17215;
var content = cljs.core.nth.call(null,vec__17216,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17212.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17212.cljs$lang$applyTo = (function (seq17213){
var G__17214 = cljs.core.first.call(null,seq17213);
var seq17213__$1 = cljs.core.next.call(null,seq17213);
return sablono.core.mail_to17212.cljs$core$IFn$_invoke$arity$variadic(G__17214,seq17213__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17212);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17220 = (function sablono$core$unordered_list17220(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17220_$_iter__17225(s__17226){
return (new cljs.core.LazySeq(null,(function (){
var s__17226__$1 = s__17226;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17226__$1);
if(temp__4425__auto__){
var s__17226__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17226__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17226__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17228 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17227 = (0);
while(true){
if((i__17227 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17227);
cljs.core.chunk_append.call(null,b__17228,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17229 = (i__17227 + (1));
i__17227 = G__17229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17228),sablono$core$unordered_list17220_$_iter__17225.call(null,cljs.core.chunk_rest.call(null,s__17226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17228),null);
}
} else {
var x = cljs.core.first.call(null,s__17226__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17220_$_iter__17225.call(null,cljs.core.rest.call(null,s__17226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17220);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17230 = (function sablono$core$ordered_list17230(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17230_$_iter__17235(s__17236){
return (new cljs.core.LazySeq(null,(function (){
var s__17236__$1 = s__17236;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17236__$1);
if(temp__4425__auto__){
var s__17236__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17236__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17236__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17238 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17237 = (0);
while(true){
if((i__17237 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17237);
cljs.core.chunk_append.call(null,b__17238,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17239 = (i__17237 + (1));
i__17237 = G__17239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17238),sablono$core$ordered_list17230_$_iter__17235.call(null,cljs.core.chunk_rest.call(null,s__17236__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17238),null);
}
} else {
var x = cljs.core.first.call(null,s__17236__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17230_$_iter__17235.call(null,cljs.core.rest.call(null,s__17236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17230);
/**
 * Create an image element.
 */
sablono.core.image17240 = (function sablono$core$image17240(var_args){
var args17241 = [];
var len__6152__auto___17244 = arguments.length;
var i__6153__auto___17245 = (0);
while(true){
if((i__6153__auto___17245 < len__6152__auto___17244)){
args17241.push((arguments[i__6153__auto___17245]));

var G__17246 = (i__6153__auto___17245 + (1));
i__6153__auto___17245 = G__17246;
continue;
} else {
}
break;
}

var G__17243 = args17241.length;
switch (G__17243) {
case 1:
return sablono.core.image17240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17241.length)].join('')));

}
});

sablono.core.image17240.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17240.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17240.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17240);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17248_SHARP_,p2__17249_SHARP_){
return [cljs.core.str(p1__17248_SHARP_),cljs.core.str("["),cljs.core.str(p2__17249_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17250_SHARP_,p2__17251_SHARP_){
return [cljs.core.str(p1__17250_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17251_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field17252 = (function sablono$core$color_field17252(var_args){
var args17253 = [];
var len__6152__auto___17320 = arguments.length;
var i__6153__auto___17321 = (0);
while(true){
if((i__6153__auto___17321 < len__6152__auto___17320)){
args17253.push((arguments[i__6153__auto___17321]));

var G__17322 = (i__6153__auto___17321 + (1));
i__6153__auto___17321 = G__17322;
continue;
} else {
}
break;
}

var G__17255 = args17253.length;
switch (G__17255) {
case 1:
return sablono.core.color_field17252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17253.length)].join('')));

}
});

sablono.core.color_field17252.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.color_field17252.call(null,name__13003__auto__,null);
});

sablono.core.color_field17252.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.color_field17252.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17252);

/**
 * Creates a date input field.
 */
sablono.core.date_field17256 = (function sablono$core$date_field17256(var_args){
var args17257 = [];
var len__6152__auto___17324 = arguments.length;
var i__6153__auto___17325 = (0);
while(true){
if((i__6153__auto___17325 < len__6152__auto___17324)){
args17257.push((arguments[i__6153__auto___17325]));

var G__17326 = (i__6153__auto___17325 + (1));
i__6153__auto___17325 = G__17326;
continue;
} else {
}
break;
}

var G__17259 = args17257.length;
switch (G__17259) {
case 1:
return sablono.core.date_field17256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17257.length)].join('')));

}
});

sablono.core.date_field17256.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.date_field17256.call(null,name__13003__auto__,null);
});

sablono.core.date_field17256.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.date_field17256.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17256);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17260 = (function sablono$core$datetime_field17260(var_args){
var args17261 = [];
var len__6152__auto___17328 = arguments.length;
var i__6153__auto___17329 = (0);
while(true){
if((i__6153__auto___17329 < len__6152__auto___17328)){
args17261.push((arguments[i__6153__auto___17329]));

var G__17330 = (i__6153__auto___17329 + (1));
i__6153__auto___17329 = G__17330;
continue;
} else {
}
break;
}

var G__17263 = args17261.length;
switch (G__17263) {
case 1:
return sablono.core.datetime_field17260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17261.length)].join('')));

}
});

sablono.core.datetime_field17260.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.datetime_field17260.call(null,name__13003__auto__,null);
});

sablono.core.datetime_field17260.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.datetime_field17260.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17260);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17264 = (function sablono$core$datetime_local_field17264(var_args){
var args17265 = [];
var len__6152__auto___17332 = arguments.length;
var i__6153__auto___17333 = (0);
while(true){
if((i__6153__auto___17333 < len__6152__auto___17332)){
args17265.push((arguments[i__6153__auto___17333]));

var G__17334 = (i__6153__auto___17333 + (1));
i__6153__auto___17333 = G__17334;
continue;
} else {
}
break;
}

var G__17267 = args17265.length;
switch (G__17267) {
case 1:
return sablono.core.datetime_local_field17264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17265.length)].join('')));

}
});

sablono.core.datetime_local_field17264.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.datetime_local_field17264.call(null,name__13003__auto__,null);
});

sablono.core.datetime_local_field17264.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.datetime_local_field17264.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17264);

/**
 * Creates a email input field.
 */
sablono.core.email_field17268 = (function sablono$core$email_field17268(var_args){
var args17269 = [];
var len__6152__auto___17336 = arguments.length;
var i__6153__auto___17337 = (0);
while(true){
if((i__6153__auto___17337 < len__6152__auto___17336)){
args17269.push((arguments[i__6153__auto___17337]));

var G__17338 = (i__6153__auto___17337 + (1));
i__6153__auto___17337 = G__17338;
continue;
} else {
}
break;
}

var G__17271 = args17269.length;
switch (G__17271) {
case 1:
return sablono.core.email_field17268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17269.length)].join('')));

}
});

sablono.core.email_field17268.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.email_field17268.call(null,name__13003__auto__,null);
});

sablono.core.email_field17268.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.email_field17268.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17268);

/**
 * Creates a file input field.
 */
sablono.core.file_field17272 = (function sablono$core$file_field17272(var_args){
var args17273 = [];
var len__6152__auto___17340 = arguments.length;
var i__6153__auto___17341 = (0);
while(true){
if((i__6153__auto___17341 < len__6152__auto___17340)){
args17273.push((arguments[i__6153__auto___17341]));

var G__17342 = (i__6153__auto___17341 + (1));
i__6153__auto___17341 = G__17342;
continue;
} else {
}
break;
}

var G__17275 = args17273.length;
switch (G__17275) {
case 1:
return sablono.core.file_field17272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17273.length)].join('')));

}
});

sablono.core.file_field17272.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.file_field17272.call(null,name__13003__auto__,null);
});

sablono.core.file_field17272.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.file_field17272.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17272);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17276 = (function sablono$core$hidden_field17276(var_args){
var args17277 = [];
var len__6152__auto___17344 = arguments.length;
var i__6153__auto___17345 = (0);
while(true){
if((i__6153__auto___17345 < len__6152__auto___17344)){
args17277.push((arguments[i__6153__auto___17345]));

var G__17346 = (i__6153__auto___17345 + (1));
i__6153__auto___17345 = G__17346;
continue;
} else {
}
break;
}

var G__17279 = args17277.length;
switch (G__17279) {
case 1:
return sablono.core.hidden_field17276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17277.length)].join('')));

}
});

sablono.core.hidden_field17276.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.hidden_field17276.call(null,name__13003__auto__,null);
});

sablono.core.hidden_field17276.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.hidden_field17276.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17276);

/**
 * Creates a month input field.
 */
sablono.core.month_field17280 = (function sablono$core$month_field17280(var_args){
var args17281 = [];
var len__6152__auto___17348 = arguments.length;
var i__6153__auto___17349 = (0);
while(true){
if((i__6153__auto___17349 < len__6152__auto___17348)){
args17281.push((arguments[i__6153__auto___17349]));

var G__17350 = (i__6153__auto___17349 + (1));
i__6153__auto___17349 = G__17350;
continue;
} else {
}
break;
}

var G__17283 = args17281.length;
switch (G__17283) {
case 1:
return sablono.core.month_field17280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17281.length)].join('')));

}
});

sablono.core.month_field17280.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.month_field17280.call(null,name__13003__auto__,null);
});

sablono.core.month_field17280.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.month_field17280.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17280);

/**
 * Creates a number input field.
 */
sablono.core.number_field17284 = (function sablono$core$number_field17284(var_args){
var args17285 = [];
var len__6152__auto___17352 = arguments.length;
var i__6153__auto___17353 = (0);
while(true){
if((i__6153__auto___17353 < len__6152__auto___17352)){
args17285.push((arguments[i__6153__auto___17353]));

var G__17354 = (i__6153__auto___17353 + (1));
i__6153__auto___17353 = G__17354;
continue;
} else {
}
break;
}

var G__17287 = args17285.length;
switch (G__17287) {
case 1:
return sablono.core.number_field17284.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17284.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17285.length)].join('')));

}
});

sablono.core.number_field17284.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.number_field17284.call(null,name__13003__auto__,null);
});

sablono.core.number_field17284.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.number_field17284.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17284);

/**
 * Creates a password input field.
 */
sablono.core.password_field17288 = (function sablono$core$password_field17288(var_args){
var args17289 = [];
var len__6152__auto___17356 = arguments.length;
var i__6153__auto___17357 = (0);
while(true){
if((i__6153__auto___17357 < len__6152__auto___17356)){
args17289.push((arguments[i__6153__auto___17357]));

var G__17358 = (i__6153__auto___17357 + (1));
i__6153__auto___17357 = G__17358;
continue;
} else {
}
break;
}

var G__17291 = args17289.length;
switch (G__17291) {
case 1:
return sablono.core.password_field17288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17289.length)].join('')));

}
});

sablono.core.password_field17288.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.password_field17288.call(null,name__13003__auto__,null);
});

sablono.core.password_field17288.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.password_field17288.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17288);

/**
 * Creates a range input field.
 */
sablono.core.range_field17292 = (function sablono$core$range_field17292(var_args){
var args17293 = [];
var len__6152__auto___17360 = arguments.length;
var i__6153__auto___17361 = (0);
while(true){
if((i__6153__auto___17361 < len__6152__auto___17360)){
args17293.push((arguments[i__6153__auto___17361]));

var G__17362 = (i__6153__auto___17361 + (1));
i__6153__auto___17361 = G__17362;
continue;
} else {
}
break;
}

var G__17295 = args17293.length;
switch (G__17295) {
case 1:
return sablono.core.range_field17292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17293.length)].join('')));

}
});

sablono.core.range_field17292.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.range_field17292.call(null,name__13003__auto__,null);
});

sablono.core.range_field17292.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.range_field17292.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17292);

/**
 * Creates a search input field.
 */
sablono.core.search_field17296 = (function sablono$core$search_field17296(var_args){
var args17297 = [];
var len__6152__auto___17364 = arguments.length;
var i__6153__auto___17365 = (0);
while(true){
if((i__6153__auto___17365 < len__6152__auto___17364)){
args17297.push((arguments[i__6153__auto___17365]));

var G__17366 = (i__6153__auto___17365 + (1));
i__6153__auto___17365 = G__17366;
continue;
} else {
}
break;
}

var G__17299 = args17297.length;
switch (G__17299) {
case 1:
return sablono.core.search_field17296.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17296.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17297.length)].join('')));

}
});

sablono.core.search_field17296.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.search_field17296.call(null,name__13003__auto__,null);
});

sablono.core.search_field17296.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.search_field17296.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17296);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17300 = (function sablono$core$tel_field17300(var_args){
var args17301 = [];
var len__6152__auto___17368 = arguments.length;
var i__6153__auto___17369 = (0);
while(true){
if((i__6153__auto___17369 < len__6152__auto___17368)){
args17301.push((arguments[i__6153__auto___17369]));

var G__17370 = (i__6153__auto___17369 + (1));
i__6153__auto___17369 = G__17370;
continue;
} else {
}
break;
}

var G__17303 = args17301.length;
switch (G__17303) {
case 1:
return sablono.core.tel_field17300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17301.length)].join('')));

}
});

sablono.core.tel_field17300.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.tel_field17300.call(null,name__13003__auto__,null);
});

sablono.core.tel_field17300.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.tel_field17300.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17300);

/**
 * Creates a text input field.
 */
sablono.core.text_field17304 = (function sablono$core$text_field17304(var_args){
var args17305 = [];
var len__6152__auto___17372 = arguments.length;
var i__6153__auto___17373 = (0);
while(true){
if((i__6153__auto___17373 < len__6152__auto___17372)){
args17305.push((arguments[i__6153__auto___17373]));

var G__17374 = (i__6153__auto___17373 + (1));
i__6153__auto___17373 = G__17374;
continue;
} else {
}
break;
}

var G__17307 = args17305.length;
switch (G__17307) {
case 1:
return sablono.core.text_field17304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17305.length)].join('')));

}
});

sablono.core.text_field17304.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.text_field17304.call(null,name__13003__auto__,null);
});

sablono.core.text_field17304.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.text_field17304.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17304);

/**
 * Creates a time input field.
 */
sablono.core.time_field17308 = (function sablono$core$time_field17308(var_args){
var args17309 = [];
var len__6152__auto___17376 = arguments.length;
var i__6153__auto___17377 = (0);
while(true){
if((i__6153__auto___17377 < len__6152__auto___17376)){
args17309.push((arguments[i__6153__auto___17377]));

var G__17378 = (i__6153__auto___17377 + (1));
i__6153__auto___17377 = G__17378;
continue;
} else {
}
break;
}

var G__17311 = args17309.length;
switch (G__17311) {
case 1:
return sablono.core.time_field17308.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17308.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17309.length)].join('')));

}
});

sablono.core.time_field17308.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.time_field17308.call(null,name__13003__auto__,null);
});

sablono.core.time_field17308.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.time_field17308.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17308);

/**
 * Creates a url input field.
 */
sablono.core.url_field17312 = (function sablono$core$url_field17312(var_args){
var args17313 = [];
var len__6152__auto___17380 = arguments.length;
var i__6153__auto___17381 = (0);
while(true){
if((i__6153__auto___17381 < len__6152__auto___17380)){
args17313.push((arguments[i__6153__auto___17381]));

var G__17382 = (i__6153__auto___17381 + (1));
i__6153__auto___17381 = G__17382;
continue;
} else {
}
break;
}

var G__17315 = args17313.length;
switch (G__17315) {
case 1:
return sablono.core.url_field17312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17313.length)].join('')));

}
});

sablono.core.url_field17312.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.url_field17312.call(null,name__13003__auto__,null);
});

sablono.core.url_field17312.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.url_field17312.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17312);

/**
 * Creates a week input field.
 */
sablono.core.week_field17316 = (function sablono$core$week_field17316(var_args){
var args17317 = [];
var len__6152__auto___17384 = arguments.length;
var i__6153__auto___17385 = (0);
while(true){
if((i__6153__auto___17385 < len__6152__auto___17384)){
args17317.push((arguments[i__6153__auto___17385]));

var G__17386 = (i__6153__auto___17385 + (1));
i__6153__auto___17385 = G__17386;
continue;
} else {
}
break;
}

var G__17319 = args17317.length;
switch (G__17319) {
case 1:
return sablono.core.week_field17316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17317.length)].join('')));

}
});

sablono.core.week_field17316.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.week_field17316.call(null,name__13003__auto__,null);
});

sablono.core.week_field17316.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.week_field17316.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17316);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17388 = (function sablono$core$check_box17388(var_args){
var args17389 = [];
var len__6152__auto___17392 = arguments.length;
var i__6153__auto___17393 = (0);
while(true){
if((i__6153__auto___17393 < len__6152__auto___17392)){
args17389.push((arguments[i__6153__auto___17393]));

var G__17394 = (i__6153__auto___17393 + (1));
i__6153__auto___17393 = G__17394;
continue;
} else {
}
break;
}

var G__17391 = args17389.length;
switch (G__17391) {
case 1:
return sablono.core.check_box17388.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17388.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17389.length)].join('')));

}
});

sablono.core.check_box17388.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17388.call(null,name,null);
});

sablono.core.check_box17388.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17388.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17388.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17388.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17388);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17396 = (function sablono$core$radio_button17396(var_args){
var args17397 = [];
var len__6152__auto___17400 = arguments.length;
var i__6153__auto___17401 = (0);
while(true){
if((i__6153__auto___17401 < len__6152__auto___17400)){
args17397.push((arguments[i__6153__auto___17401]));

var G__17402 = (i__6153__auto___17401 + (1));
i__6153__auto___17401 = G__17402;
continue;
} else {
}
break;
}

var G__17399 = args17397.length;
switch (G__17399) {
case 1:
return sablono.core.radio_button17396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17396.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17397.length)].join('')));

}
});

sablono.core.radio_button17396.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17396.call(null,group,null);
});

sablono.core.radio_button17396.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17396.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17396.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17396.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17396);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17404 = (function sablono$core$select_options17404(coll){
var iter__5866__auto__ = (function sablono$core$select_options17404_$_iter__17413(s__17414){
return (new cljs.core.LazySeq(null,(function (){
var s__17414__$1 = s__17414;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17414__$1);
if(temp__4425__auto__){
var s__17414__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17414__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17414__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17416 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17415 = (0);
while(true){
if((i__17415 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17415);
cljs.core.chunk_append.call(null,b__17416,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17419 = x;
var text = cljs.core.nth.call(null,vec__17419,(0),null);
var val = cljs.core.nth.call(null,vec__17419,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17419,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17404.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17421 = (i__17415 + (1));
i__17415 = G__17421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17416),sablono$core$select_options17404_$_iter__17413.call(null,cljs.core.chunk_rest.call(null,s__17414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17416),null);
}
} else {
var x = cljs.core.first.call(null,s__17414__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17420 = x;
var text = cljs.core.nth.call(null,vec__17420,(0),null);
var val = cljs.core.nth.call(null,vec__17420,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17420,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17404.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17404_$_iter__17413.call(null,cljs.core.rest.call(null,s__17414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17404);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17422 = (function sablono$core$drop_down17422(var_args){
var args17423 = [];
var len__6152__auto___17426 = arguments.length;
var i__6153__auto___17427 = (0);
while(true){
if((i__6153__auto___17427 < len__6152__auto___17426)){
args17423.push((arguments[i__6153__auto___17427]));

var G__17428 = (i__6153__auto___17427 + (1));
i__6153__auto___17427 = G__17428;
continue;
} else {
}
break;
}

var G__17425 = args17423.length;
switch (G__17425) {
case 2:
return sablono.core.drop_down17422.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17422.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17423.length)].join('')));

}
});

sablono.core.drop_down17422.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17422.call(null,name,options,null);
});

sablono.core.drop_down17422.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17422.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17422);
/**
 * Creates a text area element.
 */
sablono.core.text_area17430 = (function sablono$core$text_area17430(var_args){
var args17431 = [];
var len__6152__auto___17434 = arguments.length;
var i__6153__auto___17435 = (0);
while(true){
if((i__6153__auto___17435 < len__6152__auto___17434)){
args17431.push((arguments[i__6153__auto___17435]));

var G__17436 = (i__6153__auto___17435 + (1));
i__6153__auto___17435 = G__17436;
continue;
} else {
}
break;
}

var G__17433 = args17431.length;
switch (G__17433) {
case 1:
return sablono.core.text_area17430.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17430.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17431.length)].join('')));

}
});

sablono.core.text_area17430.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17430.call(null,name,null);
});

sablono.core.text_area17430.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17430.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17430);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17438 = (function sablono$core$label17438(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17438);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17439 = (function sablono$core$submit_button17439(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17439);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17440 = (function sablono$core$reset_button17440(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17440);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17441 = (function sablono$core$form_to17441(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17446 = arguments.length;
var i__6153__auto___17447 = (0);
while(true){
if((i__6153__auto___17447 < len__6152__auto___17446)){
args__6159__auto__.push((arguments[i__6153__auto___17447]));

var G__17448 = (i__6153__auto___17447 + (1));
i__6153__auto___17447 = G__17448;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17441.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17441.cljs$core$IFn$_invoke$arity$variadic = (function (p__17444,body){
var vec__17445 = p__17444;
var method = cljs.core.nth.call(null,vec__17445,(0),null);
var action = cljs.core.nth.call(null,vec__17445,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17441.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17441.cljs$lang$applyTo = (function (seq17442){
var G__17443 = cljs.core.first.call(null,seq17442);
var seq17442__$1 = cljs.core.next.call(null,seq17442);
return sablono.core.form_to17441.cljs$core$IFn$_invoke$arity$variadic(G__17443,seq17442__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17441);

//# sourceMappingURL=core.js.map