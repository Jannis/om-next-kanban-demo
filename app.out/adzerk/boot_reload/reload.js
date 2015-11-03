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
return (function (p1__15850_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15850_SHARP_),path);
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
var seq__15855 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15856 = null;
var count__15857 = (0);
var i__15858 = (0);
while(true){
if((i__15858 < count__15857)){
var s = cljs.core._nth.call(null,chunk__15856,i__15858);
var temp__4425__auto___15859 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15859)){
var sheet_15860 = temp__4425__auto___15859;
var temp__4425__auto___15861__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15860.href,changed);
if(cljs.core.truth_(temp__4425__auto___15861__$1)){
var href_uri_15862 = temp__4425__auto___15861__$1;
sheet_15860.ownerNode.href = href_uri_15862.makeUnique().toString();
} else {
}
} else {
}

var G__15863 = seq__15855;
var G__15864 = chunk__15856;
var G__15865 = count__15857;
var G__15866 = (i__15858 + (1));
seq__15855 = G__15863;
chunk__15856 = G__15864;
count__15857 = G__15865;
i__15858 = G__15866;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15855);
if(temp__4425__auto__){
var seq__15855__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15855__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15855__$1);
var G__15867 = cljs.core.chunk_rest.call(null,seq__15855__$1);
var G__15868 = c__5897__auto__;
var G__15869 = cljs.core.count.call(null,c__5897__auto__);
var G__15870 = (0);
seq__15855 = G__15867;
chunk__15856 = G__15868;
count__15857 = G__15869;
i__15858 = G__15870;
continue;
} else {
var s = cljs.core.first.call(null,seq__15855__$1);
var temp__4425__auto___15871__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15871__$1)){
var sheet_15872 = temp__4425__auto___15871__$1;
var temp__4425__auto___15873__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15872.href,changed);
if(cljs.core.truth_(temp__4425__auto___15873__$2)){
var href_uri_15874 = temp__4425__auto___15873__$2;
sheet_15872.ownerNode.href = href_uri_15874.makeUnique().toString();
} else {
}
} else {
}

var G__15875 = cljs.core.next.call(null,seq__15855__$1);
var G__15876 = null;
var G__15877 = (0);
var G__15878 = (0);
seq__15855 = G__15875;
chunk__15856 = G__15876;
count__15857 = G__15877;
i__15858 = G__15878;
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
var seq__15883 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15884 = null;
var count__15885 = (0);
var i__15886 = (0);
while(true){
if((i__15886 < count__15885)){
var s = cljs.core._nth.call(null,chunk__15884,i__15886);
var temp__4425__auto___15887 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15887)){
var image_15888 = temp__4425__auto___15887;
var temp__4425__auto___15889__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15888.src,changed);
if(cljs.core.truth_(temp__4425__auto___15889__$1)){
var href_uri_15890 = temp__4425__auto___15889__$1;
image_15888.src = href_uri_15890.makeUnique().toString();
} else {
}
} else {
}

var G__15891 = seq__15883;
var G__15892 = chunk__15884;
var G__15893 = count__15885;
var G__15894 = (i__15886 + (1));
seq__15883 = G__15891;
chunk__15884 = G__15892;
count__15885 = G__15893;
i__15886 = G__15894;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15883);
if(temp__4425__auto__){
var seq__15883__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15883__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15883__$1);
var G__15895 = cljs.core.chunk_rest.call(null,seq__15883__$1);
var G__15896 = c__5897__auto__;
var G__15897 = cljs.core.count.call(null,c__5897__auto__);
var G__15898 = (0);
seq__15883 = G__15895;
chunk__15884 = G__15896;
count__15885 = G__15897;
i__15886 = G__15898;
continue;
} else {
var s = cljs.core.first.call(null,seq__15883__$1);
var temp__4425__auto___15899__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15899__$1)){
var image_15900 = temp__4425__auto___15899__$1;
var temp__4425__auto___15901__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15900.src,changed);
if(cljs.core.truth_(temp__4425__auto___15901__$2)){
var href_uri_15902 = temp__4425__auto___15901__$2;
image_15900.src = href_uri_15902.makeUnique().toString();
} else {
}
} else {
}

var G__15903 = cljs.core.next.call(null,seq__15883__$1);
var G__15904 = null;
var G__15905 = (0);
var G__15906 = (0);
seq__15883 = G__15903;
chunk__15884 = G__15904;
count__15885 = G__15905;
i__15886 = G__15906;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15909){
var map__15912 = p__15909;
var map__15912__$1 = ((((!((map__15912 == null)))?((((map__15912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15912):map__15912);
var on_jsload = cljs.core.get.call(null,map__15912__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15912,map__15912__$1,on_jsload){
return (function (p1__15907_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15907_SHARP_,".js");
});})(map__15912,map__15912__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15912,map__15912__$1,on_jsload){
return (function (p1__15908_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15908_SHARP_).makeUnique());
});})(js_files,map__15912,map__15912__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15912,map__15912__$1,on_jsload){
return (function() { 
var G__15914__delegate = function (_){
return on_jsload.call(null);
};
var G__15914 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15915__i = 0, G__15915__a = new Array(arguments.length -  0);
while (G__15915__i < G__15915__a.length) {G__15915__a[G__15915__i] = arguments[G__15915__i + 0]; ++G__15915__i;}
  _ = new cljs.core.IndexedSeq(G__15915__a,0);
} 
return G__15914__delegate.call(this,_);};
G__15914.cljs$lang$maxFixedArity = 0;
G__15914.cljs$lang$applyTo = (function (arglist__15916){
var _ = cljs.core.seq(arglist__15916);
return G__15914__delegate(_);
});
G__15914.cljs$core$IFn$_invoke$arity$variadic = G__15914__delegate;
return G__15914;
})()
;})(js_files,map__15912,map__15912__$1,on_jsload))
,((function (js_files,map__15912,map__15912__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15912,map__15912__$1,on_jsload))
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

var seq__15921_15925 = cljs.core.seq.call(null,things_to_log);
var chunk__15922_15926 = null;
var count__15923_15927 = (0);
var i__15924_15928 = (0);
while(true){
if((i__15924_15928 < count__15923_15927)){
var t_15929 = cljs.core._nth.call(null,chunk__15922_15926,i__15924_15928);
console.log(t_15929);

var G__15930 = seq__15921_15925;
var G__15931 = chunk__15922_15926;
var G__15932 = count__15923_15927;
var G__15933 = (i__15924_15928 + (1));
seq__15921_15925 = G__15930;
chunk__15922_15926 = G__15931;
count__15923_15927 = G__15932;
i__15924_15928 = G__15933;
continue;
} else {
var temp__4425__auto___15934 = cljs.core.seq.call(null,seq__15921_15925);
if(temp__4425__auto___15934){
var seq__15921_15935__$1 = temp__4425__auto___15934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15921_15935__$1)){
var c__5897__auto___15936 = cljs.core.chunk_first.call(null,seq__15921_15935__$1);
var G__15937 = cljs.core.chunk_rest.call(null,seq__15921_15935__$1);
var G__15938 = c__5897__auto___15936;
var G__15939 = cljs.core.count.call(null,c__5897__auto___15936);
var G__15940 = (0);
seq__15921_15925 = G__15937;
chunk__15922_15926 = G__15938;
count__15923_15927 = G__15939;
i__15924_15928 = G__15940;
continue;
} else {
var t_15941 = cljs.core.first.call(null,seq__15921_15935__$1);
console.log(t_15941);

var G__15942 = cljs.core.next.call(null,seq__15921_15935__$1);
var G__15943 = null;
var G__15944 = (0);
var G__15945 = (0);
seq__15921_15925 = G__15942;
chunk__15922_15926 = G__15943;
count__15923_15927 = G__15944;
i__15924_15928 = G__15945;
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

var G__15947 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15947,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15947);

adzerk.boot_reload.reload.reload_css.call(null,G__15947);

adzerk.boot_reload.reload.reload_img.call(null,G__15947);

return G__15947;
});

//# sourceMappingURL=reload.js.map