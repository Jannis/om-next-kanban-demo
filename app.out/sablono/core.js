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
var G__17088__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17087 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17087,(0),null);
var body = cljs.core.nthnext.call(null,vec__17087,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17089__i = 0, G__17089__a = new Array(arguments.length -  0);
while (G__17089__i < G__17089__a.length) {G__17089__a[G__17089__i] = arguments[G__17089__i + 0]; ++G__17089__i;}
  args = new cljs.core.IndexedSeq(G__17089__a,0);
} 
return G__17088__delegate.call(this,args);};
G__17088.cljs$lang$maxFixedArity = 0;
G__17088.cljs$lang$applyTo = (function (arglist__17090){
var args = cljs.core.seq(arglist__17090);
return G__17088__delegate(args);
});
G__17088.cljs$core$IFn$_invoke$arity$variadic = G__17088__delegate;
return G__17088;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17095(s__17096){
return (new cljs.core.LazySeq(null,(function (){
var s__17096__$1 = s__17096;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17096__$1);
if(temp__4425__auto__){
var s__17096__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17096__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17096__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17098 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17097 = (0);
while(true){
if((i__17097 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17097);
cljs.core.chunk_append.call(null,b__17098,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17099 = (i__17097 + (1));
i__17097 = G__17099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17098),sablono$core$update_arglists_$_iter__17095.call(null,cljs.core.chunk_rest.call(null,s__17096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17098),null);
}
} else {
var args = cljs.core.first.call(null,s__17096__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17095.call(null,cljs.core.rest.call(null,s__17096__$2)));
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
var len__6152__auto___17105 = arguments.length;
var i__6153__auto___17106 = (0);
while(true){
if((i__6153__auto___17106 < len__6152__auto___17105)){
args__6159__auto__.push((arguments[i__6153__auto___17106]));

var G__17107 = (i__6153__auto___17106 + (1));
i__6153__auto___17106 = G__17107;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17101(s__17102){
return (new cljs.core.LazySeq(null,(function (){
var s__17102__$1 = s__17102;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17102__$1);
if(temp__4425__auto__){
var s__17102__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17102__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17102__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17104 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17103 = (0);
while(true){
if((i__17103 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17103);
cljs.core.chunk_append.call(null,b__17104,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17108 = (i__17103 + (1));
i__17103 = G__17108;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17104),sablono$core$iter__17101.call(null,cljs.core.chunk_rest.call(null,s__17102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17104),null);
}
} else {
var style = cljs.core.first.call(null,s__17102__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17101.call(null,cljs.core.rest.call(null,s__17102__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17100){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17100));
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
sablono.core.link_to17109 = (function sablono$core$link_to17109(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17112 = arguments.length;
var i__6153__auto___17113 = (0);
while(true){
if((i__6153__auto___17113 < len__6152__auto___17112)){
args__6159__auto__.push((arguments[i__6153__auto___17113]));

var G__17114 = (i__6153__auto___17113 + (1));
i__6153__auto___17113 = G__17114;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17109.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17109.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17109.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17109.cljs$lang$applyTo = (function (seq17110){
var G__17111 = cljs.core.first.call(null,seq17110);
var seq17110__$1 = cljs.core.next.call(null,seq17110);
return sablono.core.link_to17109.cljs$core$IFn$_invoke$arity$variadic(G__17111,seq17110__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17109);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17115 = (function sablono$core$mail_to17115(var_args){
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
return sablono.core.mail_to17115.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17115.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17118){
var vec__17119 = p__17118;
var content = cljs.core.nth.call(null,vec__17119,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17115.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17115.cljs$lang$applyTo = (function (seq17116){
var G__17117 = cljs.core.first.call(null,seq17116);
var seq17116__$1 = cljs.core.next.call(null,seq17116);
return sablono.core.mail_to17115.cljs$core$IFn$_invoke$arity$variadic(G__17117,seq17116__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17115);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17123 = (function sablono$core$unordered_list17123(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17123_$_iter__17128(s__17129){
return (new cljs.core.LazySeq(null,(function (){
var s__17129__$1 = s__17129;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17129__$1);
if(temp__4425__auto__){
var s__17129__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17129__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17129__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17131 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17130 = (0);
while(true){
if((i__17130 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17130);
cljs.core.chunk_append.call(null,b__17131,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17132 = (i__17130 + (1));
i__17130 = G__17132;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17131),sablono$core$unordered_list17123_$_iter__17128.call(null,cljs.core.chunk_rest.call(null,s__17129__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17131),null);
}
} else {
var x = cljs.core.first.call(null,s__17129__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17123_$_iter__17128.call(null,cljs.core.rest.call(null,s__17129__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17123);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17133 = (function sablono$core$ordered_list17133(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17133_$_iter__17138(s__17139){
return (new cljs.core.LazySeq(null,(function (){
var s__17139__$1 = s__17139;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17139__$1);
if(temp__4425__auto__){
var s__17139__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17139__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17139__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17141 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17140 = (0);
while(true){
if((i__17140 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17140);
cljs.core.chunk_append.call(null,b__17141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17142 = (i__17140 + (1));
i__17140 = G__17142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17141),sablono$core$ordered_list17133_$_iter__17138.call(null,cljs.core.chunk_rest.call(null,s__17139__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17141),null);
}
} else {
var x = cljs.core.first.call(null,s__17139__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17133_$_iter__17138.call(null,cljs.core.rest.call(null,s__17139__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17133);
/**
 * Create an image element.
 */
sablono.core.image17143 = (function sablono$core$image17143(var_args){
var args17144 = [];
var len__6152__auto___17147 = arguments.length;
var i__6153__auto___17148 = (0);
while(true){
if((i__6153__auto___17148 < len__6152__auto___17147)){
args17144.push((arguments[i__6153__auto___17148]));

var G__17149 = (i__6153__auto___17148 + (1));
i__6153__auto___17148 = G__17149;
continue;
} else {
}
break;
}

var G__17146 = args17144.length;
switch (G__17146) {
case 1:
return sablono.core.image17143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17144.length)].join('')));

}
});

sablono.core.image17143.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17143.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17143.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17143);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17151_SHARP_,p2__17152_SHARP_){
return [cljs.core.str(p1__17151_SHARP_),cljs.core.str("["),cljs.core.str(p2__17152_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17153_SHARP_,p2__17154_SHARP_){
return [cljs.core.str(p1__17153_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17154_SHARP_)].join('');
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
sablono.core.color_field17155 = (function sablono$core$color_field17155(var_args){
var args17156 = [];
var len__6152__auto___17223 = arguments.length;
var i__6153__auto___17224 = (0);
while(true){
if((i__6153__auto___17224 < len__6152__auto___17223)){
args17156.push((arguments[i__6153__auto___17224]));

var G__17225 = (i__6153__auto___17224 + (1));
i__6153__auto___17224 = G__17225;
continue;
} else {
}
break;
}

var G__17158 = args17156.length;
switch (G__17158) {
case 1:
return sablono.core.color_field17155.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17155.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17156.length)].join('')));

}
});

sablono.core.color_field17155.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.color_field17155.call(null,name__13421__auto__,null);
});

sablono.core.color_field17155.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.color_field17155.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17155);

/**
 * Creates a date input field.
 */
sablono.core.date_field17159 = (function sablono$core$date_field17159(var_args){
var args17160 = [];
var len__6152__auto___17227 = arguments.length;
var i__6153__auto___17228 = (0);
while(true){
if((i__6153__auto___17228 < len__6152__auto___17227)){
args17160.push((arguments[i__6153__auto___17228]));

var G__17229 = (i__6153__auto___17228 + (1));
i__6153__auto___17228 = G__17229;
continue;
} else {
}
break;
}

var G__17162 = args17160.length;
switch (G__17162) {
case 1:
return sablono.core.date_field17159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17160.length)].join('')));

}
});

sablono.core.date_field17159.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.date_field17159.call(null,name__13421__auto__,null);
});

sablono.core.date_field17159.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.date_field17159.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17159);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17163 = (function sablono$core$datetime_field17163(var_args){
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
return sablono.core.datetime_field17163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17164.length)].join('')));

}
});

sablono.core.datetime_field17163.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.datetime_field17163.call(null,name__13421__auto__,null);
});

sablono.core.datetime_field17163.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.datetime_field17163.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17163);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17167 = (function sablono$core$datetime_local_field17167(var_args){
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
return sablono.core.datetime_local_field17167.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17167.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17168.length)].join('')));

}
});

sablono.core.datetime_local_field17167.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.datetime_local_field17167.call(null,name__13421__auto__,null);
});

sablono.core.datetime_local_field17167.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.datetime_local_field17167.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17167);

/**
 * Creates a email input field.
 */
sablono.core.email_field17171 = (function sablono$core$email_field17171(var_args){
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
return sablono.core.email_field17171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17172.length)].join('')));

}
});

sablono.core.email_field17171.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.email_field17171.call(null,name__13421__auto__,null);
});

sablono.core.email_field17171.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.email_field17171.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17171);

/**
 * Creates a file input field.
 */
sablono.core.file_field17175 = (function sablono$core$file_field17175(var_args){
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
return sablono.core.file_field17175.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17175.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17176.length)].join('')));

}
});

sablono.core.file_field17175.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.file_field17175.call(null,name__13421__auto__,null);
});

sablono.core.file_field17175.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.file_field17175.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17175);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17179 = (function sablono$core$hidden_field17179(var_args){
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
return sablono.core.hidden_field17179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17180.length)].join('')));

}
});

sablono.core.hidden_field17179.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.hidden_field17179.call(null,name__13421__auto__,null);
});

sablono.core.hidden_field17179.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.hidden_field17179.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17179);

/**
 * Creates a month input field.
 */
sablono.core.month_field17183 = (function sablono$core$month_field17183(var_args){
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
return sablono.core.month_field17183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17184.length)].join('')));

}
});

sablono.core.month_field17183.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.month_field17183.call(null,name__13421__auto__,null);
});

sablono.core.month_field17183.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.month_field17183.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17183);

/**
 * Creates a number input field.
 */
sablono.core.number_field17187 = (function sablono$core$number_field17187(var_args){
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
return sablono.core.number_field17187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17188.length)].join('')));

}
});

sablono.core.number_field17187.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.number_field17187.call(null,name__13421__auto__,null);
});

sablono.core.number_field17187.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.number_field17187.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17187);

/**
 * Creates a password input field.
 */
sablono.core.password_field17191 = (function sablono$core$password_field17191(var_args){
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
return sablono.core.password_field17191.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17191.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17192.length)].join('')));

}
});

sablono.core.password_field17191.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.password_field17191.call(null,name__13421__auto__,null);
});

sablono.core.password_field17191.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.password_field17191.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17191);

/**
 * Creates a range input field.
 */
sablono.core.range_field17195 = (function sablono$core$range_field17195(var_args){
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
return sablono.core.range_field17195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17196.length)].join('')));

}
});

sablono.core.range_field17195.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.range_field17195.call(null,name__13421__auto__,null);
});

sablono.core.range_field17195.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.range_field17195.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17195);

/**
 * Creates a search input field.
 */
sablono.core.search_field17199 = (function sablono$core$search_field17199(var_args){
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
return sablono.core.search_field17199.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17199.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17200.length)].join('')));

}
});

sablono.core.search_field17199.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.search_field17199.call(null,name__13421__auto__,null);
});

sablono.core.search_field17199.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.search_field17199.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17199);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17203 = (function sablono$core$tel_field17203(var_args){
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
return sablono.core.tel_field17203.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17203.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17204.length)].join('')));

}
});

sablono.core.tel_field17203.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.tel_field17203.call(null,name__13421__auto__,null);
});

sablono.core.tel_field17203.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.tel_field17203.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17203);

/**
 * Creates a text input field.
 */
sablono.core.text_field17207 = (function sablono$core$text_field17207(var_args){
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
return sablono.core.text_field17207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17208.length)].join('')));

}
});

sablono.core.text_field17207.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.text_field17207.call(null,name__13421__auto__,null);
});

sablono.core.text_field17207.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.text_field17207.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17207);

/**
 * Creates a time input field.
 */
sablono.core.time_field17211 = (function sablono$core$time_field17211(var_args){
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
return sablono.core.time_field17211.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17211.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17212.length)].join('')));

}
});

sablono.core.time_field17211.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.time_field17211.call(null,name__13421__auto__,null);
});

sablono.core.time_field17211.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.time_field17211.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17211);

/**
 * Creates a url input field.
 */
sablono.core.url_field17215 = (function sablono$core$url_field17215(var_args){
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
return sablono.core.url_field17215.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17215.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17216.length)].join('')));

}
});

sablono.core.url_field17215.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.url_field17215.call(null,name__13421__auto__,null);
});

sablono.core.url_field17215.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.url_field17215.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17215);

/**
 * Creates a week input field.
 */
sablono.core.week_field17219 = (function sablono$core$week_field17219(var_args){
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
return sablono.core.week_field17219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17220.length)].join('')));

}
});

sablono.core.week_field17219.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.week_field17219.call(null,name__13421__auto__,null);
});

sablono.core.week_field17219.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.week_field17219.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17219);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17291 = (function sablono$core$check_box17291(var_args){
var args17292 = [];
var len__6152__auto___17295 = arguments.length;
var i__6153__auto___17296 = (0);
while(true){
if((i__6153__auto___17296 < len__6152__auto___17295)){
args17292.push((arguments[i__6153__auto___17296]));

var G__17297 = (i__6153__auto___17296 + (1));
i__6153__auto___17296 = G__17297;
continue;
} else {
}
break;
}

var G__17294 = args17292.length;
switch (G__17294) {
case 1:
return sablono.core.check_box17291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17291.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17292.length)].join('')));

}
});

sablono.core.check_box17291.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17291.call(null,name,null);
});

sablono.core.check_box17291.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17291.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17291.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17291.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17291);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17299 = (function sablono$core$radio_button17299(var_args){
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
return sablono.core.radio_button17299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17299.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17300.length)].join('')));

}
});

sablono.core.radio_button17299.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17299.call(null,group,null);
});

sablono.core.radio_button17299.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17299.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17299.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17299.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17299);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17307 = (function sablono$core$select_options17307(coll){
var iter__5866__auto__ = (function sablono$core$select_options17307_$_iter__17316(s__17317){
return (new cljs.core.LazySeq(null,(function (){
var s__17317__$1 = s__17317;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17317__$1);
if(temp__4425__auto__){
var s__17317__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17317__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17317__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17319 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17318 = (0);
while(true){
if((i__17318 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17318);
cljs.core.chunk_append.call(null,b__17319,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17322 = x;
var text = cljs.core.nth.call(null,vec__17322,(0),null);
var val = cljs.core.nth.call(null,vec__17322,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17322,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17307.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17324 = (i__17318 + (1));
i__17318 = G__17324;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17319),sablono$core$select_options17307_$_iter__17316.call(null,cljs.core.chunk_rest.call(null,s__17317__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17319),null);
}
} else {
var x = cljs.core.first.call(null,s__17317__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17323 = x;
var text = cljs.core.nth.call(null,vec__17323,(0),null);
var val = cljs.core.nth.call(null,vec__17323,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17323,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17307.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17307_$_iter__17316.call(null,cljs.core.rest.call(null,s__17317__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17307);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17325 = (function sablono$core$drop_down17325(var_args){
var args17326 = [];
var len__6152__auto___17329 = arguments.length;
var i__6153__auto___17330 = (0);
while(true){
if((i__6153__auto___17330 < len__6152__auto___17329)){
args17326.push((arguments[i__6153__auto___17330]));

var G__17331 = (i__6153__auto___17330 + (1));
i__6153__auto___17330 = G__17331;
continue;
} else {
}
break;
}

var G__17328 = args17326.length;
switch (G__17328) {
case 2:
return sablono.core.drop_down17325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17325.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17326.length)].join('')));

}
});

sablono.core.drop_down17325.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17325.call(null,name,options,null);
});

sablono.core.drop_down17325.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17325.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17325);
/**
 * Creates a text area element.
 */
sablono.core.text_area17333 = (function sablono$core$text_area17333(var_args){
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
case 1:
return sablono.core.text_area17333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17334.length)].join('')));

}
});

sablono.core.text_area17333.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17333.call(null,name,null);
});

sablono.core.text_area17333.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17333.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17333);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17341 = (function sablono$core$label17341(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17341);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17342 = (function sablono$core$submit_button17342(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17342);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17343 = (function sablono$core$reset_button17343(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17343);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17344 = (function sablono$core$form_to17344(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17349 = arguments.length;
var i__6153__auto___17350 = (0);
while(true){
if((i__6153__auto___17350 < len__6152__auto___17349)){
args__6159__auto__.push((arguments[i__6153__auto___17350]));

var G__17351 = (i__6153__auto___17350 + (1));
i__6153__auto___17350 = G__17351;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17344.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17344.cljs$core$IFn$_invoke$arity$variadic = (function (p__17347,body){
var vec__17348 = p__17347;
var method = cljs.core.nth.call(null,vec__17348,(0),null);
var action = cljs.core.nth.call(null,vec__17348,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17344.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17344.cljs$lang$applyTo = (function (seq17345){
var G__17346 = cljs.core.first.call(null,seq17345);
var seq17345__$1 = cljs.core.next.call(null,seq17345);
return sablono.core.form_to17344.cljs$core$IFn$_invoke$arity$variadic(G__17346,seq17345__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17344);

//# sourceMappingURL=core.js.map