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
return (function (p1__15884_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15884_SHARP_),path);
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
var seq__15889 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15890 = null;
var count__15891 = (0);
var i__15892 = (0);
while(true){
if((i__15892 < count__15891)){
var s = cljs.core._nth.call(null,chunk__15890,i__15892);
var temp__4425__auto___15893 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15893)){
var sheet_15894 = temp__4425__auto___15893;
var temp__4425__auto___15895__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15894.href,changed);
if(cljs.core.truth_(temp__4425__auto___15895__$1)){
var href_uri_15896 = temp__4425__auto___15895__$1;
sheet_15894.ownerNode.href = href_uri_15896.makeUnique().toString();
} else {
}
} else {
}

var G__15897 = seq__15889;
var G__15898 = chunk__15890;
var G__15899 = count__15891;
var G__15900 = (i__15892 + (1));
seq__15889 = G__15897;
chunk__15890 = G__15898;
count__15891 = G__15899;
i__15892 = G__15900;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15889);
if(temp__4425__auto__){
var seq__15889__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15889__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15889__$1);
var G__15901 = cljs.core.chunk_rest.call(null,seq__15889__$1);
var G__15902 = c__5897__auto__;
var G__15903 = cljs.core.count.call(null,c__5897__auto__);
var G__15904 = (0);
seq__15889 = G__15901;
chunk__15890 = G__15902;
count__15891 = G__15903;
i__15892 = G__15904;
continue;
} else {
var s = cljs.core.first.call(null,seq__15889__$1);
var temp__4425__auto___15905__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15905__$1)){
var sheet_15906 = temp__4425__auto___15905__$1;
var temp__4425__auto___15907__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15906.href,changed);
if(cljs.core.truth_(temp__4425__auto___15907__$2)){
var href_uri_15908 = temp__4425__auto___15907__$2;
sheet_15906.ownerNode.href = href_uri_15908.makeUnique().toString();
} else {
}
} else {
}

var G__15909 = cljs.core.next.call(null,seq__15889__$1);
var G__15910 = null;
var G__15911 = (0);
var G__15912 = (0);
seq__15889 = G__15909;
chunk__15890 = G__15910;
count__15891 = G__15911;
i__15892 = G__15912;
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
var seq__15917 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15918 = null;
var count__15919 = (0);
var i__15920 = (0);
while(true){
if((i__15920 < count__15919)){
var s = cljs.core._nth.call(null,chunk__15918,i__15920);
var temp__4425__auto___15921 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15921)){
var image_15922 = temp__4425__auto___15921;
var temp__4425__auto___15923__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15922.src,changed);
if(cljs.core.truth_(temp__4425__auto___15923__$1)){
var href_uri_15924 = temp__4425__auto___15923__$1;
image_15922.src = href_uri_15924.makeUnique().toString();
} else {
}
} else {
}

var G__15925 = seq__15917;
var G__15926 = chunk__15918;
var G__15927 = count__15919;
var G__15928 = (i__15920 + (1));
seq__15917 = G__15925;
chunk__15918 = G__15926;
count__15919 = G__15927;
i__15920 = G__15928;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15917);
if(temp__4425__auto__){
var seq__15917__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15917__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15917__$1);
var G__15929 = cljs.core.chunk_rest.call(null,seq__15917__$1);
var G__15930 = c__5897__auto__;
var G__15931 = cljs.core.count.call(null,c__5897__auto__);
var G__15932 = (0);
seq__15917 = G__15929;
chunk__15918 = G__15930;
count__15919 = G__15931;
i__15920 = G__15932;
continue;
} else {
var s = cljs.core.first.call(null,seq__15917__$1);
var temp__4425__auto___15933__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15933__$1)){
var image_15934 = temp__4425__auto___15933__$1;
var temp__4425__auto___15935__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15934.src,changed);
if(cljs.core.truth_(temp__4425__auto___15935__$2)){
var href_uri_15936 = temp__4425__auto___15935__$2;
image_15934.src = href_uri_15936.makeUnique().toString();
} else {
}
} else {
}

var G__15937 = cljs.core.next.call(null,seq__15917__$1);
var G__15938 = null;
var G__15939 = (0);
var G__15940 = (0);
seq__15917 = G__15937;
chunk__15918 = G__15938;
count__15919 = G__15939;
i__15920 = G__15940;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15943){
var map__15946 = p__15943;
var map__15946__$1 = ((((!((map__15946 == null)))?((((map__15946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15946):map__15946);
var on_jsload = cljs.core.get.call(null,map__15946__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15946,map__15946__$1,on_jsload){
return (function (p1__15941_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15941_SHARP_,".js");
});})(map__15946,map__15946__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15946,map__15946__$1,on_jsload){
return (function (p1__15942_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15942_SHARP_).makeUnique());
});})(js_files,map__15946,map__15946__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15946,map__15946__$1,on_jsload){
return (function() { 
var G__15948__delegate = function (_){
return on_jsload.call(null);
};
var G__15948 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15949__i = 0, G__15949__a = new Array(arguments.length -  0);
while (G__15949__i < G__15949__a.length) {G__15949__a[G__15949__i] = arguments[G__15949__i + 0]; ++G__15949__i;}
  _ = new cljs.core.IndexedSeq(G__15949__a,0);
} 
return G__15948__delegate.call(this,_);};
G__15948.cljs$lang$maxFixedArity = 0;
G__15948.cljs$lang$applyTo = (function (arglist__15950){
var _ = cljs.core.seq(arglist__15950);
return G__15948__delegate(_);
});
G__15948.cljs$core$IFn$_invoke$arity$variadic = G__15948__delegate;
return G__15948;
})()
;})(js_files,map__15946,map__15946__$1,on_jsload))
,((function (js_files,map__15946,map__15946__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15946,map__15946__$1,on_jsload))
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

var seq__15955_15959 = cljs.core.seq.call(null,things_to_log);
var chunk__15956_15960 = null;
var count__15957_15961 = (0);
var i__15958_15962 = (0);
while(true){
if((i__15958_15962 < count__15957_15961)){
var t_15963 = cljs.core._nth.call(null,chunk__15956_15960,i__15958_15962);
console.log(t_15963);

var G__15964 = seq__15955_15959;
var G__15965 = chunk__15956_15960;
var G__15966 = count__15957_15961;
var G__15967 = (i__15958_15962 + (1));
seq__15955_15959 = G__15964;
chunk__15956_15960 = G__15965;
count__15957_15961 = G__15966;
i__15958_15962 = G__15967;
continue;
} else {
var temp__4425__auto___15968 = cljs.core.seq.call(null,seq__15955_15959);
if(temp__4425__auto___15968){
var seq__15955_15969__$1 = temp__4425__auto___15968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15955_15969__$1)){
var c__5897__auto___15970 = cljs.core.chunk_first.call(null,seq__15955_15969__$1);
var G__15971 = cljs.core.chunk_rest.call(null,seq__15955_15969__$1);
var G__15972 = c__5897__auto___15970;
var G__15973 = cljs.core.count.call(null,c__5897__auto___15970);
var G__15974 = (0);
seq__15955_15959 = G__15971;
chunk__15956_15960 = G__15972;
count__15957_15961 = G__15973;
i__15958_15962 = G__15974;
continue;
} else {
var t_15975 = cljs.core.first.call(null,seq__15955_15969__$1);
console.log(t_15975);

var G__15976 = cljs.core.next.call(null,seq__15955_15969__$1);
var G__15977 = null;
var G__15978 = (0);
var G__15979 = (0);
seq__15955_15959 = G__15976;
chunk__15956_15960 = G__15977;
count__15957_15961 = G__15978;
i__15958_15962 = G__15979;
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

var G__15981 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15981,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15981);

adzerk.boot_reload.reload.reload_css.call(null,G__15981);

adzerk.boot_reload.reload.reload_img.call(null,G__15981);

return G__15981;
});

//# sourceMappingURL=reload.js.map