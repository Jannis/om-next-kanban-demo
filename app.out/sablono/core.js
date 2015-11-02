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
var G__17077__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17076 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17076,(0),null);
var body = cljs.core.nthnext.call(null,vec__17076,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17078__i = 0, G__17078__a = new Array(arguments.length -  0);
while (G__17078__i < G__17078__a.length) {G__17078__a[G__17078__i] = arguments[G__17078__i + 0]; ++G__17078__i;}
  args = new cljs.core.IndexedSeq(G__17078__a,0);
} 
return G__17077__delegate.call(this,args);};
G__17077.cljs$lang$maxFixedArity = 0;
G__17077.cljs$lang$applyTo = (function (arglist__17079){
var args = cljs.core.seq(arglist__17079);
return G__17077__delegate(args);
});
G__17077.cljs$core$IFn$_invoke$arity$variadic = G__17077__delegate;
return G__17077;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17084(s__17085){
return (new cljs.core.LazySeq(null,(function (){
var s__17085__$1 = s__17085;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17085__$1);
if(temp__4425__auto__){
var s__17085__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17085__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17085__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17087 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17086 = (0);
while(true){
if((i__17086 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17086);
cljs.core.chunk_append.call(null,b__17087,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17088 = (i__17086 + (1));
i__17086 = G__17088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17087),sablono$core$update_arglists_$_iter__17084.call(null,cljs.core.chunk_rest.call(null,s__17085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17087),null);
}
} else {
var args = cljs.core.first.call(null,s__17085__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17084.call(null,cljs.core.rest.call(null,s__17085__$2)));
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

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17090(s__17091){
return (new cljs.core.LazySeq(null,(function (){
var s__17091__$1 = s__17091;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17091__$1);
if(temp__4425__auto__){
var s__17091__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17091__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17091__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17093 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17092 = (0);
while(true){
if((i__17092 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17092);
cljs.core.chunk_append.call(null,b__17093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17097 = (i__17092 + (1));
i__17092 = G__17097;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17093),sablono$core$iter__17090.call(null,cljs.core.chunk_rest.call(null,s__17091__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17093),null);
}
} else {
var style = cljs.core.first.call(null,s__17091__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17090.call(null,cljs.core.rest.call(null,s__17091__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17089){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17089));
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
sablono.core.link_to17098 = (function sablono$core$link_to17098(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17101 = arguments.length;
var i__6153__auto___17102 = (0);
while(true){
if((i__6153__auto___17102 < len__6152__auto___17101)){
args__6159__auto__.push((arguments[i__6153__auto___17102]));

var G__17103 = (i__6153__auto___17102 + (1));
i__6153__auto___17102 = G__17103;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17098.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17098.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17098.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17098.cljs$lang$applyTo = (function (seq17099){
var G__17100 = cljs.core.first.call(null,seq17099);
var seq17099__$1 = cljs.core.next.call(null,seq17099);
return sablono.core.link_to17098.cljs$core$IFn$_invoke$arity$variadic(G__17100,seq17099__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17098);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17104 = (function sablono$core$mail_to17104(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17109 = arguments.length;
var i__6153__auto___17110 = (0);
while(true){
if((i__6153__auto___17110 < len__6152__auto___17109)){
args__6159__auto__.push((arguments[i__6153__auto___17110]));

var G__17111 = (i__6153__auto___17110 + (1));
i__6153__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17104.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17104.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17107){
var vec__17108 = p__17107;
var content = cljs.core.nth.call(null,vec__17108,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17104.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17104.cljs$lang$applyTo = (function (seq17105){
var G__17106 = cljs.core.first.call(null,seq17105);
var seq17105__$1 = cljs.core.next.call(null,seq17105);
return sablono.core.mail_to17104.cljs$core$IFn$_invoke$arity$variadic(G__17106,seq17105__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17104);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17112 = (function sablono$core$unordered_list17112(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17112_$_iter__17117(s__17118){
return (new cljs.core.LazySeq(null,(function (){
var s__17118__$1 = s__17118;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17118__$1);
if(temp__4425__auto__){
var s__17118__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17118__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17118__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17120 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17119 = (0);
while(true){
if((i__17119 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17119);
cljs.core.chunk_append.call(null,b__17120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17121 = (i__17119 + (1));
i__17119 = G__17121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17120),sablono$core$unordered_list17112_$_iter__17117.call(null,cljs.core.chunk_rest.call(null,s__17118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17120),null);
}
} else {
var x = cljs.core.first.call(null,s__17118__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17112_$_iter__17117.call(null,cljs.core.rest.call(null,s__17118__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17112);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17122 = (function sablono$core$ordered_list17122(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17122_$_iter__17127(s__17128){
return (new cljs.core.LazySeq(null,(function (){
var s__17128__$1 = s__17128;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17128__$1);
if(temp__4425__auto__){
var s__17128__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17128__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17128__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17130 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17129 = (0);
while(true){
if((i__17129 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17129);
cljs.core.chunk_append.call(null,b__17130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17131 = (i__17129 + (1));
i__17129 = G__17131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17130),sablono$core$ordered_list17122_$_iter__17127.call(null,cljs.core.chunk_rest.call(null,s__17128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17130),null);
}
} else {
var x = cljs.core.first.call(null,s__17128__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17122_$_iter__17127.call(null,cljs.core.rest.call(null,s__17128__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17122);
/**
 * Create an image element.
 */
sablono.core.image17132 = (function sablono$core$image17132(var_args){
var args17133 = [];
var len__6152__auto___17136 = arguments.length;
var i__6153__auto___17137 = (0);
while(true){
if((i__6153__auto___17137 < len__6152__auto___17136)){
args17133.push((arguments[i__6153__auto___17137]));

var G__17138 = (i__6153__auto___17137 + (1));
i__6153__auto___17137 = G__17138;
continue;
} else {
}
break;
}

var G__17135 = args17133.length;
switch (G__17135) {
case 1:
return sablono.core.image17132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17133.length)].join('')));

}
});

sablono.core.image17132.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17132.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17132.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17132);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17140_SHARP_,p2__17141_SHARP_){
return [cljs.core.str(p1__17140_SHARP_),cljs.core.str("["),cljs.core.str(p2__17141_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17142_SHARP_,p2__17143_SHARP_){
return [cljs.core.str(p1__17142_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17143_SHARP_)].join('');
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
sablono.core.color_field17144 = (function sablono$core$color_field17144(var_args){
var args17145 = [];
var len__6152__auto___17212 = arguments.length;
var i__6153__auto___17213 = (0);
while(true){
if((i__6153__auto___17213 < len__6152__auto___17212)){
args17145.push((arguments[i__6153__auto___17213]));

var G__17214 = (i__6153__auto___17213 + (1));
i__6153__auto___17213 = G__17214;
continue;
} else {
}
break;
}

var G__17147 = args17145.length;
switch (G__17147) {
case 1:
return sablono.core.color_field17144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17145.length)].join('')));

}
});

sablono.core.color_field17144.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.color_field17144.call(null,name__13415__auto__,null);
});

sablono.core.color_field17144.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.color_field17144.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17144);

/**
 * Creates a date input field.
 */
sablono.core.date_field17148 = (function sablono$core$date_field17148(var_args){
var args17149 = [];
var len__6152__auto___17216 = arguments.length;
var i__6153__auto___17217 = (0);
while(true){
if((i__6153__auto___17217 < len__6152__auto___17216)){
args17149.push((arguments[i__6153__auto___17217]));

var G__17218 = (i__6153__auto___17217 + (1));
i__6153__auto___17217 = G__17218;
continue;
} else {
}
break;
}

var G__17151 = args17149.length;
switch (G__17151) {
case 1:
return sablono.core.date_field17148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17149.length)].join('')));

}
});

sablono.core.date_field17148.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.date_field17148.call(null,name__13415__auto__,null);
});

sablono.core.date_field17148.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.date_field17148.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17148);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17152 = (function sablono$core$datetime_field17152(var_args){
var args17153 = [];
var len__6152__auto___17220 = arguments.length;
var i__6153__auto___17221 = (0);
while(true){
if((i__6153__auto___17221 < len__6152__auto___17220)){
args17153.push((arguments[i__6153__auto___17221]));

var G__17222 = (i__6153__auto___17221 + (1));
i__6153__auto___17221 = G__17222;
continue;
} else {
}
break;
}

var G__17155 = args17153.length;
switch (G__17155) {
case 1:
return sablono.core.datetime_field17152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17153.length)].join('')));

}
});

sablono.core.datetime_field17152.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.datetime_field17152.call(null,name__13415__auto__,null);
});

sablono.core.datetime_field17152.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.datetime_field17152.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17152);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17156 = (function sablono$core$datetime_local_field17156(var_args){
var args17157 = [];
var len__6152__auto___17224 = arguments.length;
var i__6153__auto___17225 = (0);
while(true){
if((i__6153__auto___17225 < len__6152__auto___17224)){
args17157.push((arguments[i__6153__auto___17225]));

var G__17226 = (i__6153__auto___17225 + (1));
i__6153__auto___17225 = G__17226;
continue;
} else {
}
break;
}

var G__17159 = args17157.length;
switch (G__17159) {
case 1:
return sablono.core.datetime_local_field17156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17157.length)].join('')));

}
});

sablono.core.datetime_local_field17156.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.datetime_local_field17156.call(null,name__13415__auto__,null);
});

sablono.core.datetime_local_field17156.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.datetime_local_field17156.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17156);

/**
 * Creates a email input field.
 */
sablono.core.email_field17160 = (function sablono$core$email_field17160(var_args){
var args17161 = [];
var len__6152__auto___17228 = arguments.length;
var i__6153__auto___17229 = (0);
while(true){
if((i__6153__auto___17229 < len__6152__auto___17228)){
args17161.push((arguments[i__6153__auto___17229]));

var G__17230 = (i__6153__auto___17229 + (1));
i__6153__auto___17229 = G__17230;
continue;
} else {
}
break;
}

var G__17163 = args17161.length;
switch (G__17163) {
case 1:
return sablono.core.email_field17160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17161.length)].join('')));

}
});

sablono.core.email_field17160.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.email_field17160.call(null,name__13415__auto__,null);
});

sablono.core.email_field17160.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.email_field17160.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17160);

/**
 * Creates a file input field.
 */
sablono.core.file_field17164 = (function sablono$core$file_field17164(var_args){
var args17165 = [];
var len__6152__auto___17232 = arguments.length;
var i__6153__auto___17233 = (0);
while(true){
if((i__6153__auto___17233 < len__6152__auto___17232)){
args17165.push((arguments[i__6153__auto___17233]));

var G__17234 = (i__6153__auto___17233 + (1));
i__6153__auto___17233 = G__17234;
continue;
} else {
}
break;
}

var G__17167 = args17165.length;
switch (G__17167) {
case 1:
return sablono.core.file_field17164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17165.length)].join('')));

}
});

sablono.core.file_field17164.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.file_field17164.call(null,name__13415__auto__,null);
});

sablono.core.file_field17164.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.file_field17164.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17164);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17168 = (function sablono$core$hidden_field17168(var_args){
var args17169 = [];
var len__6152__auto___17236 = arguments.length;
var i__6153__auto___17237 = (0);
while(true){
if((i__6153__auto___17237 < len__6152__auto___17236)){
args17169.push((arguments[i__6153__auto___17237]));

var G__17238 = (i__6153__auto___17237 + (1));
i__6153__auto___17237 = G__17238;
continue;
} else {
}
break;
}

var G__17171 = args17169.length;
switch (G__17171) {
case 1:
return sablono.core.hidden_field17168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17169.length)].join('')));

}
});

sablono.core.hidden_field17168.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.hidden_field17168.call(null,name__13415__auto__,null);
});

sablono.core.hidden_field17168.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.hidden_field17168.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17168);

/**
 * Creates a month input field.
 */
sablono.core.month_field17172 = (function sablono$core$month_field17172(var_args){
var args17173 = [];
var len__6152__auto___17240 = arguments.length;
var i__6153__auto___17241 = (0);
while(true){
if((i__6153__auto___17241 < len__6152__auto___17240)){
args17173.push((arguments[i__6153__auto___17241]));

var G__17242 = (i__6153__auto___17241 + (1));
i__6153__auto___17241 = G__17242;
continue;
} else {
}
break;
}

var G__17175 = args17173.length;
switch (G__17175) {
case 1:
return sablono.core.month_field17172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17173.length)].join('')));

}
});

sablono.core.month_field17172.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.month_field17172.call(null,name__13415__auto__,null);
});

sablono.core.month_field17172.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.month_field17172.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17172);

/**
 * Creates a number input field.
 */
sablono.core.number_field17176 = (function sablono$core$number_field17176(var_args){
var args17177 = [];
var len__6152__auto___17244 = arguments.length;
var i__6153__auto___17245 = (0);
while(true){
if((i__6153__auto___17245 < len__6152__auto___17244)){
args17177.push((arguments[i__6153__auto___17245]));

var G__17246 = (i__6153__auto___17245 + (1));
i__6153__auto___17245 = G__17246;
continue;
} else {
}
break;
}

var G__17179 = args17177.length;
switch (G__17179) {
case 1:
return sablono.core.number_field17176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17177.length)].join('')));

}
});

sablono.core.number_field17176.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.number_field17176.call(null,name__13415__auto__,null);
});

sablono.core.number_field17176.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.number_field17176.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17176);

/**
 * Creates a password input field.
 */
sablono.core.password_field17180 = (function sablono$core$password_field17180(var_args){
var args17181 = [];
var len__6152__auto___17248 = arguments.length;
var i__6153__auto___17249 = (0);
while(true){
if((i__6153__auto___17249 < len__6152__auto___17248)){
args17181.push((arguments[i__6153__auto___17249]));

var G__17250 = (i__6153__auto___17249 + (1));
i__6153__auto___17249 = G__17250;
continue;
} else {
}
break;
}

var G__17183 = args17181.length;
switch (G__17183) {
case 1:
return sablono.core.password_field17180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17181.length)].join('')));

}
});

sablono.core.password_field17180.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.password_field17180.call(null,name__13415__auto__,null);
});

sablono.core.password_field17180.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.password_field17180.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17180);

/**
 * Creates a range input field.
 */
sablono.core.range_field17184 = (function sablono$core$range_field17184(var_args){
var args17185 = [];
var len__6152__auto___17252 = arguments.length;
var i__6153__auto___17253 = (0);
while(true){
if((i__6153__auto___17253 < len__6152__auto___17252)){
args17185.push((arguments[i__6153__auto___17253]));

var G__17254 = (i__6153__auto___17253 + (1));
i__6153__auto___17253 = G__17254;
continue;
} else {
}
break;
}

var G__17187 = args17185.length;
switch (G__17187) {
case 1:
return sablono.core.range_field17184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17185.length)].join('')));

}
});

sablono.core.range_field17184.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.range_field17184.call(null,name__13415__auto__,null);
});

sablono.core.range_field17184.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.range_field17184.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17184);

/**
 * Creates a search input field.
 */
sablono.core.search_field17188 = (function sablono$core$search_field17188(var_args){
var args17189 = [];
var len__6152__auto___17256 = arguments.length;
var i__6153__auto___17257 = (0);
while(true){
if((i__6153__auto___17257 < len__6152__auto___17256)){
args17189.push((arguments[i__6153__auto___17257]));

var G__17258 = (i__6153__auto___17257 + (1));
i__6153__auto___17257 = G__17258;
continue;
} else {
}
break;
}

var G__17191 = args17189.length;
switch (G__17191) {
case 1:
return sablono.core.search_field17188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17189.length)].join('')));

}
});

sablono.core.search_field17188.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.search_field17188.call(null,name__13415__auto__,null);
});

sablono.core.search_field17188.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.search_field17188.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17188);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17192 = (function sablono$core$tel_field17192(var_args){
var args17193 = [];
var len__6152__auto___17260 = arguments.length;
var i__6153__auto___17261 = (0);
while(true){
if((i__6153__auto___17261 < len__6152__auto___17260)){
args17193.push((arguments[i__6153__auto___17261]));

var G__17262 = (i__6153__auto___17261 + (1));
i__6153__auto___17261 = G__17262;
continue;
} else {
}
break;
}

var G__17195 = args17193.length;
switch (G__17195) {
case 1:
return sablono.core.tel_field17192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17193.length)].join('')));

}
});

sablono.core.tel_field17192.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.tel_field17192.call(null,name__13415__auto__,null);
});

sablono.core.tel_field17192.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.tel_field17192.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17192);

/**
 * Creates a text input field.
 */
sablono.core.text_field17196 = (function sablono$core$text_field17196(var_args){
var args17197 = [];
var len__6152__auto___17264 = arguments.length;
var i__6153__auto___17265 = (0);
while(true){
if((i__6153__auto___17265 < len__6152__auto___17264)){
args17197.push((arguments[i__6153__auto___17265]));

var G__17266 = (i__6153__auto___17265 + (1));
i__6153__auto___17265 = G__17266;
continue;
} else {
}
break;
}

var G__17199 = args17197.length;
switch (G__17199) {
case 1:
return sablono.core.text_field17196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17197.length)].join('')));

}
});

sablono.core.text_field17196.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.text_field17196.call(null,name__13415__auto__,null);
});

sablono.core.text_field17196.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.text_field17196.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17196);

/**
 * Creates a time input field.
 */
sablono.core.time_field17200 = (function sablono$core$time_field17200(var_args){
var args17201 = [];
var len__6152__auto___17268 = arguments.length;
var i__6153__auto___17269 = (0);
while(true){
if((i__6153__auto___17269 < len__6152__auto___17268)){
args17201.push((arguments[i__6153__auto___17269]));

var G__17270 = (i__6153__auto___17269 + (1));
i__6153__auto___17269 = G__17270;
continue;
} else {
}
break;
}

var G__17203 = args17201.length;
switch (G__17203) {
case 1:
return sablono.core.time_field17200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17201.length)].join('')));

}
});

sablono.core.time_field17200.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.time_field17200.call(null,name__13415__auto__,null);
});

sablono.core.time_field17200.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.time_field17200.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17200);

/**
 * Creates a url input field.
 */
sablono.core.url_field17204 = (function sablono$core$url_field17204(var_args){
var args17205 = [];
var len__6152__auto___17272 = arguments.length;
var i__6153__auto___17273 = (0);
while(true){
if((i__6153__auto___17273 < len__6152__auto___17272)){
args17205.push((arguments[i__6153__auto___17273]));

var G__17274 = (i__6153__auto___17273 + (1));
i__6153__auto___17273 = G__17274;
continue;
} else {
}
break;
}

var G__17207 = args17205.length;
switch (G__17207) {
case 1:
return sablono.core.url_field17204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17205.length)].join('')));

}
});

sablono.core.url_field17204.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.url_field17204.call(null,name__13415__auto__,null);
});

sablono.core.url_field17204.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.url_field17204.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17204);

/**
 * Creates a week input field.
 */
sablono.core.week_field17208 = (function sablono$core$week_field17208(var_args){
var args17209 = [];
var len__6152__auto___17276 = arguments.length;
var i__6153__auto___17277 = (0);
while(true){
if((i__6153__auto___17277 < len__6152__auto___17276)){
args17209.push((arguments[i__6153__auto___17277]));

var G__17278 = (i__6153__auto___17277 + (1));
i__6153__auto___17277 = G__17278;
continue;
} else {
}
break;
}

var G__17211 = args17209.length;
switch (G__17211) {
case 1:
return sablono.core.week_field17208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17209.length)].join('')));

}
});

sablono.core.week_field17208.cljs$core$IFn$_invoke$arity$1 = (function (name__13415__auto__){
return sablono.core.week_field17208.call(null,name__13415__auto__,null);
});

sablono.core.week_field17208.cljs$core$IFn$_invoke$arity$2 = (function (name__13415__auto__,value__13416__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13415__auto__,value__13416__auto__);
});

sablono.core.week_field17208.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17208);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17280 = (function sablono$core$check_box17280(var_args){
var args17281 = [];
var len__6152__auto___17284 = arguments.length;
var i__6153__auto___17285 = (0);
while(true){
if((i__6153__auto___17285 < len__6152__auto___17284)){
args17281.push((arguments[i__6153__auto___17285]));

var G__17286 = (i__6153__auto___17285 + (1));
i__6153__auto___17285 = G__17286;
continue;
} else {
}
break;
}

var G__17283 = args17281.length;
switch (G__17283) {
case 1:
return sablono.core.check_box17280.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17280.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17280.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17281.length)].join('')));

}
});

sablono.core.check_box17280.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17280.call(null,name,null);
});

sablono.core.check_box17280.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17280.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17280.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17280.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17280);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17288 = (function sablono$core$radio_button17288(var_args){
var args17289 = [];
var len__6152__auto___17292 = arguments.length;
var i__6153__auto___17293 = (0);
while(true){
if((i__6153__auto___17293 < len__6152__auto___17292)){
args17289.push((arguments[i__6153__auto___17293]));

var G__17294 = (i__6153__auto___17293 + (1));
i__6153__auto___17293 = G__17294;
continue;
} else {
}
break;
}

var G__17291 = args17289.length;
switch (G__17291) {
case 1:
return sablono.core.radio_button17288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17288.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17289.length)].join('')));

}
});

sablono.core.radio_button17288.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17288.call(null,group,null);
});

sablono.core.radio_button17288.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17288.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17288.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17288.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17288);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17296 = (function sablono$core$select_options17296(coll){
var iter__5866__auto__ = (function sablono$core$select_options17296_$_iter__17305(s__17306){
return (new cljs.core.LazySeq(null,(function (){
var s__17306__$1 = s__17306;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17306__$1);
if(temp__4425__auto__){
var s__17306__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17306__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17306__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17308 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17307 = (0);
while(true){
if((i__17307 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17307);
cljs.core.chunk_append.call(null,b__17308,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17311 = x;
var text = cljs.core.nth.call(null,vec__17311,(0),null);
var val = cljs.core.nth.call(null,vec__17311,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17311,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17296.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17313 = (i__17307 + (1));
i__17307 = G__17313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17308),sablono$core$select_options17296_$_iter__17305.call(null,cljs.core.chunk_rest.call(null,s__17306__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17308),null);
}
} else {
var x = cljs.core.first.call(null,s__17306__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17312 = x;
var text = cljs.core.nth.call(null,vec__17312,(0),null);
var val = cljs.core.nth.call(null,vec__17312,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17312,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17296.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17296_$_iter__17305.call(null,cljs.core.rest.call(null,s__17306__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17296);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17314 = (function sablono$core$drop_down17314(var_args){
var args17315 = [];
var len__6152__auto___17318 = arguments.length;
var i__6153__auto___17319 = (0);
while(true){
if((i__6153__auto___17319 < len__6152__auto___17318)){
args17315.push((arguments[i__6153__auto___17319]));

var G__17320 = (i__6153__auto___17319 + (1));
i__6153__auto___17319 = G__17320;
continue;
} else {
}
break;
}

var G__17317 = args17315.length;
switch (G__17317) {
case 2:
return sablono.core.drop_down17314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17314.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17315.length)].join('')));

}
});

sablono.core.drop_down17314.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17314.call(null,name,options,null);
});

sablono.core.drop_down17314.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17314.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17314);
/**
 * Creates a text area element.
 */
sablono.core.text_area17322 = (function sablono$core$text_area17322(var_args){
var args17323 = [];
var len__6152__auto___17326 = arguments.length;
var i__6153__auto___17327 = (0);
while(true){
if((i__6153__auto___17327 < len__6152__auto___17326)){
args17323.push((arguments[i__6153__auto___17327]));

var G__17328 = (i__6153__auto___17327 + (1));
i__6153__auto___17327 = G__17328;
continue;
} else {
}
break;
}

var G__17325 = args17323.length;
switch (G__17325) {
case 1:
return sablono.core.text_area17322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17323.length)].join('')));

}
});

sablono.core.text_area17322.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17322.call(null,name,null);
});

sablono.core.text_area17322.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17322.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17322);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17330 = (function sablono$core$label17330(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17330);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17331 = (function sablono$core$submit_button17331(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17331);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17332 = (function sablono$core$reset_button17332(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17332);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17333 = (function sablono$core$form_to17333(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17338 = arguments.length;
var i__6153__auto___17339 = (0);
while(true){
if((i__6153__auto___17339 < len__6152__auto___17338)){
args__6159__auto__.push((arguments[i__6153__auto___17339]));

var G__17340 = (i__6153__auto___17339 + (1));
i__6153__auto___17339 = G__17340;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17333.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17333.cljs$core$IFn$_invoke$arity$variadic = (function (p__17336,body){
var vec__17337 = p__17336;
var method = cljs.core.nth.call(null,vec__17337,(0),null);
var action = cljs.core.nth.call(null,vec__17337,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17333.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17333.cljs$lang$applyTo = (function (seq17334){
var G__17335 = cljs.core.first.call(null,seq17334);
var seq17334__$1 = cljs.core.next.call(null,seq17334);
return sablono.core.form_to17333.cljs$core$IFn$_invoke$arity$variadic(G__17335,seq17334__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17333);

//# sourceMappingURL=core.js.map