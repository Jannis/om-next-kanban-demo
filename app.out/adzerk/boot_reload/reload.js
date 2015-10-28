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
return (function (p1__8650_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8650_SHARP_),path);
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
var seq__8655 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8656 = null;
var count__8657 = (0);
var i__8658 = (0);
while(true){
if((i__8658 < count__8657)){
var s = cljs.core._nth.call(null,chunk__8656,i__8658);
var temp__4425__auto___8659 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8659)){
var sheet_8660 = temp__4425__auto___8659;
var temp__4425__auto___8661__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8660.href,changed);
if(cljs.core.truth_(temp__4425__auto___8661__$1)){
var href_uri_8662 = temp__4425__auto___8661__$1;
sheet_8660.ownerNode.href = href_uri_8662.makeUnique().toString();
} else {
}
} else {
}

var G__8663 = seq__8655;
var G__8664 = chunk__8656;
var G__8665 = count__8657;
var G__8666 = (i__8658 + (1));
seq__8655 = G__8663;
chunk__8656 = G__8664;
count__8657 = G__8665;
i__8658 = G__8666;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8655);
if(temp__4425__auto__){
var seq__8655__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8655__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8655__$1);
var G__8667 = cljs.core.chunk_rest.call(null,seq__8655__$1);
var G__8668 = c__5897__auto__;
var G__8669 = cljs.core.count.call(null,c__5897__auto__);
var G__8670 = (0);
seq__8655 = G__8667;
chunk__8656 = G__8668;
count__8657 = G__8669;
i__8658 = G__8670;
continue;
} else {
var s = cljs.core.first.call(null,seq__8655__$1);
var temp__4425__auto___8671__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8671__$1)){
var sheet_8672 = temp__4425__auto___8671__$1;
var temp__4425__auto___8673__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8672.href,changed);
if(cljs.core.truth_(temp__4425__auto___8673__$2)){
var href_uri_8674 = temp__4425__auto___8673__$2;
sheet_8672.ownerNode.href = href_uri_8674.makeUnique().toString();
} else {
}
} else {
}

var G__8675 = cljs.core.next.call(null,seq__8655__$1);
var G__8676 = null;
var G__8677 = (0);
var G__8678 = (0);
seq__8655 = G__8675;
chunk__8656 = G__8676;
count__8657 = G__8677;
i__8658 = G__8678;
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
var seq__8683 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8684 = null;
var count__8685 = (0);
var i__8686 = (0);
while(true){
if((i__8686 < count__8685)){
var s = cljs.core._nth.call(null,chunk__8684,i__8686);
var temp__4425__auto___8687 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8687)){
var image_8688 = temp__4425__auto___8687;
var temp__4425__auto___8689__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8688.src,changed);
if(cljs.core.truth_(temp__4425__auto___8689__$1)){
var href_uri_8690 = temp__4425__auto___8689__$1;
image_8688.src = href_uri_8690.makeUnique().toString();
} else {
}
} else {
}

var G__8691 = seq__8683;
var G__8692 = chunk__8684;
var G__8693 = count__8685;
var G__8694 = (i__8686 + (1));
seq__8683 = G__8691;
chunk__8684 = G__8692;
count__8685 = G__8693;
i__8686 = G__8694;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8683);
if(temp__4425__auto__){
var seq__8683__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8683__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8683__$1);
var G__8695 = cljs.core.chunk_rest.call(null,seq__8683__$1);
var G__8696 = c__5897__auto__;
var G__8697 = cljs.core.count.call(null,c__5897__auto__);
var G__8698 = (0);
seq__8683 = G__8695;
chunk__8684 = G__8696;
count__8685 = G__8697;
i__8686 = G__8698;
continue;
} else {
var s = cljs.core.first.call(null,seq__8683__$1);
var temp__4425__auto___8699__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8699__$1)){
var image_8700 = temp__4425__auto___8699__$1;
var temp__4425__auto___8701__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8700.src,changed);
if(cljs.core.truth_(temp__4425__auto___8701__$2)){
var href_uri_8702 = temp__4425__auto___8701__$2;
image_8700.src = href_uri_8702.makeUnique().toString();
} else {
}
} else {
}

var G__8703 = cljs.core.next.call(null,seq__8683__$1);
var G__8704 = null;
var G__8705 = (0);
var G__8706 = (0);
seq__8683 = G__8703;
chunk__8684 = G__8704;
count__8685 = G__8705;
i__8686 = G__8706;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8709){
var map__8712 = p__8709;
var map__8712__$1 = ((((!((map__8712 == null)))?((((map__8712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8712):map__8712);
var on_jsload = cljs.core.get.call(null,map__8712__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8712,map__8712__$1,on_jsload){
return (function (p1__8707_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8707_SHARP_,".js");
});})(map__8712,map__8712__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8712,map__8712__$1,on_jsload){
return (function (p1__8708_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8708_SHARP_).makeUnique());
});})(js_files,map__8712,map__8712__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8712,map__8712__$1,on_jsload){
return (function() { 
var G__8714__delegate = function (_){
return on_jsload.call(null);
};
var G__8714 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8715__i = 0, G__8715__a = new Array(arguments.length -  0);
while (G__8715__i < G__8715__a.length) {G__8715__a[G__8715__i] = arguments[G__8715__i + 0]; ++G__8715__i;}
  _ = new cljs.core.IndexedSeq(G__8715__a,0);
} 
return G__8714__delegate.call(this,_);};
G__8714.cljs$lang$maxFixedArity = 0;
G__8714.cljs$lang$applyTo = (function (arglist__8716){
var _ = cljs.core.seq(arglist__8716);
return G__8714__delegate(_);
});
G__8714.cljs$core$IFn$_invoke$arity$variadic = G__8714__delegate;
return G__8714;
})()
;})(js_files,map__8712,map__8712__$1,on_jsload))
,((function (js_files,map__8712,map__8712__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8712,map__8712__$1,on_jsload))
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

var seq__8721_8725 = cljs.core.seq.call(null,things_to_log);
var chunk__8722_8726 = null;
var count__8723_8727 = (0);
var i__8724_8728 = (0);
while(true){
if((i__8724_8728 < count__8723_8727)){
var t_8729 = cljs.core._nth.call(null,chunk__8722_8726,i__8724_8728);
console.log(t_8729);

var G__8730 = seq__8721_8725;
var G__8731 = chunk__8722_8726;
var G__8732 = count__8723_8727;
var G__8733 = (i__8724_8728 + (1));
seq__8721_8725 = G__8730;
chunk__8722_8726 = G__8731;
count__8723_8727 = G__8732;
i__8724_8728 = G__8733;
continue;
} else {
var temp__4425__auto___8734 = cljs.core.seq.call(null,seq__8721_8725);
if(temp__4425__auto___8734){
var seq__8721_8735__$1 = temp__4425__auto___8734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8721_8735__$1)){
var c__5897__auto___8736 = cljs.core.chunk_first.call(null,seq__8721_8735__$1);
var G__8737 = cljs.core.chunk_rest.call(null,seq__8721_8735__$1);
var G__8738 = c__5897__auto___8736;
var G__8739 = cljs.core.count.call(null,c__5897__auto___8736);
var G__8740 = (0);
seq__8721_8725 = G__8737;
chunk__8722_8726 = G__8738;
count__8723_8727 = G__8739;
i__8724_8728 = G__8740;
continue;
} else {
var t_8741 = cljs.core.first.call(null,seq__8721_8735__$1);
console.log(t_8741);

var G__8742 = cljs.core.next.call(null,seq__8721_8735__$1);
var G__8743 = null;
var G__8744 = (0);
var G__8745 = (0);
seq__8721_8725 = G__8742;
chunk__8722_8726 = G__8743;
count__8723_8727 = G__8744;
i__8724_8728 = G__8745;
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

var G__8747 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8747,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8747);

adzerk.boot_reload.reload.reload_css.call(null,G__8747);

adzerk.boot_reload.reload.reload_img.call(null,G__8747);

return G__8747;
});

//# sourceMappingURL=reload.js.map