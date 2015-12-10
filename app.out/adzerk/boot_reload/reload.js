// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - cljs.core.count(pat))));
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
var path = adzerk.boot_reload.reload.normalize_href_or_uri(href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path){
return (function (p1__13896_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_(adzerk.boot_reload.reload.normalize_href_or_uri(p1__13896_SHARP_),path);
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
var seq__13901 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),sheets.length));
var chunk__13902 = null;
var count__13903 = (0);
var i__13904 = (0);
while(true){
if((i__13904 < count__13903)){
var s = chunk__13902.cljs$core$IIndexed$_nth$arity$2(null,i__13904);
var temp__4425__auto___13905 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___13905)){
var sheet_13906 = temp__4425__auto___13905;
var temp__4425__auto___13907__$1 = adzerk.boot_reload.reload.changed_href_QMARK_(sheet_13906.href,changed);
if(cljs.core.truth_(temp__4425__auto___13907__$1)){
var href_uri_13908 = temp__4425__auto___13907__$1;
sheet_13906.ownerNode.href = href_uri_13908.makeUnique().toString();
} else {
}
} else {
}

var G__13909 = seq__13901;
var G__13910 = chunk__13902;
var G__13911 = count__13903;
var G__13912 = (i__13904 + (1));
seq__13901 = G__13909;
chunk__13902 = G__13910;
count__13903 = G__13911;
i__13904 = G__13912;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13901);
if(temp__4425__auto__){
var seq__13901__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13901__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__13901__$1);
var G__13913 = cljs.core.chunk_rest(seq__13901__$1);
var G__13914 = c__5789__auto__;
var G__13915 = cljs.core.count(c__5789__auto__);
var G__13916 = (0);
seq__13901 = G__13913;
chunk__13902 = G__13914;
count__13903 = G__13915;
i__13904 = G__13916;
continue;
} else {
var s = cljs.core.first(seq__13901__$1);
var temp__4425__auto___13917__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___13917__$1)){
var sheet_13918 = temp__4425__auto___13917__$1;
var temp__4425__auto___13919__$2 = adzerk.boot_reload.reload.changed_href_QMARK_(sheet_13918.href,changed);
if(cljs.core.truth_(temp__4425__auto___13919__$2)){
var href_uri_13920 = temp__4425__auto___13919__$2;
sheet_13918.ownerNode.href = href_uri_13920.makeUnique().toString();
} else {
}
} else {
}

var G__13921 = cljs.core.next(seq__13901__$1);
var G__13922 = null;
var G__13923 = (0);
var G__13924 = (0);
seq__13901 = G__13921;
chunk__13902 = G__13922;
count__13903 = G__13923;
i__13904 = G__13924;
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
var seq__13929 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),images.length));
var chunk__13930 = null;
var count__13931 = (0);
var i__13932 = (0);
while(true){
if((i__13932 < count__13931)){
var s = chunk__13930.cljs$core$IIndexed$_nth$arity$2(null,i__13932);
var temp__4425__auto___13933 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___13933)){
var image_13934 = temp__4425__auto___13933;
var temp__4425__auto___13935__$1 = adzerk.boot_reload.reload.changed_href_QMARK_(image_13934.src,changed);
if(cljs.core.truth_(temp__4425__auto___13935__$1)){
var href_uri_13936 = temp__4425__auto___13935__$1;
image_13934.src = href_uri_13936.makeUnique().toString();
} else {
}
} else {
}

var G__13937 = seq__13929;
var G__13938 = chunk__13930;
var G__13939 = count__13931;
var G__13940 = (i__13932 + (1));
seq__13929 = G__13937;
chunk__13930 = G__13938;
count__13931 = G__13939;
i__13932 = G__13940;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13929);
if(temp__4425__auto__){
var seq__13929__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13929__$1)){
var c__5789__auto__ = cljs.core.chunk_first(seq__13929__$1);
var G__13941 = cljs.core.chunk_rest(seq__13929__$1);
var G__13942 = c__5789__auto__;
var G__13943 = cljs.core.count(c__5789__auto__);
var G__13944 = (0);
seq__13929 = G__13941;
chunk__13930 = G__13942;
count__13931 = G__13943;
i__13932 = G__13944;
continue;
} else {
var s = cljs.core.first(seq__13929__$1);
var temp__4425__auto___13945__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___13945__$1)){
var image_13946 = temp__4425__auto___13945__$1;
var temp__4425__auto___13947__$2 = adzerk.boot_reload.reload.changed_href_QMARK_(image_13946.src,changed);
if(cljs.core.truth_(temp__4425__auto___13947__$2)){
var href_uri_13948 = temp__4425__auto___13947__$2;
image_13946.src = href_uri_13948.makeUnique().toString();
} else {
}
} else {
}

var G__13949 = cljs.core.next(seq__13929__$1);
var G__13950 = null;
var G__13951 = (0);
var G__13952 = (0);
seq__13929 = G__13949;
chunk__13930 = G__13950;
count__13931 = G__13951;
i__13932 = G__13952;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__13955){
var map__13961 = p__13955;
var map__13961__$1 = ((((!((map__13961 == null)))?((((map__13961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13961):map__13961);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13961__$1,cljs.core.cst$kw$on_DASH_jsload,cljs.core.identity);
var js_files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13961,map__13961__$1,on_jsload){
return (function (p1__13953_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_(p1__13953_SHARP_,".js");
});})(map__13961,map__13961__$1,on_jsload))
,changed);
if(cljs.core.seq(js_files)){
(function (){var G__13964 = cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (js_files,map__13961,map__13961__$1,on_jsload){
return (function (p1__13954_SHARP_){
var G__13965 = goog.Uri.parse(p1__13954_SHARP_).makeUnique();
return goog.net.jsloader.load(G__13965);
});})(js_files,map__13961,map__13961__$1,on_jsload))
,js_files));
return goog.async.DeferredList.gatherResults(G__13964);
})().addCallbacks(((function (js_files,map__13961,map__13961__$1,on_jsload){
return (function() { 
var G__13966__delegate = function (_){
return (on_jsload.cljs$core$IFn$_invoke$arity$0 ? on_jsload.cljs$core$IFn$_invoke$arity$0() : on_jsload.call(null));
};
var G__13966 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13967__i = 0, G__13967__a = new Array(arguments.length -  0);
while (G__13967__i < G__13967__a.length) {G__13967__a[G__13967__i] = arguments[G__13967__i + 0]; ++G__13967__i;}
  _ = new cljs.core.IndexedSeq(G__13967__a,0);
} 
return G__13966__delegate.call(this,_);};
G__13966.cljs$lang$maxFixedArity = 0;
G__13966.cljs$lang$applyTo = (function (arglist__13968){
var _ = cljs.core.seq(arglist__13968);
return G__13966__delegate(_);
});
G__13966.cljs$core$IFn$_invoke$arity$variadic = G__13966__delegate;
return G__13966;
})()
;})(js_files,map__13961,map__13961__$1,on_jsload))
,((function (js_files,map__13961,map__13961__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__13961,map__13961__$1,on_jsload))
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
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_(page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_(html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_();
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__13973_13977 = cljs.core.seq(things_to_log);
var chunk__13974_13978 = null;
var count__13975_13979 = (0);
var i__13976_13980 = (0);
while(true){
if((i__13976_13980 < count__13975_13979)){
var t_13981 = chunk__13974_13978.cljs$core$IIndexed$_nth$arity$2(null,i__13976_13980);
console.log(t_13981);

var G__13982 = seq__13973_13977;
var G__13983 = chunk__13974_13978;
var G__13984 = count__13975_13979;
var G__13985 = (i__13976_13980 + (1));
seq__13973_13977 = G__13982;
chunk__13974_13978 = G__13983;
count__13975_13979 = G__13984;
i__13976_13980 = G__13985;
continue;
} else {
var temp__4425__auto___13986 = cljs.core.seq(seq__13973_13977);
if(temp__4425__auto___13986){
var seq__13973_13987__$1 = temp__4425__auto___13986;
if(cljs.core.chunked_seq_QMARK_(seq__13973_13987__$1)){
var c__5789__auto___13988 = cljs.core.chunk_first(seq__13973_13987__$1);
var G__13989 = cljs.core.chunk_rest(seq__13973_13987__$1);
var G__13990 = c__5789__auto___13988;
var G__13991 = cljs.core.count(c__5789__auto___13988);
var G__13992 = (0);
seq__13973_13977 = G__13989;
chunk__13974_13978 = G__13990;
count__13975_13979 = G__13991;
i__13976_13980 = G__13992;
continue;
} else {
var t_13993 = cljs.core.first(seq__13973_13987__$1);
console.log(t_13993);

var G__13994 = cljs.core.next(seq__13973_13987__$1);
var G__13995 = null;
var G__13996 = (0);
var G__13997 = (0);
seq__13973_13977 = G__13994;
chunk__13974_13978 = G__13995;
count__13975_13979 = G__13996;
i__13976_13980 = G__13997;
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
adzerk.boot_reload.reload.group_log("Reload",changed);

var G__13999 = changed;
adzerk.boot_reload.reload.reload_js(G__13999,opts);

adzerk.boot_reload.reload.reload_html(G__13999);

adzerk.boot_reload.reload.reload_css(G__13999);

adzerk.boot_reload.reload.reload_img(G__13999);

return G__13999;
});
