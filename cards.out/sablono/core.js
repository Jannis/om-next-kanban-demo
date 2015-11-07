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
var G__14464__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14463 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__14463,(0),null);
var body = cljs.core.nthnext.call(null,vec__14463,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14465__i = 0, G__14465__a = new Array(arguments.length -  0);
while (G__14465__i < G__14465__a.length) {G__14465__a[G__14465__i] = arguments[G__14465__i + 0]; ++G__14465__i;}
  args = new cljs.core.IndexedSeq(G__14465__a,0);
} 
return G__14464__delegate.call(this,args);};
G__14464.cljs$lang$maxFixedArity = 0;
G__14464.cljs$lang$applyTo = (function (arglist__14466){
var args = cljs.core.seq(arglist__14466);
return G__14464__delegate(args);
});
G__14464.cljs$core$IFn$_invoke$arity$variadic = G__14464__delegate;
return G__14464;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5940__auto__ = (function sablono$core$update_arglists_$_iter__14471(s__14472){
return (new cljs.core.LazySeq(null,(function (){
var s__14472__$1 = s__14472;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14472__$1);
if(temp__4425__auto__){
var s__14472__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14472__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__14472__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__14474 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__14473 = (0);
while(true){
if((i__14473 < size__5939__auto__)){
var args = cljs.core._nth.call(null,c__5938__auto__,i__14473);
cljs.core.chunk_append.call(null,b__14474,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14475 = (i__14473 + (1));
i__14473 = G__14475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14474),sablono$core$update_arglists_$_iter__14471.call(null,cljs.core.chunk_rest.call(null,s__14472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14474),null);
}
} else {
var args = cljs.core.first.call(null,s__14472__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14471.call(null,cljs.core.rest.call(null,s__14472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__.call(null,arglists);
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
var args__6233__auto__ = [];
var len__6226__auto___14481 = arguments.length;
var i__6227__auto___14482 = (0);
while(true){
if((i__6227__auto___14482 < len__6226__auto___14481)){
args__6233__auto__.push((arguments[i__6227__auto___14482]));

var G__14483 = (i__6227__auto___14482 + (1));
i__6227__auto___14482 = G__14483;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5940__auto__ = (function sablono$core$iter__14477(s__14478){
return (new cljs.core.LazySeq(null,(function (){
var s__14478__$1 = s__14478;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14478__$1);
if(temp__4425__auto__){
var s__14478__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14478__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__14478__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__14480 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__14479 = (0);
while(true){
if((i__14479 < size__5939__auto__)){
var style = cljs.core._nth.call(null,c__5938__auto__,i__14479);
cljs.core.chunk_append.call(null,b__14480,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14484 = (i__14479 + (1));
i__14479 = G__14484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14480),sablono$core$iter__14477.call(null,cljs.core.chunk_rest.call(null,s__14478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14480),null);
}
} else {
var style = cljs.core.first.call(null,s__14478__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14477.call(null,cljs.core.rest.call(null,s__14478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14476){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14476));
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
sablono.core.link_to14485 = (function sablono$core$link_to14485(var_args){
var args__6233__auto__ = [];
var len__6226__auto___14488 = arguments.length;
var i__6227__auto___14489 = (0);
while(true){
if((i__6227__auto___14489 < len__6226__auto___14488)){
args__6233__auto__.push((arguments[i__6227__auto___14489]));

var G__14490 = (i__6227__auto___14489 + (1));
i__6227__auto___14489 = G__14490;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.link_to14485.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.link_to14485.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14485.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14485.cljs$lang$applyTo = (function (seq14486){
var G__14487 = cljs.core.first.call(null,seq14486);
var seq14486__$1 = cljs.core.next.call(null,seq14486);
return sablono.core.link_to14485.cljs$core$IFn$_invoke$arity$variadic(G__14487,seq14486__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14485);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14491 = (function sablono$core$mail_to14491(var_args){
var args__6233__auto__ = [];
var len__6226__auto___14496 = arguments.length;
var i__6227__auto___14497 = (0);
while(true){
if((i__6227__auto___14497 < len__6226__auto___14496)){
args__6233__auto__.push((arguments[i__6227__auto___14497]));

var G__14498 = (i__6227__auto___14497 + (1));
i__6227__auto___14497 = G__14498;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.mail_to14491.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.mail_to14491.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14494){
var vec__14495 = p__14494;
var content = cljs.core.nth.call(null,vec__14495,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5168__auto__ = content;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14491.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14491.cljs$lang$applyTo = (function (seq14492){
var G__14493 = cljs.core.first.call(null,seq14492);
var seq14492__$1 = cljs.core.next.call(null,seq14492);
return sablono.core.mail_to14491.cljs$core$IFn$_invoke$arity$variadic(G__14493,seq14492__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14491);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14499 = (function sablono$core$unordered_list14499(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5940__auto__ = (function sablono$core$unordered_list14499_$_iter__14504(s__14505){
return (new cljs.core.LazySeq(null,(function (){
var s__14505__$1 = s__14505;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14505__$1);
if(temp__4425__auto__){
var s__14505__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14505__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__14505__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__14507 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__14506 = (0);
while(true){
if((i__14506 < size__5939__auto__)){
var x = cljs.core._nth.call(null,c__5938__auto__,i__14506);
cljs.core.chunk_append.call(null,b__14507,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14508 = (i__14506 + (1));
i__14506 = G__14508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14507),sablono$core$unordered_list14499_$_iter__14504.call(null,cljs.core.chunk_rest.call(null,s__14505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14507),null);
}
} else {
var x = cljs.core.first.call(null,s__14505__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14499_$_iter__14504.call(null,cljs.core.rest.call(null,s__14505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14499);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14509 = (function sablono$core$ordered_list14509(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5940__auto__ = (function sablono$core$ordered_list14509_$_iter__14514(s__14515){
return (new cljs.core.LazySeq(null,(function (){
var s__14515__$1 = s__14515;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14515__$1);
if(temp__4425__auto__){
var s__14515__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14515__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__14515__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__14517 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__14516 = (0);
while(true){
if((i__14516 < size__5939__auto__)){
var x = cljs.core._nth.call(null,c__5938__auto__,i__14516);
cljs.core.chunk_append.call(null,b__14517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14518 = (i__14516 + (1));
i__14516 = G__14518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14517),sablono$core$ordered_list14509_$_iter__14514.call(null,cljs.core.chunk_rest.call(null,s__14515__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14517),null);
}
} else {
var x = cljs.core.first.call(null,s__14515__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14509_$_iter__14514.call(null,cljs.core.rest.call(null,s__14515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14509);
/**
 * Create an image element.
 */
sablono.core.image14519 = (function sablono$core$image14519(var_args){
var args14520 = [];
var len__6226__auto___14523 = arguments.length;
var i__6227__auto___14524 = (0);
while(true){
if((i__6227__auto___14524 < len__6226__auto___14523)){
args14520.push((arguments[i__6227__auto___14524]));

var G__14525 = (i__6227__auto___14524 + (1));
i__6227__auto___14524 = G__14525;
continue;
} else {
}
break;
}

var G__14522 = args14520.length;
switch (G__14522) {
case 1:
return sablono.core.image14519.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14519.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14520.length)].join('')));

}
});

sablono.core.image14519.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image14519.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image14519.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14519);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14527_SHARP_,p2__14528_SHARP_){
return [cljs.core.str(p1__14527_SHARP_),cljs.core.str("["),cljs.core.str(p2__14528_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14529_SHARP_,p2__14530_SHARP_){
return [cljs.core.str(p1__14529_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14530_SHARP_)].join('');
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
sablono.core.color_field14531 = (function sablono$core$color_field14531(var_args){
var args14532 = [];
var len__6226__auto___14599 = arguments.length;
var i__6227__auto___14600 = (0);
while(true){
if((i__6227__auto___14600 < len__6226__auto___14599)){
args14532.push((arguments[i__6227__auto___14600]));

var G__14601 = (i__6227__auto___14600 + (1));
i__6227__auto___14600 = G__14601;
continue;
} else {
}
break;
}

var G__14534 = args14532.length;
switch (G__14534) {
case 1:
return sablono.core.color_field14531.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14531.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14532.length)].join('')));

}
});

sablono.core.color_field14531.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.color_field14531.call(null,name__14452__auto__,null);
});

sablono.core.color_field14531.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.color_field14531.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14531);

/**
 * Creates a date input field.
 */
sablono.core.date_field14535 = (function sablono$core$date_field14535(var_args){
var args14536 = [];
var len__6226__auto___14603 = arguments.length;
var i__6227__auto___14604 = (0);
while(true){
if((i__6227__auto___14604 < len__6226__auto___14603)){
args14536.push((arguments[i__6227__auto___14604]));

var G__14605 = (i__6227__auto___14604 + (1));
i__6227__auto___14604 = G__14605;
continue;
} else {
}
break;
}

var G__14538 = args14536.length;
switch (G__14538) {
case 1:
return sablono.core.date_field14535.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14535.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14536.length)].join('')));

}
});

sablono.core.date_field14535.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.date_field14535.call(null,name__14452__auto__,null);
});

sablono.core.date_field14535.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.date_field14535.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14535);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14539 = (function sablono$core$datetime_field14539(var_args){
var args14540 = [];
var len__6226__auto___14607 = arguments.length;
var i__6227__auto___14608 = (0);
while(true){
if((i__6227__auto___14608 < len__6226__auto___14607)){
args14540.push((arguments[i__6227__auto___14608]));

var G__14609 = (i__6227__auto___14608 + (1));
i__6227__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var G__14542 = args14540.length;
switch (G__14542) {
case 1:
return sablono.core.datetime_field14539.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14539.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14540.length)].join('')));

}
});

sablono.core.datetime_field14539.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.datetime_field14539.call(null,name__14452__auto__,null);
});

sablono.core.datetime_field14539.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.datetime_field14539.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14539);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14543 = (function sablono$core$datetime_local_field14543(var_args){
var args14544 = [];
var len__6226__auto___14611 = arguments.length;
var i__6227__auto___14612 = (0);
while(true){
if((i__6227__auto___14612 < len__6226__auto___14611)){
args14544.push((arguments[i__6227__auto___14612]));

var G__14613 = (i__6227__auto___14612 + (1));
i__6227__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var G__14546 = args14544.length;
switch (G__14546) {
case 1:
return sablono.core.datetime_local_field14543.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14543.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14544.length)].join('')));

}
});

sablono.core.datetime_local_field14543.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.datetime_local_field14543.call(null,name__14452__auto__,null);
});

sablono.core.datetime_local_field14543.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.datetime_local_field14543.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14543);

/**
 * Creates a email input field.
 */
sablono.core.email_field14547 = (function sablono$core$email_field14547(var_args){
var args14548 = [];
var len__6226__auto___14615 = arguments.length;
var i__6227__auto___14616 = (0);
while(true){
if((i__6227__auto___14616 < len__6226__auto___14615)){
args14548.push((arguments[i__6227__auto___14616]));

var G__14617 = (i__6227__auto___14616 + (1));
i__6227__auto___14616 = G__14617;
continue;
} else {
}
break;
}

var G__14550 = args14548.length;
switch (G__14550) {
case 1:
return sablono.core.email_field14547.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14547.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14548.length)].join('')));

}
});

sablono.core.email_field14547.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.email_field14547.call(null,name__14452__auto__,null);
});

sablono.core.email_field14547.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.email_field14547.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14547);

/**
 * Creates a file input field.
 */
sablono.core.file_field14551 = (function sablono$core$file_field14551(var_args){
var args14552 = [];
var len__6226__auto___14619 = arguments.length;
var i__6227__auto___14620 = (0);
while(true){
if((i__6227__auto___14620 < len__6226__auto___14619)){
args14552.push((arguments[i__6227__auto___14620]));

var G__14621 = (i__6227__auto___14620 + (1));
i__6227__auto___14620 = G__14621;
continue;
} else {
}
break;
}

var G__14554 = args14552.length;
switch (G__14554) {
case 1:
return sablono.core.file_field14551.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14551.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14552.length)].join('')));

}
});

sablono.core.file_field14551.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.file_field14551.call(null,name__14452__auto__,null);
});

sablono.core.file_field14551.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.file_field14551.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14551);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14555 = (function sablono$core$hidden_field14555(var_args){
var args14556 = [];
var len__6226__auto___14623 = arguments.length;
var i__6227__auto___14624 = (0);
while(true){
if((i__6227__auto___14624 < len__6226__auto___14623)){
args14556.push((arguments[i__6227__auto___14624]));

var G__14625 = (i__6227__auto___14624 + (1));
i__6227__auto___14624 = G__14625;
continue;
} else {
}
break;
}

var G__14558 = args14556.length;
switch (G__14558) {
case 1:
return sablono.core.hidden_field14555.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14555.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14556.length)].join('')));

}
});

sablono.core.hidden_field14555.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.hidden_field14555.call(null,name__14452__auto__,null);
});

sablono.core.hidden_field14555.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.hidden_field14555.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14555);

/**
 * Creates a month input field.
 */
sablono.core.month_field14559 = (function sablono$core$month_field14559(var_args){
var args14560 = [];
var len__6226__auto___14627 = arguments.length;
var i__6227__auto___14628 = (0);
while(true){
if((i__6227__auto___14628 < len__6226__auto___14627)){
args14560.push((arguments[i__6227__auto___14628]));

var G__14629 = (i__6227__auto___14628 + (1));
i__6227__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var G__14562 = args14560.length;
switch (G__14562) {
case 1:
return sablono.core.month_field14559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14560.length)].join('')));

}
});

sablono.core.month_field14559.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.month_field14559.call(null,name__14452__auto__,null);
});

sablono.core.month_field14559.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.month_field14559.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14559);

/**
 * Creates a number input field.
 */
sablono.core.number_field14563 = (function sablono$core$number_field14563(var_args){
var args14564 = [];
var len__6226__auto___14631 = arguments.length;
var i__6227__auto___14632 = (0);
while(true){
if((i__6227__auto___14632 < len__6226__auto___14631)){
args14564.push((arguments[i__6227__auto___14632]));

var G__14633 = (i__6227__auto___14632 + (1));
i__6227__auto___14632 = G__14633;
continue;
} else {
}
break;
}

var G__14566 = args14564.length;
switch (G__14566) {
case 1:
return sablono.core.number_field14563.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14563.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14564.length)].join('')));

}
});

sablono.core.number_field14563.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.number_field14563.call(null,name__14452__auto__,null);
});

sablono.core.number_field14563.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.number_field14563.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14563);

/**
 * Creates a password input field.
 */
sablono.core.password_field14567 = (function sablono$core$password_field14567(var_args){
var args14568 = [];
var len__6226__auto___14635 = arguments.length;
var i__6227__auto___14636 = (0);
while(true){
if((i__6227__auto___14636 < len__6226__auto___14635)){
args14568.push((arguments[i__6227__auto___14636]));

var G__14637 = (i__6227__auto___14636 + (1));
i__6227__auto___14636 = G__14637;
continue;
} else {
}
break;
}

var G__14570 = args14568.length;
switch (G__14570) {
case 1:
return sablono.core.password_field14567.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14567.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14568.length)].join('')));

}
});

sablono.core.password_field14567.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.password_field14567.call(null,name__14452__auto__,null);
});

sablono.core.password_field14567.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.password_field14567.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14567);

/**
 * Creates a range input field.
 */
sablono.core.range_field14571 = (function sablono$core$range_field14571(var_args){
var args14572 = [];
var len__6226__auto___14639 = arguments.length;
var i__6227__auto___14640 = (0);
while(true){
if((i__6227__auto___14640 < len__6226__auto___14639)){
args14572.push((arguments[i__6227__auto___14640]));

var G__14641 = (i__6227__auto___14640 + (1));
i__6227__auto___14640 = G__14641;
continue;
} else {
}
break;
}

var G__14574 = args14572.length;
switch (G__14574) {
case 1:
return sablono.core.range_field14571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14572.length)].join('')));

}
});

sablono.core.range_field14571.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.range_field14571.call(null,name__14452__auto__,null);
});

sablono.core.range_field14571.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.range_field14571.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14571);

/**
 * Creates a search input field.
 */
sablono.core.search_field14575 = (function sablono$core$search_field14575(var_args){
var args14576 = [];
var len__6226__auto___14643 = arguments.length;
var i__6227__auto___14644 = (0);
while(true){
if((i__6227__auto___14644 < len__6226__auto___14643)){
args14576.push((arguments[i__6227__auto___14644]));

var G__14645 = (i__6227__auto___14644 + (1));
i__6227__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var G__14578 = args14576.length;
switch (G__14578) {
case 1:
return sablono.core.search_field14575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14576.length)].join('')));

}
});

sablono.core.search_field14575.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.search_field14575.call(null,name__14452__auto__,null);
});

sablono.core.search_field14575.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.search_field14575.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14575);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14579 = (function sablono$core$tel_field14579(var_args){
var args14580 = [];
var len__6226__auto___14647 = arguments.length;
var i__6227__auto___14648 = (0);
while(true){
if((i__6227__auto___14648 < len__6226__auto___14647)){
args14580.push((arguments[i__6227__auto___14648]));

var G__14649 = (i__6227__auto___14648 + (1));
i__6227__auto___14648 = G__14649;
continue;
} else {
}
break;
}

var G__14582 = args14580.length;
switch (G__14582) {
case 1:
return sablono.core.tel_field14579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14580.length)].join('')));

}
});

sablono.core.tel_field14579.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.tel_field14579.call(null,name__14452__auto__,null);
});

sablono.core.tel_field14579.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.tel_field14579.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14579);

/**
 * Creates a text input field.
 */
sablono.core.text_field14583 = (function sablono$core$text_field14583(var_args){
var args14584 = [];
var len__6226__auto___14651 = arguments.length;
var i__6227__auto___14652 = (0);
while(true){
if((i__6227__auto___14652 < len__6226__auto___14651)){
args14584.push((arguments[i__6227__auto___14652]));

var G__14653 = (i__6227__auto___14652 + (1));
i__6227__auto___14652 = G__14653;
continue;
} else {
}
break;
}

var G__14586 = args14584.length;
switch (G__14586) {
case 1:
return sablono.core.text_field14583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14584.length)].join('')));

}
});

sablono.core.text_field14583.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.text_field14583.call(null,name__14452__auto__,null);
});

sablono.core.text_field14583.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.text_field14583.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14583);

/**
 * Creates a time input field.
 */
sablono.core.time_field14587 = (function sablono$core$time_field14587(var_args){
var args14588 = [];
var len__6226__auto___14655 = arguments.length;
var i__6227__auto___14656 = (0);
while(true){
if((i__6227__auto___14656 < len__6226__auto___14655)){
args14588.push((arguments[i__6227__auto___14656]));

var G__14657 = (i__6227__auto___14656 + (1));
i__6227__auto___14656 = G__14657;
continue;
} else {
}
break;
}

var G__14590 = args14588.length;
switch (G__14590) {
case 1:
return sablono.core.time_field14587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14588.length)].join('')));

}
});

sablono.core.time_field14587.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.time_field14587.call(null,name__14452__auto__,null);
});

sablono.core.time_field14587.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.time_field14587.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14587);

/**
 * Creates a url input field.
 */
sablono.core.url_field14591 = (function sablono$core$url_field14591(var_args){
var args14592 = [];
var len__6226__auto___14659 = arguments.length;
var i__6227__auto___14660 = (0);
while(true){
if((i__6227__auto___14660 < len__6226__auto___14659)){
args14592.push((arguments[i__6227__auto___14660]));

var G__14661 = (i__6227__auto___14660 + (1));
i__6227__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var G__14594 = args14592.length;
switch (G__14594) {
case 1:
return sablono.core.url_field14591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14592.length)].join('')));

}
});

sablono.core.url_field14591.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.url_field14591.call(null,name__14452__auto__,null);
});

sablono.core.url_field14591.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.url_field14591.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14591);

/**
 * Creates a week input field.
 */
sablono.core.week_field14595 = (function sablono$core$week_field14595(var_args){
var args14596 = [];
var len__6226__auto___14663 = arguments.length;
var i__6227__auto___14664 = (0);
while(true){
if((i__6227__auto___14664 < len__6226__auto___14663)){
args14596.push((arguments[i__6227__auto___14664]));

var G__14665 = (i__6227__auto___14664 + (1));
i__6227__auto___14664 = G__14665;
continue;
} else {
}
break;
}

var G__14598 = args14596.length;
switch (G__14598) {
case 1:
return sablono.core.week_field14595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14596.length)].join('')));

}
});

sablono.core.week_field14595.cljs$core$IFn$_invoke$arity$1 = (function (name__14452__auto__){
return sablono.core.week_field14595.call(null,name__14452__auto__,null);
});

sablono.core.week_field14595.cljs$core$IFn$_invoke$arity$2 = (function (name__14452__auto__,value__14453__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14452__auto__,value__14453__auto__);
});

sablono.core.week_field14595.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14595);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14667 = (function sablono$core$check_box14667(var_args){
var args14668 = [];
var len__6226__auto___14671 = arguments.length;
var i__6227__auto___14672 = (0);
while(true){
if((i__6227__auto___14672 < len__6226__auto___14671)){
args14668.push((arguments[i__6227__auto___14672]));

var G__14673 = (i__6227__auto___14672 + (1));
i__6227__auto___14672 = G__14673;
continue;
} else {
}
break;
}

var G__14670 = args14668.length;
switch (G__14670) {
case 1:
return sablono.core.check_box14667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14667.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14668.length)].join('')));

}
});

sablono.core.check_box14667.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14667.call(null,name,null);
});

sablono.core.check_box14667.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14667.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box14667.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14667.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14667);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14675 = (function sablono$core$radio_button14675(var_args){
var args14676 = [];
var len__6226__auto___14679 = arguments.length;
var i__6227__auto___14680 = (0);
while(true){
if((i__6227__auto___14680 < len__6226__auto___14679)){
args14676.push((arguments[i__6227__auto___14680]));

var G__14681 = (i__6227__auto___14680 + (1));
i__6227__auto___14680 = G__14681;
continue;
} else {
}
break;
}

var G__14678 = args14676.length;
switch (G__14678) {
case 1:
return sablono.core.radio_button14675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14675.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14676.length)].join('')));

}
});

sablono.core.radio_button14675.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14675.call(null,group,null);
});

sablono.core.radio_button14675.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14675.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button14675.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14675.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14675);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14683 = (function sablono$core$select_options14683(coll){
var iter__5940__auto__ = (function sablono$core$select_options14683_$_iter__14692(s__14693){
return (new cljs.core.LazySeq(null,(function (){
var s__14693__$1 = s__14693;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14693__$1);
if(temp__4425__auto__){
var s__14693__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14693__$2)){
var c__5938__auto__ = cljs.core.chunk_first.call(null,s__14693__$2);
var size__5939__auto__ = cljs.core.count.call(null,c__5938__auto__);
var b__14695 = cljs.core.chunk_buffer.call(null,size__5939__auto__);
if((function (){var i__14694 = (0);
while(true){
if((i__14694 < size__5939__auto__)){
var x = cljs.core._nth.call(null,c__5938__auto__,i__14694);
cljs.core.chunk_append.call(null,b__14695,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14698 = x;
var text = cljs.core.nth.call(null,vec__14698,(0),null);
var val = cljs.core.nth.call(null,vec__14698,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14698,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14683.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__14700 = (i__14694 + (1));
i__14694 = G__14700;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14695),sablono$core$select_options14683_$_iter__14692.call(null,cljs.core.chunk_rest.call(null,s__14693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14695),null);
}
} else {
var x = cljs.core.first.call(null,s__14693__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14699 = x;
var text = cljs.core.nth.call(null,vec__14699,(0),null);
var val = cljs.core.nth.call(null,vec__14699,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14699,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options14683.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options14683_$_iter__14692.call(null,cljs.core.rest.call(null,s__14693__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14683);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14701 = (function sablono$core$drop_down14701(var_args){
var args14702 = [];
var len__6226__auto___14705 = arguments.length;
var i__6227__auto___14706 = (0);
while(true){
if((i__6227__auto___14706 < len__6226__auto___14705)){
args14702.push((arguments[i__6227__auto___14706]));

var G__14707 = (i__6227__auto___14706 + (1));
i__6227__auto___14706 = G__14707;
continue;
} else {
}
break;
}

var G__14704 = args14702.length;
switch (G__14704) {
case 2:
return sablono.core.drop_down14701.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14701.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14702.length)].join('')));

}
});

sablono.core.drop_down14701.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14701.call(null,name,options,null);
});

sablono.core.drop_down14701.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14701.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14701);
/**
 * Creates a text area element.
 */
sablono.core.text_area14709 = (function sablono$core$text_area14709(var_args){
var args14710 = [];
var len__6226__auto___14713 = arguments.length;
var i__6227__auto___14714 = (0);
while(true){
if((i__6227__auto___14714 < len__6226__auto___14713)){
args14710.push((arguments[i__6227__auto___14714]));

var G__14715 = (i__6227__auto___14714 + (1));
i__6227__auto___14714 = G__14715;
continue;
} else {
}
break;
}

var G__14712 = args14710.length;
switch (G__14712) {
case 1:
return sablono.core.text_area14709.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14709.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14710.length)].join('')));

}
});

sablono.core.text_area14709.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14709.call(null,name,null);
});

sablono.core.text_area14709.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area14709.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14709);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14717 = (function sablono$core$label14717(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14717);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14718 = (function sablono$core$submit_button14718(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14718);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14719 = (function sablono$core$reset_button14719(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14719);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14720 = (function sablono$core$form_to14720(var_args){
var args__6233__auto__ = [];
var len__6226__auto___14725 = arguments.length;
var i__6227__auto___14726 = (0);
while(true){
if((i__6227__auto___14726 < len__6226__auto___14725)){
args__6233__auto__.push((arguments[i__6227__auto___14726]));

var G__14727 = (i__6227__auto___14726 + (1));
i__6227__auto___14726 = G__14727;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.form_to14720.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.form_to14720.cljs$core$IFn$_invoke$arity$variadic = (function (p__14723,body){
var vec__14724 = p__14723;
var method = cljs.core.nth.call(null,vec__14724,(0),null);
var action = cljs.core.nth.call(null,vec__14724,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to14720.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14720.cljs$lang$applyTo = (function (seq14721){
var G__14722 = cljs.core.first.call(null,seq14721);
var seq14721__$1 = cljs.core.next.call(null,seq14721);
return sablono.core.form_to14720.cljs$core$IFn$_invoke$arity$variadic(G__14722,seq14721__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14720);

//# sourceMappingURL=core.js.map