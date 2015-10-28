// Compiled by ClojureScript 1.7.145 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8654_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8654_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8659 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8660 = null;
var count__8661 = (0);
var i__8662 = (0);
while(true){
if((i__8662 < count__8661)){
var s = cljs.core._nth.call(null,chunk__8660,i__8662);
var temp__4425__auto___8663 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8663)){
var sheet_8664 = temp__4425__auto___8663;
var temp__4425__auto___8665__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8664.href,changed);
if(cljs.core.truth_(temp__4425__auto___8665__$1)){
var href_uri_8666 = temp__4425__auto___8665__$1;
sheet_8664.ownerNode.href = href_uri_8666.makeUnique().toString();
} else {
}
} else {
}

var G__8667 = seq__8659;
var G__8668 = chunk__8660;
var G__8669 = count__8661;
var G__8670 = (i__8662 + (1));
seq__8659 = G__8667;
chunk__8660 = G__8668;
count__8661 = G__8669;
i__8662 = G__8670;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8659);
if(temp__4425__auto__){
var seq__8659__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8659__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8659__$1);
var G__8671 = cljs.core.chunk_rest.call(null,seq__8659__$1);
var G__8672 = c__5897__auto__;
var G__8673 = cljs.core.count.call(null,c__5897__auto__);
var G__8674 = (0);
seq__8659 = G__8671;
chunk__8660 = G__8672;
count__8661 = G__8673;
i__8662 = G__8674;
continue;
} else {
var s = cljs.core.first.call(null,seq__8659__$1);
var temp__4425__auto___8675__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8675__$1)){
var sheet_8676 = temp__4425__auto___8675__$1;
var temp__4425__auto___8677__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8676.href,changed);
if(cljs.core.truth_(temp__4425__auto___8677__$2)){
var href_uri_8678 = temp__4425__auto___8677__$2;
sheet_8676.ownerNode.href = href_uri_8678.makeUnique().toString();
} else {
}
} else {
}

var G__8679 = cljs.core.next.call(null,seq__8659__$1);
var G__8680 = null;
var G__8681 = (0);
var G__8682 = (0);
seq__8659 = G__8679;
chunk__8660 = G__8680;
count__8661 = G__8681;
i__8662 = G__8682;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8687 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8688 = null;
var count__8689 = (0);
var i__8690 = (0);
while(true){
if((i__8690 < count__8689)){
var s = cljs.core._nth.call(null,chunk__8688,i__8690);
var temp__4425__auto___8691 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8691)){
var image_8692 = temp__4425__auto___8691;
var temp__4425__auto___8693__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8692.src,changed);
if(cljs.core.truth_(temp__4425__auto___8693__$1)){
var href_uri_8694 = temp__4425__auto___8693__$1;
image_8692.src = href_uri_8694.makeUnique().toString();
} else {
}
} else {
}

var G__8695 = seq__8687;
var G__8696 = chunk__8688;
var G__8697 = count__8689;
var G__8698 = (i__8690 + (1));
seq__8687 = G__8695;
chunk__8688 = G__8696;
count__8689 = G__8697;
i__8690 = G__8698;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8687);
if(temp__4425__auto__){
var seq__8687__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8687__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8687__$1);
var G__8699 = cljs.core.chunk_rest.call(null,seq__8687__$1);
var G__8700 = c__5897__auto__;
var G__8701 = cljs.core.count.call(null,c__5897__auto__);
var G__8702 = (0);
seq__8687 = G__8699;
chunk__8688 = G__8700;
count__8689 = G__8701;
i__8690 = G__8702;
continue;
} else {
var s = cljs.core.first.call(null,seq__8687__$1);
var temp__4425__auto___8703__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8703__$1)){
var image_8704 = temp__4425__auto___8703__$1;
var temp__4425__auto___8705__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8704.src,changed);
if(cljs.core.truth_(temp__4425__auto___8705__$2)){
var href_uri_8706 = temp__4425__auto___8705__$2;
image_8704.src = href_uri_8706.makeUnique().toString();
} else {
}
} else {
}

var G__8707 = cljs.core.next.call(null,seq__8687__$1);
var G__8708 = null;
var G__8709 = (0);
var G__8710 = (0);
seq__8687 = G__8707;
chunk__8688 = G__8708;
count__8689 = G__8709;
i__8690 = G__8710;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8713){
var map__8716 = p__8713;
var map__8716__$1 = ((((!((map__8716 == null)))?((((map__8716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);
var on_jsload = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8716,map__8716__$1,on_jsload){
return (function (p1__8711_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8711_SHARP_,".js");
});})(map__8716,map__8716__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8716,map__8716__$1,on_jsload){
return (function (p1__8712_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8712_SHARP_).makeUnique());
});})(js_files,map__8716,map__8716__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8716,map__8716__$1,on_jsload){
return (function() { 
var G__8718__delegate = function (_){
return on_jsload.call(null);
};
var G__8718 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8719__i = 0, G__8719__a = new Array(arguments.length -  0);
while (G__8719__i < G__8719__a.length) {G__8719__a[G__8719__i] = arguments[G__8719__i + 0]; ++G__8719__i;}
  _ = new cljs.core.IndexedSeq(G__8719__a,0);
} 
return G__8718__delegate.call(this,_);};
G__8718.cljs$lang$maxFixedArity = 0;
G__8718.cljs$lang$applyTo = (function (arglist__8720){
var _ = cljs.core.seq(arglist__8720);
return G__8718__delegate(_);
});
G__8718.cljs$core$IFn$_invoke$arity$variadic = G__8718__delegate;
return G__8718;
})()
;})(js_files,map__8716,map__8716__$1,on_jsload))
,((function (js_files,map__8716,map__8716__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8716,map__8716__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8725_8729 = cljs.core.seq.call(null,things_to_log);
var chunk__8726_8730 = null;
var count__8727_8731 = (0);
var i__8728_8732 = (0);
while(true){
if((i__8728_8732 < count__8727_8731)){
var t_8733 = cljs.core._nth.call(null,chunk__8726_8730,i__8728_8732);
console.log(t_8733);

var G__8734 = seq__8725_8729;
var G__8735 = chunk__8726_8730;
var G__8736 = count__8727_8731;
var G__8737 = (i__8728_8732 + (1));
seq__8725_8729 = G__8734;
chunk__8726_8730 = G__8735;
count__8727_8731 = G__8736;
i__8728_8732 = G__8737;
continue;
} else {
var temp__4425__auto___8738 = cljs.core.seq.call(null,seq__8725_8729);
if(temp__4425__auto___8738){
var seq__8725_8739__$1 = temp__4425__auto___8738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8725_8739__$1)){
var c__5897__auto___8740 = cljs.core.chunk_first.call(null,seq__8725_8739__$1);
var G__8741 = cljs.core.chunk_rest.call(null,seq__8725_8739__$1);
var G__8742 = c__5897__auto___8740;
var G__8743 = cljs.core.count.call(null,c__5897__auto___8740);
var G__8744 = (0);
seq__8725_8729 = G__8741;
chunk__8726_8730 = G__8742;
count__8727_8731 = G__8743;
i__8728_8732 = G__8744;
continue;
} else {
var t_8745 = cljs.core.first.call(null,seq__8725_8739__$1);
console.log(t_8745);

var G__8746 = cljs.core.next.call(null,seq__8725_8739__$1);
var G__8747 = null;
var G__8748 = (0);
var G__8749 = (0);
seq__8725_8729 = G__8746;
chunk__8726_8730 = G__8747;
count__8727_8731 = G__8748;
i__8728_8732 = G__8749;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__8751 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8751,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8751);

adzerk.boot_reload.reload.reload_css.call(null,G__8751);

adzerk.boot_reload.reload.reload_img.call(null,G__8751);

return G__8751;
});

//# sourceMappingURL=reload.js.map