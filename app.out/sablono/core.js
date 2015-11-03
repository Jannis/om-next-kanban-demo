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
var G__17111__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17110 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17110,(0),null);
var body = cljs.core.nthnext.call(null,vec__17110,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17112__i = 0, G__17112__a = new Array(arguments.length -  0);
while (G__17112__i < G__17112__a.length) {G__17112__a[G__17112__i] = arguments[G__17112__i + 0]; ++G__17112__i;}
  args = new cljs.core.IndexedSeq(G__17112__a,0);
} 
return G__17111__delegate.call(this,args);};
G__17111.cljs$lang$maxFixedArity = 0;
G__17111.cljs$lang$applyTo = (function (arglist__17113){
var args = cljs.core.seq(arglist__17113);
return G__17111__delegate(args);
});
G__17111.cljs$core$IFn$_invoke$arity$variadic = G__17111__delegate;
return G__17111;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17118(s__17119){
return (new cljs.core.LazySeq(null,(function (){
var s__17119__$1 = s__17119;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17119__$1);
if(temp__4425__auto__){
var s__17119__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17119__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17119__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17121 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17120 = (0);
while(true){
if((i__17120 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17120);
cljs.core.chunk_append.call(null,b__17121,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17122 = (i__17120 + (1));
i__17120 = G__17122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17121),sablono$core$update_arglists_$_iter__17118.call(null,cljs.core.chunk_rest.call(null,s__17119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17121),null);
}
} else {
var args = cljs.core.first.call(null,s__17119__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17118.call(null,cljs.core.rest.call(null,s__17119__$2)));
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

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17124(s__17125){
return (new cljs.core.LazySeq(null,(function (){
var s__17125__$1 = s__17125;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17125__$1);
if(temp__4425__auto__){
var s__17125__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17125__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17125__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17127 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17126 = (0);
while(true){
if((i__17126 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17126);
cljs.core.chunk_append.call(null,b__17127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17131 = (i__17126 + (1));
i__17126 = G__17131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17127),sablono$core$iter__17124.call(null,cljs.core.chunk_rest.call(null,s__17125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17127),null);
}
} else {
var style = cljs.core.first.call(null,s__17125__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17124.call(null,cljs.core.rest.call(null,s__17125__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17123){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17123));
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
sablono.core.link_to17132 = (function sablono$core$link_to17132(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17135 = arguments.length;
var i__6153__auto___17136 = (0);
while(true){
if((i__6153__auto___17136 < len__6152__auto___17135)){
args__6159__auto__.push((arguments[i__6153__auto___17136]));

var G__17137 = (i__6153__auto___17136 + (1));
i__6153__auto___17136 = G__17137;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17132.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17132.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17132.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17132.cljs$lang$applyTo = (function (seq17133){
var G__17134 = cljs.core.first.call(null,seq17133);
var seq17133__$1 = cljs.core.next.call(null,seq17133);
return sablono.core.link_to17132.cljs$core$IFn$_invoke$arity$variadic(G__17134,seq17133__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17132);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17138 = (function sablono$core$mail_to17138(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17143 = arguments.length;
var i__6153__auto___17144 = (0);
while(true){
if((i__6153__auto___17144 < len__6152__auto___17143)){
args__6159__auto__.push((arguments[i__6153__auto___17144]));

var G__17145 = (i__6153__auto___17144 + (1));
i__6153__auto___17144 = G__17145;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17138.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17138.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17141){
var vec__17142 = p__17141;
var content = cljs.core.nth.call(null,vec__17142,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17138.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17138.cljs$lang$applyTo = (function (seq17139){
var G__17140 = cljs.core.first.call(null,seq17139);
var seq17139__$1 = cljs.core.next.call(null,seq17139);
return sablono.core.mail_to17138.cljs$core$IFn$_invoke$arity$variadic(G__17140,seq17139__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17138);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17146 = (function sablono$core$unordered_list17146(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17146_$_iter__17151(s__17152){
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
var x = cljs.core._nth.call(null,c__5864__auto__,i__17153);
cljs.core.chunk_append.call(null,b__17154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17155 = (i__17153 + (1));
i__17153 = G__17155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17154),sablono$core$unordered_list17146_$_iter__17151.call(null,cljs.core.chunk_rest.call(null,s__17152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17154),null);
}
} else {
var x = cljs.core.first.call(null,s__17152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17146_$_iter__17151.call(null,cljs.core.rest.call(null,s__17152__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17146);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17156 = (function sablono$core$ordered_list17156(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17156_$_iter__17161(s__17162){
return (new cljs.core.LazySeq(null,(function (){
var s__17162__$1 = s__17162;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17162__$1);
if(temp__4425__auto__){
var s__17162__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17162__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17162__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17164 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17163 = (0);
while(true){
if((i__17163 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17163);
cljs.core.chunk_append.call(null,b__17164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17165 = (i__17163 + (1));
i__17163 = G__17165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17164),sablono$core$ordered_list17156_$_iter__17161.call(null,cljs.core.chunk_rest.call(null,s__17162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17164),null);
}
} else {
var x = cljs.core.first.call(null,s__17162__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17156_$_iter__17161.call(null,cljs.core.rest.call(null,s__17162__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17156);
/**
 * Create an image element.
 */
sablono.core.image17166 = (function sablono$core$image17166(var_args){
var args17167 = [];
var len__6152__auto___17170 = arguments.length;
var i__6153__auto___17171 = (0);
while(true){
if((i__6153__auto___17171 < len__6152__auto___17170)){
args17167.push((arguments[i__6153__auto___17171]));

var G__17172 = (i__6153__auto___17171 + (1));
i__6153__auto___17171 = G__17172;
continue;
} else {
}
break;
}

var G__17169 = args17167.length;
switch (G__17169) {
case 1:
return sablono.core.image17166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17167.length)].join('')));

}
});

sablono.core.image17166.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17166.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17166.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17166);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17174_SHARP_,p2__17175_SHARP_){
return [cljs.core.str(p1__17174_SHARP_),cljs.core.str("["),cljs.core.str(p2__17175_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17176_SHARP_,p2__17177_SHARP_){
return [cljs.core.str(p1__17176_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17177_SHARP_)].join('');
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
sablono.core.color_field17178 = (function sablono$core$color_field17178(var_args){
var args17179 = [];
var len__6152__auto___17246 = arguments.length;
var i__6153__auto___17247 = (0);
while(true){
if((i__6153__auto___17247 < len__6152__auto___17246)){
args17179.push((arguments[i__6153__auto___17247]));

var G__17248 = (i__6153__auto___17247 + (1));
i__6153__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var G__17181 = args17179.length;
switch (G__17181) {
case 1:
return sablono.core.color_field17178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17179.length)].join('')));

}
});

sablono.core.color_field17178.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.color_field17178.call(null,name__13056__auto__,null);
});

sablono.core.color_field17178.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.color_field17178.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17178);

/**
 * Creates a date input field.
 */
sablono.core.date_field17182 = (function sablono$core$date_field17182(var_args){
var args17183 = [];
var len__6152__auto___17250 = arguments.length;
var i__6153__auto___17251 = (0);
while(true){
if((i__6153__auto___17251 < len__6152__auto___17250)){
args17183.push((arguments[i__6153__auto___17251]));

var G__17252 = (i__6153__auto___17251 + (1));
i__6153__auto___17251 = G__17252;
continue;
} else {
}
break;
}

var G__17185 = args17183.length;
switch (G__17185) {
case 1:
return sablono.core.date_field17182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17183.length)].join('')));

}
});

sablono.core.date_field17182.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.date_field17182.call(null,name__13056__auto__,null);
});

sablono.core.date_field17182.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.date_field17182.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17182);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17186 = (function sablono$core$datetime_field17186(var_args){
var args17187 = [];
var len__6152__auto___17254 = arguments.length;
var i__6153__auto___17255 = (0);
while(true){
if((i__6153__auto___17255 < len__6152__auto___17254)){
args17187.push((arguments[i__6153__auto___17255]));

var G__17256 = (i__6153__auto___17255 + (1));
i__6153__auto___17255 = G__17256;
continue;
} else {
}
break;
}

var G__17189 = args17187.length;
switch (G__17189) {
case 1:
return sablono.core.datetime_field17186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17187.length)].join('')));

}
});

sablono.core.datetime_field17186.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.datetime_field17186.call(null,name__13056__auto__,null);
});

sablono.core.datetime_field17186.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.datetime_field17186.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17186);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17190 = (function sablono$core$datetime_local_field17190(var_args){
var args17191 = [];
var len__6152__auto___17258 = arguments.length;
var i__6153__auto___17259 = (0);
while(true){
if((i__6153__auto___17259 < len__6152__auto___17258)){
args17191.push((arguments[i__6153__auto___17259]));

var G__17260 = (i__6153__auto___17259 + (1));
i__6153__auto___17259 = G__17260;
continue;
} else {
}
break;
}

var G__17193 = args17191.length;
switch (G__17193) {
case 1:
return sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17191.length)].join('')));

}
});

sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.datetime_local_field17190.call(null,name__13056__auto__,null);
});

sablono.core.datetime_local_field17190.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.datetime_local_field17190.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17190);

/**
 * Creates a email input field.
 */
sablono.core.email_field17194 = (function sablono$core$email_field17194(var_args){
var args17195 = [];
var len__6152__auto___17262 = arguments.length;
var i__6153__auto___17263 = (0);
while(true){
if((i__6153__auto___17263 < len__6152__auto___17262)){
args17195.push((arguments[i__6153__auto___17263]));

var G__17264 = (i__6153__auto___17263 + (1));
i__6153__auto___17263 = G__17264;
continue;
} else {
}
break;
}

var G__17197 = args17195.length;
switch (G__17197) {
case 1:
return sablono.core.email_field17194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17195.length)].join('')));

}
});

sablono.core.email_field17194.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.email_field17194.call(null,name__13056__auto__,null);
});

sablono.core.email_field17194.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.email_field17194.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17194);

/**
 * Creates a file input field.
 */
sablono.core.file_field17198 = (function sablono$core$file_field17198(var_args){
var args17199 = [];
var len__6152__auto___17266 = arguments.length;
var i__6153__auto___17267 = (0);
while(true){
if((i__6153__auto___17267 < len__6152__auto___17266)){
args17199.push((arguments[i__6153__auto___17267]));

var G__17268 = (i__6153__auto___17267 + (1));
i__6153__auto___17267 = G__17268;
continue;
} else {
}
break;
}

var G__17201 = args17199.length;
switch (G__17201) {
case 1:
return sablono.core.file_field17198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17199.length)].join('')));

}
});

sablono.core.file_field17198.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.file_field17198.call(null,name__13056__auto__,null);
});

sablono.core.file_field17198.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.file_field17198.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17198);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17202 = (function sablono$core$hidden_field17202(var_args){
var args17203 = [];
var len__6152__auto___17270 = arguments.length;
var i__6153__auto___17271 = (0);
while(true){
if((i__6153__auto___17271 < len__6152__auto___17270)){
args17203.push((arguments[i__6153__auto___17271]));

var G__17272 = (i__6153__auto___17271 + (1));
i__6153__auto___17271 = G__17272;
continue;
} else {
}
break;
}

var G__17205 = args17203.length;
switch (G__17205) {
case 1:
return sablono.core.hidden_field17202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17203.length)].join('')));

}
});

sablono.core.hidden_field17202.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.hidden_field17202.call(null,name__13056__auto__,null);
});

sablono.core.hidden_field17202.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.hidden_field17202.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17202);

/**
 * Creates a month input field.
 */
sablono.core.month_field17206 = (function sablono$core$month_field17206(var_args){
var args17207 = [];
var len__6152__auto___17274 = arguments.length;
var i__6153__auto___17275 = (0);
while(true){
if((i__6153__auto___17275 < len__6152__auto___17274)){
args17207.push((arguments[i__6153__auto___17275]));

var G__17276 = (i__6153__auto___17275 + (1));
i__6153__auto___17275 = G__17276;
continue;
} else {
}
break;
}

var G__17209 = args17207.length;
switch (G__17209) {
case 1:
return sablono.core.month_field17206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17207.length)].join('')));

}
});

sablono.core.month_field17206.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.month_field17206.call(null,name__13056__auto__,null);
});

sablono.core.month_field17206.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.month_field17206.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17206);

/**
 * Creates a number input field.
 */
sablono.core.number_field17210 = (function sablono$core$number_field17210(var_args){
var args17211 = [];
var len__6152__auto___17278 = arguments.length;
var i__6153__auto___17279 = (0);
while(true){
if((i__6153__auto___17279 < len__6152__auto___17278)){
args17211.push((arguments[i__6153__auto___17279]));

var G__17280 = (i__6153__auto___17279 + (1));
i__6153__auto___17279 = G__17280;
continue;
} else {
}
break;
}

var G__17213 = args17211.length;
switch (G__17213) {
case 1:
return sablono.core.number_field17210.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17210.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17211.length)].join('')));

}
});

sablono.core.number_field17210.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.number_field17210.call(null,name__13056__auto__,null);
});

sablono.core.number_field17210.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.number_field17210.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17210);

/**
 * Creates a password input field.
 */
sablono.core.password_field17214 = (function sablono$core$password_field17214(var_args){
var args17215 = [];
var len__6152__auto___17282 = arguments.length;
var i__6153__auto___17283 = (0);
while(true){
if((i__6153__auto___17283 < len__6152__auto___17282)){
args17215.push((arguments[i__6153__auto___17283]));

var G__17284 = (i__6153__auto___17283 + (1));
i__6153__auto___17283 = G__17284;
continue;
} else {
}
break;
}

var G__17217 = args17215.length;
switch (G__17217) {
case 1:
return sablono.core.password_field17214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17215.length)].join('')));

}
});

sablono.core.password_field17214.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.password_field17214.call(null,name__13056__auto__,null);
});

sablono.core.password_field17214.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.password_field17214.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17214);

/**
 * Creates a range input field.
 */
sablono.core.range_field17218 = (function sablono$core$range_field17218(var_args){
var args17219 = [];
var len__6152__auto___17286 = arguments.length;
var i__6153__auto___17287 = (0);
while(true){
if((i__6153__auto___17287 < len__6152__auto___17286)){
args17219.push((arguments[i__6153__auto___17287]));

var G__17288 = (i__6153__auto___17287 + (1));
i__6153__auto___17287 = G__17288;
continue;
} else {
}
break;
}

var G__17221 = args17219.length;
switch (G__17221) {
case 1:
return sablono.core.range_field17218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17219.length)].join('')));

}
});

sablono.core.range_field17218.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.range_field17218.call(null,name__13056__auto__,null);
});

sablono.core.range_field17218.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.range_field17218.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17218);

/**
 * Creates a search input field.
 */
sablono.core.search_field17222 = (function sablono$core$search_field17222(var_args){
var args17223 = [];
var len__6152__auto___17290 = arguments.length;
var i__6153__auto___17291 = (0);
while(true){
if((i__6153__auto___17291 < len__6152__auto___17290)){
args17223.push((arguments[i__6153__auto___17291]));

var G__17292 = (i__6153__auto___17291 + (1));
i__6153__auto___17291 = G__17292;
continue;
} else {
}
break;
}

var G__17225 = args17223.length;
switch (G__17225) {
case 1:
return sablono.core.search_field17222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17223.length)].join('')));

}
});

sablono.core.search_field17222.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.search_field17222.call(null,name__13056__auto__,null);
});

sablono.core.search_field17222.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.search_field17222.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17222);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17226 = (function sablono$core$tel_field17226(var_args){
var args17227 = [];
var len__6152__auto___17294 = arguments.length;
var i__6153__auto___17295 = (0);
while(true){
if((i__6153__auto___17295 < len__6152__auto___17294)){
args17227.push((arguments[i__6153__auto___17295]));

var G__17296 = (i__6153__auto___17295 + (1));
i__6153__auto___17295 = G__17296;
continue;
} else {
}
break;
}

var G__17229 = args17227.length;
switch (G__17229) {
case 1:
return sablono.core.tel_field17226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17227.length)].join('')));

}
});

sablono.core.tel_field17226.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.tel_field17226.call(null,name__13056__auto__,null);
});

sablono.core.tel_field17226.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.tel_field17226.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17226);

/**
 * Creates a text input field.
 */
sablono.core.text_field17230 = (function sablono$core$text_field17230(var_args){
var args17231 = [];
var len__6152__auto___17298 = arguments.length;
var i__6153__auto___17299 = (0);
while(true){
if((i__6153__auto___17299 < len__6152__auto___17298)){
args17231.push((arguments[i__6153__auto___17299]));

var G__17300 = (i__6153__auto___17299 + (1));
i__6153__auto___17299 = G__17300;
continue;
} else {
}
break;
}

var G__17233 = args17231.length;
switch (G__17233) {
case 1:
return sablono.core.text_field17230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17231.length)].join('')));

}
});

sablono.core.text_field17230.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.text_field17230.call(null,name__13056__auto__,null);
});

sablono.core.text_field17230.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.text_field17230.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17230);

/**
 * Creates a time input field.
 */
sablono.core.time_field17234 = (function sablono$core$time_field17234(var_args){
var args17235 = [];
var len__6152__auto___17302 = arguments.length;
var i__6153__auto___17303 = (0);
while(true){
if((i__6153__auto___17303 < len__6152__auto___17302)){
args17235.push((arguments[i__6153__auto___17303]));

var G__17304 = (i__6153__auto___17303 + (1));
i__6153__auto___17303 = G__17304;
continue;
} else {
}
break;
}

var G__17237 = args17235.length;
switch (G__17237) {
case 1:
return sablono.core.time_field17234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17235.length)].join('')));

}
});

sablono.core.time_field17234.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.time_field17234.call(null,name__13056__auto__,null);
});

sablono.core.time_field17234.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.time_field17234.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17234);

/**
 * Creates a url input field.
 */
sablono.core.url_field17238 = (function sablono$core$url_field17238(var_args){
var args17239 = [];
var len__6152__auto___17306 = arguments.length;
var i__6153__auto___17307 = (0);
while(true){
if((i__6153__auto___17307 < len__6152__auto___17306)){
args17239.push((arguments[i__6153__auto___17307]));

var G__17308 = (i__6153__auto___17307 + (1));
i__6153__auto___17307 = G__17308;
continue;
} else {
}
break;
}

var G__17241 = args17239.length;
switch (G__17241) {
case 1:
return sablono.core.url_field17238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17239.length)].join('')));

}
});

sablono.core.url_field17238.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.url_field17238.call(null,name__13056__auto__,null);
});

sablono.core.url_field17238.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.url_field17238.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17238);

/**
 * Creates a week input field.
 */
sablono.core.week_field17242 = (function sablono$core$week_field17242(var_args){
var args17243 = [];
var len__6152__auto___17310 = arguments.length;
var i__6153__auto___17311 = (0);
while(true){
if((i__6153__auto___17311 < len__6152__auto___17310)){
args17243.push((arguments[i__6153__auto___17311]));

var G__17312 = (i__6153__auto___17311 + (1));
i__6153__auto___17311 = G__17312;
continue;
} else {
}
break;
}

var G__17245 = args17243.length;
switch (G__17245) {
case 1:
return sablono.core.week_field17242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17243.length)].join('')));

}
});

sablono.core.week_field17242.cljs$core$IFn$_invoke$arity$1 = (function (name__13056__auto__){
return sablono.core.week_field17242.call(null,name__13056__auto__,null);
});

sablono.core.week_field17242.cljs$core$IFn$_invoke$arity$2 = (function (name__13056__auto__,value__13057__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13056__auto__,value__13057__auto__);
});

sablono.core.week_field17242.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17242);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17314 = (function sablono$core$check_box17314(var_args){
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
case 1:
return sablono.core.check_box17314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17314.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17315.length)].join('')));

}
});

sablono.core.check_box17314.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17314.call(null,name,null);
});

sablono.core.check_box17314.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17314.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17314.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17314.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17314);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17322 = (function sablono$core$radio_button17322(var_args){
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
return sablono.core.radio_button17322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17322.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17323.length)].join('')));

}
});

sablono.core.radio_button17322.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17322.call(null,group,null);
});

sablono.core.radio_button17322.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17322.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17322.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17322.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17322);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17330 = (function sablono$core$select_options17330(coll){
var iter__5866__auto__ = (function sablono$core$select_options17330_$_iter__17339(s__17340){
return (new cljs.core.LazySeq(null,(function (){
var s__17340__$1 = s__17340;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17340__$1);
if(temp__4425__auto__){
var s__17340__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17340__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17340__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17342 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17341 = (0);
while(true){
if((i__17341 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17341);
cljs.core.chunk_append.call(null,b__17342,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17345 = x;
var text = cljs.core.nth.call(null,vec__17345,(0),null);
var val = cljs.core.nth.call(null,vec__17345,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17345,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17330.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17347 = (i__17341 + (1));
i__17341 = G__17347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17342),sablono$core$select_options17330_$_iter__17339.call(null,cljs.core.chunk_rest.call(null,s__17340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17342),null);
}
} else {
var x = cljs.core.first.call(null,s__17340__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17346 = x;
var text = cljs.core.nth.call(null,vec__17346,(0),null);
var val = cljs.core.nth.call(null,vec__17346,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17346,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17330.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17330_$_iter__17339.call(null,cljs.core.rest.call(null,s__17340__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17330);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17348 = (function sablono$core$drop_down17348(var_args){
var args17349 = [];
var len__6152__auto___17352 = arguments.length;
var i__6153__auto___17353 = (0);
while(true){
if((i__6153__auto___17353 < len__6152__auto___17352)){
args17349.push((arguments[i__6153__auto___17353]));

var G__17354 = (i__6153__auto___17353 + (1));
i__6153__auto___17353 = G__17354;
continue;
} else {
}
break;
}

var G__17351 = args17349.length;
switch (G__17351) {
case 2:
return sablono.core.drop_down17348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17348.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17349.length)].join('')));

}
});

sablono.core.drop_down17348.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17348.call(null,name,options,null);
});

sablono.core.drop_down17348.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17348.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17348);
/**
 * Creates a text area element.
 */
sablono.core.text_area17356 = (function sablono$core$text_area17356(var_args){
var args17357 = [];
var len__6152__auto___17360 = arguments.length;
var i__6153__auto___17361 = (0);
while(true){
if((i__6153__auto___17361 < len__6152__auto___17360)){
args17357.push((arguments[i__6153__auto___17361]));

var G__17362 = (i__6153__auto___17361 + (1));
i__6153__auto___17361 = G__17362;
continue;
} else {
}
break;
}

var G__17359 = args17357.length;
switch (G__17359) {
case 1:
return sablono.core.text_area17356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17357.length)].join('')));

}
});

sablono.core.text_area17356.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17356.call(null,name,null);
});

sablono.core.text_area17356.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17356.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17356);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17364 = (function sablono$core$label17364(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17364);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17365 = (function sablono$core$submit_button17365(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17365);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17366 = (function sablono$core$reset_button17366(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17366);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17367 = (function sablono$core$form_to17367(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17372 = arguments.length;
var i__6153__auto___17373 = (0);
while(true){
if((i__6153__auto___17373 < len__6152__auto___17372)){
args__6159__auto__.push((arguments[i__6153__auto___17373]));

var G__17374 = (i__6153__auto___17373 + (1));
i__6153__auto___17373 = G__17374;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17367.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17367.cljs$core$IFn$_invoke$arity$variadic = (function (p__17370,body){
var vec__17371 = p__17370;
var method = cljs.core.nth.call(null,vec__17371,(0),null);
var action = cljs.core.nth.call(null,vec__17371,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17367.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17367.cljs$lang$applyTo = (function (seq17368){
var G__17369 = cljs.core.first.call(null,seq17368);
var seq17368__$1 = cljs.core.next.call(null,seq17368);
return sablono.core.form_to17367.cljs$core$IFn$_invoke$arity$variadic(G__17369,seq17368__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17367);

//# sourceMappingURL=core.js.map