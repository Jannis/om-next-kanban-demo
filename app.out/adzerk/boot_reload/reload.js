// Compiled by ClojureScript 1.7.170 {}
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
return (function (p1__8934_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8934_SHARP_),path);
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
var seq__8939 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8940 = null;
var count__8941 = (0);
var i__8942 = (0);
while(true){
if((i__8942 < count__8941)){
var s = cljs.core._nth.call(null,chunk__8940,i__8942);
var temp__4425__auto___8943 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8943)){
var sheet_8944 = temp__4425__auto___8943;
var temp__4425__auto___8945__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8944.href,changed);
if(cljs.core.truth_(temp__4425__auto___8945__$1)){
var href_uri_8946 = temp__4425__auto___8945__$1;
sheet_8944.ownerNode.href = href_uri_8946.makeUnique().toString();
} else {
}
} else {
}

var G__8947 = seq__8939;
var G__8948 = chunk__8940;
var G__8949 = count__8941;
var G__8950 = (i__8942 + (1));
seq__8939 = G__8947;
chunk__8940 = G__8948;
count__8941 = G__8949;
i__8942 = G__8950;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8939);
if(temp__4425__auto__){
var seq__8939__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8939__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__8939__$1);
var G__8951 = cljs.core.chunk_rest.call(null,seq__8939__$1);
var G__8952 = c__5971__auto__;
var G__8953 = cljs.core.count.call(null,c__5971__auto__);
var G__8954 = (0);
seq__8939 = G__8951;
chunk__8940 = G__8952;
count__8941 = G__8953;
i__8942 = G__8954;
continue;
} else {
var s = cljs.core.first.call(null,seq__8939__$1);
var temp__4425__auto___8955__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8955__$1)){
var sheet_8956 = temp__4425__auto___8955__$1;
var temp__4425__auto___8957__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8956.href,changed);
if(cljs.core.truth_(temp__4425__auto___8957__$2)){
var href_uri_8958 = temp__4425__auto___8957__$2;
sheet_8956.ownerNode.href = href_uri_8958.makeUnique().toString();
} else {
}
} else {
}

var G__8959 = cljs.core.next.call(null,seq__8939__$1);
var G__8960 = null;
var G__8961 = (0);
var G__8962 = (0);
seq__8939 = G__8959;
chunk__8940 = G__8960;
count__8941 = G__8961;
i__8942 = G__8962;
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
var seq__8967 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8968 = null;
var count__8969 = (0);
var i__8970 = (0);
while(true){
if((i__8970 < count__8969)){
var s = cljs.core._nth.call(null,chunk__8968,i__8970);
var temp__4425__auto___8971 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8971)){
var image_8972 = temp__4425__auto___8971;
var temp__4425__auto___8973__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8972.src,changed);
if(cljs.core.truth_(temp__4425__auto___8973__$1)){
var href_uri_8974 = temp__4425__auto___8973__$1;
image_8972.src = href_uri_8974.makeUnique().toString();
} else {
}
} else {
}

var G__8975 = seq__8967;
var G__8976 = chunk__8968;
var G__8977 = count__8969;
var G__8978 = (i__8970 + (1));
seq__8967 = G__8975;
chunk__8968 = G__8976;
count__8969 = G__8977;
i__8970 = G__8978;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8967);
if(temp__4425__auto__){
var seq__8967__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8967__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__8967__$1);
var G__8979 = cljs.core.chunk_rest.call(null,seq__8967__$1);
var G__8980 = c__5971__auto__;
var G__8981 = cljs.core.count.call(null,c__5971__auto__);
var G__8982 = (0);
seq__8967 = G__8979;
chunk__8968 = G__8980;
count__8969 = G__8981;
i__8970 = G__8982;
continue;
} else {
var s = cljs.core.first.call(null,seq__8967__$1);
var temp__4425__auto___8983__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8983__$1)){
var image_8984 = temp__4425__auto___8983__$1;
var temp__4425__auto___8985__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8984.src,changed);
if(cljs.core.truth_(temp__4425__auto___8985__$2)){
var href_uri_8986 = temp__4425__auto___8985__$2;
image_8984.src = href_uri_8986.makeUnique().toString();
} else {
}
} else {
}

var G__8987 = cljs.core.next.call(null,seq__8967__$1);
var G__8988 = null;
var G__8989 = (0);
var G__8990 = (0);
seq__8967 = G__8987;
chunk__8968 = G__8988;
count__8969 = G__8989;
i__8970 = G__8990;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8993){
var map__8996 = p__8993;
var map__8996__$1 = ((((!((map__8996 == null)))?((((map__8996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8996):map__8996);
var on_jsload = cljs.core.get.call(null,map__8996__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8996,map__8996__$1,on_jsload){
return (function (p1__8991_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8991_SHARP_,".js");
});})(map__8996,map__8996__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8996,map__8996__$1,on_jsload){
return (function (p1__8992_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8992_SHARP_).makeUnique());
});})(js_files,map__8996,map__8996__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8996,map__8996__$1,on_jsload){
return (function() { 
var G__8998__delegate = function (_){
return on_jsload.call(null);
};
var G__8998 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8999__i = 0, G__8999__a = new Array(arguments.length -  0);
while (G__8999__i < G__8999__a.length) {G__8999__a[G__8999__i] = arguments[G__8999__i + 0]; ++G__8999__i;}
  _ = new cljs.core.IndexedSeq(G__8999__a,0);
} 
return G__8998__delegate.call(this,_);};
G__8998.cljs$lang$maxFixedArity = 0;
G__8998.cljs$lang$applyTo = (function (arglist__9000){
var _ = cljs.core.seq(arglist__9000);
return G__8998__delegate(_);
});
G__8998.cljs$core$IFn$_invoke$arity$variadic = G__8998__delegate;
return G__8998;
})()
;})(js_files,map__8996,map__8996__$1,on_jsload))
,((function (js_files,map__8996,map__8996__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8996,map__8996__$1,on_jsload))
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

var seq__9005_9009 = cljs.core.seq.call(null,things_to_log);
var chunk__9006_9010 = null;
var count__9007_9011 = (0);
var i__9008_9012 = (0);
while(true){
if((i__9008_9012 < count__9007_9011)){
var t_9013 = cljs.core._nth.call(null,chunk__9006_9010,i__9008_9012);
console.log(t_9013);

var G__9014 = seq__9005_9009;
var G__9015 = chunk__9006_9010;
var G__9016 = count__9007_9011;
var G__9017 = (i__9008_9012 + (1));
seq__9005_9009 = G__9014;
chunk__9006_9010 = G__9015;
count__9007_9011 = G__9016;
i__9008_9012 = G__9017;
continue;
} else {
var temp__4425__auto___9018 = cljs.core.seq.call(null,seq__9005_9009);
if(temp__4425__auto___9018){
var seq__9005_9019__$1 = temp__4425__auto___9018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9005_9019__$1)){
var c__5971__auto___9020 = cljs.core.chunk_first.call(null,seq__9005_9019__$1);
var G__9021 = cljs.core.chunk_rest.call(null,seq__9005_9019__$1);
var G__9022 = c__5971__auto___9020;
var G__9023 = cljs.core.count.call(null,c__5971__auto___9020);
var G__9024 = (0);
seq__9005_9009 = G__9021;
chunk__9006_9010 = G__9022;
count__9007_9011 = G__9023;
i__9008_9012 = G__9024;
continue;
} else {
var t_9025 = cljs.core.first.call(null,seq__9005_9019__$1);
console.log(t_9025);

var G__9026 = cljs.core.next.call(null,seq__9005_9019__$1);
var G__9027 = null;
var G__9028 = (0);
var G__9029 = (0);
seq__9005_9009 = G__9026;
chunk__9006_9010 = G__9027;
count__9007_9011 = G__9028;
i__9008_9012 = G__9029;
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

var G__9031 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9031,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9031);

adzerk.boot_reload.reload.reload_css.call(null,G__9031);

adzerk.boot_reload.reload.reload_img.call(null,G__9031);

return G__9031;
});

//# sourceMappingURL=reload.js.map