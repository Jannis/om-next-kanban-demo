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
var G__16831__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__16830 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__16830,(0),null);
var body = cljs.core.nthnext.call(null,vec__16830,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__16831 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16832__i = 0, G__16832__a = new Array(arguments.length -  0);
while (G__16832__i < G__16832__a.length) {G__16832__a[G__16832__i] = arguments[G__16832__i + 0]; ++G__16832__i;}
  args = new cljs.core.IndexedSeq(G__16832__a,0);
} 
return G__16831__delegate.call(this,args);};
G__16831.cljs$lang$maxFixedArity = 0;
G__16831.cljs$lang$applyTo = (function (arglist__16833){
var args = cljs.core.seq(arglist__16833);
return G__16831__delegate(args);
});
G__16831.cljs$core$IFn$_invoke$arity$variadic = G__16831__delegate;
return G__16831;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__16838(s__16839){
return (new cljs.core.LazySeq(null,(function (){
var s__16839__$1 = s__16839;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16839__$1);
if(temp__4425__auto__){
var s__16839__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16839__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16839__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16841 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16840 = (0);
while(true){
if((i__16840 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__16840);
cljs.core.chunk_append.call(null,b__16841,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16842 = (i__16840 + (1));
i__16840 = G__16842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16841),sablono$core$update_arglists_$_iter__16838.call(null,cljs.core.chunk_rest.call(null,s__16839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16841),null);
}
} else {
var args = cljs.core.first.call(null,s__16839__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16838.call(null,cljs.core.rest.call(null,s__16839__$2)));
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
var len__6152__auto___16848 = arguments.length;
var i__6153__auto___16849 = (0);
while(true){
if((i__6153__auto___16849 < len__6152__auto___16848)){
args__6159__auto__.push((arguments[i__6153__auto___16849]));

var G__16850 = (i__6153__auto___16849 + (1));
i__6153__auto___16849 = G__16850;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__16844(s__16845){
return (new cljs.core.LazySeq(null,(function (){
var s__16845__$1 = s__16845;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16845__$1);
if(temp__4425__auto__){
var s__16845__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16845__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16845__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16847 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16846 = (0);
while(true){
if((i__16846 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__16846);
cljs.core.chunk_append.call(null,b__16847,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16851 = (i__16846 + (1));
i__16846 = G__16851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16847),sablono$core$iter__16844.call(null,cljs.core.chunk_rest.call(null,s__16845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16847),null);
}
} else {
var style = cljs.core.first.call(null,s__16845__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__16844.call(null,cljs.core.rest.call(null,s__16845__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq16843){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16843));
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
sablono.core.link_to16852 = (function sablono$core$link_to16852(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16855 = arguments.length;
var i__6153__auto___16856 = (0);
while(true){
if((i__6153__auto___16856 < len__6152__auto___16855)){
args__6159__auto__.push((arguments[i__6153__auto___16856]));

var G__16857 = (i__6153__auto___16856 + (1));
i__6153__auto___16856 = G__16857;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to16852.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to16852.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to16852.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16852.cljs$lang$applyTo = (function (seq16853){
var G__16854 = cljs.core.first.call(null,seq16853);
var seq16853__$1 = cljs.core.next.call(null,seq16853);
return sablono.core.link_to16852.cljs$core$IFn$_invoke$arity$variadic(G__16854,seq16853__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16852);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16858 = (function sablono$core$mail_to16858(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16863 = arguments.length;
var i__6153__auto___16864 = (0);
while(true){
if((i__6153__auto___16864 < len__6152__auto___16863)){
args__6159__auto__.push((arguments[i__6153__auto___16864]));

var G__16865 = (i__6153__auto___16864 + (1));
i__6153__auto___16864 = G__16865;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to16858.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to16858.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16861){
var vec__16862 = p__16861;
var content = cljs.core.nth.call(null,vec__16862,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16858.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16858.cljs$lang$applyTo = (function (seq16859){
var G__16860 = cljs.core.first.call(null,seq16859);
var seq16859__$1 = cljs.core.next.call(null,seq16859);
return sablono.core.mail_to16858.cljs$core$IFn$_invoke$arity$variadic(G__16860,seq16859__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16858);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16866 = (function sablono$core$unordered_list16866(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list16866_$_iter__16871(s__16872){
return (new cljs.core.LazySeq(null,(function (){
var s__16872__$1 = s__16872;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16872__$1);
if(temp__4425__auto__){
var s__16872__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16872__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16872__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16874 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16873 = (0);
while(true){
if((i__16873 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__16873);
cljs.core.chunk_append.call(null,b__16874,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16875 = (i__16873 + (1));
i__16873 = G__16875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16874),sablono$core$unordered_list16866_$_iter__16871.call(null,cljs.core.chunk_rest.call(null,s__16872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16874),null);
}
} else {
var x = cljs.core.first.call(null,s__16872__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16866_$_iter__16871.call(null,cljs.core.rest.call(null,s__16872__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16866);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16876 = (function sablono$core$ordered_list16876(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list16876_$_iter__16881(s__16882){
return (new cljs.core.LazySeq(null,(function (){
var s__16882__$1 = s__16882;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16882__$1);
if(temp__4425__auto__){
var s__16882__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16882__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16882__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16884 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16883 = (0);
while(true){
if((i__16883 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__16883);
cljs.core.chunk_append.call(null,b__16884,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16885 = (i__16883 + (1));
i__16883 = G__16885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16884),sablono$core$ordered_list16876_$_iter__16881.call(null,cljs.core.chunk_rest.call(null,s__16882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16884),null);
}
} else {
var x = cljs.core.first.call(null,s__16882__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16876_$_iter__16881.call(null,cljs.core.rest.call(null,s__16882__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16876);
/**
 * Create an image element.
 */
sablono.core.image16886 = (function sablono$core$image16886(var_args){
var args16887 = [];
var len__6152__auto___16890 = arguments.length;
var i__6153__auto___16891 = (0);
while(true){
if((i__6153__auto___16891 < len__6152__auto___16890)){
args16887.push((arguments[i__6153__auto___16891]));

var G__16892 = (i__6153__auto___16891 + (1));
i__6153__auto___16891 = G__16892;
continue;
} else {
}
break;
}

var G__16889 = args16887.length;
switch (G__16889) {
case 1:
return sablono.core.image16886.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16886.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16887.length)].join('')));

}
});

sablono.core.image16886.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image16886.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image16886.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16886);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__16894_SHARP_,p2__16895_SHARP_){
return [cljs.core.str(p1__16894_SHARP_),cljs.core.str("["),cljs.core.str(p2__16895_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__16896_SHARP_,p2__16897_SHARP_){
return [cljs.core.str(p1__16896_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16897_SHARP_)].join('');
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
sablono.core.color_field16898 = (function sablono$core$color_field16898(var_args){
var args16899 = [];
var len__6152__auto___16966 = arguments.length;
var i__6153__auto___16967 = (0);
while(true){
if((i__6153__auto___16967 < len__6152__auto___16966)){
args16899.push((arguments[i__6153__auto___16967]));

var G__16968 = (i__6153__auto___16967 + (1));
i__6153__auto___16967 = G__16968;
continue;
} else {
}
break;
}

var G__16901 = args16899.length;
switch (G__16901) {
case 1:
return sablono.core.color_field16898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field16898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16899.length)].join('')));

}
});

sablono.core.color_field16898.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.color_field16898.call(null,name__12673__auto__,null);
});

sablono.core.color_field16898.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.color_field16898.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field16898);

/**
 * Creates a date input field.
 */
sablono.core.date_field16902 = (function sablono$core$date_field16902(var_args){
var args16903 = [];
var len__6152__auto___16970 = arguments.length;
var i__6153__auto___16971 = (0);
while(true){
if((i__6153__auto___16971 < len__6152__auto___16970)){
args16903.push((arguments[i__6153__auto___16971]));

var G__16972 = (i__6153__auto___16971 + (1));
i__6153__auto___16971 = G__16972;
continue;
} else {
}
break;
}

var G__16905 = args16903.length;
switch (G__16905) {
case 1:
return sablono.core.date_field16902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field16902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16903.length)].join('')));

}
});

sablono.core.date_field16902.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.date_field16902.call(null,name__12673__auto__,null);
});

sablono.core.date_field16902.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.date_field16902.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field16902);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field16906 = (function sablono$core$datetime_field16906(var_args){
var args16907 = [];
var len__6152__auto___16974 = arguments.length;
var i__6153__auto___16975 = (0);
while(true){
if((i__6153__auto___16975 < len__6152__auto___16974)){
args16907.push((arguments[i__6153__auto___16975]));

var G__16976 = (i__6153__auto___16975 + (1));
i__6153__auto___16975 = G__16976;
continue;
} else {
}
break;
}

var G__16909 = args16907.length;
switch (G__16909) {
case 1:
return sablono.core.datetime_field16906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field16906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16907.length)].join('')));

}
});

sablono.core.datetime_field16906.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.datetime_field16906.call(null,name__12673__auto__,null);
});

sablono.core.datetime_field16906.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.datetime_field16906.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field16906);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field16910 = (function sablono$core$datetime_local_field16910(var_args){
var args16911 = [];
var len__6152__auto___16978 = arguments.length;
var i__6153__auto___16979 = (0);
while(true){
if((i__6153__auto___16979 < len__6152__auto___16978)){
args16911.push((arguments[i__6153__auto___16979]));

var G__16980 = (i__6153__auto___16979 + (1));
i__6153__auto___16979 = G__16980;
continue;
} else {
}
break;
}

var G__16913 = args16911.length;
switch (G__16913) {
case 1:
return sablono.core.datetime_local_field16910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field16910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16911.length)].join('')));

}
});

sablono.core.datetime_local_field16910.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.datetime_local_field16910.call(null,name__12673__auto__,null);
});

sablono.core.datetime_local_field16910.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.datetime_local_field16910.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field16910);

/**
 * Creates a email input field.
 */
sablono.core.email_field16914 = (function sablono$core$email_field16914(var_args){
var args16915 = [];
var len__6152__auto___16982 = arguments.length;
var i__6153__auto___16983 = (0);
while(true){
if((i__6153__auto___16983 < len__6152__auto___16982)){
args16915.push((arguments[i__6153__auto___16983]));

var G__16984 = (i__6153__auto___16983 + (1));
i__6153__auto___16983 = G__16984;
continue;
} else {
}
break;
}

var G__16917 = args16915.length;
switch (G__16917) {
case 1:
return sablono.core.email_field16914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field16914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16915.length)].join('')));

}
});

sablono.core.email_field16914.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.email_field16914.call(null,name__12673__auto__,null);
});

sablono.core.email_field16914.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.email_field16914.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field16914);

/**
 * Creates a file input field.
 */
sablono.core.file_field16918 = (function sablono$core$file_field16918(var_args){
var args16919 = [];
var len__6152__auto___16986 = arguments.length;
var i__6153__auto___16987 = (0);
while(true){
if((i__6153__auto___16987 < len__6152__auto___16986)){
args16919.push((arguments[i__6153__auto___16987]));

var G__16988 = (i__6153__auto___16987 + (1));
i__6153__auto___16987 = G__16988;
continue;
} else {
}
break;
}

var G__16921 = args16919.length;
switch (G__16921) {
case 1:
return sablono.core.file_field16918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field16918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16919.length)].join('')));

}
});

sablono.core.file_field16918.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.file_field16918.call(null,name__12673__auto__,null);
});

sablono.core.file_field16918.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.file_field16918.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field16918);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field16922 = (function sablono$core$hidden_field16922(var_args){
var args16923 = [];
var len__6152__auto___16990 = arguments.length;
var i__6153__auto___16991 = (0);
while(true){
if((i__6153__auto___16991 < len__6152__auto___16990)){
args16923.push((arguments[i__6153__auto___16991]));

var G__16992 = (i__6153__auto___16991 + (1));
i__6153__auto___16991 = G__16992;
continue;
} else {
}
break;
}

var G__16925 = args16923.length;
switch (G__16925) {
case 1:
return sablono.core.hidden_field16922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field16922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16923.length)].join('')));

}
});

sablono.core.hidden_field16922.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.hidden_field16922.call(null,name__12673__auto__,null);
});

sablono.core.hidden_field16922.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.hidden_field16922.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field16922);

/**
 * Creates a month input field.
 */
sablono.core.month_field16926 = (function sablono$core$month_field16926(var_args){
var args16927 = [];
var len__6152__auto___16994 = arguments.length;
var i__6153__auto___16995 = (0);
while(true){
if((i__6153__auto___16995 < len__6152__auto___16994)){
args16927.push((arguments[i__6153__auto___16995]));

var G__16996 = (i__6153__auto___16995 + (1));
i__6153__auto___16995 = G__16996;
continue;
} else {
}
break;
}

var G__16929 = args16927.length;
switch (G__16929) {
case 1:
return sablono.core.month_field16926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field16926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16927.length)].join('')));

}
});

sablono.core.month_field16926.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.month_field16926.call(null,name__12673__auto__,null);
});

sablono.core.month_field16926.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.month_field16926.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field16926);

/**
 * Creates a number input field.
 */
sablono.core.number_field16930 = (function sablono$core$number_field16930(var_args){
var args16931 = [];
var len__6152__auto___16998 = arguments.length;
var i__6153__auto___16999 = (0);
while(true){
if((i__6153__auto___16999 < len__6152__auto___16998)){
args16931.push((arguments[i__6153__auto___16999]));

var G__17000 = (i__6153__auto___16999 + (1));
i__6153__auto___16999 = G__17000;
continue;
} else {
}
break;
}

var G__16933 = args16931.length;
switch (G__16933) {
case 1:
return sablono.core.number_field16930.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field16930.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16931.length)].join('')));

}
});

sablono.core.number_field16930.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.number_field16930.call(null,name__12673__auto__,null);
});

sablono.core.number_field16930.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.number_field16930.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field16930);

/**
 * Creates a password input field.
 */
sablono.core.password_field16934 = (function sablono$core$password_field16934(var_args){
var args16935 = [];
var len__6152__auto___17002 = arguments.length;
var i__6153__auto___17003 = (0);
while(true){
if((i__6153__auto___17003 < len__6152__auto___17002)){
args16935.push((arguments[i__6153__auto___17003]));

var G__17004 = (i__6153__auto___17003 + (1));
i__6153__auto___17003 = G__17004;
continue;
} else {
}
break;
}

var G__16937 = args16935.length;
switch (G__16937) {
case 1:
return sablono.core.password_field16934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field16934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16935.length)].join('')));

}
});

sablono.core.password_field16934.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.password_field16934.call(null,name__12673__auto__,null);
});

sablono.core.password_field16934.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.password_field16934.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field16934);

/**
 * Creates a range input field.
 */
sablono.core.range_field16938 = (function sablono$core$range_field16938(var_args){
var args16939 = [];
var len__6152__auto___17006 = arguments.length;
var i__6153__auto___17007 = (0);
while(true){
if((i__6153__auto___17007 < len__6152__auto___17006)){
args16939.push((arguments[i__6153__auto___17007]));

var G__17008 = (i__6153__auto___17007 + (1));
i__6153__auto___17007 = G__17008;
continue;
} else {
}
break;
}

var G__16941 = args16939.length;
switch (G__16941) {
case 1:
return sablono.core.range_field16938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field16938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16939.length)].join('')));

}
});

sablono.core.range_field16938.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.range_field16938.call(null,name__12673__auto__,null);
});

sablono.core.range_field16938.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.range_field16938.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field16938);

/**
 * Creates a search input field.
 */
sablono.core.search_field16942 = (function sablono$core$search_field16942(var_args){
var args16943 = [];
var len__6152__auto___17010 = arguments.length;
var i__6153__auto___17011 = (0);
while(true){
if((i__6153__auto___17011 < len__6152__auto___17010)){
args16943.push((arguments[i__6153__auto___17011]));

var G__17012 = (i__6153__auto___17011 + (1));
i__6153__auto___17011 = G__17012;
continue;
} else {
}
break;
}

var G__16945 = args16943.length;
switch (G__16945) {
case 1:
return sablono.core.search_field16942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field16942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16943.length)].join('')));

}
});

sablono.core.search_field16942.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.search_field16942.call(null,name__12673__auto__,null);
});

sablono.core.search_field16942.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.search_field16942.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field16942);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field16946 = (function sablono$core$tel_field16946(var_args){
var args16947 = [];
var len__6152__auto___17014 = arguments.length;
var i__6153__auto___17015 = (0);
while(true){
if((i__6153__auto___17015 < len__6152__auto___17014)){
args16947.push((arguments[i__6153__auto___17015]));

var G__17016 = (i__6153__auto___17015 + (1));
i__6153__auto___17015 = G__17016;
continue;
} else {
}
break;
}

var G__16949 = args16947.length;
switch (G__16949) {
case 1:
return sablono.core.tel_field16946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field16946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16947.length)].join('')));

}
});

sablono.core.tel_field16946.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.tel_field16946.call(null,name__12673__auto__,null);
});

sablono.core.tel_field16946.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.tel_field16946.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field16946);

/**
 * Creates a text input field.
 */
sablono.core.text_field16950 = (function sablono$core$text_field16950(var_args){
var args16951 = [];
var len__6152__auto___17018 = arguments.length;
var i__6153__auto___17019 = (0);
while(true){
if((i__6153__auto___17019 < len__6152__auto___17018)){
args16951.push((arguments[i__6153__auto___17019]));

var G__17020 = (i__6153__auto___17019 + (1));
i__6153__auto___17019 = G__17020;
continue;
} else {
}
break;
}

var G__16953 = args16951.length;
switch (G__16953) {
case 1:
return sablono.core.text_field16950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field16950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16951.length)].join('')));

}
});

sablono.core.text_field16950.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.text_field16950.call(null,name__12673__auto__,null);
});

sablono.core.text_field16950.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.text_field16950.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field16950);

/**
 * Creates a time input field.
 */
sablono.core.time_field16954 = (function sablono$core$time_field16954(var_args){
var args16955 = [];
var len__6152__auto___17022 = arguments.length;
var i__6153__auto___17023 = (0);
while(true){
if((i__6153__auto___17023 < len__6152__auto___17022)){
args16955.push((arguments[i__6153__auto___17023]));

var G__17024 = (i__6153__auto___17023 + (1));
i__6153__auto___17023 = G__17024;
continue;
} else {
}
break;
}

var G__16957 = args16955.length;
switch (G__16957) {
case 1:
return sablono.core.time_field16954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field16954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16955.length)].join('')));

}
});

sablono.core.time_field16954.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.time_field16954.call(null,name__12673__auto__,null);
});

sablono.core.time_field16954.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.time_field16954.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field16954);

/**
 * Creates a url input field.
 */
sablono.core.url_field16958 = (function sablono$core$url_field16958(var_args){
var args16959 = [];
var len__6152__auto___17026 = arguments.length;
var i__6153__auto___17027 = (0);
while(true){
if((i__6153__auto___17027 < len__6152__auto___17026)){
args16959.push((arguments[i__6153__auto___17027]));

var G__17028 = (i__6153__auto___17027 + (1));
i__6153__auto___17027 = G__17028;
continue;
} else {
}
break;
}

var G__16961 = args16959.length;
switch (G__16961) {
case 1:
return sablono.core.url_field16958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field16958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16959.length)].join('')));

}
});

sablono.core.url_field16958.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.url_field16958.call(null,name__12673__auto__,null);
});

sablono.core.url_field16958.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.url_field16958.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field16958);

/**
 * Creates a week input field.
 */
sablono.core.week_field16962 = (function sablono$core$week_field16962(var_args){
var args16963 = [];
var len__6152__auto___17030 = arguments.length;
var i__6153__auto___17031 = (0);
while(true){
if((i__6153__auto___17031 < len__6152__auto___17030)){
args16963.push((arguments[i__6153__auto___17031]));

var G__17032 = (i__6153__auto___17031 + (1));
i__6153__auto___17031 = G__17032;
continue;
} else {
}
break;
}

var G__16965 = args16963.length;
switch (G__16965) {
case 1:
return sablono.core.week_field16962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field16962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16963.length)].join('')));

}
});

sablono.core.week_field16962.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.week_field16962.call(null,name__12673__auto__,null);
});

sablono.core.week_field16962.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.week_field16962.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field16962);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17034 = (function sablono$core$check_box17034(var_args){
var args17035 = [];
var len__6152__auto___17038 = arguments.length;
var i__6153__auto___17039 = (0);
while(true){
if((i__6153__auto___17039 < len__6152__auto___17038)){
args17035.push((arguments[i__6153__auto___17039]));

var G__17040 = (i__6153__auto___17039 + (1));
i__6153__auto___17039 = G__17040;
continue;
} else {
}
break;
}

var G__17037 = args17035.length;
switch (G__17037) {
case 1:
return sablono.core.check_box17034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17034.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17035.length)].join('')));

}
});

sablono.core.check_box17034.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17034.call(null,name,null);
});

sablono.core.check_box17034.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17034.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17034.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17034.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17034);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17042 = (function sablono$core$radio_button17042(var_args){
var args17043 = [];
var len__6152__auto___17046 = arguments.length;
var i__6153__auto___17047 = (0);
while(true){
if((i__6153__auto___17047 < len__6152__auto___17046)){
args17043.push((arguments[i__6153__auto___17047]));

var G__17048 = (i__6153__auto___17047 + (1));
i__6153__auto___17047 = G__17048;
continue;
} else {
}
break;
}

var G__17045 = args17043.length;
switch (G__17045) {
case 1:
return sablono.core.radio_button17042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17042.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17043.length)].join('')));

}
});

sablono.core.radio_button17042.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17042.call(null,group,null);
});

sablono.core.radio_button17042.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17042.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17042.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17042.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17042);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17050 = (function sablono$core$select_options17050(coll){
var iter__5866__auto__ = (function sablono$core$select_options17050_$_iter__17059(s__17060){
return (new cljs.core.LazySeq(null,(function (){
var s__17060__$1 = s__17060;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17060__$1);
if(temp__4425__auto__){
var s__17060__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17060__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17060__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17062 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17061 = (0);
while(true){
if((i__17061 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17061);
cljs.core.chunk_append.call(null,b__17062,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17065 = x;
var text = cljs.core.nth.call(null,vec__17065,(0),null);
var val = cljs.core.nth.call(null,vec__17065,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17065,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17050.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17067 = (i__17061 + (1));
i__17061 = G__17067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17062),sablono$core$select_options17050_$_iter__17059.call(null,cljs.core.chunk_rest.call(null,s__17060__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17062),null);
}
} else {
var x = cljs.core.first.call(null,s__17060__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17066 = x;
var text = cljs.core.nth.call(null,vec__17066,(0),null);
var val = cljs.core.nth.call(null,vec__17066,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17066,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17050.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17050_$_iter__17059.call(null,cljs.core.rest.call(null,s__17060__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17050);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17068 = (function sablono$core$drop_down17068(var_args){
var args17069 = [];
var len__6152__auto___17072 = arguments.length;
var i__6153__auto___17073 = (0);
while(true){
if((i__6153__auto___17073 < len__6152__auto___17072)){
args17069.push((arguments[i__6153__auto___17073]));

var G__17074 = (i__6153__auto___17073 + (1));
i__6153__auto___17073 = G__17074;
continue;
} else {
}
break;
}

var G__17071 = args17069.length;
switch (G__17071) {
case 2:
return sablono.core.drop_down17068.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17068.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17069.length)].join('')));

}
});

sablono.core.drop_down17068.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17068.call(null,name,options,null);
});

sablono.core.drop_down17068.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17068.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17068);
/**
 * Creates a text area element.
 */
sablono.core.text_area17076 = (function sablono$core$text_area17076(var_args){
var args17077 = [];
var len__6152__auto___17080 = arguments.length;
var i__6153__auto___17081 = (0);
while(true){
if((i__6153__auto___17081 < len__6152__auto___17080)){
args17077.push((arguments[i__6153__auto___17081]));

var G__17082 = (i__6153__auto___17081 + (1));
i__6153__auto___17081 = G__17082;
continue;
} else {
}
break;
}

var G__17079 = args17077.length;
switch (G__17079) {
case 1:
return sablono.core.text_area17076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17077.length)].join('')));

}
});

sablono.core.text_area17076.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17076.call(null,name,null);
});

sablono.core.text_area17076.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17076.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17076);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17084 = (function sablono$core$label17084(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17084);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17085 = (function sablono$core$submit_button17085(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17085);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17086 = (function sablono$core$reset_button17086(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17086);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17087 = (function sablono$core$form_to17087(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17092 = arguments.length;
var i__6153__auto___17093 = (0);
while(true){
if((i__6153__auto___17093 < len__6152__auto___17092)){
args__6159__auto__.push((arguments[i__6153__auto___17093]));

var G__17094 = (i__6153__auto___17093 + (1));
i__6153__auto___17093 = G__17094;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17087.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17087.cljs$core$IFn$_invoke$arity$variadic = (function (p__17090,body){
var vec__17091 = p__17090;
var method = cljs.core.nth.call(null,vec__17091,(0),null);
var action = cljs.core.nth.call(null,vec__17091,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17087.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17087.cljs$lang$applyTo = (function (seq17088){
var G__17089 = cljs.core.first.call(null,seq17088);
var seq17088__$1 = cljs.core.next.call(null,seq17088);
return sablono.core.form_to17087.cljs$core$IFn$_invoke$arity$variadic(G__17089,seq17088__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17087);

//# sourceMappingURL=core.js.map