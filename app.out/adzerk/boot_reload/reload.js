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
return (function (p1__8669_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8669_SHARP_),path);
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
var seq__8674 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8675 = null;
var count__8676 = (0);
var i__8677 = (0);
while(true){
if((i__8677 < count__8676)){
var s = cljs.core._nth.call(null,chunk__8675,i__8677);
var temp__4425__auto___8678 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8678)){
var sheet_8679 = temp__4425__auto___8678;
var temp__4425__auto___8680__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8679.href,changed);
if(cljs.core.truth_(temp__4425__auto___8680__$1)){
var href_uri_8681 = temp__4425__auto___8680__$1;
sheet_8679.ownerNode.href = href_uri_8681.makeUnique().toString();
} else {
}
} else {
}

var G__8682 = seq__8674;
var G__8683 = chunk__8675;
var G__8684 = count__8676;
var G__8685 = (i__8677 + (1));
seq__8674 = G__8682;
chunk__8675 = G__8683;
count__8676 = G__8684;
i__8677 = G__8685;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8674);
if(temp__4425__auto__){
var seq__8674__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8674__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8674__$1);
var G__8686 = cljs.core.chunk_rest.call(null,seq__8674__$1);
var G__8687 = c__5897__auto__;
var G__8688 = cljs.core.count.call(null,c__5897__auto__);
var G__8689 = (0);
seq__8674 = G__8686;
chunk__8675 = G__8687;
count__8676 = G__8688;
i__8677 = G__8689;
continue;
} else {
var s = cljs.core.first.call(null,seq__8674__$1);
var temp__4425__auto___8690__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8690__$1)){
var sheet_8691 = temp__4425__auto___8690__$1;
var temp__4425__auto___8692__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8691.href,changed);
if(cljs.core.truth_(temp__4425__auto___8692__$2)){
var href_uri_8693 = temp__4425__auto___8692__$2;
sheet_8691.ownerNode.href = href_uri_8693.makeUnique().toString();
} else {
}
} else {
}

var G__8694 = cljs.core.next.call(null,seq__8674__$1);
var G__8695 = null;
var G__8696 = (0);
var G__8697 = (0);
seq__8674 = G__8694;
chunk__8675 = G__8695;
count__8676 = G__8696;
i__8677 = G__8697;
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
var seq__8702 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8703 = null;
var count__8704 = (0);
var i__8705 = (0);
while(true){
if((i__8705 < count__8704)){
var s = cljs.core._nth.call(null,chunk__8703,i__8705);
var temp__4425__auto___8706 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8706)){
var image_8707 = temp__4425__auto___8706;
var temp__4425__auto___8708__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8707.src,changed);
if(cljs.core.truth_(temp__4425__auto___8708__$1)){
var href_uri_8709 = temp__4425__auto___8708__$1;
image_8707.src = href_uri_8709.makeUnique().toString();
} else {
}
} else {
}

var G__8710 = seq__8702;
var G__8711 = chunk__8703;
var G__8712 = count__8704;
var G__8713 = (i__8705 + (1));
seq__8702 = G__8710;
chunk__8703 = G__8711;
count__8704 = G__8712;
i__8705 = G__8713;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8702);
if(temp__4425__auto__){
var seq__8702__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8702__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8702__$1);
var G__8714 = cljs.core.chunk_rest.call(null,seq__8702__$1);
var G__8715 = c__5897__auto__;
var G__8716 = cljs.core.count.call(null,c__5897__auto__);
var G__8717 = (0);
seq__8702 = G__8714;
chunk__8703 = G__8715;
count__8704 = G__8716;
i__8705 = G__8717;
continue;
} else {
var s = cljs.core.first.call(null,seq__8702__$1);
var temp__4425__auto___8718__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8718__$1)){
var image_8719 = temp__4425__auto___8718__$1;
var temp__4425__auto___8720__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8719.src,changed);
if(cljs.core.truth_(temp__4425__auto___8720__$2)){
var href_uri_8721 = temp__4425__auto___8720__$2;
image_8719.src = href_uri_8721.makeUnique().toString();
} else {
}
} else {
}

var G__8722 = cljs.core.next.call(null,seq__8702__$1);
var G__8723 = null;
var G__8724 = (0);
var G__8725 = (0);
seq__8702 = G__8722;
chunk__8703 = G__8723;
count__8704 = G__8724;
i__8705 = G__8725;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8728){
var map__8731 = p__8728;
var map__8731__$1 = ((((!((map__8731 == null)))?((((map__8731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8731):map__8731);
var on_jsload = cljs.core.get.call(null,map__8731__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8731,map__8731__$1,on_jsload){
return (function (p1__8726_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8726_SHARP_,".js");
});})(map__8731,map__8731__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8731,map__8731__$1,on_jsload){
return (function (p1__8727_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8727_SHARP_).makeUnique());
});})(js_files,map__8731,map__8731__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8731,map__8731__$1,on_jsload){
return (function() { 
var G__8733__delegate = function (_){
return on_jsload.call(null);
};
var G__8733 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8734__i = 0, G__8734__a = new Array(arguments.length -  0);
while (G__8734__i < G__8734__a.length) {G__8734__a[G__8734__i] = arguments[G__8734__i + 0]; ++G__8734__i;}
  _ = new cljs.core.IndexedSeq(G__8734__a,0);
} 
return G__8733__delegate.call(this,_);};
G__8733.cljs$lang$maxFixedArity = 0;
G__8733.cljs$lang$applyTo = (function (arglist__8735){
var _ = cljs.core.seq(arglist__8735);
return G__8733__delegate(_);
});
G__8733.cljs$core$IFn$_invoke$arity$variadic = G__8733__delegate;
return G__8733;
})()
;})(js_files,map__8731,map__8731__$1,on_jsload))
,((function (js_files,map__8731,map__8731__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8731,map__8731__$1,on_jsload))
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

var seq__8740_8744 = cljs.core.seq.call(null,things_to_log);
var chunk__8741_8745 = null;
var count__8742_8746 = (0);
var i__8743_8747 = (0);
while(true){
if((i__8743_8747 < count__8742_8746)){
var t_8748 = cljs.core._nth.call(null,chunk__8741_8745,i__8743_8747);
console.log(t_8748);

var G__8749 = seq__8740_8744;
var G__8750 = chunk__8741_8745;
var G__8751 = count__8742_8746;
var G__8752 = (i__8743_8747 + (1));
seq__8740_8744 = G__8749;
chunk__8741_8745 = G__8750;
count__8742_8746 = G__8751;
i__8743_8747 = G__8752;
continue;
} else {
var temp__4425__auto___8753 = cljs.core.seq.call(null,seq__8740_8744);
if(temp__4425__auto___8753){
var seq__8740_8754__$1 = temp__4425__auto___8753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8740_8754__$1)){
var c__5897__auto___8755 = cljs.core.chunk_first.call(null,seq__8740_8754__$1);
var G__8756 = cljs.core.chunk_rest.call(null,seq__8740_8754__$1);
var G__8757 = c__5897__auto___8755;
var G__8758 = cljs.core.count.call(null,c__5897__auto___8755);
var G__8759 = (0);
seq__8740_8744 = G__8756;
chunk__8741_8745 = G__8757;
count__8742_8746 = G__8758;
i__8743_8747 = G__8759;
continue;
} else {
var t_8760 = cljs.core.first.call(null,seq__8740_8754__$1);
console.log(t_8760);

var G__8761 = cljs.core.next.call(null,seq__8740_8754__$1);
var G__8762 = null;
var G__8763 = (0);
var G__8764 = (0);
seq__8740_8744 = G__8761;
chunk__8741_8745 = G__8762;
count__8742_8746 = G__8763;
i__8743_8747 = G__8764;
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

var G__8766 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8766,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8766);

adzerk.boot_reload.reload.reload_css.call(null,G__8766);

adzerk.boot_reload.reload.reload_img.call(null,G__8766);

return G__8766;
});

//# sourceMappingURL=reload.js.map