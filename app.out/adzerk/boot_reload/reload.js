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
return (function (p1__8687_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8687_SHARP_),path);
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
var seq__8692 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8693 = null;
var count__8694 = (0);
var i__8695 = (0);
while(true){
if((i__8695 < count__8694)){
var s = cljs.core._nth.call(null,chunk__8693,i__8695);
var temp__4425__auto___8696 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8696)){
var sheet_8697 = temp__4425__auto___8696;
var temp__4425__auto___8698__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8697.href,changed);
if(cljs.core.truth_(temp__4425__auto___8698__$1)){
var href_uri_8699 = temp__4425__auto___8698__$1;
sheet_8697.ownerNode.href = href_uri_8699.makeUnique().toString();
} else {
}
} else {
}

var G__8700 = seq__8692;
var G__8701 = chunk__8693;
var G__8702 = count__8694;
var G__8703 = (i__8695 + (1));
seq__8692 = G__8700;
chunk__8693 = G__8701;
count__8694 = G__8702;
i__8695 = G__8703;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8692);
if(temp__4425__auto__){
var seq__8692__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8692__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8692__$1);
var G__8704 = cljs.core.chunk_rest.call(null,seq__8692__$1);
var G__8705 = c__5897__auto__;
var G__8706 = cljs.core.count.call(null,c__5897__auto__);
var G__8707 = (0);
seq__8692 = G__8704;
chunk__8693 = G__8705;
count__8694 = G__8706;
i__8695 = G__8707;
continue;
} else {
var s = cljs.core.first.call(null,seq__8692__$1);
var temp__4425__auto___8708__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8708__$1)){
var sheet_8709 = temp__4425__auto___8708__$1;
var temp__4425__auto___8710__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8709.href,changed);
if(cljs.core.truth_(temp__4425__auto___8710__$2)){
var href_uri_8711 = temp__4425__auto___8710__$2;
sheet_8709.ownerNode.href = href_uri_8711.makeUnique().toString();
} else {
}
} else {
}

var G__8712 = cljs.core.next.call(null,seq__8692__$1);
var G__8713 = null;
var G__8714 = (0);
var G__8715 = (0);
seq__8692 = G__8712;
chunk__8693 = G__8713;
count__8694 = G__8714;
i__8695 = G__8715;
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
var seq__8720 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8721 = null;
var count__8722 = (0);
var i__8723 = (0);
while(true){
if((i__8723 < count__8722)){
var s = cljs.core._nth.call(null,chunk__8721,i__8723);
var temp__4425__auto___8724 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8724)){
var image_8725 = temp__4425__auto___8724;
var temp__4425__auto___8726__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8725.src,changed);
if(cljs.core.truth_(temp__4425__auto___8726__$1)){
var href_uri_8727 = temp__4425__auto___8726__$1;
image_8725.src = href_uri_8727.makeUnique().toString();
} else {
}
} else {
}

var G__8728 = seq__8720;
var G__8729 = chunk__8721;
var G__8730 = count__8722;
var G__8731 = (i__8723 + (1));
seq__8720 = G__8728;
chunk__8721 = G__8729;
count__8722 = G__8730;
i__8723 = G__8731;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8720);
if(temp__4425__auto__){
var seq__8720__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8720__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8720__$1);
var G__8732 = cljs.core.chunk_rest.call(null,seq__8720__$1);
var G__8733 = c__5897__auto__;
var G__8734 = cljs.core.count.call(null,c__5897__auto__);
var G__8735 = (0);
seq__8720 = G__8732;
chunk__8721 = G__8733;
count__8722 = G__8734;
i__8723 = G__8735;
continue;
} else {
var s = cljs.core.first.call(null,seq__8720__$1);
var temp__4425__auto___8736__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8736__$1)){
var image_8737 = temp__4425__auto___8736__$1;
var temp__4425__auto___8738__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8737.src,changed);
if(cljs.core.truth_(temp__4425__auto___8738__$2)){
var href_uri_8739 = temp__4425__auto___8738__$2;
image_8737.src = href_uri_8739.makeUnique().toString();
} else {
}
} else {
}

var G__8740 = cljs.core.next.call(null,seq__8720__$1);
var G__8741 = null;
var G__8742 = (0);
var G__8743 = (0);
seq__8720 = G__8740;
chunk__8721 = G__8741;
count__8722 = G__8742;
i__8723 = G__8743;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8746){
var map__8749 = p__8746;
var map__8749__$1 = ((((!((map__8749 == null)))?((((map__8749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8749):map__8749);
var on_jsload = cljs.core.get.call(null,map__8749__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8749,map__8749__$1,on_jsload){
return (function (p1__8744_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8744_SHARP_,".js");
});})(map__8749,map__8749__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8749,map__8749__$1,on_jsload){
return (function (p1__8745_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8745_SHARP_).makeUnique());
});})(js_files,map__8749,map__8749__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8749,map__8749__$1,on_jsload){
return (function() { 
var G__8751__delegate = function (_){
return on_jsload.call(null);
};
var G__8751 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8752__i = 0, G__8752__a = new Array(arguments.length -  0);
while (G__8752__i < G__8752__a.length) {G__8752__a[G__8752__i] = arguments[G__8752__i + 0]; ++G__8752__i;}
  _ = new cljs.core.IndexedSeq(G__8752__a,0);
} 
return G__8751__delegate.call(this,_);};
G__8751.cljs$lang$maxFixedArity = 0;
G__8751.cljs$lang$applyTo = (function (arglist__8753){
var _ = cljs.core.seq(arglist__8753);
return G__8751__delegate(_);
});
G__8751.cljs$core$IFn$_invoke$arity$variadic = G__8751__delegate;
return G__8751;
})()
;})(js_files,map__8749,map__8749__$1,on_jsload))
,((function (js_files,map__8749,map__8749__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8749,map__8749__$1,on_jsload))
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

var seq__8758_8762 = cljs.core.seq.call(null,things_to_log);
var chunk__8759_8763 = null;
var count__8760_8764 = (0);
var i__8761_8765 = (0);
while(true){
if((i__8761_8765 < count__8760_8764)){
var t_8766 = cljs.core._nth.call(null,chunk__8759_8763,i__8761_8765);
console.log(t_8766);

var G__8767 = seq__8758_8762;
var G__8768 = chunk__8759_8763;
var G__8769 = count__8760_8764;
var G__8770 = (i__8761_8765 + (1));
seq__8758_8762 = G__8767;
chunk__8759_8763 = G__8768;
count__8760_8764 = G__8769;
i__8761_8765 = G__8770;
continue;
} else {
var temp__4425__auto___8771 = cljs.core.seq.call(null,seq__8758_8762);
if(temp__4425__auto___8771){
var seq__8758_8772__$1 = temp__4425__auto___8771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8758_8772__$1)){
var c__5897__auto___8773 = cljs.core.chunk_first.call(null,seq__8758_8772__$1);
var G__8774 = cljs.core.chunk_rest.call(null,seq__8758_8772__$1);
var G__8775 = c__5897__auto___8773;
var G__8776 = cljs.core.count.call(null,c__5897__auto___8773);
var G__8777 = (0);
seq__8758_8762 = G__8774;
chunk__8759_8763 = G__8775;
count__8760_8764 = G__8776;
i__8761_8765 = G__8777;
continue;
} else {
var t_8778 = cljs.core.first.call(null,seq__8758_8772__$1);
console.log(t_8778);

var G__8779 = cljs.core.next.call(null,seq__8758_8772__$1);
var G__8780 = null;
var G__8781 = (0);
var G__8782 = (0);
seq__8758_8762 = G__8779;
chunk__8759_8763 = G__8780;
count__8760_8764 = G__8781;
i__8761_8765 = G__8782;
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

var G__8784 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8784,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8784);

adzerk.boot_reload.reload.reload_css.call(null,G__8784);

adzerk.boot_reload.reload.reload_img.call(null,G__8784);

return G__8784;
});

//# sourceMappingURL=reload.js.map