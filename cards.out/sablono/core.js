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
var G__17098__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17097 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17097,(0),null);
var body = cljs.core.nthnext.call(null,vec__17097,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17099__i = 0, G__17099__a = new Array(arguments.length -  0);
while (G__17099__i < G__17099__a.length) {G__17099__a[G__17099__i] = arguments[G__17099__i + 0]; ++G__17099__i;}
  args = new cljs.core.IndexedSeq(G__17099__a,0);
} 
return G__17098__delegate.call(this,args);};
G__17098.cljs$lang$maxFixedArity = 0;
G__17098.cljs$lang$applyTo = (function (arglist__17100){
var args = cljs.core.seq(arglist__17100);
return G__17098__delegate(args);
});
G__17098.cljs$core$IFn$_invoke$arity$variadic = G__17098__delegate;
return G__17098;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17105(s__17106){
return (new cljs.core.LazySeq(null,(function (){
var s__17106__$1 = s__17106;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17106__$1);
if(temp__4425__auto__){
var s__17106__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17106__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17106__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17108 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17107 = (0);
while(true){
if((i__17107 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17107);
cljs.core.chunk_append.call(null,b__17108,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17109 = (i__17107 + (1));
i__17107 = G__17109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17108),sablono$core$update_arglists_$_iter__17105.call(null,cljs.core.chunk_rest.call(null,s__17106__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17108),null);
}
} else {
var args = cljs.core.first.call(null,s__17106__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17105.call(null,cljs.core.rest.call(null,s__17106__$2)));
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
var len__6152__auto___17115 = arguments.length;
var i__6153__auto___17116 = (0);
while(true){
if((i__6153__auto___17116 < len__6152__auto___17115)){
args__6159__auto__.push((arguments[i__6153__auto___17116]));

var G__17117 = (i__6153__auto___17116 + (1));
i__6153__auto___17116 = G__17117;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17111(s__17112){
return (new cljs.core.LazySeq(null,(function (){
var s__17112__$1 = s__17112;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17112__$1);
if(temp__4425__auto__){
var s__17112__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17112__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17112__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17114 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17113 = (0);
while(true){
if((i__17113 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17113);
cljs.core.chunk_append.call(null,b__17114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17118 = (i__17113 + (1));
i__17113 = G__17118;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17114),sablono$core$iter__17111.call(null,cljs.core.chunk_rest.call(null,s__17112__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17114),null);
}
} else {
var style = cljs.core.first.call(null,s__17112__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17111.call(null,cljs.core.rest.call(null,s__17112__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17110){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17110));
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
sablono.core.link_to17119 = (function sablono$core$link_to17119(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17122 = arguments.length;
var i__6153__auto___17123 = (0);
while(true){
if((i__6153__auto___17123 < len__6152__auto___17122)){
args__6159__auto__.push((arguments[i__6153__auto___17123]));

var G__17124 = (i__6153__auto___17123 + (1));
i__6153__auto___17123 = G__17124;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17119.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17119.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17119.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17119.cljs$lang$applyTo = (function (seq17120){
var G__17121 = cljs.core.first.call(null,seq17120);
var seq17120__$1 = cljs.core.next.call(null,seq17120);
return sablono.core.link_to17119.cljs$core$IFn$_invoke$arity$variadic(G__17121,seq17120__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17119);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17125 = (function sablono$core$mail_to17125(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17130 = arguments.length;
var i__6153__auto___17131 = (0);
while(true){
if((i__6153__auto___17131 < len__6152__auto___17130)){
args__6159__auto__.push((arguments[i__6153__auto___17131]));

var G__17132 = (i__6153__auto___17131 + (1));
i__6153__auto___17131 = G__17132;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17125.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17125.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17128){
var vec__17129 = p__17128;
var content = cljs.core.nth.call(null,vec__17129,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17125.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17125.cljs$lang$applyTo = (function (seq17126){
var G__17127 = cljs.core.first.call(null,seq17126);
var seq17126__$1 = cljs.core.next.call(null,seq17126);
return sablono.core.mail_to17125.cljs$core$IFn$_invoke$arity$variadic(G__17127,seq17126__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17125);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17133 = (function sablono$core$unordered_list17133(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17133_$_iter__17138(s__17139){
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
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17141),sablono$core$unordered_list17133_$_iter__17138.call(null,cljs.core.chunk_rest.call(null,s__17139__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17141),null);
}
} else {
var x = cljs.core.first.call(null,s__17139__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17133_$_iter__17138.call(null,cljs.core.rest.call(null,s__17139__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17133);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17143 = (function sablono$core$ordered_list17143(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17143_$_iter__17148(s__17149){
return (new cljs.core.LazySeq(null,(function (){
var s__17149__$1 = s__17149;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17149__$1);
if(temp__4425__auto__){
var s__17149__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17149__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17149__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17151 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17150 = (0);
while(true){
if((i__17150 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17150);
cljs.core.chunk_append.call(null,b__17151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17152 = (i__17150 + (1));
i__17150 = G__17152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17151),sablono$core$ordered_list17143_$_iter__17148.call(null,cljs.core.chunk_rest.call(null,s__17149__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17151),null);
}
} else {
var x = cljs.core.first.call(null,s__17149__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17143_$_iter__17148.call(null,cljs.core.rest.call(null,s__17149__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17143);
/**
 * Create an image element.
 */
sablono.core.image17153 = (function sablono$core$image17153(var_args){
var args17154 = [];
var len__6152__auto___17157 = arguments.length;
var i__6153__auto___17158 = (0);
while(true){
if((i__6153__auto___17158 < len__6152__auto___17157)){
args17154.push((arguments[i__6153__auto___17158]));

var G__17159 = (i__6153__auto___17158 + (1));
i__6153__auto___17158 = G__17159;
continue;
} else {
}
break;
}

var G__17156 = args17154.length;
switch (G__17156) {
case 1:
return sablono.core.image17153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17154.length)].join('')));

}
});

sablono.core.image17153.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17153.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17153.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17153);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17161_SHARP_,p2__17162_SHARP_){
return [cljs.core.str(p1__17161_SHARP_),cljs.core.str("["),cljs.core.str(p2__17162_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17163_SHARP_,p2__17164_SHARP_){
return [cljs.core.str(p1__17163_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17164_SHARP_)].join('');
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
sablono.core.color_field17165 = (function sablono$core$color_field17165(var_args){
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
return sablono.core.color_field17165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17166.length)].join('')));

}
});

sablono.core.color_field17165.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.color_field17165.call(null,name__12989__auto__,null);
});

sablono.core.color_field17165.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.color_field17165.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17165);

/**
 * Creates a date input field.
 */
sablono.core.date_field17169 = (function sablono$core$date_field17169(var_args){
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
return sablono.core.date_field17169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17170.length)].join('')));

}
});

sablono.core.date_field17169.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.date_field17169.call(null,name__12989__auto__,null);
});

sablono.core.date_field17169.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.date_field17169.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17169);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17173 = (function sablono$core$datetime_field17173(var_args){
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
return sablono.core.datetime_field17173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17174.length)].join('')));

}
});

sablono.core.datetime_field17173.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.datetime_field17173.call(null,name__12989__auto__,null);
});

sablono.core.datetime_field17173.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.datetime_field17173.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17173);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17177 = (function sablono$core$datetime_local_field17177(var_args){
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
return sablono.core.datetime_local_field17177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17178.length)].join('')));

}
});

sablono.core.datetime_local_field17177.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.datetime_local_field17177.call(null,name__12989__auto__,null);
});

sablono.core.datetime_local_field17177.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.datetime_local_field17177.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17177);

/**
 * Creates a email input field.
 */
sablono.core.email_field17181 = (function sablono$core$email_field17181(var_args){
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
return sablono.core.email_field17181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17182.length)].join('')));

}
});

sablono.core.email_field17181.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.email_field17181.call(null,name__12989__auto__,null);
});

sablono.core.email_field17181.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.email_field17181.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17181);

/**
 * Creates a file input field.
 */
sablono.core.file_field17185 = (function sablono$core$file_field17185(var_args){
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
return sablono.core.file_field17185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17186.length)].join('')));

}
});

sablono.core.file_field17185.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.file_field17185.call(null,name__12989__auto__,null);
});

sablono.core.file_field17185.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.file_field17185.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17185);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17189 = (function sablono$core$hidden_field17189(var_args){
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
return sablono.core.hidden_field17189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17190.length)].join('')));

}
});

sablono.core.hidden_field17189.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.hidden_field17189.call(null,name__12989__auto__,null);
});

sablono.core.hidden_field17189.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.hidden_field17189.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17189);

/**
 * Creates a month input field.
 */
sablono.core.month_field17193 = (function sablono$core$month_field17193(var_args){
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
return sablono.core.month_field17193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17194.length)].join('')));

}
});

sablono.core.month_field17193.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.month_field17193.call(null,name__12989__auto__,null);
});

sablono.core.month_field17193.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.month_field17193.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17193);

/**
 * Creates a number input field.
 */
sablono.core.number_field17197 = (function sablono$core$number_field17197(var_args){
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
return sablono.core.number_field17197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17198.length)].join('')));

}
});

sablono.core.number_field17197.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.number_field17197.call(null,name__12989__auto__,null);
});

sablono.core.number_field17197.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.number_field17197.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17197);

/**
 * Creates a password input field.
 */
sablono.core.password_field17201 = (function sablono$core$password_field17201(var_args){
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
return sablono.core.password_field17201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17202.length)].join('')));

}
});

sablono.core.password_field17201.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.password_field17201.call(null,name__12989__auto__,null);
});

sablono.core.password_field17201.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.password_field17201.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17201);

/**
 * Creates a range input field.
 */
sablono.core.range_field17205 = (function sablono$core$range_field17205(var_args){
var args17206 = [];
var len__6152__auto___17273 = arguments.length;
var i__6153__auto___17274 = (0);
while(true){
if((i__6153__auto___17274 < len__6152__auto___17273)){
args17206.push((arguments[i__6153__auto___17274]));

var G__17275 = (i__6153__auto___17274 + (1));
i__6153__auto___17274 = G__17275;
continue;
} else {
}
break;
}

var G__17208 = args17206.length;
switch (G__17208) {
case 1:
return sablono.core.range_field17205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17206.length)].join('')));

}
});

sablono.core.range_field17205.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.range_field17205.call(null,name__12989__auto__,null);
});

sablono.core.range_field17205.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.range_field17205.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17205);

/**
 * Creates a search input field.
 */
sablono.core.search_field17209 = (function sablono$core$search_field17209(var_args){
var args17210 = [];
var len__6152__auto___17277 = arguments.length;
var i__6153__auto___17278 = (0);
while(true){
if((i__6153__auto___17278 < len__6152__auto___17277)){
args17210.push((arguments[i__6153__auto___17278]));

var G__17279 = (i__6153__auto___17278 + (1));
i__6153__auto___17278 = G__17279;
continue;
} else {
}
break;
}

var G__17212 = args17210.length;
switch (G__17212) {
case 1:
return sablono.core.search_field17209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17210.length)].join('')));

}
});

sablono.core.search_field17209.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.search_field17209.call(null,name__12989__auto__,null);
});

sablono.core.search_field17209.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.search_field17209.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17209);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17213 = (function sablono$core$tel_field17213(var_args){
var args17214 = [];
var len__6152__auto___17281 = arguments.length;
var i__6153__auto___17282 = (0);
while(true){
if((i__6153__auto___17282 < len__6152__auto___17281)){
args17214.push((arguments[i__6153__auto___17282]));

var G__17283 = (i__6153__auto___17282 + (1));
i__6153__auto___17282 = G__17283;
continue;
} else {
}
break;
}

var G__17216 = args17214.length;
switch (G__17216) {
case 1:
return sablono.core.tel_field17213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17214.length)].join('')));

}
});

sablono.core.tel_field17213.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.tel_field17213.call(null,name__12989__auto__,null);
});

sablono.core.tel_field17213.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.tel_field17213.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17213);

/**
 * Creates a text input field.
 */
sablono.core.text_field17217 = (function sablono$core$text_field17217(var_args){
var args17218 = [];
var len__6152__auto___17285 = arguments.length;
var i__6153__auto___17286 = (0);
while(true){
if((i__6153__auto___17286 < len__6152__auto___17285)){
args17218.push((arguments[i__6153__auto___17286]));

var G__17287 = (i__6153__auto___17286 + (1));
i__6153__auto___17286 = G__17287;
continue;
} else {
}
break;
}

var G__17220 = args17218.length;
switch (G__17220) {
case 1:
return sablono.core.text_field17217.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17217.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17218.length)].join('')));

}
});

sablono.core.text_field17217.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.text_field17217.call(null,name__12989__auto__,null);
});

sablono.core.text_field17217.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.text_field17217.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17217);

/**
 * Creates a time input field.
 */
sablono.core.time_field17221 = (function sablono$core$time_field17221(var_args){
var args17222 = [];
var len__6152__auto___17289 = arguments.length;
var i__6153__auto___17290 = (0);
while(true){
if((i__6153__auto___17290 < len__6152__auto___17289)){
args17222.push((arguments[i__6153__auto___17290]));

var G__17291 = (i__6153__auto___17290 + (1));
i__6153__auto___17290 = G__17291;
continue;
} else {
}
break;
}

var G__17224 = args17222.length;
switch (G__17224) {
case 1:
return sablono.core.time_field17221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17222.length)].join('')));

}
});

sablono.core.time_field17221.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.time_field17221.call(null,name__12989__auto__,null);
});

sablono.core.time_field17221.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.time_field17221.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17221);

/**
 * Creates a url input field.
 */
sablono.core.url_field17225 = (function sablono$core$url_field17225(var_args){
var args17226 = [];
var len__6152__auto___17293 = arguments.length;
var i__6153__auto___17294 = (0);
while(true){
if((i__6153__auto___17294 < len__6152__auto___17293)){
args17226.push((arguments[i__6153__auto___17294]));

var G__17295 = (i__6153__auto___17294 + (1));
i__6153__auto___17294 = G__17295;
continue;
} else {
}
break;
}

var G__17228 = args17226.length;
switch (G__17228) {
case 1:
return sablono.core.url_field17225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17226.length)].join('')));

}
});

sablono.core.url_field17225.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.url_field17225.call(null,name__12989__auto__,null);
});

sablono.core.url_field17225.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.url_field17225.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17225);

/**
 * Creates a week input field.
 */
sablono.core.week_field17229 = (function sablono$core$week_field17229(var_args){
var args17230 = [];
var len__6152__auto___17297 = arguments.length;
var i__6153__auto___17298 = (0);
while(true){
if((i__6153__auto___17298 < len__6152__auto___17297)){
args17230.push((arguments[i__6153__auto___17298]));

var G__17299 = (i__6153__auto___17298 + (1));
i__6153__auto___17298 = G__17299;
continue;
} else {
}
break;
}

var G__17232 = args17230.length;
switch (G__17232) {
case 1:
return sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17230.length)].join('')));

}
});

sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$1 = (function (name__12989__auto__){
return sablono.core.week_field17229.call(null,name__12989__auto__,null);
});

sablono.core.week_field17229.cljs$core$IFn$_invoke$arity$2 = (function (name__12989__auto__,value__12990__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12989__auto__,value__12990__auto__);
});

sablono.core.week_field17229.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17229);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17301 = (function sablono$core$check_box17301(var_args){
var args17302 = [];
var len__6152__auto___17305 = arguments.length;
var i__6153__auto___17306 = (0);
while(true){
if((i__6153__auto___17306 < len__6152__auto___17305)){
args17302.push((arguments[i__6153__auto___17306]));

var G__17307 = (i__6153__auto___17306 + (1));
i__6153__auto___17306 = G__17307;
continue;
} else {
}
break;
}

var G__17304 = args17302.length;
switch (G__17304) {
case 1:
return sablono.core.check_box17301.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17301.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17301.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17302.length)].join('')));

}
});

sablono.core.check_box17301.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17301.call(null,name,null);
});

sablono.core.check_box17301.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17301.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17301.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17301.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17301);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17309 = (function sablono$core$radio_button17309(var_args){
var args17310 = [];
var len__6152__auto___17313 = arguments.length;
var i__6153__auto___17314 = (0);
while(true){
if((i__6153__auto___17314 < len__6152__auto___17313)){
args17310.push((arguments[i__6153__auto___17314]));

var G__17315 = (i__6153__auto___17314 + (1));
i__6153__auto___17314 = G__17315;
continue;
} else {
}
break;
}

var G__17312 = args17310.length;
switch (G__17312) {
case 1:
return sablono.core.radio_button17309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17309.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17310.length)].join('')));

}
});

sablono.core.radio_button17309.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17309.call(null,group,null);
});

sablono.core.radio_button17309.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17309.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17309.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17309.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17309);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17317 = (function sablono$core$select_options17317(coll){
var iter__5866__auto__ = (function sablono$core$select_options17317_$_iter__17326(s__17327){
return (new cljs.core.LazySeq(null,(function (){
var s__17327__$1 = s__17327;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17327__$1);
if(temp__4425__auto__){
var s__17327__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17327__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17327__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17329 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17328 = (0);
while(true){
if((i__17328 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17328);
cljs.core.chunk_append.call(null,b__17329,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17332 = x;
var text = cljs.core.nth.call(null,vec__17332,(0),null);
var val = cljs.core.nth.call(null,vec__17332,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17332,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17317.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17334 = (i__17328 + (1));
i__17328 = G__17334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17329),sablono$core$select_options17317_$_iter__17326.call(null,cljs.core.chunk_rest.call(null,s__17327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17329),null);
}
} else {
var x = cljs.core.first.call(null,s__17327__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17333 = x;
var text = cljs.core.nth.call(null,vec__17333,(0),null);
var val = cljs.core.nth.call(null,vec__17333,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17333,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17317.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17317_$_iter__17326.call(null,cljs.core.rest.call(null,s__17327__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17317);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17335 = (function sablono$core$drop_down17335(var_args){
var args17336 = [];
var len__6152__auto___17339 = arguments.length;
var i__6153__auto___17340 = (0);
while(true){
if((i__6153__auto___17340 < len__6152__auto___17339)){
args17336.push((arguments[i__6153__auto___17340]));

var G__17341 = (i__6153__auto___17340 + (1));
i__6153__auto___17340 = G__17341;
continue;
} else {
}
break;
}

var G__17338 = args17336.length;
switch (G__17338) {
case 2:
return sablono.core.drop_down17335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17335.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17336.length)].join('')));

}
});

sablono.core.drop_down17335.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17335.call(null,name,options,null);
});

sablono.core.drop_down17335.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17335.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17335);
/**
 * Creates a text area element.
 */
sablono.core.text_area17343 = (function sablono$core$text_area17343(var_args){
var args17344 = [];
var len__6152__auto___17347 = arguments.length;
var i__6153__auto___17348 = (0);
while(true){
if((i__6153__auto___17348 < len__6152__auto___17347)){
args17344.push((arguments[i__6153__auto___17348]));

var G__17349 = (i__6153__auto___17348 + (1));
i__6153__auto___17348 = G__17349;
continue;
} else {
}
break;
}

var G__17346 = args17344.length;
switch (G__17346) {
case 1:
return sablono.core.text_area17343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17344.length)].join('')));

}
});

sablono.core.text_area17343.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17343.call(null,name,null);
});

sablono.core.text_area17343.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17343.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17343);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17351 = (function sablono$core$label17351(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17351);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17352 = (function sablono$core$submit_button17352(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17352);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17353 = (function sablono$core$reset_button17353(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17353);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17354 = (function sablono$core$form_to17354(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17359 = arguments.length;
var i__6153__auto___17360 = (0);
while(true){
if((i__6153__auto___17360 < len__6152__auto___17359)){
args__6159__auto__.push((arguments[i__6153__auto___17360]));

var G__17361 = (i__6153__auto___17360 + (1));
i__6153__auto___17360 = G__17361;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17354.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17354.cljs$core$IFn$_invoke$arity$variadic = (function (p__17357,body){
var vec__17358 = p__17357;
var method = cljs.core.nth.call(null,vec__17358,(0),null);
var action = cljs.core.nth.call(null,vec__17358,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17354.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17354.cljs$lang$applyTo = (function (seq17355){
var G__17356 = cljs.core.first.call(null,seq17355);
var seq17355__$1 = cljs.core.next.call(null,seq17355);
return sablono.core.form_to17354.cljs$core$IFn$_invoke$arity$variadic(G__17356,seq17355__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17354);

//# sourceMappingURL=core.js.map