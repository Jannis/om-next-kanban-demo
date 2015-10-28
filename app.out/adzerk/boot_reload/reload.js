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
return (function (p1__8658_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8658_SHARP_),path);
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
var seq__8663 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8664 = null;
var count__8665 = (0);
var i__8666 = (0);
while(true){
if((i__8666 < count__8665)){
var s = cljs.core._nth.call(null,chunk__8664,i__8666);
var temp__4425__auto___8667 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8667)){
var sheet_8668 = temp__4425__auto___8667;
var temp__4425__auto___8669__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8668.href,changed);
if(cljs.core.truth_(temp__4425__auto___8669__$1)){
var href_uri_8670 = temp__4425__auto___8669__$1;
sheet_8668.ownerNode.href = href_uri_8670.makeUnique().toString();
} else {
}
} else {
}

var G__8671 = seq__8663;
var G__8672 = chunk__8664;
var G__8673 = count__8665;
var G__8674 = (i__8666 + (1));
seq__8663 = G__8671;
chunk__8664 = G__8672;
count__8665 = G__8673;
i__8666 = G__8674;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8663);
if(temp__4425__auto__){
var seq__8663__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8663__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8663__$1);
var G__8675 = cljs.core.chunk_rest.call(null,seq__8663__$1);
var G__8676 = c__5897__auto__;
var G__8677 = cljs.core.count.call(null,c__5897__auto__);
var G__8678 = (0);
seq__8663 = G__8675;
chunk__8664 = G__8676;
count__8665 = G__8677;
i__8666 = G__8678;
continue;
} else {
var s = cljs.core.first.call(null,seq__8663__$1);
var temp__4425__auto___8679__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8679__$1)){
var sheet_8680 = temp__4425__auto___8679__$1;
var temp__4425__auto___8681__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8680.href,changed);
if(cljs.core.truth_(temp__4425__auto___8681__$2)){
var href_uri_8682 = temp__4425__auto___8681__$2;
sheet_8680.ownerNode.href = href_uri_8682.makeUnique().toString();
} else {
}
} else {
}

var G__8683 = cljs.core.next.call(null,seq__8663__$1);
var G__8684 = null;
var G__8685 = (0);
var G__8686 = (0);
seq__8663 = G__8683;
chunk__8664 = G__8684;
count__8665 = G__8685;
i__8666 = G__8686;
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
var seq__8691 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8692 = null;
var count__8693 = (0);
var i__8694 = (0);
while(true){
if((i__8694 < count__8693)){
var s = cljs.core._nth.call(null,chunk__8692,i__8694);
var temp__4425__auto___8695 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8695)){
var image_8696 = temp__4425__auto___8695;
var temp__4425__auto___8697__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8696.src,changed);
if(cljs.core.truth_(temp__4425__auto___8697__$1)){
var href_uri_8698 = temp__4425__auto___8697__$1;
image_8696.src = href_uri_8698.makeUnique().toString();
} else {
}
} else {
}

var G__8699 = seq__8691;
var G__8700 = chunk__8692;
var G__8701 = count__8693;
var G__8702 = (i__8694 + (1));
seq__8691 = G__8699;
chunk__8692 = G__8700;
count__8693 = G__8701;
i__8694 = G__8702;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8691);
if(temp__4425__auto__){
var seq__8691__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8691__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8691__$1);
var G__8703 = cljs.core.chunk_rest.call(null,seq__8691__$1);
var G__8704 = c__5897__auto__;
var G__8705 = cljs.core.count.call(null,c__5897__auto__);
var G__8706 = (0);
seq__8691 = G__8703;
chunk__8692 = G__8704;
count__8693 = G__8705;
i__8694 = G__8706;
continue;
} else {
var s = cljs.core.first.call(null,seq__8691__$1);
var temp__4425__auto___8707__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8707__$1)){
var image_8708 = temp__4425__auto___8707__$1;
var temp__4425__auto___8709__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8708.src,changed);
if(cljs.core.truth_(temp__4425__auto___8709__$2)){
var href_uri_8710 = temp__4425__auto___8709__$2;
image_8708.src = href_uri_8710.makeUnique().toString();
} else {
}
} else {
}

var G__8711 = cljs.core.next.call(null,seq__8691__$1);
var G__8712 = null;
var G__8713 = (0);
var G__8714 = (0);
seq__8691 = G__8711;
chunk__8692 = G__8712;
count__8693 = G__8713;
i__8694 = G__8714;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8717){
var map__8720 = p__8717;
var map__8720__$1 = ((((!((map__8720 == null)))?((((map__8720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8720):map__8720);
var on_jsload = cljs.core.get.call(null,map__8720__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8720,map__8720__$1,on_jsload){
return (function (p1__8715_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8715_SHARP_,".js");
});})(map__8720,map__8720__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8720,map__8720__$1,on_jsload){
return (function (p1__8716_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8716_SHARP_).makeUnique());
});})(js_files,map__8720,map__8720__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8720,map__8720__$1,on_jsload){
return (function() { 
var G__8722__delegate = function (_){
return on_jsload.call(null);
};
var G__8722 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8723__i = 0, G__8723__a = new Array(arguments.length -  0);
while (G__8723__i < G__8723__a.length) {G__8723__a[G__8723__i] = arguments[G__8723__i + 0]; ++G__8723__i;}
  _ = new cljs.core.IndexedSeq(G__8723__a,0);
} 
return G__8722__delegate.call(this,_);};
G__8722.cljs$lang$maxFixedArity = 0;
G__8722.cljs$lang$applyTo = (function (arglist__8724){
var _ = cljs.core.seq(arglist__8724);
return G__8722__delegate(_);
});
G__8722.cljs$core$IFn$_invoke$arity$variadic = G__8722__delegate;
return G__8722;
})()
;})(js_files,map__8720,map__8720__$1,on_jsload))
,((function (js_files,map__8720,map__8720__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8720,map__8720__$1,on_jsload))
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

var seq__8729_8733 = cljs.core.seq.call(null,things_to_log);
var chunk__8730_8734 = null;
var count__8731_8735 = (0);
var i__8732_8736 = (0);
while(true){
if((i__8732_8736 < count__8731_8735)){
var t_8737 = cljs.core._nth.call(null,chunk__8730_8734,i__8732_8736);
console.log(t_8737);

var G__8738 = seq__8729_8733;
var G__8739 = chunk__8730_8734;
var G__8740 = count__8731_8735;
var G__8741 = (i__8732_8736 + (1));
seq__8729_8733 = G__8738;
chunk__8730_8734 = G__8739;
count__8731_8735 = G__8740;
i__8732_8736 = G__8741;
continue;
} else {
var temp__4425__auto___8742 = cljs.core.seq.call(null,seq__8729_8733);
if(temp__4425__auto___8742){
var seq__8729_8743__$1 = temp__4425__auto___8742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8729_8743__$1)){
var c__5897__auto___8744 = cljs.core.chunk_first.call(null,seq__8729_8743__$1);
var G__8745 = cljs.core.chunk_rest.call(null,seq__8729_8743__$1);
var G__8746 = c__5897__auto___8744;
var G__8747 = cljs.core.count.call(null,c__5897__auto___8744);
var G__8748 = (0);
seq__8729_8733 = G__8745;
chunk__8730_8734 = G__8746;
count__8731_8735 = G__8747;
i__8732_8736 = G__8748;
continue;
} else {
var t_8749 = cljs.core.first.call(null,seq__8729_8743__$1);
console.log(t_8749);

var G__8750 = cljs.core.next.call(null,seq__8729_8743__$1);
var G__8751 = null;
var G__8752 = (0);
var G__8753 = (0);
seq__8729_8733 = G__8750;
chunk__8730_8734 = G__8751;
count__8731_8735 = G__8752;
i__8732_8736 = G__8753;
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

var G__8755 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8755,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8755);

adzerk.boot_reload.reload.reload_css.call(null,G__8755);

adzerk.boot_reload.reload.reload_img.call(null,G__8755);

return G__8755;
});

//# sourceMappingURL=reload.js.map