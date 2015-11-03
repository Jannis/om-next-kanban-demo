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
var G__17144__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17143 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17143,(0),null);
var body = cljs.core.nthnext.call(null,vec__17143,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17144 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17145__i = 0, G__17145__a = new Array(arguments.length -  0);
while (G__17145__i < G__17145__a.length) {G__17145__a[G__17145__i] = arguments[G__17145__i + 0]; ++G__17145__i;}
  args = new cljs.core.IndexedSeq(G__17145__a,0);
} 
return G__17144__delegate.call(this,args);};
G__17144.cljs$lang$maxFixedArity = 0;
G__17144.cljs$lang$applyTo = (function (arglist__17146){
var args = cljs.core.seq(arglist__17146);
return G__17144__delegate(args);
});
G__17144.cljs$core$IFn$_invoke$arity$variadic = G__17144__delegate;
return G__17144;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17151(s__17152){
return (new cljs.core.LazySeq(null,(function (){
var s__17152__$1 = s__17152;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17152__$1);
if(temp__4425__auto__){
var s__17152__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17152__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17152__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17154 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17153 = (0);
while(true){
if((i__17153 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17153);
cljs.core.chunk_append.call(null,b__17154,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17155 = (i__17153 + (1));
i__17153 = G__17155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17154),sablono$core$update_arglists_$_iter__17151.call(null,cljs.core.chunk_rest.call(null,s__17152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17154),null);
}
} else {
var args = cljs.core.first.call(null,s__17152__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17151.call(null,cljs.core.rest.call(null,s__17152__$2)));
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
var len__6152__auto___17161 = arguments.length;
var i__6153__auto___17162 = (0);
while(true){
if((i__6153__auto___17162 < len__6152__auto___17161)){
args__6159__auto__.push((arguments[i__6153__auto___17162]));

var G__17163 = (i__6153__auto___17162 + (1));
i__6153__auto___17162 = G__17163;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17157(s__17158){
return (new cljs.core.LazySeq(null,(function (){
var s__17158__$1 = s__17158;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17158__$1);
if(temp__4425__auto__){
var s__17158__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17158__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17158__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17160 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17159 = (0);
while(true){
if((i__17159 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17159);
cljs.core.chunk_append.call(null,b__17160,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17164 = (i__17159 + (1));
i__17159 = G__17164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17160),sablono$core$iter__17157.call(null,cljs.core.chunk_rest.call(null,s__17158__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17160),null);
}
} else {
var style = cljs.core.first.call(null,s__17158__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17157.call(null,cljs.core.rest.call(null,s__17158__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17156){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17156));
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
sablono.core.link_to17165 = (function sablono$core$link_to17165(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17168 = arguments.length;
var i__6153__auto___17169 = (0);
while(true){
if((i__6153__auto___17169 < len__6152__auto___17168)){
args__6159__auto__.push((arguments[i__6153__auto___17169]));

var G__17170 = (i__6153__auto___17169 + (1));
i__6153__auto___17169 = G__17170;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17165.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17165.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17165.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17165.cljs$lang$applyTo = (function (seq17166){
var G__17167 = cljs.core.first.call(null,seq17166);
var seq17166__$1 = cljs.core.next.call(null,seq17166);
return sablono.core.link_to17165.cljs$core$IFn$_invoke$arity$variadic(G__17167,seq17166__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17165);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17171 = (function sablono$core$mail_to17171(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17176 = arguments.length;
var i__6153__auto___17177 = (0);
while(true){
if((i__6153__auto___17177 < len__6152__auto___17176)){
args__6159__auto__.push((arguments[i__6153__auto___17177]));

var G__17178 = (i__6153__auto___17177 + (1));
i__6153__auto___17177 = G__17178;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17171.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17171.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17174){
var vec__17175 = p__17174;
var content = cljs.core.nth.call(null,vec__17175,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17171.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17171.cljs$lang$applyTo = (function (seq17172){
var G__17173 = cljs.core.first.call(null,seq17172);
var seq17172__$1 = cljs.core.next.call(null,seq17172);
return sablono.core.mail_to17171.cljs$core$IFn$_invoke$arity$variadic(G__17173,seq17172__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17171);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17179 = (function sablono$core$unordered_list17179(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17179_$_iter__17184(s__17185){
return (new cljs.core.LazySeq(null,(function (){
var s__17185__$1 = s__17185;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17185__$1);
if(temp__4425__auto__){
var s__17185__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17185__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17185__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17187 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17186 = (0);
while(true){
if((i__17186 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17186);
cljs.core.chunk_append.call(null,b__17187,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17188 = (i__17186 + (1));
i__17186 = G__17188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17187),sablono$core$unordered_list17179_$_iter__17184.call(null,cljs.core.chunk_rest.call(null,s__17185__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17187),null);
}
} else {
var x = cljs.core.first.call(null,s__17185__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17179_$_iter__17184.call(null,cljs.core.rest.call(null,s__17185__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17179);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17189 = (function sablono$core$ordered_list17189(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17189_$_iter__17194(s__17195){
return (new cljs.core.LazySeq(null,(function (){
var s__17195__$1 = s__17195;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17195__$1);
if(temp__4425__auto__){
var s__17195__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17195__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17195__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17197 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17196 = (0);
while(true){
if((i__17196 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17196);
cljs.core.chunk_append.call(null,b__17197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17198 = (i__17196 + (1));
i__17196 = G__17198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17197),sablono$core$ordered_list17189_$_iter__17194.call(null,cljs.core.chunk_rest.call(null,s__17195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17197),null);
}
} else {
var x = cljs.core.first.call(null,s__17195__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17189_$_iter__17194.call(null,cljs.core.rest.call(null,s__17195__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17189);
/**
 * Create an image element.
 */
sablono.core.image17199 = (function sablono$core$image17199(var_args){
var args17200 = [];
var len__6152__auto___17203 = arguments.length;
var i__6153__auto___17204 = (0);
while(true){
if((i__6153__auto___17204 < len__6152__auto___17203)){
args17200.push((arguments[i__6153__auto___17204]));

var G__17205 = (i__6153__auto___17204 + (1));
i__6153__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var G__17202 = args17200.length;
switch (G__17202) {
case 1:
return sablono.core.image17199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17200.length)].join('')));

}
});

sablono.core.image17199.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17199.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17199.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17199);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17207_SHARP_,p2__17208_SHARP_){
return [cljs.core.str(p1__17207_SHARP_),cljs.core.str("["),cljs.core.str(p2__17208_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17209_SHARP_,p2__17210_SHARP_){
return [cljs.core.str(p1__17209_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17210_SHARP_)].join('');
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
sablono.core.color_field17211 = (function sablono$core$color_field17211(var_args){
var args17212 = [];
var len__6152__auto___17279 = arguments.length;
var i__6153__auto___17280 = (0);
while(true){
if((i__6153__auto___17280 < len__6152__auto___17279)){
args17212.push((arguments[i__6153__auto___17280]));

var G__17281 = (i__6153__auto___17280 + (1));
i__6153__auto___17280 = G__17281;
continue;
} else {
}
break;
}

var G__17214 = args17212.length;
switch (G__17214) {
case 1:
return sablono.core.color_field17211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17212.length)].join('')));

}
});

sablono.core.color_field17211.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.color_field17211.call(null,name__13071__auto__,null);
});

sablono.core.color_field17211.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.color_field17211.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17211);

/**
 * Creates a date input field.
 */
sablono.core.date_field17215 = (function sablono$core$date_field17215(var_args){
var args17216 = [];
var len__6152__auto___17283 = arguments.length;
var i__6153__auto___17284 = (0);
while(true){
if((i__6153__auto___17284 < len__6152__auto___17283)){
args17216.push((arguments[i__6153__auto___17284]));

var G__17285 = (i__6153__auto___17284 + (1));
i__6153__auto___17284 = G__17285;
continue;
} else {
}
break;
}

var G__17218 = args17216.length;
switch (G__17218) {
case 1:
return sablono.core.date_field17215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17216.length)].join('')));

}
});

sablono.core.date_field17215.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.date_field17215.call(null,name__13071__auto__,null);
});

sablono.core.date_field17215.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.date_field17215.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17215);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17219 = (function sablono$core$datetime_field17219(var_args){
var args17220 = [];
var len__6152__auto___17287 = arguments.length;
var i__6153__auto___17288 = (0);
while(true){
if((i__6153__auto___17288 < len__6152__auto___17287)){
args17220.push((arguments[i__6153__auto___17288]));

var G__17289 = (i__6153__auto___17288 + (1));
i__6153__auto___17288 = G__17289;
continue;
} else {
}
break;
}

var G__17222 = args17220.length;
switch (G__17222) {
case 1:
return sablono.core.datetime_field17219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17220.length)].join('')));

}
});

sablono.core.datetime_field17219.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.datetime_field17219.call(null,name__13071__auto__,null);
});

sablono.core.datetime_field17219.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.datetime_field17219.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17219);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17223 = (function sablono$core$datetime_local_field17223(var_args){
var args17224 = [];
var len__6152__auto___17291 = arguments.length;
var i__6153__auto___17292 = (0);
while(true){
if((i__6153__auto___17292 < len__6152__auto___17291)){
args17224.push((arguments[i__6153__auto___17292]));

var G__17293 = (i__6153__auto___17292 + (1));
i__6153__auto___17292 = G__17293;
continue;
} else {
}
break;
}

var G__17226 = args17224.length;
switch (G__17226) {
case 1:
return sablono.core.datetime_local_field17223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17224.length)].join('')));

}
});

sablono.core.datetime_local_field17223.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.datetime_local_field17223.call(null,name__13071__auto__,null);
});

sablono.core.datetime_local_field17223.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.datetime_local_field17223.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17223);

/**
 * Creates a email input field.
 */
sablono.core.email_field17227 = (function sablono$core$email_field17227(var_args){
var args17228 = [];
var len__6152__auto___17295 = arguments.length;
var i__6153__auto___17296 = (0);
while(true){
if((i__6153__auto___17296 < len__6152__auto___17295)){
args17228.push((arguments[i__6153__auto___17296]));

var G__17297 = (i__6153__auto___17296 + (1));
i__6153__auto___17296 = G__17297;
continue;
} else {
}
break;
}

var G__17230 = args17228.length;
switch (G__17230) {
case 1:
return sablono.core.email_field17227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17228.length)].join('')));

}
});

sablono.core.email_field17227.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.email_field17227.call(null,name__13071__auto__,null);
});

sablono.core.email_field17227.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.email_field17227.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17227);

/**
 * Creates a file input field.
 */
sablono.core.file_field17231 = (function sablono$core$file_field17231(var_args){
var args17232 = [];
var len__6152__auto___17299 = arguments.length;
var i__6153__auto___17300 = (0);
while(true){
if((i__6153__auto___17300 < len__6152__auto___17299)){
args17232.push((arguments[i__6153__auto___17300]));

var G__17301 = (i__6153__auto___17300 + (1));
i__6153__auto___17300 = G__17301;
continue;
} else {
}
break;
}

var G__17234 = args17232.length;
switch (G__17234) {
case 1:
return sablono.core.file_field17231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17232.length)].join('')));

}
});

sablono.core.file_field17231.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.file_field17231.call(null,name__13071__auto__,null);
});

sablono.core.file_field17231.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.file_field17231.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17231);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17235 = (function sablono$core$hidden_field17235(var_args){
var args17236 = [];
var len__6152__auto___17303 = arguments.length;
var i__6153__auto___17304 = (0);
while(true){
if((i__6153__auto___17304 < len__6152__auto___17303)){
args17236.push((arguments[i__6153__auto___17304]));

var G__17305 = (i__6153__auto___17304 + (1));
i__6153__auto___17304 = G__17305;
continue;
} else {
}
break;
}

var G__17238 = args17236.length;
switch (G__17238) {
case 1:
return sablono.core.hidden_field17235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17236.length)].join('')));

}
});

sablono.core.hidden_field17235.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.hidden_field17235.call(null,name__13071__auto__,null);
});

sablono.core.hidden_field17235.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.hidden_field17235.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17235);

/**
 * Creates a month input field.
 */
sablono.core.month_field17239 = (function sablono$core$month_field17239(var_args){
var args17240 = [];
var len__6152__auto___17307 = arguments.length;
var i__6153__auto___17308 = (0);
while(true){
if((i__6153__auto___17308 < len__6152__auto___17307)){
args17240.push((arguments[i__6153__auto___17308]));

var G__17309 = (i__6153__auto___17308 + (1));
i__6153__auto___17308 = G__17309;
continue;
} else {
}
break;
}

var G__17242 = args17240.length;
switch (G__17242) {
case 1:
return sablono.core.month_field17239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17240.length)].join('')));

}
});

sablono.core.month_field17239.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.month_field17239.call(null,name__13071__auto__,null);
});

sablono.core.month_field17239.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.month_field17239.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17239);

/**
 * Creates a number input field.
 */
sablono.core.number_field17243 = (function sablono$core$number_field17243(var_args){
var args17244 = [];
var len__6152__auto___17311 = arguments.length;
var i__6153__auto___17312 = (0);
while(true){
if((i__6153__auto___17312 < len__6152__auto___17311)){
args17244.push((arguments[i__6153__auto___17312]));

var G__17313 = (i__6153__auto___17312 + (1));
i__6153__auto___17312 = G__17313;
continue;
} else {
}
break;
}

var G__17246 = args17244.length;
switch (G__17246) {
case 1:
return sablono.core.number_field17243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17244.length)].join('')));

}
});

sablono.core.number_field17243.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.number_field17243.call(null,name__13071__auto__,null);
});

sablono.core.number_field17243.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.number_field17243.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17243);

/**
 * Creates a password input field.
 */
sablono.core.password_field17247 = (function sablono$core$password_field17247(var_args){
var args17248 = [];
var len__6152__auto___17315 = arguments.length;
var i__6153__auto___17316 = (0);
while(true){
if((i__6153__auto___17316 < len__6152__auto___17315)){
args17248.push((arguments[i__6153__auto___17316]));

var G__17317 = (i__6153__auto___17316 + (1));
i__6153__auto___17316 = G__17317;
continue;
} else {
}
break;
}

var G__17250 = args17248.length;
switch (G__17250) {
case 1:
return sablono.core.password_field17247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17248.length)].join('')));

}
});

sablono.core.password_field17247.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.password_field17247.call(null,name__13071__auto__,null);
});

sablono.core.password_field17247.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.password_field17247.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17247);

/**
 * Creates a range input field.
 */
sablono.core.range_field17251 = (function sablono$core$range_field17251(var_args){
var args17252 = [];
var len__6152__auto___17319 = arguments.length;
var i__6153__auto___17320 = (0);
while(true){
if((i__6153__auto___17320 < len__6152__auto___17319)){
args17252.push((arguments[i__6153__auto___17320]));

var G__17321 = (i__6153__auto___17320 + (1));
i__6153__auto___17320 = G__17321;
continue;
} else {
}
break;
}

var G__17254 = args17252.length;
switch (G__17254) {
case 1:
return sablono.core.range_field17251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17252.length)].join('')));

}
});

sablono.core.range_field17251.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.range_field17251.call(null,name__13071__auto__,null);
});

sablono.core.range_field17251.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.range_field17251.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17251);

/**
 * Creates a search input field.
 */
sablono.core.search_field17255 = (function sablono$core$search_field17255(var_args){
var args17256 = [];
var len__6152__auto___17323 = arguments.length;
var i__6153__auto___17324 = (0);
while(true){
if((i__6153__auto___17324 < len__6152__auto___17323)){
args17256.push((arguments[i__6153__auto___17324]));

var G__17325 = (i__6153__auto___17324 + (1));
i__6153__auto___17324 = G__17325;
continue;
} else {
}
break;
}

var G__17258 = args17256.length;
switch (G__17258) {
case 1:
return sablono.core.search_field17255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17256.length)].join('')));

}
});

sablono.core.search_field17255.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.search_field17255.call(null,name__13071__auto__,null);
});

sablono.core.search_field17255.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.search_field17255.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17255);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17259 = (function sablono$core$tel_field17259(var_args){
var args17260 = [];
var len__6152__auto___17327 = arguments.length;
var i__6153__auto___17328 = (0);
while(true){
if((i__6153__auto___17328 < len__6152__auto___17327)){
args17260.push((arguments[i__6153__auto___17328]));

var G__17329 = (i__6153__auto___17328 + (1));
i__6153__auto___17328 = G__17329;
continue;
} else {
}
break;
}

var G__17262 = args17260.length;
switch (G__17262) {
case 1:
return sablono.core.tel_field17259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17260.length)].join('')));

}
});

sablono.core.tel_field17259.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.tel_field17259.call(null,name__13071__auto__,null);
});

sablono.core.tel_field17259.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.tel_field17259.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17259);

/**
 * Creates a text input field.
 */
sablono.core.text_field17263 = (function sablono$core$text_field17263(var_args){
var args17264 = [];
var len__6152__auto___17331 = arguments.length;
var i__6153__auto___17332 = (0);
while(true){
if((i__6153__auto___17332 < len__6152__auto___17331)){
args17264.push((arguments[i__6153__auto___17332]));

var G__17333 = (i__6153__auto___17332 + (1));
i__6153__auto___17332 = G__17333;
continue;
} else {
}
break;
}

var G__17266 = args17264.length;
switch (G__17266) {
case 1:
return sablono.core.text_field17263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17264.length)].join('')));

}
});

sablono.core.text_field17263.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.text_field17263.call(null,name__13071__auto__,null);
});

sablono.core.text_field17263.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.text_field17263.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17263);

/**
 * Creates a time input field.
 */
sablono.core.time_field17267 = (function sablono$core$time_field17267(var_args){
var args17268 = [];
var len__6152__auto___17335 = arguments.length;
var i__6153__auto___17336 = (0);
while(true){
if((i__6153__auto___17336 < len__6152__auto___17335)){
args17268.push((arguments[i__6153__auto___17336]));

var G__17337 = (i__6153__auto___17336 + (1));
i__6153__auto___17336 = G__17337;
continue;
} else {
}
break;
}

var G__17270 = args17268.length;
switch (G__17270) {
case 1:
return sablono.core.time_field17267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17268.length)].join('')));

}
});

sablono.core.time_field17267.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.time_field17267.call(null,name__13071__auto__,null);
});

sablono.core.time_field17267.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.time_field17267.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17267);

/**
 * Creates a url input field.
 */
sablono.core.url_field17271 = (function sablono$core$url_field17271(var_args){
var args17272 = [];
var len__6152__auto___17339 = arguments.length;
var i__6153__auto___17340 = (0);
while(true){
if((i__6153__auto___17340 < len__6152__auto___17339)){
args17272.push((arguments[i__6153__auto___17340]));

var G__17341 = (i__6153__auto___17340 + (1));
i__6153__auto___17340 = G__17341;
continue;
} else {
}
break;
}

var G__17274 = args17272.length;
switch (G__17274) {
case 1:
return sablono.core.url_field17271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17272.length)].join('')));

}
});

sablono.core.url_field17271.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.url_field17271.call(null,name__13071__auto__,null);
});

sablono.core.url_field17271.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.url_field17271.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17271);

/**
 * Creates a week input field.
 */
sablono.core.week_field17275 = (function sablono$core$week_field17275(var_args){
var args17276 = [];
var len__6152__auto___17343 = arguments.length;
var i__6153__auto___17344 = (0);
while(true){
if((i__6153__auto___17344 < len__6152__auto___17343)){
args17276.push((arguments[i__6153__auto___17344]));

var G__17345 = (i__6153__auto___17344 + (1));
i__6153__auto___17344 = G__17345;
continue;
} else {
}
break;
}

var G__17278 = args17276.length;
switch (G__17278) {
case 1:
return sablono.core.week_field17275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17276.length)].join('')));

}
});

sablono.core.week_field17275.cljs$core$IFn$_invoke$arity$1 = (function (name__13071__auto__){
return sablono.core.week_field17275.call(null,name__13071__auto__,null);
});

sablono.core.week_field17275.cljs$core$IFn$_invoke$arity$2 = (function (name__13071__auto__,value__13072__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13071__auto__,value__13072__auto__);
});

sablono.core.week_field17275.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17275);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17347 = (function sablono$core$check_box17347(var_args){
var args17348 = [];
var len__6152__auto___17351 = arguments.length;
var i__6153__auto___17352 = (0);
while(true){
if((i__6153__auto___17352 < len__6152__auto___17351)){
args17348.push((arguments[i__6153__auto___17352]));

var G__17353 = (i__6153__auto___17352 + (1));
i__6153__auto___17352 = G__17353;
continue;
} else {
}
break;
}

var G__17350 = args17348.length;
switch (G__17350) {
case 1:
return sablono.core.check_box17347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17347.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17348.length)].join('')));

}
});

sablono.core.check_box17347.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17347.call(null,name,null);
});

sablono.core.check_box17347.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17347.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17347.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17347.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17347);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17355 = (function sablono$core$radio_button17355(var_args){
var args17356 = [];
var len__6152__auto___17359 = arguments.length;
var i__6153__auto___17360 = (0);
while(true){
if((i__6153__auto___17360 < len__6152__auto___17359)){
args17356.push((arguments[i__6153__auto___17360]));

var G__17361 = (i__6153__auto___17360 + (1));
i__6153__auto___17360 = G__17361;
continue;
} else {
}
break;
}

var G__17358 = args17356.length;
switch (G__17358) {
case 1:
return sablono.core.radio_button17355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17355.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17356.length)].join('')));

}
});

sablono.core.radio_button17355.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17355.call(null,group,null);
});

sablono.core.radio_button17355.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17355.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17355.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17355.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17355);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17363 = (function sablono$core$select_options17363(coll){
var iter__5866__auto__ = (function sablono$core$select_options17363_$_iter__17372(s__17373){
return (new cljs.core.LazySeq(null,(function (){
var s__17373__$1 = s__17373;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17373__$1);
if(temp__4425__auto__){
var s__17373__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17373__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17373__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17375 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17374 = (0);
while(true){
if((i__17374 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17374);
cljs.core.chunk_append.call(null,b__17375,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17378 = x;
var text = cljs.core.nth.call(null,vec__17378,(0),null);
var val = cljs.core.nth.call(null,vec__17378,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17378,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17363.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17380 = (i__17374 + (1));
i__17374 = G__17380;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17375),sablono$core$select_options17363_$_iter__17372.call(null,cljs.core.chunk_rest.call(null,s__17373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17375),null);
}
} else {
var x = cljs.core.first.call(null,s__17373__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17379 = x;
var text = cljs.core.nth.call(null,vec__17379,(0),null);
var val = cljs.core.nth.call(null,vec__17379,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17379,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17363.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17363_$_iter__17372.call(null,cljs.core.rest.call(null,s__17373__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17363);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17381 = (function sablono$core$drop_down17381(var_args){
var args17382 = [];
var len__6152__auto___17385 = arguments.length;
var i__6153__auto___17386 = (0);
while(true){
if((i__6153__auto___17386 < len__6152__auto___17385)){
args17382.push((arguments[i__6153__auto___17386]));

var G__17387 = (i__6153__auto___17386 + (1));
i__6153__auto___17386 = G__17387;
continue;
} else {
}
break;
}

var G__17384 = args17382.length;
switch (G__17384) {
case 2:
return sablono.core.drop_down17381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17381.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17382.length)].join('')));

}
});

sablono.core.drop_down17381.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17381.call(null,name,options,null);
});

sablono.core.drop_down17381.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17381.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17381);
/**
 * Creates a text area element.
 */
sablono.core.text_area17389 = (function sablono$core$text_area17389(var_args){
var args17390 = [];
var len__6152__auto___17393 = arguments.length;
var i__6153__auto___17394 = (0);
while(true){
if((i__6153__auto___17394 < len__6152__auto___17393)){
args17390.push((arguments[i__6153__auto___17394]));

var G__17395 = (i__6153__auto___17394 + (1));
i__6153__auto___17394 = G__17395;
continue;
} else {
}
break;
}

var G__17392 = args17390.length;
switch (G__17392) {
case 1:
return sablono.core.text_area17389.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17389.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17390.length)].join('')));

}
});

sablono.core.text_area17389.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17389.call(null,name,null);
});

sablono.core.text_area17389.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17389.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17389);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17397 = (function sablono$core$label17397(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17397);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17398 = (function sablono$core$submit_button17398(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17398);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17399 = (function sablono$core$reset_button17399(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17399);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17400 = (function sablono$core$form_to17400(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17405 = arguments.length;
var i__6153__auto___17406 = (0);
while(true){
if((i__6153__auto___17406 < len__6152__auto___17405)){
args__6159__auto__.push((arguments[i__6153__auto___17406]));

var G__17407 = (i__6153__auto___17406 + (1));
i__6153__auto___17406 = G__17407;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17400.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17400.cljs$core$IFn$_invoke$arity$variadic = (function (p__17403,body){
var vec__17404 = p__17403;
var method = cljs.core.nth.call(null,vec__17404,(0),null);
var action = cljs.core.nth.call(null,vec__17404,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17400.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17400.cljs$lang$applyTo = (function (seq17401){
var G__17402 = cljs.core.first.call(null,seq17401);
var seq17401__$1 = cljs.core.next.call(null,seq17401);
return sablono.core.form_to17400.cljs$core$IFn$_invoke$arity$variadic(G__17402,seq17401__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17400);

//# sourceMappingURL=core.js.map