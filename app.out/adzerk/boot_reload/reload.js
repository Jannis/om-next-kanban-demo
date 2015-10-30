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
return (function (p1__8705_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8705_SHARP_),path);
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
var seq__8710 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8711 = null;
var count__8712 = (0);
var i__8713 = (0);
while(true){
if((i__8713 < count__8712)){
var s = cljs.core._nth.call(null,chunk__8711,i__8713);
var temp__4425__auto___8714 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8714)){
var sheet_8715 = temp__4425__auto___8714;
var temp__4425__auto___8716__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8715.href,changed);
if(cljs.core.truth_(temp__4425__auto___8716__$1)){
var href_uri_8717 = temp__4425__auto___8716__$1;
sheet_8715.ownerNode.href = href_uri_8717.makeUnique().toString();
} else {
}
} else {
}

var G__8718 = seq__8710;
var G__8719 = chunk__8711;
var G__8720 = count__8712;
var G__8721 = (i__8713 + (1));
seq__8710 = G__8718;
chunk__8711 = G__8719;
count__8712 = G__8720;
i__8713 = G__8721;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8710);
if(temp__4425__auto__){
var seq__8710__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8710__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8710__$1);
var G__8722 = cljs.core.chunk_rest.call(null,seq__8710__$1);
var G__8723 = c__5897__auto__;
var G__8724 = cljs.core.count.call(null,c__5897__auto__);
var G__8725 = (0);
seq__8710 = G__8722;
chunk__8711 = G__8723;
count__8712 = G__8724;
i__8713 = G__8725;
continue;
} else {
var s = cljs.core.first.call(null,seq__8710__$1);
var temp__4425__auto___8726__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8726__$1)){
var sheet_8727 = temp__4425__auto___8726__$1;
var temp__4425__auto___8728__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8727.href,changed);
if(cljs.core.truth_(temp__4425__auto___8728__$2)){
var href_uri_8729 = temp__4425__auto___8728__$2;
sheet_8727.ownerNode.href = href_uri_8729.makeUnique().toString();
} else {
}
} else {
}

var G__8730 = cljs.core.next.call(null,seq__8710__$1);
var G__8731 = null;
var G__8732 = (0);
var G__8733 = (0);
seq__8710 = G__8730;
chunk__8711 = G__8731;
count__8712 = G__8732;
i__8713 = G__8733;
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
var seq__8738 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8739 = null;
var count__8740 = (0);
var i__8741 = (0);
while(true){
if((i__8741 < count__8740)){
var s = cljs.core._nth.call(null,chunk__8739,i__8741);
var temp__4425__auto___8742 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8742)){
var image_8743 = temp__4425__auto___8742;
var temp__4425__auto___8744__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8743.src,changed);
if(cljs.core.truth_(temp__4425__auto___8744__$1)){
var href_uri_8745 = temp__4425__auto___8744__$1;
image_8743.src = href_uri_8745.makeUnique().toString();
} else {
}
} else {
}

var G__8746 = seq__8738;
var G__8747 = chunk__8739;
var G__8748 = count__8740;
var G__8749 = (i__8741 + (1));
seq__8738 = G__8746;
chunk__8739 = G__8747;
count__8740 = G__8748;
i__8741 = G__8749;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8738);
if(temp__4425__auto__){
var seq__8738__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8738__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8738__$1);
var G__8750 = cljs.core.chunk_rest.call(null,seq__8738__$1);
var G__8751 = c__5897__auto__;
var G__8752 = cljs.core.count.call(null,c__5897__auto__);
var G__8753 = (0);
seq__8738 = G__8750;
chunk__8739 = G__8751;
count__8740 = G__8752;
i__8741 = G__8753;
continue;
} else {
var s = cljs.core.first.call(null,seq__8738__$1);
var temp__4425__auto___8754__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8754__$1)){
var image_8755 = temp__4425__auto___8754__$1;
var temp__4425__auto___8756__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8755.src,changed);
if(cljs.core.truth_(temp__4425__auto___8756__$2)){
var href_uri_8757 = temp__4425__auto___8756__$2;
image_8755.src = href_uri_8757.makeUnique().toString();
} else {
}
} else {
}

var G__8758 = cljs.core.next.call(null,seq__8738__$1);
var G__8759 = null;
var G__8760 = (0);
var G__8761 = (0);
seq__8738 = G__8758;
chunk__8739 = G__8759;
count__8740 = G__8760;
i__8741 = G__8761;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8764){
var map__8767 = p__8764;
var map__8767__$1 = ((((!((map__8767 == null)))?((((map__8767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8767):map__8767);
var on_jsload = cljs.core.get.call(null,map__8767__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8767,map__8767__$1,on_jsload){
return (function (p1__8762_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8762_SHARP_,".js");
});})(map__8767,map__8767__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8767,map__8767__$1,on_jsload){
return (function (p1__8763_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8763_SHARP_).makeUnique());
});})(js_files,map__8767,map__8767__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8767,map__8767__$1,on_jsload){
return (function() { 
var G__8769__delegate = function (_){
return on_jsload.call(null);
};
var G__8769 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8770__i = 0, G__8770__a = new Array(arguments.length -  0);
while (G__8770__i < G__8770__a.length) {G__8770__a[G__8770__i] = arguments[G__8770__i + 0]; ++G__8770__i;}
  _ = new cljs.core.IndexedSeq(G__8770__a,0);
} 
return G__8769__delegate.call(this,_);};
G__8769.cljs$lang$maxFixedArity = 0;
G__8769.cljs$lang$applyTo = (function (arglist__8771){
var _ = cljs.core.seq(arglist__8771);
return G__8769__delegate(_);
});
G__8769.cljs$core$IFn$_invoke$arity$variadic = G__8769__delegate;
return G__8769;
})()
;})(js_files,map__8767,map__8767__$1,on_jsload))
,((function (js_files,map__8767,map__8767__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8767,map__8767__$1,on_jsload))
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

var seq__8776_8780 = cljs.core.seq.call(null,things_to_log);
var chunk__8777_8781 = null;
var count__8778_8782 = (0);
var i__8779_8783 = (0);
while(true){
if((i__8779_8783 < count__8778_8782)){
var t_8784 = cljs.core._nth.call(null,chunk__8777_8781,i__8779_8783);
console.log(t_8784);

var G__8785 = seq__8776_8780;
var G__8786 = chunk__8777_8781;
var G__8787 = count__8778_8782;
var G__8788 = (i__8779_8783 + (1));
seq__8776_8780 = G__8785;
chunk__8777_8781 = G__8786;
count__8778_8782 = G__8787;
i__8779_8783 = G__8788;
continue;
} else {
var temp__4425__auto___8789 = cljs.core.seq.call(null,seq__8776_8780);
if(temp__4425__auto___8789){
var seq__8776_8790__$1 = temp__4425__auto___8789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8776_8790__$1)){
var c__5897__auto___8791 = cljs.core.chunk_first.call(null,seq__8776_8790__$1);
var G__8792 = cljs.core.chunk_rest.call(null,seq__8776_8790__$1);
var G__8793 = c__5897__auto___8791;
var G__8794 = cljs.core.count.call(null,c__5897__auto___8791);
var G__8795 = (0);
seq__8776_8780 = G__8792;
chunk__8777_8781 = G__8793;
count__8778_8782 = G__8794;
i__8779_8783 = G__8795;
continue;
} else {
var t_8796 = cljs.core.first.call(null,seq__8776_8790__$1);
console.log(t_8796);

var G__8797 = cljs.core.next.call(null,seq__8776_8790__$1);
var G__8798 = null;
var G__8799 = (0);
var G__8800 = (0);
seq__8776_8780 = G__8797;
chunk__8777_8781 = G__8798;
count__8778_8782 = G__8799;
i__8779_8783 = G__8800;
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

var G__8802 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8802,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8802);

adzerk.boot_reload.reload.reload_css.call(null,G__8802);

adzerk.boot_reload.reload.reload_img.call(null,G__8802);

return G__8802;
});

//# sourceMappingURL=reload.js.map