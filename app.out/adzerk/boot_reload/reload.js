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
return (function (p1__8691_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8691_SHARP_),path);
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
var seq__8696 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8697 = null;
var count__8698 = (0);
var i__8699 = (0);
while(true){
if((i__8699 < count__8698)){
var s = cljs.core._nth.call(null,chunk__8697,i__8699);
var temp__4425__auto___8700 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8700)){
var sheet_8701 = temp__4425__auto___8700;
var temp__4425__auto___8702__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8701.href,changed);
if(cljs.core.truth_(temp__4425__auto___8702__$1)){
var href_uri_8703 = temp__4425__auto___8702__$1;
sheet_8701.ownerNode.href = href_uri_8703.makeUnique().toString();
} else {
}
} else {
}

var G__8704 = seq__8696;
var G__8705 = chunk__8697;
var G__8706 = count__8698;
var G__8707 = (i__8699 + (1));
seq__8696 = G__8704;
chunk__8697 = G__8705;
count__8698 = G__8706;
i__8699 = G__8707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8696);
if(temp__4425__auto__){
var seq__8696__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8696__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8696__$1);
var G__8708 = cljs.core.chunk_rest.call(null,seq__8696__$1);
var G__8709 = c__5897__auto__;
var G__8710 = cljs.core.count.call(null,c__5897__auto__);
var G__8711 = (0);
seq__8696 = G__8708;
chunk__8697 = G__8709;
count__8698 = G__8710;
i__8699 = G__8711;
continue;
} else {
var s = cljs.core.first.call(null,seq__8696__$1);
var temp__4425__auto___8712__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8712__$1)){
var sheet_8713 = temp__4425__auto___8712__$1;
var temp__4425__auto___8714__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8713.href,changed);
if(cljs.core.truth_(temp__4425__auto___8714__$2)){
var href_uri_8715 = temp__4425__auto___8714__$2;
sheet_8713.ownerNode.href = href_uri_8715.makeUnique().toString();
} else {
}
} else {
}

var G__8716 = cljs.core.next.call(null,seq__8696__$1);
var G__8717 = null;
var G__8718 = (0);
var G__8719 = (0);
seq__8696 = G__8716;
chunk__8697 = G__8717;
count__8698 = G__8718;
i__8699 = G__8719;
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
var seq__8724 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8725 = null;
var count__8726 = (0);
var i__8727 = (0);
while(true){
if((i__8727 < count__8726)){
var s = cljs.core._nth.call(null,chunk__8725,i__8727);
var temp__4425__auto___8728 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8728)){
var image_8729 = temp__4425__auto___8728;
var temp__4425__auto___8730__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8729.src,changed);
if(cljs.core.truth_(temp__4425__auto___8730__$1)){
var href_uri_8731 = temp__4425__auto___8730__$1;
image_8729.src = href_uri_8731.makeUnique().toString();
} else {
}
} else {
}

var G__8732 = seq__8724;
var G__8733 = chunk__8725;
var G__8734 = count__8726;
var G__8735 = (i__8727 + (1));
seq__8724 = G__8732;
chunk__8725 = G__8733;
count__8726 = G__8734;
i__8727 = G__8735;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8724);
if(temp__4425__auto__){
var seq__8724__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8724__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8724__$1);
var G__8736 = cljs.core.chunk_rest.call(null,seq__8724__$1);
var G__8737 = c__5897__auto__;
var G__8738 = cljs.core.count.call(null,c__5897__auto__);
var G__8739 = (0);
seq__8724 = G__8736;
chunk__8725 = G__8737;
count__8726 = G__8738;
i__8727 = G__8739;
continue;
} else {
var s = cljs.core.first.call(null,seq__8724__$1);
var temp__4425__auto___8740__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8740__$1)){
var image_8741 = temp__4425__auto___8740__$1;
var temp__4425__auto___8742__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8741.src,changed);
if(cljs.core.truth_(temp__4425__auto___8742__$2)){
var href_uri_8743 = temp__4425__auto___8742__$2;
image_8741.src = href_uri_8743.makeUnique().toString();
} else {
}
} else {
}

var G__8744 = cljs.core.next.call(null,seq__8724__$1);
var G__8745 = null;
var G__8746 = (0);
var G__8747 = (0);
seq__8724 = G__8744;
chunk__8725 = G__8745;
count__8726 = G__8746;
i__8727 = G__8747;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8750){
var map__8753 = p__8750;
var map__8753__$1 = ((((!((map__8753 == null)))?((((map__8753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8753):map__8753);
var on_jsload = cljs.core.get.call(null,map__8753__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8753,map__8753__$1,on_jsload){
return (function (p1__8748_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8748_SHARP_,".js");
});})(map__8753,map__8753__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8753,map__8753__$1,on_jsload){
return (function (p1__8749_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8749_SHARP_).makeUnique());
});})(js_files,map__8753,map__8753__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8753,map__8753__$1,on_jsload){
return (function() { 
var G__8755__delegate = function (_){
return on_jsload.call(null);
};
var G__8755 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8756__i = 0, G__8756__a = new Array(arguments.length -  0);
while (G__8756__i < G__8756__a.length) {G__8756__a[G__8756__i] = arguments[G__8756__i + 0]; ++G__8756__i;}
  _ = new cljs.core.IndexedSeq(G__8756__a,0);
} 
return G__8755__delegate.call(this,_);};
G__8755.cljs$lang$maxFixedArity = 0;
G__8755.cljs$lang$applyTo = (function (arglist__8757){
var _ = cljs.core.seq(arglist__8757);
return G__8755__delegate(_);
});
G__8755.cljs$core$IFn$_invoke$arity$variadic = G__8755__delegate;
return G__8755;
})()
;})(js_files,map__8753,map__8753__$1,on_jsload))
,((function (js_files,map__8753,map__8753__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8753,map__8753__$1,on_jsload))
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

var seq__8762_8766 = cljs.core.seq.call(null,things_to_log);
var chunk__8763_8767 = null;
var count__8764_8768 = (0);
var i__8765_8769 = (0);
while(true){
if((i__8765_8769 < count__8764_8768)){
var t_8770 = cljs.core._nth.call(null,chunk__8763_8767,i__8765_8769);
console.log(t_8770);

var G__8771 = seq__8762_8766;
var G__8772 = chunk__8763_8767;
var G__8773 = count__8764_8768;
var G__8774 = (i__8765_8769 + (1));
seq__8762_8766 = G__8771;
chunk__8763_8767 = G__8772;
count__8764_8768 = G__8773;
i__8765_8769 = G__8774;
continue;
} else {
var temp__4425__auto___8775 = cljs.core.seq.call(null,seq__8762_8766);
if(temp__4425__auto___8775){
var seq__8762_8776__$1 = temp__4425__auto___8775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8762_8776__$1)){
var c__5897__auto___8777 = cljs.core.chunk_first.call(null,seq__8762_8776__$1);
var G__8778 = cljs.core.chunk_rest.call(null,seq__8762_8776__$1);
var G__8779 = c__5897__auto___8777;
var G__8780 = cljs.core.count.call(null,c__5897__auto___8777);
var G__8781 = (0);
seq__8762_8766 = G__8778;
chunk__8763_8767 = G__8779;
count__8764_8768 = G__8780;
i__8765_8769 = G__8781;
continue;
} else {
var t_8782 = cljs.core.first.call(null,seq__8762_8776__$1);
console.log(t_8782);

var G__8783 = cljs.core.next.call(null,seq__8762_8776__$1);
var G__8784 = null;
var G__8785 = (0);
var G__8786 = (0);
seq__8762_8766 = G__8783;
chunk__8763_8767 = G__8784;
count__8764_8768 = G__8785;
i__8765_8769 = G__8786;
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

var G__8788 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8788,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8788);

adzerk.boot_reload.reload.reload_css.call(null,G__8788);

adzerk.boot_reload.reload.reload_img.call(null,G__8788);

return G__8788;
});

//# sourceMappingURL=reload.js.map