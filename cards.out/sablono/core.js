// Compiled by ClojureScript 1.7.170 {}
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
var G__14959__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14958 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__14958,(0),null);
var body = cljs.core.nthnext.call(null,vec__14958,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14960__i = 0, G__14960__a = new Array(arguments.length -  0);
while (G__14960__i < G__14960__a.length) {G__14960__a[G__14960__i] = arguments[G__14960__i + 0]; ++G__14960__i;}
  args = new cljs.core.IndexedSeq(G__14960__a,0);
} 
return G__14959__delegate.call(this,args);};
G__14959.cljs$lang$maxFixedArity = 0;
G__14959.cljs$lang$applyTo = (function (arglist__14961){
var args = cljs.core.seq(arglist__14961);
return G__14959__delegate(args);
});
G__14959.cljs$core$IFn$_invoke$arity$variadic = G__14959__delegate;
return G__14959;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5758__auto__ = (function sablono$core$update_arglists_$_iter__14966(s__14967){
return (new cljs.core.LazySeq(null,(function (){
var s__14967__$1 = s__14967;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14967__$1);
if(temp__4425__auto__){
var s__14967__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14967__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__14967__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__14969 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__14968 = (0);
while(true){
if((i__14968 < size__5757__auto__)){
var args = cljs.core._nth.call(null,c__5756__auto__,i__14968);
cljs.core.chunk_append.call(null,b__14969,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14970 = (i__14968 + (1));
i__14968 = G__14970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14969),sablono$core$update_arglists_$_iter__14966.call(null,cljs.core.chunk_rest.call(null,s__14967__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14969),null);
}
} else {
var args = cljs.core.first.call(null,s__14967__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14966.call(null,cljs.core.rest.call(null,s__14967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__.call(null,arglists);
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
var args__6051__auto__ = [];
var len__6044__auto___14976 = arguments.length;
var i__6045__auto___14977 = (0);
while(true){
if((i__6045__auto___14977 < len__6044__auto___14976)){
args__6051__auto__.push((arguments[i__6045__auto___14977]));

var G__14978 = (i__6045__auto___14977 + (1));
i__6045__auto___14977 = G__14978;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5758__auto__ = (function sablono$core$iter__14972(s__14973){
return (new cljs.core.LazySeq(null,(function (){
var s__14973__$1 = s__14973;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14973__$1);
if(temp__4425__auto__){
var s__14973__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14973__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__14973__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__14975 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__14974 = (0);
while(true){
if((i__14974 < size__5757__auto__)){
var style = cljs.core._nth.call(null,c__5756__auto__,i__14974);
cljs.core.chunk_append.call(null,b__14975,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14979 = (i__14974 + (1));
i__14974 = G__14979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14975),sablono$core$iter__14972.call(null,cljs.core.chunk_rest.call(null,s__14973__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14975),null);
}
} else {
var style = cljs.core.first.call(null,s__14973__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14972.call(null,cljs.core.rest.call(null,s__14973__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14971){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14971));
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
sablono.core.link_to14980 = (function sablono$core$link_to14980(var_args){
var args__6051__auto__ = [];
var len__6044__auto___14983 = arguments.length;
var i__6045__auto___14984 = (0);
while(true){
if((i__6045__auto___14984 < len__6044__auto___14983)){
args__6051__auto__.push((arguments[i__6045__auto___14984]));

var G__14985 = (i__6045__auto___14984 + (1));
i__6045__auto___14984 = G__14985;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return sablono.core.link_to14980.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

sablono.core.link_to14980.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14980.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14980.cljs$lang$applyTo = (function (seq14981){
var G__14982 = cljs.core.first.call(null,seq14981);
var seq14981__$1 = cljs.core.next.call(null,seq14981);
return sablono.core.link_to14980.cljs$core$IFn$_invoke$arity$variadic(G__14982,seq14981__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14980);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14986 = (function sablono$core$mail_to14986(var_args){
var args__6051__auto__ = [];
var len__6044__auto___14991 = arguments.length;
var i__6045__auto___14992 = (0);
while(true){
if((i__6045__auto___14992 < len__6044__auto___14991)){
args__6051__auto__.push((arguments[i__6045__auto___14992]));

var G__14993 = (i__6045__auto___14992 + (1));
i__6045__auto___14992 = G__14993;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return sablono.core.mail_to14986.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

sablono.core.mail_to14986.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14989){
var vec__14990 = p__14989;
var content = cljs.core.nth.call(null,vec__14990,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4986__auto__ = content;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14986.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14986.cljs$lang$applyTo = (function (seq14987){
var G__14988 = cljs.core.first.call(null,seq14987);
var seq14987__$1 = cljs.core.next.call(null,seq14987);
return sablono.core.mail_to14986.cljs$core$IFn$_invoke$arity$variadic(G__14988,seq14987__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14986);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14994 = (function sablono$core$unordered_list14994(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5758__auto__ = (function sablono$core$unordered_list14994_$_iter__14999(s__15000){
return (new cljs.core.LazySeq(null,(function (){
var s__15000__$1 = s__15000;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15000__$1);
if(temp__4425__auto__){
var s__15000__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15000__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__15000__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__15002 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__15001 = (0);
while(true){
if((i__15001 < size__5757__auto__)){
var x = cljs.core._nth.call(null,c__5756__auto__,i__15001);
cljs.core.chunk_append.call(null,b__15002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15003 = (i__15001 + (1));
i__15001 = G__15003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15002),sablono$core$unordered_list14994_$_iter__14999.call(null,cljs.core.chunk_rest.call(null,s__15000__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15002),null);
}
} else {
var x = cljs.core.first.call(null,s__15000__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14994_$_iter__14999.call(null,cljs.core.rest.call(null,s__15000__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14994);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15004 = (function sablono$core$ordered_list15004(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5758__auto__ = (function sablono$core$ordered_list15004_$_iter__15009(s__15010){
return (new cljs.core.LazySeq(null,(function (){
var s__15010__$1 = s__15010;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15010__$1);
if(temp__4425__auto__){
var s__15010__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15010__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__15010__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__15012 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__15011 = (0);
while(true){
if((i__15011 < size__5757__auto__)){
var x = cljs.core._nth.call(null,c__5756__auto__,i__15011);
cljs.core.chunk_append.call(null,b__15012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15013 = (i__15011 + (1));
i__15011 = G__15013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15012),sablono$core$ordered_list15004_$_iter__15009.call(null,cljs.core.chunk_rest.call(null,s__15010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15012),null);
}
} else {
var x = cljs.core.first.call(null,s__15010__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15004_$_iter__15009.call(null,cljs.core.rest.call(null,s__15010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15004);
/**
 * Create an image element.
 */
sablono.core.image15014 = (function sablono$core$image15014(var_args){
var args15015 = [];
var len__6044__auto___15018 = arguments.length;
var i__6045__auto___15019 = (0);
while(true){
if((i__6045__auto___15019 < len__6044__auto___15018)){
args15015.push((arguments[i__6045__auto___15019]));

var G__15020 = (i__6045__auto___15019 + (1));
i__6045__auto___15019 = G__15020;
continue;
} else {
}
break;
}

var G__15017 = args15015.length;
switch (G__15017) {
case 1:
return sablono.core.image15014.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15014.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15015.length)].join('')));

}
});

sablono.core.image15014.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image15014.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image15014.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15014);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__15022_SHARP_,p2__15023_SHARP_){
return [cljs.core.str(p1__15022_SHARP_),cljs.core.str("["),cljs.core.str(p2__15023_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__15024_SHARP_,p2__15025_SHARP_){
return [cljs.core.str(p1__15024_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15025_SHARP_)].join('');
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
sablono.core.color_field15026 = (function sablono$core$color_field15026(var_args){
var args15027 = [];
var len__6044__auto___15094 = arguments.length;
var i__6045__auto___15095 = (0);
while(true){
if((i__6045__auto___15095 < len__6044__auto___15094)){
args15027.push((arguments[i__6045__auto___15095]));

var G__15096 = (i__6045__auto___15095 + (1));
i__6045__auto___15095 = G__15096;
continue;
} else {
}
break;
}

var G__15029 = args15027.length;
switch (G__15029) {
case 1:
return sablono.core.color_field15026.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15026.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15027.length)].join('')));

}
});

sablono.core.color_field15026.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.color_field15026.call(null,name__14947__auto__,null);
});

sablono.core.color_field15026.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.color_field15026.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field15026);

/**
 * Creates a date input field.
 */
sablono.core.date_field15030 = (function sablono$core$date_field15030(var_args){
var args15031 = [];
var len__6044__auto___15098 = arguments.length;
var i__6045__auto___15099 = (0);
while(true){
if((i__6045__auto___15099 < len__6044__auto___15098)){
args15031.push((arguments[i__6045__auto___15099]));

var G__15100 = (i__6045__auto___15099 + (1));
i__6045__auto___15099 = G__15100;
continue;
} else {
}
break;
}

var G__15033 = args15031.length;
switch (G__15033) {
case 1:
return sablono.core.date_field15030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15031.length)].join('')));

}
});

sablono.core.date_field15030.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.date_field15030.call(null,name__14947__auto__,null);
});

sablono.core.date_field15030.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.date_field15030.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field15030);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15034 = (function sablono$core$datetime_field15034(var_args){
var args15035 = [];
var len__6044__auto___15102 = arguments.length;
var i__6045__auto___15103 = (0);
while(true){
if((i__6045__auto___15103 < len__6044__auto___15102)){
args15035.push((arguments[i__6045__auto___15103]));

var G__15104 = (i__6045__auto___15103 + (1));
i__6045__auto___15103 = G__15104;
continue;
} else {
}
break;
}

var G__15037 = args15035.length;
switch (G__15037) {
case 1:
return sablono.core.datetime_field15034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15035.length)].join('')));

}
});

sablono.core.datetime_field15034.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.datetime_field15034.call(null,name__14947__auto__,null);
});

sablono.core.datetime_field15034.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.datetime_field15034.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field15034);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15038 = (function sablono$core$datetime_local_field15038(var_args){
var args15039 = [];
var len__6044__auto___15106 = arguments.length;
var i__6045__auto___15107 = (0);
while(true){
if((i__6045__auto___15107 < len__6044__auto___15106)){
args15039.push((arguments[i__6045__auto___15107]));

var G__15108 = (i__6045__auto___15107 + (1));
i__6045__auto___15107 = G__15108;
continue;
} else {
}
break;
}

var G__15041 = args15039.length;
switch (G__15041) {
case 1:
return sablono.core.datetime_local_field15038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15039.length)].join('')));

}
});

sablono.core.datetime_local_field15038.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.datetime_local_field15038.call(null,name__14947__auto__,null);
});

sablono.core.datetime_local_field15038.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.datetime_local_field15038.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field15038);

/**
 * Creates a email input field.
 */
sablono.core.email_field15042 = (function sablono$core$email_field15042(var_args){
var args15043 = [];
var len__6044__auto___15110 = arguments.length;
var i__6045__auto___15111 = (0);
while(true){
if((i__6045__auto___15111 < len__6044__auto___15110)){
args15043.push((arguments[i__6045__auto___15111]));

var G__15112 = (i__6045__auto___15111 + (1));
i__6045__auto___15111 = G__15112;
continue;
} else {
}
break;
}

var G__15045 = args15043.length;
switch (G__15045) {
case 1:
return sablono.core.email_field15042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15043.length)].join('')));

}
});

sablono.core.email_field15042.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.email_field15042.call(null,name__14947__auto__,null);
});

sablono.core.email_field15042.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.email_field15042.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15042);

/**
 * Creates a file input field.
 */
sablono.core.file_field15046 = (function sablono$core$file_field15046(var_args){
var args15047 = [];
var len__6044__auto___15114 = arguments.length;
var i__6045__auto___15115 = (0);
while(true){
if((i__6045__auto___15115 < len__6044__auto___15114)){
args15047.push((arguments[i__6045__auto___15115]));

var G__15116 = (i__6045__auto___15115 + (1));
i__6045__auto___15115 = G__15116;
continue;
} else {
}
break;
}

var G__15049 = args15047.length;
switch (G__15049) {
case 1:
return sablono.core.file_field15046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15047.length)].join('')));

}
});

sablono.core.file_field15046.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.file_field15046.call(null,name__14947__auto__,null);
});

sablono.core.file_field15046.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.file_field15046.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field15046);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15050 = (function sablono$core$hidden_field15050(var_args){
var args15051 = [];
var len__6044__auto___15118 = arguments.length;
var i__6045__auto___15119 = (0);
while(true){
if((i__6045__auto___15119 < len__6044__auto___15118)){
args15051.push((arguments[i__6045__auto___15119]));

var G__15120 = (i__6045__auto___15119 + (1));
i__6045__auto___15119 = G__15120;
continue;
} else {
}
break;
}

var G__15053 = args15051.length;
switch (G__15053) {
case 1:
return sablono.core.hidden_field15050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15051.length)].join('')));

}
});

sablono.core.hidden_field15050.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.hidden_field15050.call(null,name__14947__auto__,null);
});

sablono.core.hidden_field15050.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.hidden_field15050.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15050);

/**
 * Creates a month input field.
 */
sablono.core.month_field15054 = (function sablono$core$month_field15054(var_args){
var args15055 = [];
var len__6044__auto___15122 = arguments.length;
var i__6045__auto___15123 = (0);
while(true){
if((i__6045__auto___15123 < len__6044__auto___15122)){
args15055.push((arguments[i__6045__auto___15123]));

var G__15124 = (i__6045__auto___15123 + (1));
i__6045__auto___15123 = G__15124;
continue;
} else {
}
break;
}

var G__15057 = args15055.length;
switch (G__15057) {
case 1:
return sablono.core.month_field15054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15055.length)].join('')));

}
});

sablono.core.month_field15054.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.month_field15054.call(null,name__14947__auto__,null);
});

sablono.core.month_field15054.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.month_field15054.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field15054);

/**
 * Creates a number input field.
 */
sablono.core.number_field15058 = (function sablono$core$number_field15058(var_args){
var args15059 = [];
var len__6044__auto___15126 = arguments.length;
var i__6045__auto___15127 = (0);
while(true){
if((i__6045__auto___15127 < len__6044__auto___15126)){
args15059.push((arguments[i__6045__auto___15127]));

var G__15128 = (i__6045__auto___15127 + (1));
i__6045__auto___15127 = G__15128;
continue;
} else {
}
break;
}

var G__15061 = args15059.length;
switch (G__15061) {
case 1:
return sablono.core.number_field15058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15059.length)].join('')));

}
});

sablono.core.number_field15058.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.number_field15058.call(null,name__14947__auto__,null);
});

sablono.core.number_field15058.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.number_field15058.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field15058);

/**
 * Creates a password input field.
 */
sablono.core.password_field15062 = (function sablono$core$password_field15062(var_args){
var args15063 = [];
var len__6044__auto___15130 = arguments.length;
var i__6045__auto___15131 = (0);
while(true){
if((i__6045__auto___15131 < len__6044__auto___15130)){
args15063.push((arguments[i__6045__auto___15131]));

var G__15132 = (i__6045__auto___15131 + (1));
i__6045__auto___15131 = G__15132;
continue;
} else {
}
break;
}

var G__15065 = args15063.length;
switch (G__15065) {
case 1:
return sablono.core.password_field15062.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15062.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15063.length)].join('')));

}
});

sablono.core.password_field15062.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.password_field15062.call(null,name__14947__auto__,null);
});

sablono.core.password_field15062.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.password_field15062.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15062);

/**
 * Creates a range input field.
 */
sablono.core.range_field15066 = (function sablono$core$range_field15066(var_args){
var args15067 = [];
var len__6044__auto___15134 = arguments.length;
var i__6045__auto___15135 = (0);
while(true){
if((i__6045__auto___15135 < len__6044__auto___15134)){
args15067.push((arguments[i__6045__auto___15135]));

var G__15136 = (i__6045__auto___15135 + (1));
i__6045__auto___15135 = G__15136;
continue;
} else {
}
break;
}

var G__15069 = args15067.length;
switch (G__15069) {
case 1:
return sablono.core.range_field15066.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15066.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15067.length)].join('')));

}
});

sablono.core.range_field15066.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.range_field15066.call(null,name__14947__auto__,null);
});

sablono.core.range_field15066.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.range_field15066.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field15066);

/**
 * Creates a search input field.
 */
sablono.core.search_field15070 = (function sablono$core$search_field15070(var_args){
var args15071 = [];
var len__6044__auto___15138 = arguments.length;
var i__6045__auto___15139 = (0);
while(true){
if((i__6045__auto___15139 < len__6044__auto___15138)){
args15071.push((arguments[i__6045__auto___15139]));

var G__15140 = (i__6045__auto___15139 + (1));
i__6045__auto___15139 = G__15140;
continue;
} else {
}
break;
}

var G__15073 = args15071.length;
switch (G__15073) {
case 1:
return sablono.core.search_field15070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15071.length)].join('')));

}
});

sablono.core.search_field15070.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.search_field15070.call(null,name__14947__auto__,null);
});

sablono.core.search_field15070.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.search_field15070.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field15070);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15074 = (function sablono$core$tel_field15074(var_args){
var args15075 = [];
var len__6044__auto___15142 = arguments.length;
var i__6045__auto___15143 = (0);
while(true){
if((i__6045__auto___15143 < len__6044__auto___15142)){
args15075.push((arguments[i__6045__auto___15143]));

var G__15144 = (i__6045__auto___15143 + (1));
i__6045__auto___15143 = G__15144;
continue;
} else {
}
break;
}

var G__15077 = args15075.length;
switch (G__15077) {
case 1:
return sablono.core.tel_field15074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15075.length)].join('')));

}
});

sablono.core.tel_field15074.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.tel_field15074.call(null,name__14947__auto__,null);
});

sablono.core.tel_field15074.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.tel_field15074.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field15074);

/**
 * Creates a text input field.
 */
sablono.core.text_field15078 = (function sablono$core$text_field15078(var_args){
var args15079 = [];
var len__6044__auto___15146 = arguments.length;
var i__6045__auto___15147 = (0);
while(true){
if((i__6045__auto___15147 < len__6044__auto___15146)){
args15079.push((arguments[i__6045__auto___15147]));

var G__15148 = (i__6045__auto___15147 + (1));
i__6045__auto___15147 = G__15148;
continue;
} else {
}
break;
}

var G__15081 = args15079.length;
switch (G__15081) {
case 1:
return sablono.core.text_field15078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15079.length)].join('')));

}
});

sablono.core.text_field15078.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.text_field15078.call(null,name__14947__auto__,null);
});

sablono.core.text_field15078.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.text_field15078.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15078);

/**
 * Creates a time input field.
 */
sablono.core.time_field15082 = (function sablono$core$time_field15082(var_args){
var args15083 = [];
var len__6044__auto___15150 = arguments.length;
var i__6045__auto___15151 = (0);
while(true){
if((i__6045__auto___15151 < len__6044__auto___15150)){
args15083.push((arguments[i__6045__auto___15151]));

var G__15152 = (i__6045__auto___15151 + (1));
i__6045__auto___15151 = G__15152;
continue;
} else {
}
break;
}

var G__15085 = args15083.length;
switch (G__15085) {
case 1:
return sablono.core.time_field15082.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15082.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15083.length)].join('')));

}
});

sablono.core.time_field15082.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.time_field15082.call(null,name__14947__auto__,null);
});

sablono.core.time_field15082.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.time_field15082.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field15082);

/**
 * Creates a url input field.
 */
sablono.core.url_field15086 = (function sablono$core$url_field15086(var_args){
var args15087 = [];
var len__6044__auto___15154 = arguments.length;
var i__6045__auto___15155 = (0);
while(true){
if((i__6045__auto___15155 < len__6044__auto___15154)){
args15087.push((arguments[i__6045__auto___15155]));

var G__15156 = (i__6045__auto___15155 + (1));
i__6045__auto___15155 = G__15156;
continue;
} else {
}
break;
}

var G__15089 = args15087.length;
switch (G__15089) {
case 1:
return sablono.core.url_field15086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15087.length)].join('')));

}
});

sablono.core.url_field15086.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.url_field15086.call(null,name__14947__auto__,null);
});

sablono.core.url_field15086.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.url_field15086.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field15086);

/**
 * Creates a week input field.
 */
sablono.core.week_field15090 = (function sablono$core$week_field15090(var_args){
var args15091 = [];
var len__6044__auto___15158 = arguments.length;
var i__6045__auto___15159 = (0);
while(true){
if((i__6045__auto___15159 < len__6044__auto___15158)){
args15091.push((arguments[i__6045__auto___15159]));

var G__15160 = (i__6045__auto___15159 + (1));
i__6045__auto___15159 = G__15160;
continue;
} else {
}
break;
}

var G__15093 = args15091.length;
switch (G__15093) {
case 1:
return sablono.core.week_field15090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15091.length)].join('')));

}
});

sablono.core.week_field15090.cljs$core$IFn$_invoke$arity$1 = (function (name__14947__auto__){
return sablono.core.week_field15090.call(null,name__14947__auto__,null);
});

sablono.core.week_field15090.cljs$core$IFn$_invoke$arity$2 = (function (name__14947__auto__,value__14948__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14947__auto__,value__14948__auto__);
});

sablono.core.week_field15090.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field15090);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15162 = (function sablono$core$check_box15162(var_args){
var args15163 = [];
var len__6044__auto___15166 = arguments.length;
var i__6045__auto___15167 = (0);
while(true){
if((i__6045__auto___15167 < len__6044__auto___15166)){
args15163.push((arguments[i__6045__auto___15167]));

var G__15168 = (i__6045__auto___15167 + (1));
i__6045__auto___15167 = G__15168;
continue;
} else {
}
break;
}

var G__15165 = args15163.length;
switch (G__15165) {
case 1:
return sablono.core.check_box15162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15162.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15163.length)].join('')));

}
});

sablono.core.check_box15162.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box15162.call(null,name,null);
});

sablono.core.check_box15162.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box15162.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box15162.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box15162.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15162);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15170 = (function sablono$core$radio_button15170(var_args){
var args15171 = [];
var len__6044__auto___15174 = arguments.length;
var i__6045__auto___15175 = (0);
while(true){
if((i__6045__auto___15175 < len__6044__auto___15174)){
args15171.push((arguments[i__6045__auto___15175]));

var G__15176 = (i__6045__auto___15175 + (1));
i__6045__auto___15175 = G__15176;
continue;
} else {
}
break;
}

var G__15173 = args15171.length;
switch (G__15173) {
case 1:
return sablono.core.radio_button15170.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15170.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15170.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15171.length)].join('')));

}
});

sablono.core.radio_button15170.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button15170.call(null,group,null);
});

sablono.core.radio_button15170.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button15170.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button15170.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button15170.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15170);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15178 = (function sablono$core$select_options15178(coll){
var iter__5758__auto__ = (function sablono$core$select_options15178_$_iter__15187(s__15188){
return (new cljs.core.LazySeq(null,(function (){
var s__15188__$1 = s__15188;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15188__$1);
if(temp__4425__auto__){
var s__15188__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15188__$2)){
var c__5756__auto__ = cljs.core.chunk_first.call(null,s__15188__$2);
var size__5757__auto__ = cljs.core.count.call(null,c__5756__auto__);
var b__15190 = cljs.core.chunk_buffer.call(null,size__5757__auto__);
if((function (){var i__15189 = (0);
while(true){
if((i__15189 < size__5757__auto__)){
var x = cljs.core._nth.call(null,c__5756__auto__,i__15189);
cljs.core.chunk_append.call(null,b__15190,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15193 = x;
var text = cljs.core.nth.call(null,vec__15193,(0),null);
var val = cljs.core.nth.call(null,vec__15193,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15193,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options15178.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15195 = (i__15189 + (1));
i__15189 = G__15195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15190),sablono$core$select_options15178_$_iter__15187.call(null,cljs.core.chunk_rest.call(null,s__15188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15190),null);
}
} else {
var x = cljs.core.first.call(null,s__15188__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15194 = x;
var text = cljs.core.nth.call(null,vec__15194,(0),null);
var val = cljs.core.nth.call(null,vec__15194,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15194,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options15178.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15178_$_iter__15187.call(null,cljs.core.rest.call(null,s__15188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15178);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15196 = (function sablono$core$drop_down15196(var_args){
var args15197 = [];
var len__6044__auto___15200 = arguments.length;
var i__6045__auto___15201 = (0);
while(true){
if((i__6045__auto___15201 < len__6044__auto___15200)){
args15197.push((arguments[i__6045__auto___15201]));

var G__15202 = (i__6045__auto___15201 + (1));
i__6045__auto___15201 = G__15202;
continue;
} else {
}
break;
}

var G__15199 = args15197.length;
switch (G__15199) {
case 2:
return sablono.core.drop_down15196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15196.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15197.length)].join('')));

}
});

sablono.core.drop_down15196.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15196.call(null,name,options,null);
});

sablono.core.drop_down15196.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down15196.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15196);
/**
 * Creates a text area element.
 */
sablono.core.text_area15204 = (function sablono$core$text_area15204(var_args){
var args15205 = [];
var len__6044__auto___15208 = arguments.length;
var i__6045__auto___15209 = (0);
while(true){
if((i__6045__auto___15209 < len__6044__auto___15208)){
args15205.push((arguments[i__6045__auto___15209]));

var G__15210 = (i__6045__auto___15209 + (1));
i__6045__auto___15209 = G__15210;
continue;
} else {
}
break;
}

var G__15207 = args15205.length;
switch (G__15207) {
case 1:
return sablono.core.text_area15204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15205.length)].join('')));

}
});

sablono.core.text_area15204.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area15204.call(null,name,null);
});

sablono.core.text_area15204.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area15204.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15204);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15212 = (function sablono$core$label15212(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15212);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15213 = (function sablono$core$submit_button15213(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15213);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15214 = (function sablono$core$reset_button15214(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15214);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15215 = (function sablono$core$form_to15215(var_args){
var args__6051__auto__ = [];
var len__6044__auto___15220 = arguments.length;
var i__6045__auto___15221 = (0);
while(true){
if((i__6045__auto___15221 < len__6044__auto___15220)){
args__6051__auto__.push((arguments[i__6045__auto___15221]));

var G__15222 = (i__6045__auto___15221 + (1));
i__6045__auto___15221 = G__15222;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return sablono.core.form_to15215.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

sablono.core.form_to15215.cljs$core$IFn$_invoke$arity$variadic = (function (p__15218,body){
var vec__15219 = p__15218;
var method = cljs.core.nth.call(null,vec__15219,(0),null);
var action = cljs.core.nth.call(null,vec__15219,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to15215.cljs$lang$maxFixedArity = (1);

sablono.core.form_to15215.cljs$lang$applyTo = (function (seq15216){
var G__15217 = cljs.core.first.call(null,seq15216);
var seq15216__$1 = cljs.core.next.call(null,seq15216);
return sablono.core.form_to15215.cljs$core$IFn$_invoke$arity$variadic(G__15217,seq15216__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15215);

//# sourceMappingURL=core.js.map