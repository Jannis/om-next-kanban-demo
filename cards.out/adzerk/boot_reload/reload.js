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
return (function (p1__15886_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15886_SHARP_),path);
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
var seq__15891 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15892 = null;
var count__15893 = (0);
var i__15894 = (0);
while(true){
if((i__15894 < count__15893)){
var s = cljs.core._nth.call(null,chunk__15892,i__15894);
var temp__4425__auto___15895 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15895)){
var sheet_15896 = temp__4425__auto___15895;
var temp__4425__auto___15897__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15896.href,changed);
if(cljs.core.truth_(temp__4425__auto___15897__$1)){
var href_uri_15898 = temp__4425__auto___15897__$1;
sheet_15896.ownerNode.href = href_uri_15898.makeUnique().toString();
} else {
}
} else {
}

var G__15899 = seq__15891;
var G__15900 = chunk__15892;
var G__15901 = count__15893;
var G__15902 = (i__15894 + (1));
seq__15891 = G__15899;
chunk__15892 = G__15900;
count__15893 = G__15901;
i__15894 = G__15902;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15891);
if(temp__4425__auto__){
var seq__15891__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15891__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15891__$1);
var G__15903 = cljs.core.chunk_rest.call(null,seq__15891__$1);
var G__15904 = c__5897__auto__;
var G__15905 = cljs.core.count.call(null,c__5897__auto__);
var G__15906 = (0);
seq__15891 = G__15903;
chunk__15892 = G__15904;
count__15893 = G__15905;
i__15894 = G__15906;
continue;
} else {
var s = cljs.core.first.call(null,seq__15891__$1);
var temp__4425__auto___15907__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15907__$1)){
var sheet_15908 = temp__4425__auto___15907__$1;
var temp__4425__auto___15909__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15908.href,changed);
if(cljs.core.truth_(temp__4425__auto___15909__$2)){
var href_uri_15910 = temp__4425__auto___15909__$2;
sheet_15908.ownerNode.href = href_uri_15910.makeUnique().toString();
} else {
}
} else {
}

var G__15911 = cljs.core.next.call(null,seq__15891__$1);
var G__15912 = null;
var G__15913 = (0);
var G__15914 = (0);
seq__15891 = G__15911;
chunk__15892 = G__15912;
count__15893 = G__15913;
i__15894 = G__15914;
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
var seq__15919 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15920 = null;
var count__15921 = (0);
var i__15922 = (0);
while(true){
if((i__15922 < count__15921)){
var s = cljs.core._nth.call(null,chunk__15920,i__15922);
var temp__4425__auto___15923 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15923)){
var image_15924 = temp__4425__auto___15923;
var temp__4425__auto___15925__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15924.src,changed);
if(cljs.core.truth_(temp__4425__auto___15925__$1)){
var href_uri_15926 = temp__4425__auto___15925__$1;
image_15924.src = href_uri_15926.makeUnique().toString();
} else {
}
} else {
}

var G__15927 = seq__15919;
var G__15928 = chunk__15920;
var G__15929 = count__15921;
var G__15930 = (i__15922 + (1));
seq__15919 = G__15927;
chunk__15920 = G__15928;
count__15921 = G__15929;
i__15922 = G__15930;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15919);
if(temp__4425__auto__){
var seq__15919__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15919__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15919__$1);
var G__15931 = cljs.core.chunk_rest.call(null,seq__15919__$1);
var G__15932 = c__5897__auto__;
var G__15933 = cljs.core.count.call(null,c__5897__auto__);
var G__15934 = (0);
seq__15919 = G__15931;
chunk__15920 = G__15932;
count__15921 = G__15933;
i__15922 = G__15934;
continue;
} else {
var s = cljs.core.first.call(null,seq__15919__$1);
var temp__4425__auto___15935__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15935__$1)){
var image_15936 = temp__4425__auto___15935__$1;
var temp__4425__auto___15937__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15936.src,changed);
if(cljs.core.truth_(temp__4425__auto___15937__$2)){
var href_uri_15938 = temp__4425__auto___15937__$2;
image_15936.src = href_uri_15938.makeUnique().toString();
} else {
}
} else {
}

var G__15939 = cljs.core.next.call(null,seq__15919__$1);
var G__15940 = null;
var G__15941 = (0);
var G__15942 = (0);
seq__15919 = G__15939;
chunk__15920 = G__15940;
count__15921 = G__15941;
i__15922 = G__15942;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15945){
var map__15948 = p__15945;
var map__15948__$1 = ((((!((map__15948 == null)))?((((map__15948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15948):map__15948);
var on_jsload = cljs.core.get.call(null,map__15948__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15948,map__15948__$1,on_jsload){
return (function (p1__15943_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15943_SHARP_,".js");
});})(map__15948,map__15948__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15948,map__15948__$1,on_jsload){
return (function (p1__15944_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15944_SHARP_).makeUnique());
});})(js_files,map__15948,map__15948__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15948,map__15948__$1,on_jsload){
return (function() { 
var G__15950__delegate = function (_){
return on_jsload.call(null);
};
var G__15950 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15951__i = 0, G__15951__a = new Array(arguments.length -  0);
while (G__15951__i < G__15951__a.length) {G__15951__a[G__15951__i] = arguments[G__15951__i + 0]; ++G__15951__i;}
  _ = new cljs.core.IndexedSeq(G__15951__a,0);
} 
return G__15950__delegate.call(this,_);};
G__15950.cljs$lang$maxFixedArity = 0;
G__15950.cljs$lang$applyTo = (function (arglist__15952){
var _ = cljs.core.seq(arglist__15952);
return G__15950__delegate(_);
});
G__15950.cljs$core$IFn$_invoke$arity$variadic = G__15950__delegate;
return G__15950;
})()
;})(js_files,map__15948,map__15948__$1,on_jsload))
,((function (js_files,map__15948,map__15948__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15948,map__15948__$1,on_jsload))
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

var seq__15957_15961 = cljs.core.seq.call(null,things_to_log);
var chunk__15958_15962 = null;
var count__15959_15963 = (0);
var i__15960_15964 = (0);
while(true){
if((i__15960_15964 < count__15959_15963)){
var t_15965 = cljs.core._nth.call(null,chunk__15958_15962,i__15960_15964);
console.log(t_15965);

var G__15966 = seq__15957_15961;
var G__15967 = chunk__15958_15962;
var G__15968 = count__15959_15963;
var G__15969 = (i__15960_15964 + (1));
seq__15957_15961 = G__15966;
chunk__15958_15962 = G__15967;
count__15959_15963 = G__15968;
i__15960_15964 = G__15969;
continue;
} else {
var temp__4425__auto___15970 = cljs.core.seq.call(null,seq__15957_15961);
if(temp__4425__auto___15970){
var seq__15957_15971__$1 = temp__4425__auto___15970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15957_15971__$1)){
var c__5897__auto___15972 = cljs.core.chunk_first.call(null,seq__15957_15971__$1);
var G__15973 = cljs.core.chunk_rest.call(null,seq__15957_15971__$1);
var G__15974 = c__5897__auto___15972;
var G__15975 = cljs.core.count.call(null,c__5897__auto___15972);
var G__15976 = (0);
seq__15957_15961 = G__15973;
chunk__15958_15962 = G__15974;
count__15959_15963 = G__15975;
i__15960_15964 = G__15976;
continue;
} else {
var t_15977 = cljs.core.first.call(null,seq__15957_15971__$1);
console.log(t_15977);

var G__15978 = cljs.core.next.call(null,seq__15957_15971__$1);
var G__15979 = null;
var G__15980 = (0);
var G__15981 = (0);
seq__15957_15961 = G__15978;
chunk__15958_15962 = G__15979;
count__15959_15963 = G__15980;
i__15960_15964 = G__15981;
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

var G__15983 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15983,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15983);

adzerk.boot_reload.reload.reload_css.call(null,G__15983);

adzerk.boot_reload.reload.reload_img.call(null,G__15983);

return G__15983;
});

//# sourceMappingURL=reload.js.map