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
var G__17096__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17095 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17095,(0),null);
var body = cljs.core.nthnext.call(null,vec__17095,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17097__i = 0, G__17097__a = new Array(arguments.length -  0);
while (G__17097__i < G__17097__a.length) {G__17097__a[G__17097__i] = arguments[G__17097__i + 0]; ++G__17097__i;}
  args = new cljs.core.IndexedSeq(G__17097__a,0);
} 
return G__17096__delegate.call(this,args);};
G__17096.cljs$lang$maxFixedArity = 0;
G__17096.cljs$lang$applyTo = (function (arglist__17098){
var args = cljs.core.seq(arglist__17098);
return G__17096__delegate(args);
});
G__17096.cljs$core$IFn$_invoke$arity$variadic = G__17096__delegate;
return G__17096;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17103(s__17104){
return (new cljs.core.LazySeq(null,(function (){
var s__17104__$1 = s__17104;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17104__$1);
if(temp__4425__auto__){
var s__17104__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17104__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17104__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17106 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17105 = (0);
while(true){
if((i__17105 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17105);
cljs.core.chunk_append.call(null,b__17106,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17107 = (i__17105 + (1));
i__17105 = G__17107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17106),sablono$core$update_arglists_$_iter__17103.call(null,cljs.core.chunk_rest.call(null,s__17104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17106),null);
}
} else {
var args = cljs.core.first.call(null,s__17104__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17103.call(null,cljs.core.rest.call(null,s__17104__$2)));
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
var len__6152__auto___17113 = arguments.length;
var i__6153__auto___17114 = (0);
while(true){
if((i__6153__auto___17114 < len__6152__auto___17113)){
args__6159__auto__.push((arguments[i__6153__auto___17114]));

var G__17115 = (i__6153__auto___17114 + (1));
i__6153__auto___17114 = G__17115;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17109(s__17110){
return (new cljs.core.LazySeq(null,(function (){
var s__17110__$1 = s__17110;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17110__$1);
if(temp__4425__auto__){
var s__17110__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17110__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17110__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17112 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17111 = (0);
while(true){
if((i__17111 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17111);
cljs.core.chunk_append.call(null,b__17112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17116 = (i__17111 + (1));
i__17111 = G__17116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17112),sablono$core$iter__17109.call(null,cljs.core.chunk_rest.call(null,s__17110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17112),null);
}
} else {
var style = cljs.core.first.call(null,s__17110__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17109.call(null,cljs.core.rest.call(null,s__17110__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17108){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17108));
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
sablono.core.link_to17117 = (function sablono$core$link_to17117(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17120 = arguments.length;
var i__6153__auto___17121 = (0);
while(true){
if((i__6153__auto___17121 < len__6152__auto___17120)){
args__6159__auto__.push((arguments[i__6153__auto___17121]));

var G__17122 = (i__6153__auto___17121 + (1));
i__6153__auto___17121 = G__17122;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17117.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17117.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17117.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17117.cljs$lang$applyTo = (function (seq17118){
var G__17119 = cljs.core.first.call(null,seq17118);
var seq17118__$1 = cljs.core.next.call(null,seq17118);
return sablono.core.link_to17117.cljs$core$IFn$_invoke$arity$variadic(G__17119,seq17118__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17117);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17123 = (function sablono$core$mail_to17123(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17128 = arguments.length;
var i__6153__auto___17129 = (0);
while(true){
if((i__6153__auto___17129 < len__6152__auto___17128)){
args__6159__auto__.push((arguments[i__6153__auto___17129]));

var G__17130 = (i__6153__auto___17129 + (1));
i__6153__auto___17129 = G__17130;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17123.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17123.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17126){
var vec__17127 = p__17126;
var content = cljs.core.nth.call(null,vec__17127,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17123.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17123.cljs$lang$applyTo = (function (seq17124){
var G__17125 = cljs.core.first.call(null,seq17124);
var seq17124__$1 = cljs.core.next.call(null,seq17124);
return sablono.core.mail_to17123.cljs$core$IFn$_invoke$arity$variadic(G__17125,seq17124__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17123);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17131 = (function sablono$core$unordered_list17131(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17131_$_iter__17136(s__17137){
return (new cljs.core.LazySeq(null,(function (){
var s__17137__$1 = s__17137;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17137__$1);
if(temp__4425__auto__){
var s__17137__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17137__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17137__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17139 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17138 = (0);
while(true){
if((i__17138 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17138);
cljs.core.chunk_append.call(null,b__17139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17140 = (i__17138 + (1));
i__17138 = G__17140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),sablono$core$unordered_list17131_$_iter__17136.call(null,cljs.core.chunk_rest.call(null,s__17137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),null);
}
} else {
var x = cljs.core.first.call(null,s__17137__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17131_$_iter__17136.call(null,cljs.core.rest.call(null,s__17137__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17131);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17141 = (function sablono$core$ordered_list17141(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17141_$_iter__17146(s__17147){
return (new cljs.core.LazySeq(null,(function (){
var s__17147__$1 = s__17147;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17147__$1);
if(temp__4425__auto__){
var s__17147__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17147__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17147__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17149 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17148 = (0);
while(true){
if((i__17148 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17148);
cljs.core.chunk_append.call(null,b__17149,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17150 = (i__17148 + (1));
i__17148 = G__17150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17149),sablono$core$ordered_list17141_$_iter__17146.call(null,cljs.core.chunk_rest.call(null,s__17147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17149),null);
}
} else {
var x = cljs.core.first.call(null,s__17147__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17141_$_iter__17146.call(null,cljs.core.rest.call(null,s__17147__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17141);
/**
 * Create an image element.
 */
sablono.core.image17151 = (function sablono$core$image17151(var_args){
var args17152 = [];
var len__6152__auto___17155 = arguments.length;
var i__6153__auto___17156 = (0);
while(true){
if((i__6153__auto___17156 < len__6152__auto___17155)){
args17152.push((arguments[i__6153__auto___17156]));

var G__17157 = (i__6153__auto___17156 + (1));
i__6153__auto___17156 = G__17157;
continue;
} else {
}
break;
}

var G__17154 = args17152.length;
switch (G__17154) {
case 1:
return sablono.core.image17151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17152.length)].join('')));

}
});

sablono.core.image17151.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17151.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17151.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17151);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17159_SHARP_,p2__17160_SHARP_){
return [cljs.core.str(p1__17159_SHARP_),cljs.core.str("["),cljs.core.str(p2__17160_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17161_SHARP_,p2__17162_SHARP_){
return [cljs.core.str(p1__17161_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17162_SHARP_)].join('');
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
sablono.core.color_field17163 = (function sablono$core$color_field17163(var_args){
var args17164 = [];
var len__6152__auto___17231 = arguments.length;
var i__6153__auto___17232 = (0);
while(true){
if((i__6153__auto___17232 < len__6152__auto___17231)){
args17164.push((arguments[i__6153__auto___17232]));

var G__17233 = (i__6153__auto___17232 + (1));
i__6153__auto___17232 = G__17233;
continue;
} else {
}
break;
}

var G__17166 = args17164.length;
switch (G__17166) {
case 1:
return sablono.core.color_field17163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17164.length)].join('')));

}
});

sablono.core.color_field17163.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.color_field17163.call(null,name__12989__auto__,null);
});

sablono.core.color_field17163.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.color_field17163.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17163);

/**
 * Creates a date input field.
 */
sablono.core.date_field17167 = (function sablono$core$date_field17167(var_args){
var args17168 = [];
var len__6152__auto___17235 = arguments.length;
var i__6153__auto___17236 = (0);
while(true){
if((i__6153__auto___17236 < len__6152__auto___17235)){
args17168.push((arguments[i__6153__auto___17236]));

var G__17237 = (i__6153__auto___17236 + (1));
i__6153__auto___17236 = G__17237;
continue;
} else {
}
break;
}

var G__17170 = args17168.length;
switch (G__17170) {
case 1:
return sablono.core.date_field17167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17168.length)].join('')));

}
});

sablono.core.date_field17167.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.date_field17167.call(null,name__12989__auto__,null);
});

sablono.core.date_field17167.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.date_field17167.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17167);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17171 = (function sablono$core$datetime_field17171(var_args){
var args17172 = [];
var len__6152__auto___17239 = arguments.length;
var i__6153__auto___17240 = (0);
while(true){
if((i__6153__auto___17240 < len__6152__auto___17239)){
args17172.push((arguments[i__6153__auto___17240]));

var G__17241 = (i__6153__auto___17240 + (1));
i__6153__auto___17240 = G__17241;
continue;
} else {
}
break;
}

var G__17174 = args17172.length;
switch (G__17174) {
case 1:
return sablono.core.datetime_field17171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17172.length)].join('')));

}
});

sablono.core.datetime_field17171.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.datetime_field17171.call(null,name__12989__auto__,null);
});

sablono.core.datetime_field17171.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.datetime_field17171.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17171);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17175 = (function sablono$core$datetime_local_field17175(var_args){
var args17176 = [];
var len__6152__auto___17243 = arguments.length;
var i__6153__auto___17244 = (0);
while(true){
if((i__6153__auto___17244 < len__6152__auto___17243)){
args17176.push((arguments[i__6153__auto___17244]));

var G__17245 = (i__6153__auto___17244 + (1));
i__6153__auto___17244 = G__17245;
continue;
} else {
}
break;
}

var G__17178 = args17176.length;
switch (G__17178) {
case 1:
return sablono.core.datetime_local_field17175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17176.length)].join('')));

}
});

sablono.core.datetime_local_field17175.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.datetime_local_field17175.call(null,name__12989__auto__,null);
});

sablono.core.datetime_local_field17175.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.datetime_local_field17175.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17175);

/**
 * Creates a email input field.
 */
sablono.core.email_field17179 = (function sablono$core$email_field17179(var_args){
var args17180 = [];
var len__6152__auto___17247 = arguments.length;
var i__6153__auto___17248 = (0);
while(true){
if((i__6153__auto___17248 < len__6152__auto___17247)){
args17180.push((arguments[i__6153__auto___17248]));

var G__17249 = (i__6153__auto___17248 + (1));
i__6153__auto___17248 = G__17249;
continue;
} else {
}
break;
}

var G__17182 = args17180.length;
switch (G__17182) {
case 1:
return sablono.core.email_field17179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17180.length)].join('')));

}
});

sablono.core.email_field17179.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.email_field17179.call(null,name__12989__auto__,null);
});

sablono.core.email_field17179.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.email_field17179.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17179);

/**
 * Creates a file input field.
 */
sablono.core.file_field17183 = (function sablono$core$file_field17183(var_args){
var args17184 = [];
var len__6152__auto___17251 = arguments.length;
var i__6153__auto___17252 = (0);
while(true){
if((i__6153__auto___17252 < len__6152__auto___17251)){
args17184.push((arguments[i__6153__auto___17252]));

var G__17253 = (i__6153__auto___17252 + (1));
i__6153__auto___17252 = G__17253;
continue;
} else {
}
break;
}

var G__17186 = args17184.length;
switch (G__17186) {
case 1:
return sablono.core.file_field17183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17184.length)].join('')));

}
});

sablono.core.file_field17183.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.file_field17183.call(null,name__12989__auto__,null);
});

sablono.core.file_field17183.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.file_field17183.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17183);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17187 = (function sablono$core$hidden_field17187(var_args){
var args17188 = [];
var len__6152__auto___17255 = arguments.length;
var i__6153__auto___17256 = (0);
while(true){
if((i__6153__auto___17256 < len__6152__auto___17255)){
args17188.push((arguments[i__6153__auto___17256]));

var G__17257 = (i__6153__auto___17256 + (1));
i__6153__auto___17256 = G__17257;
continue;
} else {
}
break;
}

var G__17190 = args17188.length;
switch (G__17190) {
case 1:
return sablono.core.hidden_field17187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17188.length)].join('')));

}
});

sablono.core.hidden_field17187.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.hidden_field17187.call(null,name__12989__auto__,null);
});

sablono.core.hidden_field17187.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.hidden_field17187.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17187);

/**
 * Creates a month input field.
 */
sablono.core.month_field17191 = (function sablono$core$month_field17191(var_args){
var args17192 = [];
var len__6152__auto___17259 = arguments.length;
var i__6153__auto___17260 = (0);
while(true){
if((i__6153__auto___17260 < len__6152__auto___17259)){
args17192.push((arguments[i__6153__auto___17260]));

var G__17261 = (i__6153__auto___17260 + (1));
i__6153__auto___17260 = G__17261;
continue;
} else {
}
break;
}

var G__17194 = args17192.length;
switch (G__17194) {
case 1:
return sablono.core.month_field17191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17192.length)].join('')));

}
});

sablono.core.month_field17191.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.month_field17191.call(null,name__12989__auto__,null);
});

sablono.core.month_field17191.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.month_field17191.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17191);

/**
 * Creates a number input field.
 */
sablono.core.number_field17195 = (function sablono$core$number_field17195(var_args){
var args17196 = [];
var len__6152__auto___17263 = arguments.length;
var i__6153__auto___17264 = (0);
while(true){
if((i__6153__auto___17264 < len__6152__auto___17263)){
args17196.push((arguments[i__6153__auto___17264]));

var G__17265 = (i__6153__auto___17264 + (1));
i__6153__auto___17264 = G__17265;
continue;
} else {
}
break;
}

var G__17198 = args17196.length;
switch (G__17198) {
case 1:
return sablono.core.number_field17195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17196.length)].join('')));

}
});

sablono.core.number_field17195.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.number_field17195.call(null,name__12989__auto__,null);
});

sablono.core.number_field17195.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.number_field17195.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17195);

/**
 * Creates a password input field.
 */
sablono.core.password_field17199 = (function sablono$core$password_field17199(var_args){
var args17200 = [];
var len__6152__auto___17267 = arguments.length;
var i__6153__auto___17268 = (0);
while(true){
if((i__6153__auto___17268 < len__6152__auto___17267)){
args17200.push((arguments[i__6153__auto___17268]));

var G__17269 = (i__6153__auto___17268 + (1));
i__6153__auto___17268 = G__17269;
continue;
} else {
}
break;
}

var G__17202 = args17200.length;
switch (G__17202) {
case 1:
return sablono.core.password_field17199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17200.length)].join('')));

}
});

sablono.core.password_field17199.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.password_field17199.call(null,name__12989__auto__,null);
});

sablono.core.password_field17199.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.password_field17199.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17199);

/**
 * Creates a range input field.
 */
sablono.core.range_field17203 = (function sablono$core$range_field17203(var_args){
var args17204 = [];
var len__6152__auto___17271 = arguments.length;
var i__6153__auto___17272 = (0);
while(true){
if((i__6153__auto___17272 < len__6152__auto___17271)){
args17204.push((arguments[i__6153__auto___17272]));

var G__17273 = (i__6153__auto___17272 + (1));
i__6153__auto___17272 = G__17273;
continue;
} else {
}
break;
}

var G__17206 = args17204.length;
switch (G__17206) {
case 1:
return sablono.core.range_field17203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17204.length)].join('')));

}
});

sablono.core.range_field17203.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.range_field17203.call(null,name__12989__auto__,null);
});

sablono.core.range_field17203.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.range_field17203.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17203);

/**
 * Creates a search input field.
 */
sablono.core.search_field17207 = (function sablono$core$search_field17207(var_args){
var args17208 = [];
var len__6152__auto___17275 = arguments.length;
var i__6153__auto___17276 = (0);
while(true){
if((i__6153__auto___17276 < len__6152__auto___17275)){
args17208.push((arguments[i__6153__auto___17276]));

var G__17277 = (i__6153__auto___17276 + (1));
i__6153__auto___17276 = G__17277;
continue;
} else {
}
break;
}

var G__17210 = args17208.length;
switch (G__17210) {
case 1:
return sablono.core.search_field17207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17208.length)].join('')));

}
});

sablono.core.search_field17207.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.search_field17207.call(null,name__12989__auto__,null);
});

sablono.core.search_field17207.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.search_field17207.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17207);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17211 = (function sablono$core$tel_field17211(var_args){
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
return sablono.core.tel_field17211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17212.length)].join('')));

}
});

sablono.core.tel_field17211.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.tel_field17211.call(null,name__12989__auto__,null);
});

sablono.core.tel_field17211.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.tel_field17211.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17211);

/**
 * Creates a text input field.
 */
sablono.core.text_field17215 = (function sablono$core$text_field17215(var_args){
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
return sablono.core.text_field17215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17216.length)].join('')));

}
});

sablono.core.text_field17215.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.text_field17215.call(null,name__12989__auto__,null);
});

sablono.core.text_field17215.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.text_field17215.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17215);

/**
 * Creates a time input field.
 */
sablono.core.time_field17219 = (function sablono$core$time_field17219(var_args){
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
return sablono.core.time_field17219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17220.length)].join('')));

}
});

sablono.core.time_field17219.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.time_field17219.call(null,name__12989__auto__,null);
});

sablono.core.time_field17219.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.time_field17219.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17219);

/**
 * Creates a url input field.
 */
sablono.core.url_field17223 = (function sablono$core$url_field17223(var_args){
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
return sablono.core.url_field17223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17224.length)].join('')));

}
});

sablono.core.url_field17223.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.url_field17223.call(null,name__12989__auto__,null);
});

sablono.core.url_field17223.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.url_field17223.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17223);

/**
 * Creates a week input field.
 */
sablono.core.week_field17227 = (function sablono$core$week_field17227(var_args){
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
return sablono.core.week_field17227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17228.length)].join('')));

}
});

sablono.core.week_field17227.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.week_field17227.call(null,name__12989__auto__,null);
});

sablono.core.week_field17227.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.week_field17227.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17227);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17299 = (function sablono$core$check_box17299(var_args){
var args17300 = [];
var len__6152__auto___17303 = arguments.length;
var i__6153__auto___17304 = (0);
while(true){
if((i__6153__auto___17304 < len__6152__auto___17303)){
args17300.push((arguments[i__6153__auto___17304]));

var G__17305 = (i__6153__auto___17304 + (1));
i__6153__auto___17304 = G__17305;
continue;
} else {
}
break;
}

var G__17302 = args17300.length;
switch (G__17302) {
case 1:
return sablono.core.check_box17299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17299.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17300.length)].join('')));

}
});

sablono.core.check_box17299.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17299.call(null,name,null);
});

sablono.core.check_box17299.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17299.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17299.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17299.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17299);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17307 = (function sablono$core$radio_button17307(var_args){
var args17308 = [];
var len__6152__auto___17311 = arguments.length;
var i__6153__auto___17312 = (0);
while(true){
if((i__6153__auto___17312 < len__6152__auto___17311)){
args17308.push((arguments[i__6153__auto___17312]));

var G__17313 = (i__6153__auto___17312 + (1));
i__6153__auto___17312 = G__17313;
continue;
} else {
}
break;
}

var G__17310 = args17308.length;
switch (G__17310) {
case 1:
return sablono.core.radio_button17307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17307.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17308.length)].join('')));

}
});

sablono.core.radio_button17307.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17307.call(null,group,null);
});

sablono.core.radio_button17307.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17307.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17307.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17307.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17307);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17315 = (function sablono$core$select_options17315(coll){
var iter__5866__auto__ = (function sablono$core$select_options17315_$_iter__17324(s__17325){
return (new cljs.core.LazySeq(null,(function (){
var s__17325__$1 = s__17325;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17325__$1);
if(temp__4425__auto__){
var s__17325__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17325__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17325__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17327 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17326 = (0);
while(true){
if((i__17326 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17326);
cljs.core.chunk_append.call(null,b__17327,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17330 = x;
var text = cljs.core.nth.call(null,vec__17330,(0),null);
var val = cljs.core.nth.call(null,vec__17330,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17330,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17332 = (i__17326 + (1));
i__17326 = G__17332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17327),sablono$core$select_options17315_$_iter__17324.call(null,cljs.core.chunk_rest.call(null,s__17325__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17327),null);
}
} else {
var x = cljs.core.first.call(null,s__17325__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17331 = x;
var text = cljs.core.nth.call(null,vec__17331,(0),null);
var val = cljs.core.nth.call(null,vec__17331,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17331,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17315.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17315_$_iter__17324.call(null,cljs.core.rest.call(null,s__17325__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17315);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17333 = (function sablono$core$drop_down17333(var_args){
var args17334 = [];
var len__6152__auto___17337 = arguments.length;
var i__6153__auto___17338 = (0);
while(true){
if((i__6153__auto___17338 < len__6152__auto___17337)){
args17334.push((arguments[i__6153__auto___17338]));

var G__17339 = (i__6153__auto___17338 + (1));
i__6153__auto___17338 = G__17339;
continue;
} else {
}
break;
}

var G__17336 = args17334.length;
switch (G__17336) {
case 2:
return sablono.core.drop_down17333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17333.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17334.length)].join('')));

}
});

sablono.core.drop_down17333.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17333.call(null,name,options,null);
});

sablono.core.drop_down17333.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17333.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17333);
/**
 * Creates a text area element.
 */
sablono.core.text_area17341 = (function sablono$core$text_area17341(var_args){
var args17342 = [];
var len__6152__auto___17345 = arguments.length;
var i__6153__auto___17346 = (0);
while(true){
if((i__6153__auto___17346 < len__6152__auto___17345)){
args17342.push((arguments[i__6153__auto___17346]));

var G__17347 = (i__6153__auto___17346 + (1));
i__6153__auto___17346 = G__17347;
continue;
} else {
}
break;
}

var G__17344 = args17342.length;
switch (G__17344) {
case 1:
return sablono.core.text_area17341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17342.length)].join('')));

}
});

sablono.core.text_area17341.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17341.call(null,name,null);
});

sablono.core.text_area17341.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17341.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17341);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17349 = (function sablono$core$label17349(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17349);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17350 = (function sablono$core$submit_button17350(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17350);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17351 = (function sablono$core$reset_button17351(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17351);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17352 = (function sablono$core$form_to17352(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17357 = arguments.length;
var i__6153__auto___17358 = (0);
while(true){
if((i__6153__auto___17358 < len__6152__auto___17357)){
args__6159__auto__.push((arguments[i__6153__auto___17358]));

var G__17359 = (i__6153__auto___17358 + (1));
i__6153__auto___17358 = G__17359;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17352.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17352.cljs$core$IFn$_invoke$arity$variadic = (function (p__17355,body){
var vec__17356 = p__17355;
var method = cljs.core.nth.call(null,vec__17356,(0),null);
var action = cljs.core.nth.call(null,vec__17356,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17352.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17352.cljs$lang$applyTo = (function (seq17353){
var G__17354 = cljs.core.first.call(null,seq17353);
var seq17353__$1 = cljs.core.next.call(null,seq17353);
return sablono.core.form_to17352.cljs$core$IFn$_invoke$arity$variadic(G__17354,seq17353__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17352);

//# sourceMappingURL=core.js.map