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
var G__17187__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17186 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17186,(0),null);
var body = cljs.core.nthnext.call(null,vec__17186,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17188__i = 0, G__17188__a = new Array(arguments.length -  0);
while (G__17188__i < G__17188__a.length) {G__17188__a[G__17188__i] = arguments[G__17188__i + 0]; ++G__17188__i;}
  args = new cljs.core.IndexedSeq(G__17188__a,0);
} 
return G__17187__delegate.call(this,args);};
G__17187.cljs$lang$maxFixedArity = 0;
G__17187.cljs$lang$applyTo = (function (arglist__17189){
var args = cljs.core.seq(arglist__17189);
return G__17187__delegate(args);
});
G__17187.cljs$core$IFn$_invoke$arity$variadic = G__17187__delegate;
return G__17187;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17194(s__17195){
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
var args = cljs.core._nth.call(null,c__5864__auto__,i__17196);
cljs.core.chunk_append.call(null,b__17197,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17198 = (i__17196 + (1));
i__17196 = G__17198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17197),sablono$core$update_arglists_$_iter__17194.call(null,cljs.core.chunk_rest.call(null,s__17195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17197),null);
}
} else {
var args = cljs.core.first.call(null,s__17195__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17194.call(null,cljs.core.rest.call(null,s__17195__$2)));
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
var len__6152__auto___17204 = arguments.length;
var i__6153__auto___17205 = (0);
while(true){
if((i__6153__auto___17205 < len__6152__auto___17204)){
args__6159__auto__.push((arguments[i__6153__auto___17205]));

var G__17206 = (i__6153__auto___17205 + (1));
i__6153__auto___17205 = G__17206;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17200(s__17201){
return (new cljs.core.LazySeq(null,(function (){
var s__17201__$1 = s__17201;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17201__$1);
if(temp__4425__auto__){
var s__17201__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17201__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17201__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17203 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17202 = (0);
while(true){
if((i__17202 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17202);
cljs.core.chunk_append.call(null,b__17203,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17207 = (i__17202 + (1));
i__17202 = G__17207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17203),sablono$core$iter__17200.call(null,cljs.core.chunk_rest.call(null,s__17201__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17203),null);
}
} else {
var style = cljs.core.first.call(null,s__17201__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17200.call(null,cljs.core.rest.call(null,s__17201__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17199){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17199));
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
sablono.core.link_to17208 = (function sablono$core$link_to17208(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17211 = arguments.length;
var i__6153__auto___17212 = (0);
while(true){
if((i__6153__auto___17212 < len__6152__auto___17211)){
args__6159__auto__.push((arguments[i__6153__auto___17212]));

var G__17213 = (i__6153__auto___17212 + (1));
i__6153__auto___17212 = G__17213;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17208.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17208.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17208.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17208.cljs$lang$applyTo = (function (seq17209){
var G__17210 = cljs.core.first.call(null,seq17209);
var seq17209__$1 = cljs.core.next.call(null,seq17209);
return sablono.core.link_to17208.cljs$core$IFn$_invoke$arity$variadic(G__17210,seq17209__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17208);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17214 = (function sablono$core$mail_to17214(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17219 = arguments.length;
var i__6153__auto___17220 = (0);
while(true){
if((i__6153__auto___17220 < len__6152__auto___17219)){
args__6159__auto__.push((arguments[i__6153__auto___17220]));

var G__17221 = (i__6153__auto___17220 + (1));
i__6153__auto___17220 = G__17221;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17214.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17214.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17217){
var vec__17218 = p__17217;
var content = cljs.core.nth.call(null,vec__17218,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17214.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17214.cljs$lang$applyTo = (function (seq17215){
var G__17216 = cljs.core.first.call(null,seq17215);
var seq17215__$1 = cljs.core.next.call(null,seq17215);
return sablono.core.mail_to17214.cljs$core$IFn$_invoke$arity$variadic(G__17216,seq17215__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17214);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17222 = (function sablono$core$unordered_list17222(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17222_$_iter__17227(s__17228){
return (new cljs.core.LazySeq(null,(function (){
var s__17228__$1 = s__17228;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17228__$1);
if(temp__4425__auto__){
var s__17228__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17228__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17228__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17230 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17229 = (0);
while(true){
if((i__17229 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17229);
cljs.core.chunk_append.call(null,b__17230,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17231 = (i__17229 + (1));
i__17229 = G__17231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17230),sablono$core$unordered_list17222_$_iter__17227.call(null,cljs.core.chunk_rest.call(null,s__17228__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17230),null);
}
} else {
var x = cljs.core.first.call(null,s__17228__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17222_$_iter__17227.call(null,cljs.core.rest.call(null,s__17228__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17222);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17232 = (function sablono$core$ordered_list17232(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17232_$_iter__17237(s__17238){
return (new cljs.core.LazySeq(null,(function (){
var s__17238__$1 = s__17238;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17238__$1);
if(temp__4425__auto__){
var s__17238__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17238__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17238__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17240 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17239 = (0);
while(true){
if((i__17239 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17239);
cljs.core.chunk_append.call(null,b__17240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17241 = (i__17239 + (1));
i__17239 = G__17241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17240),sablono$core$ordered_list17232_$_iter__17237.call(null,cljs.core.chunk_rest.call(null,s__17238__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17240),null);
}
} else {
var x = cljs.core.first.call(null,s__17238__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17232_$_iter__17237.call(null,cljs.core.rest.call(null,s__17238__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17232);
/**
 * Create an image element.
 */
sablono.core.image17242 = (function sablono$core$image17242(var_args){
var args17243 = [];
var len__6152__auto___17246 = arguments.length;
var i__6153__auto___17247 = (0);
while(true){
if((i__6153__auto___17247 < len__6152__auto___17246)){
args17243.push((arguments[i__6153__auto___17247]));

var G__17248 = (i__6153__auto___17247 + (1));
i__6153__auto___17247 = G__17248;
continue;
} else {
}
break;
}

var G__17245 = args17243.length;
switch (G__17245) {
case 1:
return sablono.core.image17242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17243.length)].join('')));

}
});

sablono.core.image17242.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17242.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17242.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17242);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17250_SHARP_,p2__17251_SHARP_){
return [cljs.core.str(p1__17250_SHARP_),cljs.core.str("["),cljs.core.str(p2__17251_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17252_SHARP_,p2__17253_SHARP_){
return [cljs.core.str(p1__17252_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17253_SHARP_)].join('');
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
sablono.core.color_field17254 = (function sablono$core$color_field17254(var_args){
var args17255 = [];
var len__6152__auto___17322 = arguments.length;
var i__6153__auto___17323 = (0);
while(true){
if((i__6153__auto___17323 < len__6152__auto___17322)){
args17255.push((arguments[i__6153__auto___17323]));

var G__17324 = (i__6153__auto___17323 + (1));
i__6153__auto___17323 = G__17324;
continue;
} else {
}
break;
}

var G__17257 = args17255.length;
switch (G__17257) {
case 1:
return sablono.core.color_field17254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17255.length)].join('')));

}
});

sablono.core.color_field17254.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.color_field17254.call(null,name__13003__auto__,null);
});

sablono.core.color_field17254.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.color_field17254.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17254);

/**
 * Creates a date input field.
 */
sablono.core.date_field17258 = (function sablono$core$date_field17258(var_args){
var args17259 = [];
var len__6152__auto___17326 = arguments.length;
var i__6153__auto___17327 = (0);
while(true){
if((i__6153__auto___17327 < len__6152__auto___17326)){
args17259.push((arguments[i__6153__auto___17327]));

var G__17328 = (i__6153__auto___17327 + (1));
i__6153__auto___17327 = G__17328;
continue;
} else {
}
break;
}

var G__17261 = args17259.length;
switch (G__17261) {
case 1:
return sablono.core.date_field17258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17259.length)].join('')));

}
});

sablono.core.date_field17258.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.date_field17258.call(null,name__13003__auto__,null);
});

sablono.core.date_field17258.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.date_field17258.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17258);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17262 = (function sablono$core$datetime_field17262(var_args){
var args17263 = [];
var len__6152__auto___17330 = arguments.length;
var i__6153__auto___17331 = (0);
while(true){
if((i__6153__auto___17331 < len__6152__auto___17330)){
args17263.push((arguments[i__6153__auto___17331]));

var G__17332 = (i__6153__auto___17331 + (1));
i__6153__auto___17331 = G__17332;
continue;
} else {
}
break;
}

var G__17265 = args17263.length;
switch (G__17265) {
case 1:
return sablono.core.datetime_field17262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17263.length)].join('')));

}
});

sablono.core.datetime_field17262.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.datetime_field17262.call(null,name__13003__auto__,null);
});

sablono.core.datetime_field17262.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.datetime_field17262.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17262);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17266 = (function sablono$core$datetime_local_field17266(var_args){
var args17267 = [];
var len__6152__auto___17334 = arguments.length;
var i__6153__auto___17335 = (0);
while(true){
if((i__6153__auto___17335 < len__6152__auto___17334)){
args17267.push((arguments[i__6153__auto___17335]));

var G__17336 = (i__6153__auto___17335 + (1));
i__6153__auto___17335 = G__17336;
continue;
} else {
}
break;
}

var G__17269 = args17267.length;
switch (G__17269) {
case 1:
return sablono.core.datetime_local_field17266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17267.length)].join('')));

}
});

sablono.core.datetime_local_field17266.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.datetime_local_field17266.call(null,name__13003__auto__,null);
});

sablono.core.datetime_local_field17266.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.datetime_local_field17266.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17266);

/**
 * Creates a email input field.
 */
sablono.core.email_field17270 = (function sablono$core$email_field17270(var_args){
var args17271 = [];
var len__6152__auto___17338 = arguments.length;
var i__6153__auto___17339 = (0);
while(true){
if((i__6153__auto___17339 < len__6152__auto___17338)){
args17271.push((arguments[i__6153__auto___17339]));

var G__17340 = (i__6153__auto___17339 + (1));
i__6153__auto___17339 = G__17340;
continue;
} else {
}
break;
}

var G__17273 = args17271.length;
switch (G__17273) {
case 1:
return sablono.core.email_field17270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17271.length)].join('')));

}
});

sablono.core.email_field17270.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.email_field17270.call(null,name__13003__auto__,null);
});

sablono.core.email_field17270.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.email_field17270.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17270);

/**
 * Creates a file input field.
 */
sablono.core.file_field17274 = (function sablono$core$file_field17274(var_args){
var args17275 = [];
var len__6152__auto___17342 = arguments.length;
var i__6153__auto___17343 = (0);
while(true){
if((i__6153__auto___17343 < len__6152__auto___17342)){
args17275.push((arguments[i__6153__auto___17343]));

var G__17344 = (i__6153__auto___17343 + (1));
i__6153__auto___17343 = G__17344;
continue;
} else {
}
break;
}

var G__17277 = args17275.length;
switch (G__17277) {
case 1:
return sablono.core.file_field17274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17275.length)].join('')));

}
});

sablono.core.file_field17274.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.file_field17274.call(null,name__13003__auto__,null);
});

sablono.core.file_field17274.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.file_field17274.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17274);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17278 = (function sablono$core$hidden_field17278(var_args){
var args17279 = [];
var len__6152__auto___17346 = arguments.length;
var i__6153__auto___17347 = (0);
while(true){
if((i__6153__auto___17347 < len__6152__auto___17346)){
args17279.push((arguments[i__6153__auto___17347]));

var G__17348 = (i__6153__auto___17347 + (1));
i__6153__auto___17347 = G__17348;
continue;
} else {
}
break;
}

var G__17281 = args17279.length;
switch (G__17281) {
case 1:
return sablono.core.hidden_field17278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17279.length)].join('')));

}
});

sablono.core.hidden_field17278.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.hidden_field17278.call(null,name__13003__auto__,null);
});

sablono.core.hidden_field17278.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.hidden_field17278.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17278);

/**
 * Creates a month input field.
 */
sablono.core.month_field17282 = (function sablono$core$month_field17282(var_args){
var args17283 = [];
var len__6152__auto___17350 = arguments.length;
var i__6153__auto___17351 = (0);
while(true){
if((i__6153__auto___17351 < len__6152__auto___17350)){
args17283.push((arguments[i__6153__auto___17351]));

var G__17352 = (i__6153__auto___17351 + (1));
i__6153__auto___17351 = G__17352;
continue;
} else {
}
break;
}

var G__17285 = args17283.length;
switch (G__17285) {
case 1:
return sablono.core.month_field17282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17283.length)].join('')));

}
});

sablono.core.month_field17282.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.month_field17282.call(null,name__13003__auto__,null);
});

sablono.core.month_field17282.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.month_field17282.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17282);

/**
 * Creates a number input field.
 */
sablono.core.number_field17286 = (function sablono$core$number_field17286(var_args){
var args17287 = [];
var len__6152__auto___17354 = arguments.length;
var i__6153__auto___17355 = (0);
while(true){
if((i__6153__auto___17355 < len__6152__auto___17354)){
args17287.push((arguments[i__6153__auto___17355]));

var G__17356 = (i__6153__auto___17355 + (1));
i__6153__auto___17355 = G__17356;
continue;
} else {
}
break;
}

var G__17289 = args17287.length;
switch (G__17289) {
case 1:
return sablono.core.number_field17286.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17286.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17287.length)].join('')));

}
});

sablono.core.number_field17286.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.number_field17286.call(null,name__13003__auto__,null);
});

sablono.core.number_field17286.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.number_field17286.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17286);

/**
 * Creates a password input field.
 */
sablono.core.password_field17290 = (function sablono$core$password_field17290(var_args){
var args17291 = [];
var len__6152__auto___17358 = arguments.length;
var i__6153__auto___17359 = (0);
while(true){
if((i__6153__auto___17359 < len__6152__auto___17358)){
args17291.push((arguments[i__6153__auto___17359]));

var G__17360 = (i__6153__auto___17359 + (1));
i__6153__auto___17359 = G__17360;
continue;
} else {
}
break;
}

var G__17293 = args17291.length;
switch (G__17293) {
case 1:
return sablono.core.password_field17290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17291.length)].join('')));

}
});

sablono.core.password_field17290.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.password_field17290.call(null,name__13003__auto__,null);
});

sablono.core.password_field17290.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.password_field17290.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17290);

/**
 * Creates a range input field.
 */
sablono.core.range_field17294 = (function sablono$core$range_field17294(var_args){
var args17295 = [];
var len__6152__auto___17362 = arguments.length;
var i__6153__auto___17363 = (0);
while(true){
if((i__6153__auto___17363 < len__6152__auto___17362)){
args17295.push((arguments[i__6153__auto___17363]));

var G__17364 = (i__6153__auto___17363 + (1));
i__6153__auto___17363 = G__17364;
continue;
} else {
}
break;
}

var G__17297 = args17295.length;
switch (G__17297) {
case 1:
return sablono.core.range_field17294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17295.length)].join('')));

}
});

sablono.core.range_field17294.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.range_field17294.call(null,name__13003__auto__,null);
});

sablono.core.range_field17294.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.range_field17294.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17294);

/**
 * Creates a search input field.
 */
sablono.core.search_field17298 = (function sablono$core$search_field17298(var_args){
var args17299 = [];
var len__6152__auto___17366 = arguments.length;
var i__6153__auto___17367 = (0);
while(true){
if((i__6153__auto___17367 < len__6152__auto___17366)){
args17299.push((arguments[i__6153__auto___17367]));

var G__17368 = (i__6153__auto___17367 + (1));
i__6153__auto___17367 = G__17368;
continue;
} else {
}
break;
}

var G__17301 = args17299.length;
switch (G__17301) {
case 1:
return sablono.core.search_field17298.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17298.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17299.length)].join('')));

}
});

sablono.core.search_field17298.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.search_field17298.call(null,name__13003__auto__,null);
});

sablono.core.search_field17298.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.search_field17298.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17298);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17302 = (function sablono$core$tel_field17302(var_args){
var args17303 = [];
var len__6152__auto___17370 = arguments.length;
var i__6153__auto___17371 = (0);
while(true){
if((i__6153__auto___17371 < len__6152__auto___17370)){
args17303.push((arguments[i__6153__auto___17371]));

var G__17372 = (i__6153__auto___17371 + (1));
i__6153__auto___17371 = G__17372;
continue;
} else {
}
break;
}

var G__17305 = args17303.length;
switch (G__17305) {
case 1:
return sablono.core.tel_field17302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17303.length)].join('')));

}
});

sablono.core.tel_field17302.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.tel_field17302.call(null,name__13003__auto__,null);
});

sablono.core.tel_field17302.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.tel_field17302.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17302);

/**
 * Creates a text input field.
 */
sablono.core.text_field17306 = (function sablono$core$text_field17306(var_args){
var args17307 = [];
var len__6152__auto___17374 = arguments.length;
var i__6153__auto___17375 = (0);
while(true){
if((i__6153__auto___17375 < len__6152__auto___17374)){
args17307.push((arguments[i__6153__auto___17375]));

var G__17376 = (i__6153__auto___17375 + (1));
i__6153__auto___17375 = G__17376;
continue;
} else {
}
break;
}

var G__17309 = args17307.length;
switch (G__17309) {
case 1:
return sablono.core.text_field17306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17307.length)].join('')));

}
});

sablono.core.text_field17306.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.text_field17306.call(null,name__13003__auto__,null);
});

sablono.core.text_field17306.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.text_field17306.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17306);

/**
 * Creates a time input field.
 */
sablono.core.time_field17310 = (function sablono$core$time_field17310(var_args){
var args17311 = [];
var len__6152__auto___17378 = arguments.length;
var i__6153__auto___17379 = (0);
while(true){
if((i__6153__auto___17379 < len__6152__auto___17378)){
args17311.push((arguments[i__6153__auto___17379]));

var G__17380 = (i__6153__auto___17379 + (1));
i__6153__auto___17379 = G__17380;
continue;
} else {
}
break;
}

var G__17313 = args17311.length;
switch (G__17313) {
case 1:
return sablono.core.time_field17310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17311.length)].join('')));

}
});

sablono.core.time_field17310.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.time_field17310.call(null,name__13003__auto__,null);
});

sablono.core.time_field17310.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.time_field17310.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17310);

/**
 * Creates a url input field.
 */
sablono.core.url_field17314 = (function sablono$core$url_field17314(var_args){
var args17315 = [];
var len__6152__auto___17382 = arguments.length;
var i__6153__auto___17383 = (0);
while(true){
if((i__6153__auto___17383 < len__6152__auto___17382)){
args17315.push((arguments[i__6153__auto___17383]));

var G__17384 = (i__6153__auto___17383 + (1));
i__6153__auto___17383 = G__17384;
continue;
} else {
}
break;
}

var G__17317 = args17315.length;
switch (G__17317) {
case 1:
return sablono.core.url_field17314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17315.length)].join('')));

}
});

sablono.core.url_field17314.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.url_field17314.call(null,name__13003__auto__,null);
});

sablono.core.url_field17314.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.url_field17314.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17314);

/**
 * Creates a week input field.
 */
sablono.core.week_field17318 = (function sablono$core$week_field17318(var_args){
var args17319 = [];
var len__6152__auto___17386 = arguments.length;
var i__6153__auto___17387 = (0);
while(true){
if((i__6153__auto___17387 < len__6152__auto___17386)){
args17319.push((arguments[i__6153__auto___17387]));

var G__17388 = (i__6153__auto___17387 + (1));
i__6153__auto___17387 = G__17388;
continue;
} else {
}
break;
}

var G__17321 = args17319.length;
switch (G__17321) {
case 1:
return sablono.core.week_field17318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17319.length)].join('')));

}
});

sablono.core.week_field17318.cljs$core$IFn$_invoke$arity$1 = (function (name__13003__auto__){
return sablono.core.week_field17318.call(null,name__13003__auto__,null);
});

sablono.core.week_field17318.cljs$core$IFn$_invoke$arity$2 = (function (name__13003__auto__,value__13004__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13003__auto__,value__13004__auto__);
});

sablono.core.week_field17318.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17318);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17390 = (function sablono$core$check_box17390(var_args){
var args17391 = [];
var len__6152__auto___17394 = arguments.length;
var i__6153__auto___17395 = (0);
while(true){
if((i__6153__auto___17395 < len__6152__auto___17394)){
args17391.push((arguments[i__6153__auto___17395]));

var G__17396 = (i__6153__auto___17395 + (1));
i__6153__auto___17395 = G__17396;
continue;
} else {
}
break;
}

var G__17393 = args17391.length;
switch (G__17393) {
case 1:
return sablono.core.check_box17390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17390.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17391.length)].join('')));

}
});

sablono.core.check_box17390.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17390.call(null,name,null);
});

sablono.core.check_box17390.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17390.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17390.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17390.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17390);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17398 = (function sablono$core$radio_button17398(var_args){
var args17399 = [];
var len__6152__auto___17402 = arguments.length;
var i__6153__auto___17403 = (0);
while(true){
if((i__6153__auto___17403 < len__6152__auto___17402)){
args17399.push((arguments[i__6153__auto___17403]));

var G__17404 = (i__6153__auto___17403 + (1));
i__6153__auto___17403 = G__17404;
continue;
} else {
}
break;
}

var G__17401 = args17399.length;
switch (G__17401) {
case 1:
return sablono.core.radio_button17398.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17398.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17398.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17399.length)].join('')));

}
});

sablono.core.radio_button17398.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17398.call(null,group,null);
});

sablono.core.radio_button17398.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17398.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17398.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17398.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17398);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17406 = (function sablono$core$select_options17406(coll){
var iter__5866__auto__ = (function sablono$core$select_options17406_$_iter__17415(s__17416){
return (new cljs.core.LazySeq(null,(function (){
var s__17416__$1 = s__17416;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17416__$1);
if(temp__4425__auto__){
var s__17416__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17416__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17416__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17418 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17417 = (0);
while(true){
if((i__17417 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17417);
cljs.core.chunk_append.call(null,b__17418,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17421 = x;
var text = cljs.core.nth.call(null,vec__17421,(0),null);
var val = cljs.core.nth.call(null,vec__17421,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17421,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17406.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17423 = (i__17417 + (1));
i__17417 = G__17423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17418),sablono$core$select_options17406_$_iter__17415.call(null,cljs.core.chunk_rest.call(null,s__17416__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17418),null);
}
} else {
var x = cljs.core.first.call(null,s__17416__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17422 = x;
var text = cljs.core.nth.call(null,vec__17422,(0),null);
var val = cljs.core.nth.call(null,vec__17422,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17422,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17406.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17406_$_iter__17415.call(null,cljs.core.rest.call(null,s__17416__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17406);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17424 = (function sablono$core$drop_down17424(var_args){
var args17425 = [];
var len__6152__auto___17428 = arguments.length;
var i__6153__auto___17429 = (0);
while(true){
if((i__6153__auto___17429 < len__6152__auto___17428)){
args17425.push((arguments[i__6153__auto___17429]));

var G__17430 = (i__6153__auto___17429 + (1));
i__6153__auto___17429 = G__17430;
continue;
} else {
}
break;
}

var G__17427 = args17425.length;
switch (G__17427) {
case 2:
return sablono.core.drop_down17424.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17424.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17425.length)].join('')));

}
});

sablono.core.drop_down17424.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17424.call(null,name,options,null);
});

sablono.core.drop_down17424.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17424.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17424);
/**
 * Creates a text area element.
 */
sablono.core.text_area17432 = (function sablono$core$text_area17432(var_args){
var args17433 = [];
var len__6152__auto___17436 = arguments.length;
var i__6153__auto___17437 = (0);
while(true){
if((i__6153__auto___17437 < len__6152__auto___17436)){
args17433.push((arguments[i__6153__auto___17437]));

var G__17438 = (i__6153__auto___17437 + (1));
i__6153__auto___17437 = G__17438;
continue;
} else {
}
break;
}

var G__17435 = args17433.length;
switch (G__17435) {
case 1:
return sablono.core.text_area17432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17433.length)].join('')));

}
});

sablono.core.text_area17432.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17432.call(null,name,null);
});

sablono.core.text_area17432.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17432.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17432);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17440 = (function sablono$core$label17440(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17440);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17441 = (function sablono$core$submit_button17441(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17441);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17442 = (function sablono$core$reset_button17442(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17442);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17443 = (function sablono$core$form_to17443(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17448 = arguments.length;
var i__6153__auto___17449 = (0);
while(true){
if((i__6153__auto___17449 < len__6152__auto___17448)){
args__6159__auto__.push((arguments[i__6153__auto___17449]));

var G__17450 = (i__6153__auto___17449 + (1));
i__6153__auto___17449 = G__17450;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17443.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17443.cljs$core$IFn$_invoke$arity$variadic = (function (p__17446,body){
var vec__17447 = p__17446;
var method = cljs.core.nth.call(null,vec__17447,(0),null);
var action = cljs.core.nth.call(null,vec__17447,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17443.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17443.cljs$lang$applyTo = (function (seq17444){
var G__17445 = cljs.core.first.call(null,seq17444);
var seq17444__$1 = cljs.core.next.call(null,seq17444);
return sablono.core.form_to17443.cljs$core$IFn$_invoke$arity$variadic(G__17445,seq17444__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17443);

//# sourceMappingURL=core.js.map