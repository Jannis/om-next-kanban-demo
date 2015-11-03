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
var G__17151__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17150 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17150,(0),null);
var body = cljs.core.nthnext.call(null,vec__17150,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17151 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17152__i = 0, G__17152__a = new Array(arguments.length -  0);
while (G__17152__i < G__17152__a.length) {G__17152__a[G__17152__i] = arguments[G__17152__i + 0]; ++G__17152__i;}
  args = new cljs.core.IndexedSeq(G__17152__a,0);
} 
return G__17151__delegate.call(this,args);};
G__17151.cljs$lang$maxFixedArity = 0;
G__17151.cljs$lang$applyTo = (function (arglist__17153){
var args = cljs.core.seq(arglist__17153);
return G__17151__delegate(args);
});
G__17151.cljs$core$IFn$_invoke$arity$variadic = G__17151__delegate;
return G__17151;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17158(s__17159){
return (new cljs.core.LazySeq(null,(function (){
var s__17159__$1 = s__17159;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17159__$1);
if(temp__4425__auto__){
var s__17159__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17159__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17159__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17161 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17160 = (0);
while(true){
if((i__17160 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17160);
cljs.core.chunk_append.call(null,b__17161,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17162 = (i__17160 + (1));
i__17160 = G__17162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),sablono$core$update_arglists_$_iter__17158.call(null,cljs.core.chunk_rest.call(null,s__17159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),null);
}
} else {
var args = cljs.core.first.call(null,s__17159__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17158.call(null,cljs.core.rest.call(null,s__17159__$2)));
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

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17164(s__17165){
return (new cljs.core.LazySeq(null,(function (){
var s__17165__$1 = s__17165;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17165__$1);
if(temp__4425__auto__){
var s__17165__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17165__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17165__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17167 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17166 = (0);
while(true){
if((i__17166 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17166);
cljs.core.chunk_append.call(null,b__17167,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17171 = (i__17166 + (1));
i__17166 = G__17171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17167),sablono$core$iter__17164.call(null,cljs.core.chunk_rest.call(null,s__17165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17167),null);
}
} else {
var style = cljs.core.first.call(null,s__17165__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17164.call(null,cljs.core.rest.call(null,s__17165__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq17163){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17163));
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
sablono.core.link_to17172 = (function sablono$core$link_to17172(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17175 = arguments.length;
var i__6153__auto___17176 = (0);
while(true){
if((i__6153__auto___17176 < len__6152__auto___17175)){
args__6159__auto__.push((arguments[i__6153__auto___17176]));

var G__17177 = (i__6153__auto___17176 + (1));
i__6153__auto___17176 = G__17177;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17172.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17172.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17172.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17172.cljs$lang$applyTo = (function (seq17173){
var G__17174 = cljs.core.first.call(null,seq17173);
var seq17173__$1 = cljs.core.next.call(null,seq17173);
return sablono.core.link_to17172.cljs$core$IFn$_invoke$arity$variadic(G__17174,seq17173__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17172);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17178 = (function sablono$core$mail_to17178(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17183 = arguments.length;
var i__6153__auto___17184 = (0);
while(true){
if((i__6153__auto___17184 < len__6152__auto___17183)){
args__6159__auto__.push((arguments[i__6153__auto___17184]));

var G__17185 = (i__6153__auto___17184 + (1));
i__6153__auto___17184 = G__17185;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to17178.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17181){
var vec__17182 = p__17181;
var content = cljs.core.nth.call(null,vec__17182,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17178.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17178.cljs$lang$applyTo = (function (seq17179){
var G__17180 = cljs.core.first.call(null,seq17179);
var seq17179__$1 = cljs.core.next.call(null,seq17179);
return sablono.core.mail_to17178.cljs$core$IFn$_invoke$arity$variadic(G__17180,seq17179__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17178);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17186 = (function sablono$core$unordered_list17186(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list17186_$_iter__17191(s__17192){
return (new cljs.core.LazySeq(null,(function (){
var s__17192__$1 = s__17192;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17192__$1);
if(temp__4425__auto__){
var s__17192__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17192__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17192__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17194 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17193 = (0);
while(true){
if((i__17193 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17193);
cljs.core.chunk_append.call(null,b__17194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17195 = (i__17193 + (1));
i__17193 = G__17195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17194),sablono$core$unordered_list17186_$_iter__17191.call(null,cljs.core.chunk_rest.call(null,s__17192__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17194),null);
}
} else {
var x = cljs.core.first.call(null,s__17192__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17186_$_iter__17191.call(null,cljs.core.rest.call(null,s__17192__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17186);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17196 = (function sablono$core$ordered_list17196(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list17196_$_iter__17201(s__17202){
return (new cljs.core.LazySeq(null,(function (){
var s__17202__$1 = s__17202;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17202__$1);
if(temp__4425__auto__){
var s__17202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17202__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17202__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17204 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17203 = (0);
while(true){
if((i__17203 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17203);
cljs.core.chunk_append.call(null,b__17204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17205 = (i__17203 + (1));
i__17203 = G__17205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17204),sablono$core$ordered_list17196_$_iter__17201.call(null,cljs.core.chunk_rest.call(null,s__17202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17204),null);
}
} else {
var x = cljs.core.first.call(null,s__17202__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17196_$_iter__17201.call(null,cljs.core.rest.call(null,s__17202__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17196);
/**
 * Create an image element.
 */
sablono.core.image17206 = (function sablono$core$image17206(var_args){
var args17207 = [];
var len__6152__auto___17210 = arguments.length;
var i__6153__auto___17211 = (0);
while(true){
if((i__6153__auto___17211 < len__6152__auto___17210)){
args17207.push((arguments[i__6153__auto___17211]));

var G__17212 = (i__6153__auto___17211 + (1));
i__6153__auto___17211 = G__17212;
continue;
} else {
}
break;
}

var G__17209 = args17207.length;
switch (G__17209) {
case 1:
return sablono.core.image17206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17207.length)].join('')));

}
});

sablono.core.image17206.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17206.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17206.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17206);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17214_SHARP_,p2__17215_SHARP_){
return [cljs.core.str(p1__17214_SHARP_),cljs.core.str("["),cljs.core.str(p2__17215_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17216_SHARP_,p2__17217_SHARP_){
return [cljs.core.str(p1__17216_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17217_SHARP_)].join('');
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
sablono.core.color_field17218 = (function sablono$core$color_field17218(var_args){
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
return sablono.core.color_field17218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17219.length)].join('')));

}
});

sablono.core.color_field17218.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.color_field17218.call(null,name__13461__auto__,null);
});

sablono.core.color_field17218.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.color_field17218.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17218);

/**
 * Creates a date input field.
 */
sablono.core.date_field17222 = (function sablono$core$date_field17222(var_args){
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
return sablono.core.date_field17222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17223.length)].join('')));

}
});

sablono.core.date_field17222.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.date_field17222.call(null,name__13461__auto__,null);
});

sablono.core.date_field17222.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.date_field17222.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17222);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17226 = (function sablono$core$datetime_field17226(var_args){
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
return sablono.core.datetime_field17226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17227.length)].join('')));

}
});

sablono.core.datetime_field17226.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.datetime_field17226.call(null,name__13461__auto__,null);
});

sablono.core.datetime_field17226.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.datetime_field17226.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17226);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17230 = (function sablono$core$datetime_local_field17230(var_args){
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
return sablono.core.datetime_local_field17230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17231.length)].join('')));

}
});

sablono.core.datetime_local_field17230.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.datetime_local_field17230.call(null,name__13461__auto__,null);
});

sablono.core.datetime_local_field17230.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.datetime_local_field17230.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17230);

/**
 * Creates a email input field.
 */
sablono.core.email_field17234 = (function sablono$core$email_field17234(var_args){
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
return sablono.core.email_field17234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17235.length)].join('')));

}
});

sablono.core.email_field17234.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.email_field17234.call(null,name__13461__auto__,null);
});

sablono.core.email_field17234.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.email_field17234.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17234);

/**
 * Creates a file input field.
 */
sablono.core.file_field17238 = (function sablono$core$file_field17238(var_args){
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
return sablono.core.file_field17238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17239.length)].join('')));

}
});

sablono.core.file_field17238.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.file_field17238.call(null,name__13461__auto__,null);
});

sablono.core.file_field17238.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.file_field17238.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17238);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17242 = (function sablono$core$hidden_field17242(var_args){
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
return sablono.core.hidden_field17242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17243.length)].join('')));

}
});

sablono.core.hidden_field17242.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.hidden_field17242.call(null,name__13461__auto__,null);
});

sablono.core.hidden_field17242.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.hidden_field17242.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17242);

/**
 * Creates a month input field.
 */
sablono.core.month_field17246 = (function sablono$core$month_field17246(var_args){
var args17247 = [];
var len__6152__auto___17314 = arguments.length;
var i__6153__auto___17315 = (0);
while(true){
if((i__6153__auto___17315 < len__6152__auto___17314)){
args17247.push((arguments[i__6153__auto___17315]));

var G__17316 = (i__6153__auto___17315 + (1));
i__6153__auto___17315 = G__17316;
continue;
} else {
}
break;
}

var G__17249 = args17247.length;
switch (G__17249) {
case 1:
return sablono.core.month_field17246.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17246.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17247.length)].join('')));

}
});

sablono.core.month_field17246.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.month_field17246.call(null,name__13461__auto__,null);
});

sablono.core.month_field17246.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.month_field17246.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17246);

/**
 * Creates a number input field.
 */
sablono.core.number_field17250 = (function sablono$core$number_field17250(var_args){
var args17251 = [];
var len__6152__auto___17318 = arguments.length;
var i__6153__auto___17319 = (0);
while(true){
if((i__6153__auto___17319 < len__6152__auto___17318)){
args17251.push((arguments[i__6153__auto___17319]));

var G__17320 = (i__6153__auto___17319 + (1));
i__6153__auto___17319 = G__17320;
continue;
} else {
}
break;
}

var G__17253 = args17251.length;
switch (G__17253) {
case 1:
return sablono.core.number_field17250.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17250.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17251.length)].join('')));

}
});

sablono.core.number_field17250.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.number_field17250.call(null,name__13461__auto__,null);
});

sablono.core.number_field17250.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.number_field17250.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17250);

/**
 * Creates a password input field.
 */
sablono.core.password_field17254 = (function sablono$core$password_field17254(var_args){
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
return sablono.core.password_field17254.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17254.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17255.length)].join('')));

}
});

sablono.core.password_field17254.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.password_field17254.call(null,name__13461__auto__,null);
});

sablono.core.password_field17254.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.password_field17254.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17254);

/**
 * Creates a range input field.
 */
sablono.core.range_field17258 = (function sablono$core$range_field17258(var_args){
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
return sablono.core.range_field17258.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17258.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17259.length)].join('')));

}
});

sablono.core.range_field17258.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.range_field17258.call(null,name__13461__auto__,null);
});

sablono.core.range_field17258.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.range_field17258.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17258);

/**
 * Creates a search input field.
 */
sablono.core.search_field17262 = (function sablono$core$search_field17262(var_args){
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
return sablono.core.search_field17262.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17262.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17263.length)].join('')));

}
});

sablono.core.search_field17262.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.search_field17262.call(null,name__13461__auto__,null);
});

sablono.core.search_field17262.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.search_field17262.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17262);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17266 = (function sablono$core$tel_field17266(var_args){
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
return sablono.core.tel_field17266.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17266.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17267.length)].join('')));

}
});

sablono.core.tel_field17266.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.tel_field17266.call(null,name__13461__auto__,null);
});

sablono.core.tel_field17266.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.tel_field17266.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17266);

/**
 * Creates a text input field.
 */
sablono.core.text_field17270 = (function sablono$core$text_field17270(var_args){
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
return sablono.core.text_field17270.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17270.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17271.length)].join('')));

}
});

sablono.core.text_field17270.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.text_field17270.call(null,name__13461__auto__,null);
});

sablono.core.text_field17270.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.text_field17270.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17270);

/**
 * Creates a time input field.
 */
sablono.core.time_field17274 = (function sablono$core$time_field17274(var_args){
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
return sablono.core.time_field17274.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17275.length)].join('')));

}
});

sablono.core.time_field17274.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.time_field17274.call(null,name__13461__auto__,null);
});

sablono.core.time_field17274.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.time_field17274.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17274);

/**
 * Creates a url input field.
 */
sablono.core.url_field17278 = (function sablono$core$url_field17278(var_args){
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
return sablono.core.url_field17278.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17278.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17279.length)].join('')));

}
});

sablono.core.url_field17278.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.url_field17278.call(null,name__13461__auto__,null);
});

sablono.core.url_field17278.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.url_field17278.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17278);

/**
 * Creates a week input field.
 */
sablono.core.week_field17282 = (function sablono$core$week_field17282(var_args){
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
return sablono.core.week_field17282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17283.length)].join('')));

}
});

sablono.core.week_field17282.cljs$core$IFn$_invoke$arity$1 = (function (name__13461__auto__){
return sablono.core.week_field17282.call(null,name__13461__auto__,null);
});

sablono.core.week_field17282.cljs$core$IFn$_invoke$arity$2 = (function (name__13461__auto__,value__13462__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13461__auto__,value__13462__auto__);
});

sablono.core.week_field17282.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17282);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17354 = (function sablono$core$check_box17354(var_args){
var args17355 = [];
var len__6152__auto___17358 = arguments.length;
var i__6153__auto___17359 = (0);
while(true){
if((i__6153__auto___17359 < len__6152__auto___17358)){
args17355.push((arguments[i__6153__auto___17359]));

var G__17360 = (i__6153__auto___17359 + (1));
i__6153__auto___17359 = G__17360;
continue;
} else {
}
break;
}

var G__17357 = args17355.length;
switch (G__17357) {
case 1:
return sablono.core.check_box17354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17354.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17355.length)].join('')));

}
});

sablono.core.check_box17354.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17354.call(null,name,null);
});

sablono.core.check_box17354.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17354.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17354.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17354.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17354);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17362 = (function sablono$core$radio_button17362(var_args){
var args17363 = [];
var len__6152__auto___17366 = arguments.length;
var i__6153__auto___17367 = (0);
while(true){
if((i__6153__auto___17367 < len__6152__auto___17366)){
args17363.push((arguments[i__6153__auto___17367]));

var G__17368 = (i__6153__auto___17367 + (1));
i__6153__auto___17367 = G__17368;
continue;
} else {
}
break;
}

var G__17365 = args17363.length;
switch (G__17365) {
case 1:
return sablono.core.radio_button17362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17362.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17363.length)].join('')));

}
});

sablono.core.radio_button17362.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17362.call(null,group,null);
});

sablono.core.radio_button17362.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17362.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17362.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17362.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17362);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17370 = (function sablono$core$select_options17370(coll){
var iter__5866__auto__ = (function sablono$core$select_options17370_$_iter__17379(s__17380){
return (new cljs.core.LazySeq(null,(function (){
var s__17380__$1 = s__17380;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17380__$1);
if(temp__4425__auto__){
var s__17380__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17380__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17380__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17382 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17381 = (0);
while(true){
if((i__17381 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17381);
cljs.core.chunk_append.call(null,b__17382,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17385 = x;
var text = cljs.core.nth.call(null,vec__17385,(0),null);
var val = cljs.core.nth.call(null,vec__17385,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17385,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17370.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17387 = (i__17381 + (1));
i__17381 = G__17387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17382),sablono$core$select_options17370_$_iter__17379.call(null,cljs.core.chunk_rest.call(null,s__17380__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17382),null);
}
} else {
var x = cljs.core.first.call(null,s__17380__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17386 = x;
var text = cljs.core.nth.call(null,vec__17386,(0),null);
var val = cljs.core.nth.call(null,vec__17386,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17386,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17370.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17370_$_iter__17379.call(null,cljs.core.rest.call(null,s__17380__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17370);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17388 = (function sablono$core$drop_down17388(var_args){
var args17389 = [];
var len__6152__auto___17392 = arguments.length;
var i__6153__auto___17393 = (0);
while(true){
if((i__6153__auto___17393 < len__6152__auto___17392)){
args17389.push((arguments[i__6153__auto___17393]));

var G__17394 = (i__6153__auto___17393 + (1));
i__6153__auto___17393 = G__17394;
continue;
} else {
}
break;
}

var G__17391 = args17389.length;
switch (G__17391) {
case 2:
return sablono.core.drop_down17388.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17388.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17389.length)].join('')));

}
});

sablono.core.drop_down17388.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17388.call(null,name,options,null);
});

sablono.core.drop_down17388.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17388.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17388);
/**
 * Creates a text area element.
 */
sablono.core.text_area17396 = (function sablono$core$text_area17396(var_args){
var args17397 = [];
var len__6152__auto___17400 = arguments.length;
var i__6153__auto___17401 = (0);
while(true){
if((i__6153__auto___17401 < len__6152__auto___17400)){
args17397.push((arguments[i__6153__auto___17401]));

var G__17402 = (i__6153__auto___17401 + (1));
i__6153__auto___17401 = G__17402;
continue;
} else {
}
break;
}

var G__17399 = args17397.length;
switch (G__17399) {
case 1:
return sablono.core.text_area17396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17397.length)].join('')));

}
});

sablono.core.text_area17396.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17396.call(null,name,null);
});

sablono.core.text_area17396.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17396.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17396);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17404 = (function sablono$core$label17404(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17404);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17405 = (function sablono$core$submit_button17405(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17405);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17406 = (function sablono$core$reset_button17406(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17406);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17407 = (function sablono$core$form_to17407(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17412 = arguments.length;
var i__6153__auto___17413 = (0);
while(true){
if((i__6153__auto___17413 < len__6152__auto___17412)){
args__6159__auto__.push((arguments[i__6153__auto___17413]));

var G__17414 = (i__6153__auto___17413 + (1));
i__6153__auto___17413 = G__17414;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17407.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17407.cljs$core$IFn$_invoke$arity$variadic = (function (p__17410,body){
var vec__17411 = p__17410;
var method = cljs.core.nth.call(null,vec__17411,(0),null);
var action = cljs.core.nth.call(null,vec__17411,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17407.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17407.cljs$lang$applyTo = (function (seq17408){
var G__17409 = cljs.core.first.call(null,seq17408);
var seq17408__$1 = cljs.core.next.call(null,seq17408);
return sablono.core.form_to17407.cljs$core$IFn$_invoke$arity$variadic(G__17409,seq17408__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17407);

//# sourceMappingURL=core.js.map