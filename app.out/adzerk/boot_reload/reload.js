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
return (function (p1__15851_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15851_SHARP_),path);
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
var seq__15856 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15857 = null;
var count__15858 = (0);
var i__15859 = (0);
while(true){
if((i__15859 < count__15858)){
var s = cljs.core._nth.call(null,chunk__15857,i__15859);
var temp__4425__auto___15860 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15860)){
var sheet_15861 = temp__4425__auto___15860;
var temp__4425__auto___15862__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15861.href,changed);
if(cljs.core.truth_(temp__4425__auto___15862__$1)){
var href_uri_15863 = temp__4425__auto___15862__$1;
sheet_15861.ownerNode.href = href_uri_15863.makeUnique().toString();
} else {
}
} else {
}

var G__15864 = seq__15856;
var G__15865 = chunk__15857;
var G__15866 = count__15858;
var G__15867 = (i__15859 + (1));
seq__15856 = G__15864;
chunk__15857 = G__15865;
count__15858 = G__15866;
i__15859 = G__15867;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15856);
if(temp__4425__auto__){
var seq__15856__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15856__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15856__$1);
var G__15868 = cljs.core.chunk_rest.call(null,seq__15856__$1);
var G__15869 = c__5897__auto__;
var G__15870 = cljs.core.count.call(null,c__5897__auto__);
var G__15871 = (0);
seq__15856 = G__15868;
chunk__15857 = G__15869;
count__15858 = G__15870;
i__15859 = G__15871;
continue;
} else {
var s = cljs.core.first.call(null,seq__15856__$1);
var temp__4425__auto___15872__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15872__$1)){
var sheet_15873 = temp__4425__auto___15872__$1;
var temp__4425__auto___15874__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15873.href,changed);
if(cljs.core.truth_(temp__4425__auto___15874__$2)){
var href_uri_15875 = temp__4425__auto___15874__$2;
sheet_15873.ownerNode.href = href_uri_15875.makeUnique().toString();
} else {
}
} else {
}

var G__15876 = cljs.core.next.call(null,seq__15856__$1);
var G__15877 = null;
var G__15878 = (0);
var G__15879 = (0);
seq__15856 = G__15876;
chunk__15857 = G__15877;
count__15858 = G__15878;
i__15859 = G__15879;
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
var seq__15884 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15885 = null;
var count__15886 = (0);
var i__15887 = (0);
while(true){
if((i__15887 < count__15886)){
var s = cljs.core._nth.call(null,chunk__15885,i__15887);
var temp__4425__auto___15888 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15888)){
var image_15889 = temp__4425__auto___15888;
var temp__4425__auto___15890__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15889.src,changed);
if(cljs.core.truth_(temp__4425__auto___15890__$1)){
var href_uri_15891 = temp__4425__auto___15890__$1;
image_15889.src = href_uri_15891.makeUnique().toString();
} else {
}
} else {
}

var G__15892 = seq__15884;
var G__15893 = chunk__15885;
var G__15894 = count__15886;
var G__15895 = (i__15887 + (1));
seq__15884 = G__15892;
chunk__15885 = G__15893;
count__15886 = G__15894;
i__15887 = G__15895;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15884);
if(temp__4425__auto__){
var seq__15884__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15884__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15884__$1);
var G__15896 = cljs.core.chunk_rest.call(null,seq__15884__$1);
var G__15897 = c__5897__auto__;
var G__15898 = cljs.core.count.call(null,c__5897__auto__);
var G__15899 = (0);
seq__15884 = G__15896;
chunk__15885 = G__15897;
count__15886 = G__15898;
i__15887 = G__15899;
continue;
} else {
var s = cljs.core.first.call(null,seq__15884__$1);
var temp__4425__auto___15900__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15900__$1)){
var image_15901 = temp__4425__auto___15900__$1;
var temp__4425__auto___15902__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15901.src,changed);
if(cljs.core.truth_(temp__4425__auto___15902__$2)){
var href_uri_15903 = temp__4425__auto___15902__$2;
image_15901.src = href_uri_15903.makeUnique().toString();
} else {
}
} else {
}

var G__15904 = cljs.core.next.call(null,seq__15884__$1);
var G__15905 = null;
var G__15906 = (0);
var G__15907 = (0);
seq__15884 = G__15904;
chunk__15885 = G__15905;
count__15886 = G__15906;
i__15887 = G__15907;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15910){
var map__15913 = p__15910;
var map__15913__$1 = ((((!((map__15913 == null)))?((((map__15913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15913):map__15913);
var on_jsload = cljs.core.get.call(null,map__15913__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15913,map__15913__$1,on_jsload){
return (function (p1__15908_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15908_SHARP_,".js");
});})(map__15913,map__15913__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15913,map__15913__$1,on_jsload){
return (function (p1__15909_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15909_SHARP_).makeUnique());
});})(js_files,map__15913,map__15913__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15913,map__15913__$1,on_jsload){
return (function() { 
var G__15915__delegate = function (_){
return on_jsload.call(null);
};
var G__15915 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15916__i = 0, G__15916__a = new Array(arguments.length -  0);
while (G__15916__i < G__15916__a.length) {G__15916__a[G__15916__i] = arguments[G__15916__i + 0]; ++G__15916__i;}
  _ = new cljs.core.IndexedSeq(G__15916__a,0);
} 
return G__15915__delegate.call(this,_);};
G__15915.cljs$lang$maxFixedArity = 0;
G__15915.cljs$lang$applyTo = (function (arglist__15917){
var _ = cljs.core.seq(arglist__15917);
return G__15915__delegate(_);
});
G__15915.cljs$core$IFn$_invoke$arity$variadic = G__15915__delegate;
return G__15915;
})()
;})(js_files,map__15913,map__15913__$1,on_jsload))
,((function (js_files,map__15913,map__15913__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15913,map__15913__$1,on_jsload))
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

var seq__15922_15926 = cljs.core.seq.call(null,things_to_log);
var chunk__15923_15927 = null;
var count__15924_15928 = (0);
var i__15925_15929 = (0);
while(true){
if((i__15925_15929 < count__15924_15928)){
var t_15930 = cljs.core._nth.call(null,chunk__15923_15927,i__15925_15929);
console.log(t_15930);

var G__15931 = seq__15922_15926;
var G__15932 = chunk__15923_15927;
var G__15933 = count__15924_15928;
var G__15934 = (i__15925_15929 + (1));
seq__15922_15926 = G__15931;
chunk__15923_15927 = G__15932;
count__15924_15928 = G__15933;
i__15925_15929 = G__15934;
continue;
} else {
var temp__4425__auto___15935 = cljs.core.seq.call(null,seq__15922_15926);
if(temp__4425__auto___15935){
var seq__15922_15936__$1 = temp__4425__auto___15935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15922_15936__$1)){
var c__5897__auto___15937 = cljs.core.chunk_first.call(null,seq__15922_15936__$1);
var G__15938 = cljs.core.chunk_rest.call(null,seq__15922_15936__$1);
var G__15939 = c__5897__auto___15937;
var G__15940 = cljs.core.count.call(null,c__5897__auto___15937);
var G__15941 = (0);
seq__15922_15926 = G__15938;
chunk__15923_15927 = G__15939;
count__15924_15928 = G__15940;
i__15925_15929 = G__15941;
continue;
} else {
var t_15942 = cljs.core.first.call(null,seq__15922_15936__$1);
console.log(t_15942);

var G__15943 = cljs.core.next.call(null,seq__15922_15936__$1);
var G__15944 = null;
var G__15945 = (0);
var G__15946 = (0);
seq__15922_15926 = G__15943;
chunk__15923_15927 = G__15944;
count__15924_15928 = G__15945;
i__15925_15929 = G__15946;
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

var G__15948 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15948,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15948);

adzerk.boot_reload.reload.reload_css.call(null,G__15948);

adzerk.boot_reload.reload.reload_img.call(null,G__15948);

return G__15948;
});

//# sourceMappingURL=reload.js.map