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
var G__16942__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__16941 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__16941,(0),null);
var body = cljs.core.nthnext.call(null,vec__16941,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__16942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16943__i = 0, G__16943__a = new Array(arguments.length -  0);
while (G__16943__i < G__16943__a.length) {G__16943__a[G__16943__i] = arguments[G__16943__i + 0]; ++G__16943__i;}
  args = new cljs.core.IndexedSeq(G__16943__a,0);
} 
return G__16942__delegate.call(this,args);};
G__16942.cljs$lang$maxFixedArity = 0;
G__16942.cljs$lang$applyTo = (function (arglist__16944){
var args = cljs.core.seq(arglist__16944);
return G__16942__delegate(args);
});
G__16942.cljs$core$IFn$_invoke$arity$variadic = G__16942__delegate;
return G__16942;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__16949(s__16950){
return (new cljs.core.LazySeq(null,(function (){
var s__16950__$1 = s__16950;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16950__$1);
if(temp__4425__auto__){
var s__16950__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16950__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16950__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16952 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16951 = (0);
while(true){
if((i__16951 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__16951);
cljs.core.chunk_append.call(null,b__16952,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__16953 = (i__16951 + (1));
i__16951 = G__16953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16952),sablono$core$update_arglists_$_iter__16949.call(null,cljs.core.chunk_rest.call(null,s__16950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16952),null);
}
} else {
var args = cljs.core.first.call(null,s__16950__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__16949.call(null,cljs.core.rest.call(null,s__16950__$2)));
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
var len__6152__auto___16959 = arguments.length;
var i__6153__auto___16960 = (0);
while(true){
if((i__6153__auto___16960 < len__6152__auto___16959)){
args__6159__auto__.push((arguments[i__6153__auto___16960]));

var G__16961 = (i__6153__auto___16960 + (1));
i__6153__auto___16960 = G__16961;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__16955(s__16956){
return (new cljs.core.LazySeq(null,(function (){
var s__16956__$1 = s__16956;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16956__$1);
if(temp__4425__auto__){
var s__16956__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16956__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16956__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16958 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16957 = (0);
while(true){
if((i__16957 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__16957);
cljs.core.chunk_append.call(null,b__16958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__16962 = (i__16957 + (1));
i__16957 = G__16962;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16958),sablono$core$iter__16955.call(null,cljs.core.chunk_rest.call(null,s__16956__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16958),null);
}
} else {
var style = cljs.core.first.call(null,s__16956__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__16955.call(null,cljs.core.rest.call(null,s__16956__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq16954){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16954));
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
sablono.core.link_to16963 = (function sablono$core$link_to16963(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16966 = arguments.length;
var i__6153__auto___16967 = (0);
while(true){
if((i__6153__auto___16967 < len__6152__auto___16966)){
args__6159__auto__.push((arguments[i__6153__auto___16967]));

var G__16968 = (i__6153__auto___16967 + (1));
i__6153__auto___16967 = G__16968;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to16963.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to16963.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to16963.cljs$lang$maxFixedArity = (1);

sablono.core.link_to16963.cljs$lang$applyTo = (function (seq16964){
var G__16965 = cljs.core.first.call(null,seq16964);
var seq16964__$1 = cljs.core.next.call(null,seq16964);
return sablono.core.link_to16963.cljs$core$IFn$_invoke$arity$variadic(G__16965,seq16964__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16963);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to16969 = (function sablono$core$mail_to16969(var_args){
var args__6159__auto__ = [];
var len__6152__auto___16974 = arguments.length;
var i__6153__auto___16975 = (0);
while(true){
if((i__6153__auto___16975 < len__6152__auto___16974)){
args__6159__auto__.push((arguments[i__6153__auto___16975]));

var G__16976 = (i__6153__auto___16975 + (1));
i__6153__auto___16975 = G__16976;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to16969.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to16969.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__16972){
var vec__16973 = p__16972;
var content = cljs.core.nth.call(null,vec__16973,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to16969.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to16969.cljs$lang$applyTo = (function (seq16970){
var G__16971 = cljs.core.first.call(null,seq16970);
var seq16970__$1 = cljs.core.next.call(null,seq16970);
return sablono.core.mail_to16969.cljs$core$IFn$_invoke$arity$variadic(G__16971,seq16970__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16969);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list16977 = (function sablono$core$unordered_list16977(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list16977_$_iter__16982(s__16983){
return (new cljs.core.LazySeq(null,(function (){
var s__16983__$1 = s__16983;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16983__$1);
if(temp__4425__auto__){
var s__16983__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16983__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16983__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16985 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16984 = (0);
while(true){
if((i__16984 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__16984);
cljs.core.chunk_append.call(null,b__16985,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16986 = (i__16984 + (1));
i__16984 = G__16986;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16985),sablono$core$unordered_list16977_$_iter__16982.call(null,cljs.core.chunk_rest.call(null,s__16983__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16985),null);
}
} else {
var x = cljs.core.first.call(null,s__16983__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list16977_$_iter__16982.call(null,cljs.core.rest.call(null,s__16983__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16977);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list16987 = (function sablono$core$ordered_list16987(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list16987_$_iter__16992(s__16993){
return (new cljs.core.LazySeq(null,(function (){
var s__16993__$1 = s__16993;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16993__$1);
if(temp__4425__auto__){
var s__16993__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16993__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16993__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16995 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16994 = (0);
while(true){
if((i__16994 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__16994);
cljs.core.chunk_append.call(null,b__16995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__16996 = (i__16994 + (1));
i__16994 = G__16996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16995),sablono$core$ordered_list16987_$_iter__16992.call(null,cljs.core.chunk_rest.call(null,s__16993__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16995),null);
}
} else {
var x = cljs.core.first.call(null,s__16993__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list16987_$_iter__16992.call(null,cljs.core.rest.call(null,s__16993__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16987);
/**
 * Create an image element.
 */
sablono.core.image16997 = (function sablono$core$image16997(var_args){
var args16998 = [];
var len__6152__auto___17001 = arguments.length;
var i__6153__auto___17002 = (0);
while(true){
if((i__6153__auto___17002 < len__6152__auto___17001)){
args16998.push((arguments[i__6153__auto___17002]));

var G__17003 = (i__6153__auto___17002 + (1));
i__6153__auto___17002 = G__17003;
continue;
} else {
}
break;
}

var G__17000 = args16998.length;
switch (G__17000) {
case 1:
return sablono.core.image16997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image16997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16998.length)].join('')));

}
});

sablono.core.image16997.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image16997.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image16997.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16997);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17005_SHARP_,p2__17006_SHARP_){
return [cljs.core.str(p1__17005_SHARP_),cljs.core.str("["),cljs.core.str(p2__17006_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17007_SHARP_,p2__17008_SHARP_){
return [cljs.core.str(p1__17007_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17008_SHARP_)].join('');
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
sablono.core.color_field17009 = (function sablono$core$color_field17009(var_args){
var args17010 = [];
var len__6152__auto___17077 = arguments.length;
var i__6153__auto___17078 = (0);
while(true){
if((i__6153__auto___17078 < len__6152__auto___17077)){
args17010.push((arguments[i__6153__auto___17078]));

var G__17079 = (i__6153__auto___17078 + (1));
i__6153__auto___17078 = G__17079;
continue;
} else {
}
break;
}

var G__17012 = args17010.length;
switch (G__17012) {
case 1:
return sablono.core.color_field17009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17010.length)].join('')));

}
});

sablono.core.color_field17009.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.color_field17009.call(null,name__12673__auto__,null);
});

sablono.core.color_field17009.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.color_field17009.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17009);

/**
 * Creates a date input field.
 */
sablono.core.date_field17013 = (function sablono$core$date_field17013(var_args){
var args17014 = [];
var len__6152__auto___17081 = arguments.length;
var i__6153__auto___17082 = (0);
while(true){
if((i__6153__auto___17082 < len__6152__auto___17081)){
args17014.push((arguments[i__6153__auto___17082]));

var G__17083 = (i__6153__auto___17082 + (1));
i__6153__auto___17082 = G__17083;
continue;
} else {
}
break;
}

var G__17016 = args17014.length;
switch (G__17016) {
case 1:
return sablono.core.date_field17013.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17013.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17014.length)].join('')));

}
});

sablono.core.date_field17013.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.date_field17013.call(null,name__12673__auto__,null);
});

sablono.core.date_field17013.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.date_field17013.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17013);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17017 = (function sablono$core$datetime_field17017(var_args){
var args17018 = [];
var len__6152__auto___17085 = arguments.length;
var i__6153__auto___17086 = (0);
while(true){
if((i__6153__auto___17086 < len__6152__auto___17085)){
args17018.push((arguments[i__6153__auto___17086]));

var G__17087 = (i__6153__auto___17086 + (1));
i__6153__auto___17086 = G__17087;
continue;
} else {
}
break;
}

var G__17020 = args17018.length;
switch (G__17020) {
case 1:
return sablono.core.datetime_field17017.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17018.length)].join('')));

}
});

sablono.core.datetime_field17017.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.datetime_field17017.call(null,name__12673__auto__,null);
});

sablono.core.datetime_field17017.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.datetime_field17017.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17017);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17021 = (function sablono$core$datetime_local_field17021(var_args){
var args17022 = [];
var len__6152__auto___17089 = arguments.length;
var i__6153__auto___17090 = (0);
while(true){
if((i__6153__auto___17090 < len__6152__auto___17089)){
args17022.push((arguments[i__6153__auto___17090]));

var G__17091 = (i__6153__auto___17090 + (1));
i__6153__auto___17090 = G__17091;
continue;
} else {
}
break;
}

var G__17024 = args17022.length;
switch (G__17024) {
case 1:
return sablono.core.datetime_local_field17021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17022.length)].join('')));

}
});

sablono.core.datetime_local_field17021.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.datetime_local_field17021.call(null,name__12673__auto__,null);
});

sablono.core.datetime_local_field17021.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.datetime_local_field17021.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17021);

/**
 * Creates a email input field.
 */
sablono.core.email_field17025 = (function sablono$core$email_field17025(var_args){
var args17026 = [];
var len__6152__auto___17093 = arguments.length;
var i__6153__auto___17094 = (0);
while(true){
if((i__6153__auto___17094 < len__6152__auto___17093)){
args17026.push((arguments[i__6153__auto___17094]));

var G__17095 = (i__6153__auto___17094 + (1));
i__6153__auto___17094 = G__17095;
continue;
} else {
}
break;
}

var G__17028 = args17026.length;
switch (G__17028) {
case 1:
return sablono.core.email_field17025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17026.length)].join('')));

}
});

sablono.core.email_field17025.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.email_field17025.call(null,name__12673__auto__,null);
});

sablono.core.email_field17025.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.email_field17025.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17025);

/**
 * Creates a file input field.
 */
sablono.core.file_field17029 = (function sablono$core$file_field17029(var_args){
var args17030 = [];
var len__6152__auto___17097 = arguments.length;
var i__6153__auto___17098 = (0);
while(true){
if((i__6153__auto___17098 < len__6152__auto___17097)){
args17030.push((arguments[i__6153__auto___17098]));

var G__17099 = (i__6153__auto___17098 + (1));
i__6153__auto___17098 = G__17099;
continue;
} else {
}
break;
}

var G__17032 = args17030.length;
switch (G__17032) {
case 1:
return sablono.core.file_field17029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17030.length)].join('')));

}
});

sablono.core.file_field17029.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.file_field17029.call(null,name__12673__auto__,null);
});

sablono.core.file_field17029.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.file_field17029.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17029);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17033 = (function sablono$core$hidden_field17033(var_args){
var args17034 = [];
var len__6152__auto___17101 = arguments.length;
var i__6153__auto___17102 = (0);
while(true){
if((i__6153__auto___17102 < len__6152__auto___17101)){
args17034.push((arguments[i__6153__auto___17102]));

var G__17103 = (i__6153__auto___17102 + (1));
i__6153__auto___17102 = G__17103;
continue;
} else {
}
break;
}

var G__17036 = args17034.length;
switch (G__17036) {
case 1:
return sablono.core.hidden_field17033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17034.length)].join('')));

}
});

sablono.core.hidden_field17033.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.hidden_field17033.call(null,name__12673__auto__,null);
});

sablono.core.hidden_field17033.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.hidden_field17033.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17033);

/**
 * Creates a month input field.
 */
sablono.core.month_field17037 = (function sablono$core$month_field17037(var_args){
var args17038 = [];
var len__6152__auto___17105 = arguments.length;
var i__6153__auto___17106 = (0);
while(true){
if((i__6153__auto___17106 < len__6152__auto___17105)){
args17038.push((arguments[i__6153__auto___17106]));

var G__17107 = (i__6153__auto___17106 + (1));
i__6153__auto___17106 = G__17107;
continue;
} else {
}
break;
}

var G__17040 = args17038.length;
switch (G__17040) {
case 1:
return sablono.core.month_field17037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17038.length)].join('')));

}
});

sablono.core.month_field17037.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.month_field17037.call(null,name__12673__auto__,null);
});

sablono.core.month_field17037.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.month_field17037.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17037);

/**
 * Creates a number input field.
 */
sablono.core.number_field17041 = (function sablono$core$number_field17041(var_args){
var args17042 = [];
var len__6152__auto___17109 = arguments.length;
var i__6153__auto___17110 = (0);
while(true){
if((i__6153__auto___17110 < len__6152__auto___17109)){
args17042.push((arguments[i__6153__auto___17110]));

var G__17111 = (i__6153__auto___17110 + (1));
i__6153__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var G__17044 = args17042.length;
switch (G__17044) {
case 1:
return sablono.core.number_field17041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17042.length)].join('')));

}
});

sablono.core.number_field17041.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.number_field17041.call(null,name__12673__auto__,null);
});

sablono.core.number_field17041.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.number_field17041.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17041);

/**
 * Creates a password input field.
 */
sablono.core.password_field17045 = (function sablono$core$password_field17045(var_args){
var args17046 = [];
var len__6152__auto___17113 = arguments.length;
var i__6153__auto___17114 = (0);
while(true){
if((i__6153__auto___17114 < len__6152__auto___17113)){
args17046.push((arguments[i__6153__auto___17114]));

var G__17115 = (i__6153__auto___17114 + (1));
i__6153__auto___17114 = G__17115;
continue;
} else {
}
break;
}

var G__17048 = args17046.length;
switch (G__17048) {
case 1:
return sablono.core.password_field17045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17046.length)].join('')));

}
});

sablono.core.password_field17045.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.password_field17045.call(null,name__12673__auto__,null);
});

sablono.core.password_field17045.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.password_field17045.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17045);

/**
 * Creates a range input field.
 */
sablono.core.range_field17049 = (function sablono$core$range_field17049(var_args){
var args17050 = [];
var len__6152__auto___17117 = arguments.length;
var i__6153__auto___17118 = (0);
while(true){
if((i__6153__auto___17118 < len__6152__auto___17117)){
args17050.push((arguments[i__6153__auto___17118]));

var G__17119 = (i__6153__auto___17118 + (1));
i__6153__auto___17118 = G__17119;
continue;
} else {
}
break;
}

var G__17052 = args17050.length;
switch (G__17052) {
case 1:
return sablono.core.range_field17049.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17050.length)].join('')));

}
});

sablono.core.range_field17049.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.range_field17049.call(null,name__12673__auto__,null);
});

sablono.core.range_field17049.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.range_field17049.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17049);

/**
 * Creates a search input field.
 */
sablono.core.search_field17053 = (function sablono$core$search_field17053(var_args){
var args17054 = [];
var len__6152__auto___17121 = arguments.length;
var i__6153__auto___17122 = (0);
while(true){
if((i__6153__auto___17122 < len__6152__auto___17121)){
args17054.push((arguments[i__6153__auto___17122]));

var G__17123 = (i__6153__auto___17122 + (1));
i__6153__auto___17122 = G__17123;
continue;
} else {
}
break;
}

var G__17056 = args17054.length;
switch (G__17056) {
case 1:
return sablono.core.search_field17053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17054.length)].join('')));

}
});

sablono.core.search_field17053.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.search_field17053.call(null,name__12673__auto__,null);
});

sablono.core.search_field17053.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.search_field17053.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17053);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17057 = (function sablono$core$tel_field17057(var_args){
var args17058 = [];
var len__6152__auto___17125 = arguments.length;
var i__6153__auto___17126 = (0);
while(true){
if((i__6153__auto___17126 < len__6152__auto___17125)){
args17058.push((arguments[i__6153__auto___17126]));

var G__17127 = (i__6153__auto___17126 + (1));
i__6153__auto___17126 = G__17127;
continue;
} else {
}
break;
}

var G__17060 = args17058.length;
switch (G__17060) {
case 1:
return sablono.core.tel_field17057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17058.length)].join('')));

}
});

sablono.core.tel_field17057.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.tel_field17057.call(null,name__12673__auto__,null);
});

sablono.core.tel_field17057.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.tel_field17057.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17057);

/**
 * Creates a text input field.
 */
sablono.core.text_field17061 = (function sablono$core$text_field17061(var_args){
var args17062 = [];
var len__6152__auto___17129 = arguments.length;
var i__6153__auto___17130 = (0);
while(true){
if((i__6153__auto___17130 < len__6152__auto___17129)){
args17062.push((arguments[i__6153__auto___17130]));

var G__17131 = (i__6153__auto___17130 + (1));
i__6153__auto___17130 = G__17131;
continue;
} else {
}
break;
}

var G__17064 = args17062.length;
switch (G__17064) {
case 1:
return sablono.core.text_field17061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17062.length)].join('')));

}
});

sablono.core.text_field17061.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.text_field17061.call(null,name__12673__auto__,null);
});

sablono.core.text_field17061.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.text_field17061.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17061);

/**
 * Creates a time input field.
 */
sablono.core.time_field17065 = (function sablono$core$time_field17065(var_args){
var args17066 = [];
var len__6152__auto___17133 = arguments.length;
var i__6153__auto___17134 = (0);
while(true){
if((i__6153__auto___17134 < len__6152__auto___17133)){
args17066.push((arguments[i__6153__auto___17134]));

var G__17135 = (i__6153__auto___17134 + (1));
i__6153__auto___17134 = G__17135;
continue;
} else {
}
break;
}

var G__17068 = args17066.length;
switch (G__17068) {
case 1:
return sablono.core.time_field17065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17066.length)].join('')));

}
});

sablono.core.time_field17065.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.time_field17065.call(null,name__12673__auto__,null);
});

sablono.core.time_field17065.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.time_field17065.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17065);

/**
 * Creates a url input field.
 */
sablono.core.url_field17069 = (function sablono$core$url_field17069(var_args){
var args17070 = [];
var len__6152__auto___17137 = arguments.length;
var i__6153__auto___17138 = (0);
while(true){
if((i__6153__auto___17138 < len__6152__auto___17137)){
args17070.push((arguments[i__6153__auto___17138]));

var G__17139 = (i__6153__auto___17138 + (1));
i__6153__auto___17138 = G__17139;
continue;
} else {
}
break;
}

var G__17072 = args17070.length;
switch (G__17072) {
case 1:
return sablono.core.url_field17069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17070.length)].join('')));

}
});

sablono.core.url_field17069.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.url_field17069.call(null,name__12673__auto__,null);
});

sablono.core.url_field17069.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.url_field17069.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17069);

/**
 * Creates a week input field.
 */
sablono.core.week_field17073 = (function sablono$core$week_field17073(var_args){
var args17074 = [];
var len__6152__auto___17141 = arguments.length;
var i__6153__auto___17142 = (0);
while(true){
if((i__6153__auto___17142 < len__6152__auto___17141)){
args17074.push((arguments[i__6153__auto___17142]));

var G__17143 = (i__6153__auto___17142 + (1));
i__6153__auto___17142 = G__17143;
continue;
} else {
}
break;
}

var G__17076 = args17074.length;
switch (G__17076) {
case 1:
return sablono.core.week_field17073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17074.length)].join('')));

}
});

sablono.core.week_field17073.cljs$core$IFn$_invoke$arity$1 = (function (name__12673__auto__){
return sablono.core.week_field17073.call(null,name__12673__auto__,null);
});

sablono.core.week_field17073.cljs$core$IFn$_invoke$arity$2 = (function (name__12673__auto__,value__12674__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__12673__auto__,value__12674__auto__);
});

sablono.core.week_field17073.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17073);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17145 = (function sablono$core$check_box17145(var_args){
var args17146 = [];
var len__6152__auto___17149 = arguments.length;
var i__6153__auto___17150 = (0);
while(true){
if((i__6153__auto___17150 < len__6152__auto___17149)){
args17146.push((arguments[i__6153__auto___17150]));

var G__17151 = (i__6153__auto___17150 + (1));
i__6153__auto___17150 = G__17151;
continue;
} else {
}
break;
}

var G__17148 = args17146.length;
switch (G__17148) {
case 1:
return sablono.core.check_box17145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17145.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17146.length)].join('')));

}
});

sablono.core.check_box17145.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17145.call(null,name,null);
});

sablono.core.check_box17145.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17145.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17145.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17145.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17145);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17153 = (function sablono$core$radio_button17153(var_args){
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
return sablono.core.radio_button17153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17153.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17154.length)].join('')));

}
});

sablono.core.radio_button17153.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17153.call(null,group,null);
});

sablono.core.radio_button17153.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17153.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17153.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17153.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17153);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17161 = (function sablono$core$select_options17161(coll){
var iter__5866__auto__ = (function sablono$core$select_options17161_$_iter__17170(s__17171){
return (new cljs.core.LazySeq(null,(function (){
var s__17171__$1 = s__17171;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17171__$1);
if(temp__4425__auto__){
var s__17171__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17171__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17171__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17173 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17172 = (0);
while(true){
if((i__17172 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__17172);
cljs.core.chunk_append.call(null,b__17173,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17176 = x;
var text = cljs.core.nth.call(null,vec__17176,(0),null);
var val = cljs.core.nth.call(null,vec__17176,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17176,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17161.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17178 = (i__17172 + (1));
i__17172 = G__17178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17173),sablono$core$select_options17161_$_iter__17170.call(null,cljs.core.chunk_rest.call(null,s__17171__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17173),null);
}
} else {
var x = cljs.core.first.call(null,s__17171__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17177 = x;
var text = cljs.core.nth.call(null,vec__17177,(0),null);
var val = cljs.core.nth.call(null,vec__17177,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17177,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17161.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17161_$_iter__17170.call(null,cljs.core.rest.call(null,s__17171__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17161);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17179 = (function sablono$core$drop_down17179(var_args){
var args17180 = [];
var len__6152__auto___17183 = arguments.length;
var i__6153__auto___17184 = (0);
while(true){
if((i__6153__auto___17184 < len__6152__auto___17183)){
args17180.push((arguments[i__6153__auto___17184]));

var G__17185 = (i__6153__auto___17184 + (1));
i__6153__auto___17184 = G__17185;
continue;
} else {
}
break;
}

var G__17182 = args17180.length;
switch (G__17182) {
case 2:
return sablono.core.drop_down17179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17179.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17180.length)].join('')));

}
});

sablono.core.drop_down17179.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17179.call(null,name,options,null);
});

sablono.core.drop_down17179.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17179.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17179);
/**
 * Creates a text area element.
 */
sablono.core.text_area17187 = (function sablono$core$text_area17187(var_args){
var args17188 = [];
var len__6152__auto___17191 = arguments.length;
var i__6153__auto___17192 = (0);
while(true){
if((i__6153__auto___17192 < len__6152__auto___17191)){
args17188.push((arguments[i__6153__auto___17192]));

var G__17193 = (i__6153__auto___17192 + (1));
i__6153__auto___17192 = G__17193;
continue;
} else {
}
break;
}

var G__17190 = args17188.length;
switch (G__17190) {
case 1:
return sablono.core.text_area17187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17188.length)].join('')));

}
});

sablono.core.text_area17187.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17187.call(null,name,null);
});

sablono.core.text_area17187.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17187.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17187);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17195 = (function sablono$core$label17195(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17195);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17196 = (function sablono$core$submit_button17196(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17196);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17197 = (function sablono$core$reset_button17197(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17197);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17198 = (function sablono$core$form_to17198(var_args){
var args__6159__auto__ = [];
var len__6152__auto___17203 = arguments.length;
var i__6153__auto___17204 = (0);
while(true){
if((i__6153__auto___17204 < len__6152__auto___17203)){
args__6159__auto__.push((arguments[i__6153__auto___17204]));

var G__17205 = (i__6153__auto___17204 + (1));
i__6153__auto___17204 = G__17205;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to17198.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to17198.cljs$core$IFn$_invoke$arity$variadic = (function (p__17201,body){
var vec__17202 = p__17201;
var method = cljs.core.nth.call(null,vec__17202,(0),null);
var action = cljs.core.nth.call(null,vec__17202,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17198.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17198.cljs$lang$applyTo = (function (seq17199){
var G__17200 = cljs.core.first.call(null,seq17199);
var seq17199__$1 = cljs.core.next.call(null,seq17199);
return sablono.core.form_to17198.cljs$core$IFn$_invoke$arity$variadic(G__17200,seq17199__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17198);

//# sourceMappingURL=core.js.map