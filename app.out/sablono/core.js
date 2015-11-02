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
var G__17089__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17088 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17088,(0),null);
var body = cljs.core.nthnext.call(null,vec__17088,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17090__i = 0, G__17090__a = new Array(arguments.length -  0);
while (G__17090__i < G__17090__a.length) {G__17090__a[G__17090__i] = arguments[G__17090__i + 0]; ++G__17090__i;}
  args = new cljs.core.IndexedSeq(G__17090__a,0);
} 
return G__17089__delegate.call(this,args);};
G__17089.cljs$lang$maxFixedArity = 0;
G__17089.cljs$lang$applyTo = (function (arglist__17091){
var args = cljs.core.seq(arglist__17091);
return G__17089__delegate(args);
});
G__17089.cljs$core$IFn$_invoke$arity$variadic = G__17089__delegate;
return G__17089;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17096(s__17097){
return (new cljs.core.LazySeq(null,(function (){
var s__17097__$1 = s__17097;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17097__$1);
if(temp__4425__auto__){
var s__17097__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17097__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17097__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17099 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17098 = (0);
while(true){
if((i__17098 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17098);
cljs.core.chunk_append.call(null,b__17099,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17100 = (i__17098 + (1));
i__17098 = G__17100;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17099),sablono$core$update_arglists_$_iter__17096.call(null,cljs.core.chunk_rest.call(null,s__17097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17099),null);
}
} else {
var args = cljs.core.first.call(null,s__17097__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17096.call(null,cljs.core.rest.call(null,s__17097__$2)));
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
var len__6152__auto___17106 = arguments.length;
var i__6153__auto___17107 = (0);
while(true){
if((i__6153__auto___17107 < len__6152__auto___17106)){
args__6159__auto__.push((arguments[i__6153__auto___17107]));

var G__17108 = (i__6153__auto___17107 + (1));
i__6153__auto___17107 = G__17108;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17102(s__17103){
return (new cljs.core.LazySeq(null,(function (){
var s__17103__$1 = s__17103;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17103__$1);
if(temp__4425__auto__){
var s__17103__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17103__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17103__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17105 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17104 = (0);
while(true){
if((i__17104 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17104);
cljs.core.chunk_append.call(null,b__17105,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17109 = (i__17104 + (1));
i__17104 = G__17109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17105),sablono$core$iter__17102.call(null,cljs.core.chunk_rest.call(null,s__17103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17105),null);
}
} else {
var style = cljs.core.first.call(null,s__17103__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17102.call(null,cljs.core.rest.call(null,s__17103__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17101){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17101));
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
sablono.core.link_to17110 = (function sablono$core$link_to17110(var_args){
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

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17110.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17110.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17110.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17110.cljs$lang$applyTo = (function (seq17111){
var G__17112 = cljs.core.first.call(null,seq17111);
var seq17111__$1 = cljs.core.next.call(null,seq17111);
return sablono.core.link_to17110.cljs$core$IFn$_invoke$arity$variadic(G__17112,seq17111__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17110);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17116 = (function sablono$core$mail_to17116(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17121 = arguments.length;
var i__6153__auto___17122 = (0);
while(true){
if((i__6153__auto___17122 < len__6152__auto___17121)){
args__6159__auto__.push((arguments[i__6153__auto___17122]));

var G__17123 = (i__6153__auto___17122 + (1));
i__6153__auto___17122 = G__17123;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17116.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17116.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17119){
var vec__17120 = p__17119;
var content = cljs.core.nth.call(null,vec__17120,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17116.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17116.cljs$lang$applyTo = (function (seq17117){
var G__17118 = cljs.core.first.call(null,seq17117);
var seq17117__$1 = cljs.core.next.call(null,seq17117);
return sablono.core.mail_to17116.cljs$core$IFn$_invoke$arity$variadic(G__17118,seq17117__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17116);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17124 = (function sablono$core$unordered_list17124(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17124_$_iter__17129(s__17130){
return (new cljs.core.LazySeq(null,(function (){
var s__17130__$1 = s__17130;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17130__$1);
if(temp__4425__auto__){
var s__17130__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17130__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17130__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17132 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17131 = (0);
while(true){
if((i__17131 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17131);
cljs.core.chunk_append.call(null,b__17132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17133 = (i__17131 + (1));
i__17131 = G__17133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17132),sablono$core$unordered_list17124_$_iter__17129.call(null,cljs.core.chunk_rest.call(null,s__17130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17132),null);
}
} else {
var x = cljs.core.first.call(null,s__17130__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17124_$_iter__17129.call(null,cljs.core.rest.call(null,s__17130__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17124);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17134 = (function sablono$core$ordered_list17134(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17134_$_iter__17139(s__17140){
return (new cljs.core.LazySeq(null,(function (){
var s__17140__$1 = s__17140;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17140__$1);
if(temp__4425__auto__){
var s__17140__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17140__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17140__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17142 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17141 = (0);
while(true){
if((i__17141 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17141);
cljs.core.chunk_append.call(null,b__17142,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17143 = (i__17141 + (1));
i__17141 = G__17143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17142),sablono$core$ordered_list17134_$_iter__17139.call(null,cljs.core.chunk_rest.call(null,s__17140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17142),null);
}
} else {
var x = cljs.core.first.call(null,s__17140__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17134_$_iter__17139.call(null,cljs.core.rest.call(null,s__17140__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17134);
/**
 * Create an image element.
 */
sablono.core.image17144 = (function sablono$core$image17144(var_args){
var args17145 = [];
var len__6152__auto___17148 = arguments.length;
var i__6153__auto___17149 = (0);
while(true){
if((i__6153__auto___17149 < len__6152__auto___17148)){
args17145.push((arguments[i__6153__auto___17149]));

var G__17150 = (i__6153__auto___17149 + (1));
i__6153__auto___17149 = G__17150;
continue;
} else {
}
break;
}

var G__17147 = args17145.length;
switch (G__17147) {
case 1:
return sablono.core.image17144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17145.length)].join('')));

}
});

sablono.core.image17144.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17144.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17144.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17144);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17152_SHARP_,p2__17153_SHARP_){
return [cljs.core.str(p1__17152_SHARP_),cljs.core.str("["),cljs.core.str(p2__17153_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17154_SHARP_,p2__17155_SHARP_){
return [cljs.core.str(p1__17154_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17155_SHARP_)].join('');
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
sablono.core.color_field17156 = (function sablono$core$color_field17156(var_args){
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
return sablono.core.color_field17156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17157.length)].join('')));

}
});

sablono.core.color_field17156.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.color_field17156.call(null,name__13421__auto__,null);
});

sablono.core.color_field17156.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.color_field17156.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17156);

/**
 * Creates a date input field.
 */
sablono.core.date_field17160 = (function sablono$core$date_field17160(var_args){
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
return sablono.core.date_field17160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17161.length)].join('')));

}
});

sablono.core.date_field17160.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.date_field17160.call(null,name__13421__auto__,null);
});

sablono.core.date_field17160.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.date_field17160.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17160);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17164 = (function sablono$core$datetime_field17164(var_args){
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
return sablono.core.datetime_field17164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17165.length)].join('')));

}
});

sablono.core.datetime_field17164.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.datetime_field17164.call(null,name__13421__auto__,null);
});

sablono.core.datetime_field17164.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.datetime_field17164.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17164);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17168 = (function sablono$core$datetime_local_field17168(var_args){
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
return sablono.core.datetime_local_field17168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17169.length)].join('')));

}
});

sablono.core.datetime_local_field17168.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.datetime_local_field17168.call(null,name__13421__auto__,null);
});

sablono.core.datetime_local_field17168.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.datetime_local_field17168.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17168);

/**
 * Creates a email input field.
 */
sablono.core.email_field17172 = (function sablono$core$email_field17172(var_args){
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
return sablono.core.email_field17172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17173.length)].join('')));

}
});

sablono.core.email_field17172.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.email_field17172.call(null,name__13421__auto__,null);
});

sablono.core.email_field17172.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.email_field17172.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17172);

/**
 * Creates a file input field.
 */
sablono.core.file_field17176 = (function sablono$core$file_field17176(var_args){
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
return sablono.core.file_field17176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17177.length)].join('')));

}
});

sablono.core.file_field17176.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.file_field17176.call(null,name__13421__auto__,null);
});

sablono.core.file_field17176.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.file_field17176.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17176);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17180 = (function sablono$core$hidden_field17180(var_args){
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
return sablono.core.hidden_field17180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17181.length)].join('')));

}
});

sablono.core.hidden_field17180.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.hidden_field17180.call(null,name__13421__auto__,null);
});

sablono.core.hidden_field17180.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.hidden_field17180.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17180);

/**
 * Creates a month input field.
 */
sablono.core.month_field17184 = (function sablono$core$month_field17184(var_args){
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
return sablono.core.month_field17184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17185.length)].join('')));

}
});

sablono.core.month_field17184.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.month_field17184.call(null,name__13421__auto__,null);
});

sablono.core.month_field17184.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.month_field17184.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17184);

/**
 * Creates a number input field.
 */
sablono.core.number_field17188 = (function sablono$core$number_field17188(var_args){
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
return sablono.core.number_field17188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17189.length)].join('')));

}
});

sablono.core.number_field17188.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.number_field17188.call(null,name__13421__auto__,null);
});

sablono.core.number_field17188.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.number_field17188.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17188);

/**
 * Creates a password input field.
 */
sablono.core.password_field17192 = (function sablono$core$password_field17192(var_args){
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
return sablono.core.password_field17192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17193.length)].join('')));

}
});

sablono.core.password_field17192.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.password_field17192.call(null,name__13421__auto__,null);
});

sablono.core.password_field17192.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.password_field17192.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17192);

/**
 * Creates a range input field.
 */
sablono.core.range_field17196 = (function sablono$core$range_field17196(var_args){
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
return sablono.core.range_field17196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17197.length)].join('')));

}
});

sablono.core.range_field17196.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.range_field17196.call(null,name__13421__auto__,null);
});

sablono.core.range_field17196.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.range_field17196.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17196);

/**
 * Creates a search input field.
 */
sablono.core.search_field17200 = (function sablono$core$search_field17200(var_args){
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
return sablono.core.search_field17200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17201.length)].join('')));

}
});

sablono.core.search_field17200.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.search_field17200.call(null,name__13421__auto__,null);
});

sablono.core.search_field17200.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.search_field17200.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17200);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17204 = (function sablono$core$tel_field17204(var_args){
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
return sablono.core.tel_field17204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17205.length)].join('')));

}
});

sablono.core.tel_field17204.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.tel_field17204.call(null,name__13421__auto__,null);
});

sablono.core.tel_field17204.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.tel_field17204.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17204);

/**
 * Creates a text input field.
 */
sablono.core.text_field17208 = (function sablono$core$text_field17208(var_args){
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
return sablono.core.text_field17208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17209.length)].join('')));

}
});

sablono.core.text_field17208.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.text_field17208.call(null,name__13421__auto__,null);
});

sablono.core.text_field17208.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.text_field17208.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17208);

/**
 * Creates a time input field.
 */
sablono.core.time_field17212 = (function sablono$core$time_field17212(var_args){
var args17213 = [];
var len__6152__auto___17280 = arguments.length;
var i__6153__auto___17281 = (0);
while(true){
if((i__6153__auto___17281 < len__6152__auto___17280)){
args17213.push((arguments[i__6153__auto___17281]));

var G__17282 = (i__6153__auto___17281 + (1));
i__6153__auto___17281 = G__17282;
continue;
} else {
}
break;
}

var G__17215 = args17213.length;
switch (G__17215) {
case 1:
return sablono.core.time_field17212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17213.length)].join('')));

}
});

sablono.core.time_field17212.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.time_field17212.call(null,name__13421__auto__,null);
});

sablono.core.time_field17212.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.time_field17212.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17212);

/**
 * Creates a url input field.
 */
sablono.core.url_field17216 = (function sablono$core$url_field17216(var_args){
var args17217 = [];
var len__6152__auto___17284 = arguments.length;
var i__6153__auto___17285 = (0);
while(true){
if((i__6153__auto___17285 < len__6152__auto___17284)){
args17217.push((arguments[i__6153__auto___17285]));

var G__17286 = (i__6153__auto___17285 + (1));
i__6153__auto___17285 = G__17286;
continue;
} else {
}
break;
}

var G__17219 = args17217.length;
switch (G__17219) {
case 1:
return sablono.core.url_field17216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17217.length)].join('')));

}
});

sablono.core.url_field17216.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.url_field17216.call(null,name__13421__auto__,null);
});

sablono.core.url_field17216.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.url_field17216.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17216);

/**
 * Creates a week input field.
 */
sablono.core.week_field17220 = (function sablono$core$week_field17220(var_args){
var args17221 = [];
var len__6152__auto___17288 = arguments.length;
var i__6153__auto___17289 = (0);
while(true){
if((i__6153__auto___17289 < len__6152__auto___17288)){
args17221.push((arguments[i__6153__auto___17289]));

var G__17290 = (i__6153__auto___17289 + (1));
i__6153__auto___17289 = G__17290;
continue;
} else {
}
break;
}

var G__17223 = args17221.length;
switch (G__17223) {
case 1:
return sablono.core.week_field17220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17221.length)].join('')));

}
});

sablono.core.week_field17220.cljs$core$IFn$_invoke$arity$1 = (function (name__13421__auto__){
return sablono.core.week_field17220.call(null,name__13421__auto__,null);
});

sablono.core.week_field17220.cljs$core$IFn$_invoke$arity$2 = (function (name__13421__auto__,value__13422__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13421__auto__,value__13422__auto__);
});

sablono.core.week_field17220.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17220);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17292 = (function sablono$core$check_box17292(var_args){
var args17293 = [];
var len__6152__auto___17296 = arguments.length;
var i__6153__auto___17297 = (0);
while(true){
if((i__6153__auto___17297 < len__6152__auto___17296)){
args17293.push((arguments[i__6153__auto___17297]));

var G__17298 = (i__6153__auto___17297 + (1));
i__6153__auto___17297 = G__17298;
continue;
} else {
}
break;
}

var G__17295 = args17293.length;
switch (G__17295) {
case 1:
return sablono.core.check_box17292.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17292.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17292.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17293.length)].join('')));

}
});

sablono.core.check_box17292.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17292.call(null,name,null);
});

sablono.core.check_box17292.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17292.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17292.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17292.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17292);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17300 = (function sablono$core$radio_button17300(var_args){
var args17301 = [];
var len__6152__auto___17304 = arguments.length;
var i__6153__auto___17305 = (0);
while(true){
if((i__6153__auto___17305 < len__6152__auto___17304)){
args17301.push((arguments[i__6153__auto___17305]));

var G__17306 = (i__6153__auto___17305 + (1));
i__6153__auto___17305 = G__17306;
continue;
} else {
}
break;
}

var G__17303 = args17301.length;
switch (G__17303) {
case 1:
return sablono.core.radio_button17300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17300.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17301.length)].join('')));

}
});

sablono.core.radio_button17300.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17300.call(null,group,null);
});

sablono.core.radio_button17300.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17300.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17300.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17300.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17300);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17308 = (function sablono$core$select_options17308(coll){
var iter__5866__auto__ = (function sablono$core$select_options17308_$_iter__17317(s__17318){
return (new cljs.core.LazySeq(null,(function (){
var s__17318__$1 = s__17318;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17318__$1);
if(temp__4425__auto__){
var s__17318__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17318__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17318__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17320 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17319 = (0);
while(true){
if((i__17319 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17319);
cljs.core.chunk_append.call(null,b__17320,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17323 = x;
var text = cljs.core.nth.call(null,vec__17323,(0),null);
var val = cljs.core.nth.call(null,vec__17323,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17323,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17308.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17325 = (i__17319 + (1));
i__17319 = G__17325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17320),sablono$core$select_options17308_$_iter__17317.call(null,cljs.core.chunk_rest.call(null,s__17318__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17320),null);
}
} else {
var x = cljs.core.first.call(null,s__17318__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17324 = x;
var text = cljs.core.nth.call(null,vec__17324,(0),null);
var val = cljs.core.nth.call(null,vec__17324,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17324,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17308.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17308_$_iter__17317.call(null,cljs.core.rest.call(null,s__17318__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17308);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17326 = (function sablono$core$drop_down17326(var_args){
var args17327 = [];
var len__6152__auto___17330 = arguments.length;
var i__6153__auto___17331 = (0);
while(true){
if((i__6153__auto___17331 < len__6152__auto___17330)){
args17327.push((arguments[i__6153__auto___17331]));

var G__17332 = (i__6153__auto___17331 + (1));
i__6153__auto___17331 = G__17332;
continue;
} else {
}
break;
}

var G__17329 = args17327.length;
switch (G__17329) {
case 2:
return sablono.core.drop_down17326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17326.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17327.length)].join('')));

}
});

sablono.core.drop_down17326.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17326.call(null,name,options,null);
});

sablono.core.drop_down17326.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17326.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17326);
/**
 * Creates a text area element.
 */
sablono.core.text_area17334 = (function sablono$core$text_area17334(var_args){
var args17335 = [];
var len__6152__auto___17338 = arguments.length;
var i__6153__auto___17339 = (0);
while(true){
if((i__6153__auto___17339 < len__6152__auto___17338)){
args17335.push((arguments[i__6153__auto___17339]));

var G__17340 = (i__6153__auto___17339 + (1));
i__6153__auto___17339 = G__17340;
continue;
} else {
}
break;
}

var G__17337 = args17335.length;
switch (G__17337) {
case 1:
return sablono.core.text_area17334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17335.length)].join('')));

}
});

sablono.core.text_area17334.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17334.call(null,name,null);
});

sablono.core.text_area17334.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17334.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17334);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17342 = (function sablono$core$label17342(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17342);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17343 = (function sablono$core$submit_button17343(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17343);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17344 = (function sablono$core$reset_button17344(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17344);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17345 = (function sablono$core$form_to17345(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17350 = arguments.length;
var i__6153__auto___17351 = (0);
while(true){
if((i__6153__auto___17351 < len__6152__auto___17350)){
args__6159__auto__.push((arguments[i__6153__auto___17351]));

var G__17352 = (i__6153__auto___17351 + (1));
i__6153__auto___17351 = G__17352;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17345.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17345.cljs$core$IFn$_invoke$arity$variadic = (function (p__17348,body){
var vec__17349 = p__17348;
var method = cljs.core.nth.call(null,vec__17349,(0),null);
var action = cljs.core.nth.call(null,vec__17349,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17345.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17345.cljs$lang$applyTo = (function (seq17346){
var G__17347 = cljs.core.first.call(null,seq17346);
var seq17346__$1 = cljs.core.next.call(null,seq17346);
return sablono.core.form_to17345.cljs$core$IFn$_invoke$arity$variadic(G__17347,seq17346__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17345);

//# sourceMappingURL=core.js.map