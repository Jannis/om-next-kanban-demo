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
var G__17070__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17069 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17069,(0),null);
var body = cljs.core.nthnext.call(null,vec__17069,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17071__i = 0, G__17071__a = new Array(arguments.length -  0);
while (G__17071__i < G__17071__a.length) {G__17071__a[G__17071__i] = arguments[G__17071__i + 0]; ++G__17071__i;}
  args = new cljs.core.IndexedSeq(G__17071__a,0);
} 
return G__17070__delegate.call(this,args);};
G__17070.cljs$lang$maxFixedArity = 0;
G__17070.cljs$lang$applyTo = (function (arglist__17072){
var args = cljs.core.seq(arglist__17072);
return G__17070__delegate(args);
});
G__17070.cljs$core$IFn$_invoke$arity$variadic = G__17070__delegate;
return G__17070;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17077(s__17078){
return (new cljs.core.LazySeq(null,(function (){
var s__17078__$1 = s__17078;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17078__$1);
if(temp__4425__auto__){
var s__17078__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17078__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17078__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17080 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17079 = (0);
while(true){
if((i__17079 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17079);
cljs.core.chunk_append.call(null,b__17080,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17081 = (i__17079 + (1));
i__17079 = G__17081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17080),sablono$core$update_arglists_$_iter__17077.call(null,cljs.core.chunk_rest.call(null,s__17078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17080),null);
}
} else {
var args = cljs.core.first.call(null,s__17078__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17077.call(null,cljs.core.rest.call(null,s__17078__$2)));
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
var len__6152__auto___17087 = arguments.length;
var i__6153__auto___17088 = (0);
while(true){
if((i__6153__auto___17088 < len__6152__auto___17087)){
args__6159__auto__.push((arguments[i__6153__auto___17088]));

var G__17089 = (i__6153__auto___17088 + (1));
i__6153__auto___17088 = G__17089;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17083(s__17084){
return (new cljs.core.LazySeq(null,(function (){
var s__17084__$1 = s__17084;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17084__$1);
if(temp__4425__auto__){
var s__17084__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17084__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17084__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17086 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17085 = (0);
while(true){
if((i__17085 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17085);
cljs.core.chunk_append.call(null,b__17086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17090 = (i__17085 + (1));
i__17085 = G__17090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17086),sablono$core$iter__17083.call(null,cljs.core.chunk_rest.call(null,s__17084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17086),null);
}
} else {
var style = cljs.core.first.call(null,s__17084__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17083.call(null,cljs.core.rest.call(null,s__17084__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17082){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17082));
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
sablono.core.link_to17091 = (function sablono$core$link_to17091(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17094 = arguments.length;
var i__6153__auto___17095 = (0);
while(true){
if((i__6153__auto___17095 < len__6152__auto___17094)){
args__6159__auto__.push((arguments[i__6153__auto___17095]));

var G__17096 = (i__6153__auto___17095 + (1));
i__6153__auto___17095 = G__17096;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17091.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17091.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17091.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17091.cljs$lang$applyTo = (function (seq17092){
var G__17093 = cljs.core.first.call(null,seq17092);
var seq17092__$1 = cljs.core.next.call(null,seq17092);
return sablono.core.link_to17091.cljs$core$IFn$_invoke$arity$variadic(G__17093,seq17092__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17091);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17097 = (function sablono$core$mail_to17097(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17102 = arguments.length;
var i__6153__auto___17103 = (0);
while(true){
if((i__6153__auto___17103 < len__6152__auto___17102)){
args__6159__auto__.push((arguments[i__6153__auto___17103]));

var G__17104 = (i__6153__auto___17103 + (1));
i__6153__auto___17103 = G__17104;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17097.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17097.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17100){
var vec__17101 = p__17100;
var content = cljs.core.nth.call(null,vec__17101,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17097.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17097.cljs$lang$applyTo = (function (seq17098){
var G__17099 = cljs.core.first.call(null,seq17098);
var seq17098__$1 = cljs.core.next.call(null,seq17098);
return sablono.core.mail_to17097.cljs$core$IFn$_invoke$arity$variadic(G__17099,seq17098__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17097);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17105 = (function sablono$core$unordered_list17105(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17105_$_iter__17110(s__17111){
return (new cljs.core.LazySeq(null,(function (){
var s__17111__$1 = s__17111;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17111__$1);
if(temp__4425__auto__){
var s__17111__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17111__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17111__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17113 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17112 = (0);
while(true){
if((i__17112 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17112);
cljs.core.chunk_append.call(null,b__17113,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17114 = (i__17112 + (1));
i__17112 = G__17114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17113),sablono$core$unordered_list17105_$_iter__17110.call(null,cljs.core.chunk_rest.call(null,s__17111__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17113),null);
}
} else {
var x = cljs.core.first.call(null,s__17111__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17105_$_iter__17110.call(null,cljs.core.rest.call(null,s__17111__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17105);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17115 = (function sablono$core$ordered_list17115(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17115_$_iter__17120(s__17121){
return (new cljs.core.LazySeq(null,(function (){
var s__17121__$1 = s__17121;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17121__$1);
if(temp__4425__auto__){
var s__17121__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17121__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17121__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17123 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17122 = (0);
while(true){
if((i__17122 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17122);
cljs.core.chunk_append.call(null,b__17123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17124 = (i__17122 + (1));
i__17122 = G__17124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17123),sablono$core$ordered_list17115_$_iter__17120.call(null,cljs.core.chunk_rest.call(null,s__17121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17123),null);
}
} else {
var x = cljs.core.first.call(null,s__17121__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17115_$_iter__17120.call(null,cljs.core.rest.call(null,s__17121__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17115);
/**
 * Create an image element.
 */
sablono.core.image17125 = (function sablono$core$image17125(var_args){
var args17126 = [];
var len__6152__auto___17129 = arguments.length;
var i__6153__auto___17130 = (0);
while(true){
if((i__6153__auto___17130 < len__6152__auto___17129)){
args17126.push((arguments[i__6153__auto___17130]));

var G__17131 = (i__6153__auto___17130 + (1));
i__6153__auto___17130 = G__17131;
continue;
} else {
}
break;
}

var G__17128 = args17126.length;
switch (G__17128) {
case 1:
return sablono.core.image17125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17126.length)].join('')));

}
});

sablono.core.image17125.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17125.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17125.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17125);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17133_SHARP_,p2__17134_SHARP_){
return [cljs.core.str(p1__17133_SHARP_),cljs.core.str("["),cljs.core.str(p2__17134_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17135_SHARP_,p2__17136_SHARP_){
return [cljs.core.str(p1__17135_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17136_SHARP_)].join('');
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
sablono.core.color_field17137 = (function sablono$core$color_field17137(var_args){
var args17138 = [];
var len__6152__auto___17205 = arguments.length;
var i__6153__auto___17206 = (0);
while(true){
if((i__6153__auto___17206 < len__6152__auto___17205)){
args17138.push((arguments[i__6153__auto___17206]));

var G__17207 = (i__6153__auto___17206 + (1));
i__6153__auto___17206 = G__17207;
continue;
} else {
}
break;
}

var G__17140 = args17138.length;
switch (G__17140) {
case 1:
return sablono.core.color_field17137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17138.length)].join('')));

}
});

sablono.core.color_field17137.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.color_field17137.call(null,name__12986__auto__,null);
});

sablono.core.color_field17137.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.color_field17137.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17137);

/**
 * Creates a date input field.
 */
sablono.core.date_field17141 = (function sablono$core$date_field17141(var_args){
var args17142 = [];
var len__6152__auto___17209 = arguments.length;
var i__6153__auto___17210 = (0);
while(true){
if((i__6153__auto___17210 < len__6152__auto___17209)){
args17142.push((arguments[i__6153__auto___17210]));

var G__17211 = (i__6153__auto___17210 + (1));
i__6153__auto___17210 = G__17211;
continue;
} else {
}
break;
}

var G__17144 = args17142.length;
switch (G__17144) {
case 1:
return sablono.core.date_field17141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17142.length)].join('')));

}
});

sablono.core.date_field17141.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.date_field17141.call(null,name__12986__auto__,null);
});

sablono.core.date_field17141.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.date_field17141.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17141);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17145 = (function sablono$core$datetime_field17145(var_args){
var args17146 = [];
var len__6152__auto___17213 = arguments.length;
var i__6153__auto___17214 = (0);
while(true){
if((i__6153__auto___17214 < len__6152__auto___17213)){
args17146.push((arguments[i__6153__auto___17214]));

var G__17215 = (i__6153__auto___17214 + (1));
i__6153__auto___17214 = G__17215;
continue;
} else {
}
break;
}

var G__17148 = args17146.length;
switch (G__17148) {
case 1:
return sablono.core.datetime_field17145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17146.length)].join('')));

}
});

sablono.core.datetime_field17145.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.datetime_field17145.call(null,name__12986__auto__,null);
});

sablono.core.datetime_field17145.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.datetime_field17145.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17145);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17149 = (function sablono$core$datetime_local_field17149(var_args){
var args17150 = [];
var len__6152__auto___17217 = arguments.length;
var i__6153__auto___17218 = (0);
while(true){
if((i__6153__auto___17218 < len__6152__auto___17217)){
args17150.push((arguments[i__6153__auto___17218]));

var G__17219 = (i__6153__auto___17218 + (1));
i__6153__auto___17218 = G__17219;
continue;
} else {
}
break;
}

var G__17152 = args17150.length;
switch (G__17152) {
case 1:
return sablono.core.datetime_local_field17149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17150.length)].join('')));

}
});

sablono.core.datetime_local_field17149.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.datetime_local_field17149.call(null,name__12986__auto__,null);
});

sablono.core.datetime_local_field17149.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.datetime_local_field17149.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17149);

/**
 * Creates a email input field.
 */
sablono.core.email_field17153 = (function sablono$core$email_field17153(var_args){
var args17154 = [];
var len__6152__auto___17221 = arguments.length;
var i__6153__auto___17222 = (0);
while(true){
if((i__6153__auto___17222 < len__6152__auto___17221)){
args17154.push((arguments[i__6153__auto___17222]));

var G__17223 = (i__6153__auto___17222 + (1));
i__6153__auto___17222 = G__17223;
continue;
} else {
}
break;
}

var G__17156 = args17154.length;
switch (G__17156) {
case 1:
return sablono.core.email_field17153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17154.length)].join('')));

}
});

sablono.core.email_field17153.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.email_field17153.call(null,name__12986__auto__,null);
});

sablono.core.email_field17153.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.email_field17153.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17153);

/**
 * Creates a file input field.
 */
sablono.core.file_field17157 = (function sablono$core$file_field17157(var_args){
var args17158 = [];
var len__6152__auto___17225 = arguments.length;
var i__6153__auto___17226 = (0);
while(true){
if((i__6153__auto___17226 < len__6152__auto___17225)){
args17158.push((arguments[i__6153__auto___17226]));

var G__17227 = (i__6153__auto___17226 + (1));
i__6153__auto___17226 = G__17227;
continue;
} else {
}
break;
}

var G__17160 = args17158.length;
switch (G__17160) {
case 1:
return sablono.core.file_field17157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17158.length)].join('')));

}
});

sablono.core.file_field17157.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.file_field17157.call(null,name__12986__auto__,null);
});

sablono.core.file_field17157.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.file_field17157.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17157);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17161 = (function sablono$core$hidden_field17161(var_args){
var args17162 = [];
var len__6152__auto___17229 = arguments.length;
var i__6153__auto___17230 = (0);
while(true){
if((i__6153__auto___17230 < len__6152__auto___17229)){
args17162.push((arguments[i__6153__auto___17230]));

var G__17231 = (i__6153__auto___17230 + (1));
i__6153__auto___17230 = G__17231;
continue;
} else {
}
break;
}

var G__17164 = args17162.length;
switch (G__17164) {
case 1:
return sablono.core.hidden_field17161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17162.length)].join('')));

}
});

sablono.core.hidden_field17161.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.hidden_field17161.call(null,name__12986__auto__,null);
});

sablono.core.hidden_field17161.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.hidden_field17161.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17161);

/**
 * Creates a month input field.
 */
sablono.core.month_field17165 = (function sablono$core$month_field17165(var_args){
var args17166 = [];
var len__6152__auto___17233 = arguments.length;
var i__6153__auto___17234 = (0);
while(true){
if((i__6153__auto___17234 < len__6152__auto___17233)){
args17166.push((arguments[i__6153__auto___17234]));

var G__17235 = (i__6153__auto___17234 + (1));
i__6153__auto___17234 = G__17235;
continue;
} else {
}
break;
}

var G__17168 = args17166.length;
switch (G__17168) {
case 1:
return sablono.core.month_field17165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17166.length)].join('')));

}
});

sablono.core.month_field17165.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.month_field17165.call(null,name__12986__auto__,null);
});

sablono.core.month_field17165.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.month_field17165.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17165);

/**
 * Creates a number input field.
 */
sablono.core.number_field17169 = (function sablono$core$number_field17169(var_args){
var args17170 = [];
var len__6152__auto___17237 = arguments.length;
var i__6153__auto___17238 = (0);
while(true){
if((i__6153__auto___17238 < len__6152__auto___17237)){
args17170.push((arguments[i__6153__auto___17238]));

var G__17239 = (i__6153__auto___17238 + (1));
i__6153__auto___17238 = G__17239;
continue;
} else {
}
break;
}

var G__17172 = args17170.length;
switch (G__17172) {
case 1:
return sablono.core.number_field17169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17170.length)].join('')));

}
});

sablono.core.number_field17169.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.number_field17169.call(null,name__12986__auto__,null);
});

sablono.core.number_field17169.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.number_field17169.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17169);

/**
 * Creates a password input field.
 */
sablono.core.password_field17173 = (function sablono$core$password_field17173(var_args){
var args17174 = [];
var len__6152__auto___17241 = arguments.length;
var i__6153__auto___17242 = (0);
while(true){
if((i__6153__auto___17242 < len__6152__auto___17241)){
args17174.push((arguments[i__6153__auto___17242]));

var G__17243 = (i__6153__auto___17242 + (1));
i__6153__auto___17242 = G__17243;
continue;
} else {
}
break;
}

var G__17176 = args17174.length;
switch (G__17176) {
case 1:
return sablono.core.password_field17173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17174.length)].join('')));

}
});

sablono.core.password_field17173.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.password_field17173.call(null,name__12986__auto__,null);
});

sablono.core.password_field17173.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.password_field17173.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17173);

/**
 * Creates a range input field.
 */
sablono.core.range_field17177 = (function sablono$core$range_field17177(var_args){
var args17178 = [];
var len__6152__auto___17245 = arguments.length;
var i__6153__auto___17246 = (0);
while(true){
if((i__6153__auto___17246 < len__6152__auto___17245)){
args17178.push((arguments[i__6153__auto___17246]));

var G__17247 = (i__6153__auto___17246 + (1));
i__6153__auto___17246 = G__17247;
continue;
} else {
}
break;
}

var G__17180 = args17178.length;
switch (G__17180) {
case 1:
return sablono.core.range_field17177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17178.length)].join('')));

}
});

sablono.core.range_field17177.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.range_field17177.call(null,name__12986__auto__,null);
});

sablono.core.range_field17177.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.range_field17177.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17177);

/**
 * Creates a search input field.
 */
sablono.core.search_field17181 = (function sablono$core$search_field17181(var_args){
var args17182 = [];
var len__6152__auto___17249 = arguments.length;
var i__6153__auto___17250 = (0);
while(true){
if((i__6153__auto___17250 < len__6152__auto___17249)){
args17182.push((arguments[i__6153__auto___17250]));

var G__17251 = (i__6153__auto___17250 + (1));
i__6153__auto___17250 = G__17251;
continue;
} else {
}
break;
}

var G__17184 = args17182.length;
switch (G__17184) {
case 1:
return sablono.core.search_field17181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17182.length)].join('')));

}
});

sablono.core.search_field17181.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.search_field17181.call(null,name__12986__auto__,null);
});

sablono.core.search_field17181.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.search_field17181.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17181);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17185 = (function sablono$core$tel_field17185(var_args){
var args17186 = [];
var len__6152__auto___17253 = arguments.length;
var i__6153__auto___17254 = (0);
while(true){
if((i__6153__auto___17254 < len__6152__auto___17253)){
args17186.push((arguments[i__6153__auto___17254]));

var G__17255 = (i__6153__auto___17254 + (1));
i__6153__auto___17254 = G__17255;
continue;
} else {
}
break;
}

var G__17188 = args17186.length;
switch (G__17188) {
case 1:
return sablono.core.tel_field17185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17186.length)].join('')));

}
});

sablono.core.tel_field17185.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.tel_field17185.call(null,name__12986__auto__,null);
});

sablono.core.tel_field17185.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.tel_field17185.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17185);

/**
 * Creates a text input field.
 */
sablono.core.text_field17189 = (function sablono$core$text_field17189(var_args){
var args17190 = [];
var len__6152__auto___17257 = arguments.length;
var i__6153__auto___17258 = (0);
while(true){
if((i__6153__auto___17258 < len__6152__auto___17257)){
args17190.push((arguments[i__6153__auto___17258]));

var G__17259 = (i__6153__auto___17258 + (1));
i__6153__auto___17258 = G__17259;
continue;
} else {
}
break;
}

var G__17192 = args17190.length;
switch (G__17192) {
case 1:
return sablono.core.text_field17189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17190.length)].join('')));

}
});

sablono.core.text_field17189.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.text_field17189.call(null,name__12986__auto__,null);
});

sablono.core.text_field17189.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.text_field17189.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17189);

/**
 * Creates a time input field.
 */
sablono.core.time_field17193 = (function sablono$core$time_field17193(var_args){
var args17194 = [];
var len__6152__auto___17261 = arguments.length;
var i__6153__auto___17262 = (0);
while(true){
if((i__6153__auto___17262 < len__6152__auto___17261)){
args17194.push((arguments[i__6153__auto___17262]));

var G__17263 = (i__6153__auto___17262 + (1));
i__6153__auto___17262 = G__17263;
continue;
} else {
}
break;
}

var G__17196 = args17194.length;
switch (G__17196) {
case 1:
return sablono.core.time_field17193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17194.length)].join('')));

}
});

sablono.core.time_field17193.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.time_field17193.call(null,name__12986__auto__,null);
});

sablono.core.time_field17193.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.time_field17193.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17193);

/**
 * Creates a url input field.
 */
sablono.core.url_field17197 = (function sablono$core$url_field17197(var_args){
var args17198 = [];
var len__6152__auto___17265 = arguments.length;
var i__6153__auto___17266 = (0);
while(true){
if((i__6153__auto___17266 < len__6152__auto___17265)){
args17198.push((arguments[i__6153__auto___17266]));

var G__17267 = (i__6153__auto___17266 + (1));
i__6153__auto___17266 = G__17267;
continue;
} else {
}
break;
}

var G__17200 = args17198.length;
switch (G__17200) {
case 1:
return sablono.core.url_field17197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17198.length)].join('')));

}
});

sablono.core.url_field17197.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.url_field17197.call(null,name__12986__auto__,null);
});

sablono.core.url_field17197.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.url_field17197.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17197);

/**
 * Creates a week input field.
 */
sablono.core.week_field17201 = (function sablono$core$week_field17201(var_args){
var args17202 = [];
var len__6152__auto___17269 = arguments.length;
var i__6153__auto___17270 = (0);
while(true){
if((i__6153__auto___17270 < len__6152__auto___17269)){
args17202.push((arguments[i__6153__auto___17270]));

var G__17271 = (i__6153__auto___17270 + (1));
i__6153__auto___17270 = G__17271;
continue;
} else {
}
break;
}

var G__17204 = args17202.length;
switch (G__17204) {
case 1:
return sablono.core.week_field17201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17202.length)].join('')));

}
});

sablono.core.week_field17201.cljs$core$IFn$_invoke$arity$1 = (function (name__12986__auto__){
return sablono.core.week_field17201.call(null,name__12986__auto__,null);
});

sablono.core.week_field17201.cljs$core$IFn$_invoke$arity$2 = (function (name__12986__auto__,value__12987__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12986__auto__,value__12987__auto__);
});

sablono.core.week_field17201.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17201);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17273 = (function sablono$core$check_box17273(var_args){
var args17274 = [];
var len__6152__auto___17277 = arguments.length;
var i__6153__auto___17278 = (0);
while(true){
if((i__6153__auto___17278 < len__6152__auto___17277)){
args17274.push((arguments[i__6153__auto___17278]));

var G__17279 = (i__6153__auto___17278 + (1));
i__6153__auto___17278 = G__17279;
continue;
} else {
}
break;
}

var G__17276 = args17274.length;
switch (G__17276) {
case 1:
return sablono.core.check_box17273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17273.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17274.length)].join('')));

}
});

sablono.core.check_box17273.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17273.call(null,name,null);
});

sablono.core.check_box17273.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17273.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17273.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17273.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17273);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17281 = (function sablono$core$radio_button17281(var_args){
var args17282 = [];
var len__6152__auto___17285 = arguments.length;
var i__6153__auto___17286 = (0);
while(true){
if((i__6153__auto___17286 < len__6152__auto___17285)){
args17282.push((arguments[i__6153__auto___17286]));

var G__17287 = (i__6153__auto___17286 + (1));
i__6153__auto___17286 = G__17287;
continue;
} else {
}
break;
}

var G__17284 = args17282.length;
switch (G__17284) {
case 1:
return sablono.core.radio_button17281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17281.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17282.length)].join('')));

}
});

sablono.core.radio_button17281.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17281.call(null,group,null);
});

sablono.core.radio_button17281.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17281.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17281.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17281.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17281);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17289 = (function sablono$core$select_options17289(coll){
var iter__5866__auto__ = (function sablono$core$select_options17289_$_iter__17298(s__17299){
return (new cljs.core.LazySeq(null,(function (){
var s__17299__$1 = s__17299;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17299__$1);
if(temp__4425__auto__){
var s__17299__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17299__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17299__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17301 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17300 = (0);
while(true){
if((i__17300 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17300);
cljs.core.chunk_append.call(null,b__17301,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17304 = x;
var text = cljs.core.nth.call(null,vec__17304,(0),null);
var val = cljs.core.nth.call(null,vec__17304,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17304,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17289.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17306 = (i__17300 + (1));
i__17300 = G__17306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17301),sablono$core$select_options17289_$_iter__17298.call(null,cljs.core.chunk_rest.call(null,s__17299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17301),null);
}
} else {
var x = cljs.core.first.call(null,s__17299__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17305 = x;
var text = cljs.core.nth.call(null,vec__17305,(0),null);
var val = cljs.core.nth.call(null,vec__17305,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17305,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17289.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17289_$_iter__17298.call(null,cljs.core.rest.call(null,s__17299__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17289);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17307 = (function sablono$core$drop_down17307(var_args){
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
case 2:
return sablono.core.drop_down17307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17307.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17308.length)].join('')));

}
});

sablono.core.drop_down17307.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17307.call(null,name,options,null);
});

sablono.core.drop_down17307.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17307.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17307);
/**
 * Creates a text area element.
 */
sablono.core.text_area17315 = (function sablono$core$text_area17315(var_args){
var args17316 = [];
var len__6152__auto___17319 = arguments.length;
var i__6153__auto___17320 = (0);
while(true){
if((i__6153__auto___17320 < len__6152__auto___17319)){
args17316.push((arguments[i__6153__auto___17320]));

var G__17321 = (i__6153__auto___17320 + (1));
i__6153__auto___17320 = G__17321;
continue;
} else {
}
break;
}

var G__17318 = args17316.length;
switch (G__17318) {
case 1:
return sablono.core.text_area17315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17316.length)].join('')));

}
});

sablono.core.text_area17315.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17315.call(null,name,null);
});

sablono.core.text_area17315.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17315.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17315);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17323 = (function sablono$core$label17323(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17323);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17324 = (function sablono$core$submit_button17324(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17324);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17325 = (function sablono$core$reset_button17325(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17325);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17326 = (function sablono$core$form_to17326(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17331 = arguments.length;
var i__6153__auto___17332 = (0);
while(true){
if((i__6153__auto___17332 < len__6152__auto___17331)){
args__6159__auto__.push((arguments[i__6153__auto___17332]));

var G__17333 = (i__6153__auto___17332 + (1));
i__6153__auto___17332 = G__17333;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17326.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17326.cljs$core$IFn$_invoke$arity$variadic = (function (p__17329,body){
var vec__17330 = p__17329;
var method = cljs.core.nth.call(null,vec__17330,(0),null);
var action = cljs.core.nth.call(null,vec__17330,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17326.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17326.cljs$lang$applyTo = (function (seq17327){
var G__17328 = cljs.core.first.call(null,seq17327);
var seq17327__$1 = cljs.core.next.call(null,seq17327);
return sablono.core.form_to17326.cljs$core$IFn$_invoke$arity$variadic(G__17328,seq17327__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17326);

//# sourceMappingURL=core.js.map