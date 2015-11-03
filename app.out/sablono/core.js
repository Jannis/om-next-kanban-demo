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
var G__17152__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17151 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17151,(0),null);
var body = cljs.core.nthnext.call(null,vec__17151,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17153__i = 0, G__17153__a = new Array(arguments.length -  0);
while (G__17153__i < G__17153__a.length) {G__17153__a[G__17153__i] = arguments[G__17153__i + 0]; ++G__17153__i;}
  args = new cljs.core.IndexedSeq(G__17153__a,0);
} 
return G__17152__delegate.call(this,args);};
G__17152.cljs$lang$maxFixedArity = 0;
G__17152.cljs$lang$applyTo = (function (arglist__17154){
var args = cljs.core.seq(arglist__17154);
return G__17152__delegate(args);
});
G__17152.cljs$core$IFn$_invoke$arity$variadic = G__17152__delegate;
return G__17152;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17159(s__17160){
return (new cljs.core.LazySeq(null,(function (){
var s__17160__$1 = s__17160;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17160__$1);
if(temp__4425__auto__){
var s__17160__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17160__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17160__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17162 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17161 = (0);
while(true){
if((i__17161 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17161);
cljs.core.chunk_append.call(null,b__17162,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17163 = (i__17161 + (1));
i__17161 = G__17163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17162),sablono$core$update_arglists_$_iter__17159.call(null,cljs.core.chunk_rest.call(null,s__17160__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17162),null);
}
} else {
var args = cljs.core.first.call(null,s__17160__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17159.call(null,cljs.core.rest.call(null,s__17160__$2)));
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
var len__6152__auto___17169 = arguments.length;
var i__6153__auto___17170 = (0);
while(true){
if((i__6153__auto___17170 < len__6152__auto___17169)){
args__6159__auto__.push((arguments[i__6153__auto___17170]));

var G__17171 = (i__6153__auto___17170 + (1));
i__6153__auto___17170 = G__17171;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17165(s__17166){
return (new cljs.core.LazySeq(null,(function (){
var s__17166__$1 = s__17166;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17166__$1);
if(temp__4425__auto__){
var s__17166__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17166__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17166__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17168 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17167 = (0);
while(true){
if((i__17167 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17167);
cljs.core.chunk_append.call(null,b__17168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17172 = (i__17167 + (1));
i__17167 = G__17172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17168),sablono$core$iter__17165.call(null,cljs.core.chunk_rest.call(null,s__17166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17168),null);
}
} else {
var style = cljs.core.first.call(null,s__17166__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17165.call(null,cljs.core.rest.call(null,s__17166__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17164){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17164));
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
sablono.core.link_to17173 = (function sablono$core$link_to17173(var_args){
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
return sablono.core.link_to17173.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17173.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17173.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17173.cljs$lang$applyTo = (function (seq17174){
var G__17175 = cljs.core.first.call(null,seq17174);
var seq17174__$1 = cljs.core.next.call(null,seq17174);
return sablono.core.link_to17173.cljs$core$IFn$_invoke$arity$variadic(G__17175,seq17174__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17173);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17179 = (function sablono$core$mail_to17179(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17184 = arguments.length;
var i__6153__auto___17185 = (0);
while(true){
if((i__6153__auto___17185 < len__6152__auto___17184)){
args__6159__auto__.push((arguments[i__6153__auto___17185]));

var G__17186 = (i__6153__auto___17185 + (1));
i__6153__auto___17185 = G__17186;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17179.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17179.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17182){
var vec__17183 = p__17182;
var content = cljs.core.nth.call(null,vec__17183,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17179.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17179.cljs$lang$applyTo = (function (seq17180){
var G__17181 = cljs.core.first.call(null,seq17180);
var seq17180__$1 = cljs.core.next.call(null,seq17180);
return sablono.core.mail_to17179.cljs$core$IFn$_invoke$arity$variadic(G__17181,seq17180__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17179);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17187 = (function sablono$core$unordered_list17187(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17187_$_iter__17192(s__17193){
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
var x = cljs.core._nth.call(null,c__5864__auto__,i__17194);
cljs.core.chunk_append.call(null,b__17195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17196 = (i__17194 + (1));
i__17194 = G__17196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17195),sablono$core$unordered_list17187_$_iter__17192.call(null,cljs.core.chunk_rest.call(null,s__17193__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17195),null);
}
} else {
var x = cljs.core.first.call(null,s__17193__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17187_$_iter__17192.call(null,cljs.core.rest.call(null,s__17193__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17187);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17197 = (function sablono$core$ordered_list17197(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17197_$_iter__17202(s__17203){
return (new cljs.core.LazySeq(null,(function (){
var s__17203__$1 = s__17203;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17203__$1);
if(temp__4425__auto__){
var s__17203__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17203__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17203__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17205 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17204 = (0);
while(true){
if((i__17204 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17204);
cljs.core.chunk_append.call(null,b__17205,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17206 = (i__17204 + (1));
i__17204 = G__17206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17205),sablono$core$ordered_list17197_$_iter__17202.call(null,cljs.core.chunk_rest.call(null,s__17203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17205),null);
}
} else {
var x = cljs.core.first.call(null,s__17203__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17197_$_iter__17202.call(null,cljs.core.rest.call(null,s__17203__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17197);
/**
 * Create an image element.
 */
sablono.core.image17207 = (function sablono$core$image17207(var_args){
var args17208 = [];
var len__6152__auto___17211 = arguments.length;
var i__6153__auto___17212 = (0);
while(true){
if((i__6153__auto___17212 < len__6152__auto___17211)){
args17208.push((arguments[i__6153__auto___17212]));

var G__17213 = (i__6153__auto___17212 + (1));
i__6153__auto___17212 = G__17213;
continue;
} else {
}
break;
}

var G__17210 = args17208.length;
switch (G__17210) {
case 1:
return sablono.core.image17207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17208.length)].join('')));

}
});

sablono.core.image17207.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17207.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17207.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17207);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17215_SHARP_,p2__17216_SHARP_){
return [cljs.core.str(p1__17215_SHARP_),cljs.core.str("["),cljs.core.str(p2__17216_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17217_SHARP_,p2__17218_SHARP_){
return [cljs.core.str(p1__17217_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17218_SHARP_)].join('');
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
sablono.core.color_field17219 = (function sablono$core$color_field17219(var_args){
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
return sablono.core.color_field17219.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17219.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17220.length)].join('')));

}
});

sablono.core.color_field17219.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.color_field17219.call(null,name__13461__auto__,null);
});

sablono.core.color_field17219.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.color_field17219.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17219);

/**
 * Creates a date input field.
 */
sablono.core.date_field17223 = (function sablono$core$date_field17223(var_args){
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
return sablono.core.date_field17223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17224.length)].join('')));

}
});

sablono.core.date_field17223.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.date_field17223.call(null,name__13461__auto__,null);
});

sablono.core.date_field17223.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.date_field17223.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17223);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17227 = (function sablono$core$datetime_field17227(var_args){
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
return sablono.core.datetime_field17227.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17227.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17228.length)].join('')));

}
});

sablono.core.datetime_field17227.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.datetime_field17227.call(null,name__13461__auto__,null);
});

sablono.core.datetime_field17227.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.datetime_field17227.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17227);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17231 = (function sablono$core$datetime_local_field17231(var_args){
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
return sablono.core.datetime_local_field17231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17232.length)].join('')));

}
});

sablono.core.datetime_local_field17231.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.datetime_local_field17231.call(null,name__13461__auto__,null);
});

sablono.core.datetime_local_field17231.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.datetime_local_field17231.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17231);

/**
 * Creates a email input field.
 */
sablono.core.email_field17235 = (function sablono$core$email_field17235(var_args){
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
return sablono.core.email_field17235.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17235.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17236.length)].join('')));

}
});

sablono.core.email_field17235.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.email_field17235.call(null,name__13461__auto__,null);
});

sablono.core.email_field17235.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.email_field17235.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17235);

/**
 * Creates a file input field.
 */
sablono.core.file_field17239 = (function sablono$core$file_field17239(var_args){
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
return sablono.core.file_field17239.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17239.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17240.length)].join('')));

}
});

sablono.core.file_field17239.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.file_field17239.call(null,name__13461__auto__,null);
});

sablono.core.file_field17239.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.file_field17239.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17239);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17243 = (function sablono$core$hidden_field17243(var_args){
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
return sablono.core.hidden_field17243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17244.length)].join('')));

}
});

sablono.core.hidden_field17243.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.hidden_field17243.call(null,name__13461__auto__,null);
});

sablono.core.hidden_field17243.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.hidden_field17243.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17243);

/**
 * Creates a month input field.
 */
sablono.core.month_field17247 = (function sablono$core$month_field17247(var_args){
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
return sablono.core.month_field17247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17248.length)].join('')));

}
});

sablono.core.month_field17247.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.month_field17247.call(null,name__13461__auto__,null);
});

sablono.core.month_field17247.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.month_field17247.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17247);

/**
 * Creates a number input field.
 */
sablono.core.number_field17251 = (function sablono$core$number_field17251(var_args){
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
return sablono.core.number_field17251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17252.length)].join('')));

}
});

sablono.core.number_field17251.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.number_field17251.call(null,name__13461__auto__,null);
});

sablono.core.number_field17251.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.number_field17251.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17251);

/**
 * Creates a password input field.
 */
sablono.core.password_field17255 = (function sablono$core$password_field17255(var_args){
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
return sablono.core.password_field17255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17256.length)].join('')));

}
});

sablono.core.password_field17255.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.password_field17255.call(null,name__13461__auto__,null);
});

sablono.core.password_field17255.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.password_field17255.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17255);

/**
 * Creates a range input field.
 */
sablono.core.range_field17259 = (function sablono$core$range_field17259(var_args){
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
return sablono.core.range_field17259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17260.length)].join('')));

}
});

sablono.core.range_field17259.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.range_field17259.call(null,name__13461__auto__,null);
});

sablono.core.range_field17259.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.range_field17259.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17259);

/**
 * Creates a search input field.
 */
sablono.core.search_field17263 = (function sablono$core$search_field17263(var_args){
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
return sablono.core.search_field17263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17264.length)].join('')));

}
});

sablono.core.search_field17263.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.search_field17263.call(null,name__13461__auto__,null);
});

sablono.core.search_field17263.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.search_field17263.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17263);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17267 = (function sablono$core$tel_field17267(var_args){
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
return sablono.core.tel_field17267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17268.length)].join('')));

}
});

sablono.core.tel_field17267.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.tel_field17267.call(null,name__13461__auto__,null);
});

sablono.core.tel_field17267.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.tel_field17267.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17267);

/**
 * Creates a text input field.
 */
sablono.core.text_field17271 = (function sablono$core$text_field17271(var_args){
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
return sablono.core.text_field17271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17272.length)].join('')));

}
});

sablono.core.text_field17271.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.text_field17271.call(null,name__13461__auto__,null);
});

sablono.core.text_field17271.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.text_field17271.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17271);

/**
 * Creates a time input field.
 */
sablono.core.time_field17275 = (function sablono$core$time_field17275(var_args){
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
return sablono.core.time_field17275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17276.length)].join('')));

}
});

sablono.core.time_field17275.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.time_field17275.call(null,name__13461__auto__,null);
});

sablono.core.time_field17275.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.time_field17275.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17275);

/**
 * Creates a url input field.
 */
sablono.core.url_field17279 = (function sablono$core$url_field17279(var_args){
var args17280 = [];
var len__6152__auto___17347 = arguments.length;
var i__6153__auto___17348 = (0);
while(true){
if((i__6153__auto___17348 < len__6152__auto___17347)){
args17280.push((arguments[i__6153__auto___17348]));

var G__17349 = (i__6153__auto___17348 + (1));
i__6153__auto___17348 = G__17349;
continue;
} else {
}
break;
}

var G__17282 = args17280.length;
switch (G__17282) {
case 1:
return sablono.core.url_field17279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17280.length)].join('')));

}
});

sablono.core.url_field17279.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.url_field17279.call(null,name__13461__auto__,null);
});

sablono.core.url_field17279.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.url_field17279.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17279);

/**
 * Creates a week input field.
 */
sablono.core.week_field17283 = (function sablono$core$week_field17283(var_args){
var args17284 = [];
var len__6152__auto___17351 = arguments.length;
var i__6153__auto___17352 = (0);
while(true){
if((i__6153__auto___17352 < len__6152__auto___17351)){
args17284.push((arguments[i__6153__auto___17352]));

var G__17353 = (i__6153__auto___17352 + (1));
i__6153__auto___17352 = G__17353;
continue;
} else {
}
break;
}

var G__17286 = args17284.length;
switch (G__17286) {
case 1:
return sablono.core.week_field17283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17284.length)].join('')));

}
});

sablono.core.week_field17283.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.week_field17283.call(null,name__13461__auto__,null);
});

sablono.core.week_field17283.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.week_field17283.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17283);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17355 = (function sablono$core$check_box17355(var_args){
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
return sablono.core.check_box17355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17355.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17356.length)].join('')));

}
});

sablono.core.check_box17355.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17355.call(null,name,null);
});

sablono.core.check_box17355.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17355.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17355.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17355.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17355);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17363 = (function sablono$core$radio_button17363(var_args){
var args17364 = [];
var len__6152__auto___17367 = arguments.length;
var i__6153__auto___17368 = (0);
while(true){
if((i__6153__auto___17368 < len__6152__auto___17367)){
args17364.push((arguments[i__6153__auto___17368]));

var G__17369 = (i__6153__auto___17368 + (1));
i__6153__auto___17368 = G__17369;
continue;
} else {
}
break;
}

var G__17366 = args17364.length;
switch (G__17366) {
case 1:
return sablono.core.radio_button17363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17363.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17364.length)].join('')));

}
});

sablono.core.radio_button17363.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17363.call(null,group,null);
});

sablono.core.radio_button17363.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17363.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17363.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17363.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17363);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17371 = (function sablono$core$select_options17371(coll){
var iter__5866__auto__ = (function sablono$core$select_options17371_$_iter__17380(s__17381){
return (new cljs.core.LazySeq(null,(function (){
var s__17381__$1 = s__17381;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17381__$1);
if(temp__4425__auto__){
var s__17381__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17381__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17381__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17383 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17382 = (0);
while(true){
if((i__17382 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17382);
cljs.core.chunk_append.call(null,b__17383,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17386 = x;
var text = cljs.core.nth.call(null,vec__17386,(0),null);
var val = cljs.core.nth.call(null,vec__17386,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17386,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17371.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17388 = (i__17382 + (1));
i__17382 = G__17388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17383),sablono$core$select_options17371_$_iter__17380.call(null,cljs.core.chunk_rest.call(null,s__17381__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17383),null);
}
} else {
var x = cljs.core.first.call(null,s__17381__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17387 = x;
var text = cljs.core.nth.call(null,vec__17387,(0),null);
var val = cljs.core.nth.call(null,vec__17387,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17387,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17371.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17371_$_iter__17380.call(null,cljs.core.rest.call(null,s__17381__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17371);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17389 = (function sablono$core$drop_down17389(var_args){
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
case 2:
return sablono.core.drop_down17389.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17389.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17390.length)].join('')));

}
});

sablono.core.drop_down17389.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17389.call(null,name,options,null);
});

sablono.core.drop_down17389.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17389.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17389);
/**
 * Creates a text area element.
 */
sablono.core.text_area17397 = (function sablono$core$text_area17397(var_args){
var args17398 = [];
var len__6152__auto___17401 = arguments.length;
var i__6153__auto___17402 = (0);
while(true){
if((i__6153__auto___17402 < len__6152__auto___17401)){
args17398.push((arguments[i__6153__auto___17402]));

var G__17403 = (i__6153__auto___17402 + (1));
i__6153__auto___17402 = G__17403;
continue;
} else {
}
break;
}

var G__17400 = args17398.length;
switch (G__17400) {
case 1:
return sablono.core.text_area17397.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17397.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17398.length)].join('')));

}
});

sablono.core.text_area17397.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17397.call(null,name,null);
});

sablono.core.text_area17397.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17397.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17397);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17405 = (function sablono$core$label17405(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17405);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17406 = (function sablono$core$submit_button17406(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17406);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17407 = (function sablono$core$reset_button17407(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17407);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17408 = (function sablono$core$form_to17408(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17413 = arguments.length;
var i__6153__auto___17414 = (0);
while(true){
if((i__6153__auto___17414 < len__6152__auto___17413)){
args__6159__auto__.push((arguments[i__6153__auto___17414]));

var G__17415 = (i__6153__auto___17414 + (1));
i__6153__auto___17414 = G__17415;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17408.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17408.cljs$core$IFn$_invoke$arity$variadic = (function (p__17411,body){
var vec__17412 = p__17411;
var method = cljs.core.nth.call(null,vec__17412,(0),null);
var action = cljs.core.nth.call(null,vec__17412,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17408.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17408.cljs$lang$applyTo = (function (seq17409){
var G__17410 = cljs.core.first.call(null,seq17409);
var seq17409__$1 = cljs.core.next.call(null,seq17409);
return sablono.core.form_to17408.cljs$core$IFn$_invoke$arity$variadic(G__17410,seq17409__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17408);

//# sourceMappingURL=core.js.map