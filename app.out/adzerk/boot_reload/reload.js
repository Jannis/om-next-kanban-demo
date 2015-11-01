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
return (function (p1__8938_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8938_SHARP_),path);
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
var seq__8943 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8944 = null;
var count__8945 = (0);
var i__8946 = (0);
while(true){
if((i__8946 < count__8945)){
var s = cljs.core._nth.call(null,chunk__8944,i__8946);
var temp__4425__auto___8947 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8947)){
var sheet_8948 = temp__4425__auto___8947;
var temp__4425__auto___8949__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8948.href,changed);
if(cljs.core.truth_(temp__4425__auto___8949__$1)){
var href_uri_8950 = temp__4425__auto___8949__$1;
sheet_8948.ownerNode.href = href_uri_8950.makeUnique().toString();
} else {
}
} else {
}

var G__8951 = seq__8943;
var G__8952 = chunk__8944;
var G__8953 = count__8945;
var G__8954 = (i__8946 + (1));
seq__8943 = G__8951;
chunk__8944 = G__8952;
count__8945 = G__8953;
i__8946 = G__8954;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8943);
if(temp__4425__auto__){
var seq__8943__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8943__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8943__$1);
var G__8955 = cljs.core.chunk_rest.call(null,seq__8943__$1);
var G__8956 = c__5897__auto__;
var G__8957 = cljs.core.count.call(null,c__5897__auto__);
var G__8958 = (0);
seq__8943 = G__8955;
chunk__8944 = G__8956;
count__8945 = G__8957;
i__8946 = G__8958;
continue;
} else {
var s = cljs.core.first.call(null,seq__8943__$1);
var temp__4425__auto___8959__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8959__$1)){
var sheet_8960 = temp__4425__auto___8959__$1;
var temp__4425__auto___8961__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8960.href,changed);
if(cljs.core.truth_(temp__4425__auto___8961__$2)){
var href_uri_8962 = temp__4425__auto___8961__$2;
sheet_8960.ownerNode.href = href_uri_8962.makeUnique().toString();
} else {
}
} else {
}

var G__8963 = cljs.core.next.call(null,seq__8943__$1);
var G__8964 = null;
var G__8965 = (0);
var G__8966 = (0);
seq__8943 = G__8963;
chunk__8944 = G__8964;
count__8945 = G__8965;
i__8946 = G__8966;
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
var seq__8971 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8972 = null;
var count__8973 = (0);
var i__8974 = (0);
while(true){
if((i__8974 < count__8973)){
var s = cljs.core._nth.call(null,chunk__8972,i__8974);
var temp__4425__auto___8975 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8975)){
var image_8976 = temp__4425__auto___8975;
var temp__4425__auto___8977__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8976.src,changed);
if(cljs.core.truth_(temp__4425__auto___8977__$1)){
var href_uri_8978 = temp__4425__auto___8977__$1;
image_8976.src = href_uri_8978.makeUnique().toString();
} else {
}
} else {
}

var G__8979 = seq__8971;
var G__8980 = chunk__8972;
var G__8981 = count__8973;
var G__8982 = (i__8974 + (1));
seq__8971 = G__8979;
chunk__8972 = G__8980;
count__8973 = G__8981;
i__8974 = G__8982;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8971);
if(temp__4425__auto__){
var seq__8971__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8971__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8971__$1);
var G__8983 = cljs.core.chunk_rest.call(null,seq__8971__$1);
var G__8984 = c__5897__auto__;
var G__8985 = cljs.core.count.call(null,c__5897__auto__);
var G__8986 = (0);
seq__8971 = G__8983;
chunk__8972 = G__8984;
count__8973 = G__8985;
i__8974 = G__8986;
continue;
} else {
var s = cljs.core.first.call(null,seq__8971__$1);
var temp__4425__auto___8987__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8987__$1)){
var image_8988 = temp__4425__auto___8987__$1;
var temp__4425__auto___8989__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8988.src,changed);
if(cljs.core.truth_(temp__4425__auto___8989__$2)){
var href_uri_8990 = temp__4425__auto___8989__$2;
image_8988.src = href_uri_8990.makeUnique().toString();
} else {
}
} else {
}

var G__8991 = cljs.core.next.call(null,seq__8971__$1);
var G__8992 = null;
var G__8993 = (0);
var G__8994 = (0);
seq__8971 = G__8991;
chunk__8972 = G__8992;
count__8973 = G__8993;
i__8974 = G__8994;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8997){
var map__9000 = p__8997;
var map__9000__$1 = ((((!((map__9000 == null)))?((((map__9000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9000):map__9000);
var on_jsload = cljs.core.get.call(null,map__9000__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9000,map__9000__$1,on_jsload){
return (function (p1__8995_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8995_SHARP_,".js");
});})(map__9000,map__9000__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9000,map__9000__$1,on_jsload){
return (function (p1__8996_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8996_SHARP_).makeUnique());
});})(js_files,map__9000,map__9000__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9000,map__9000__$1,on_jsload){
return (function() { 
var G__9002__delegate = function (_){
return on_jsload.call(null);
};
var G__9002 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9003__i = 0, G__9003__a = new Array(arguments.length -  0);
while (G__9003__i < G__9003__a.length) {G__9003__a[G__9003__i] = arguments[G__9003__i + 0]; ++G__9003__i;}
  _ = new cljs.core.IndexedSeq(G__9003__a,0);
} 
return G__9002__delegate.call(this,_);};
G__9002.cljs$lang$maxFixedArity = 0;
G__9002.cljs$lang$applyTo = (function (arglist__9004){
var _ = cljs.core.seq(arglist__9004);
return G__9002__delegate(_);
});
G__9002.cljs$core$IFn$_invoke$arity$variadic = G__9002__delegate;
return G__9002;
})()
;})(js_files,map__9000,map__9000__$1,on_jsload))
,((function (js_files,map__9000,map__9000__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9000,map__9000__$1,on_jsload))
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

var seq__9009_9013 = cljs.core.seq.call(null,things_to_log);
var chunk__9010_9014 = null;
var count__9011_9015 = (0);
var i__9012_9016 = (0);
while(true){
if((i__9012_9016 < count__9011_9015)){
var t_9017 = cljs.core._nth.call(null,chunk__9010_9014,i__9012_9016);
console.log(t_9017);

var G__9018 = seq__9009_9013;
var G__9019 = chunk__9010_9014;
var G__9020 = count__9011_9015;
var G__9021 = (i__9012_9016 + (1));
seq__9009_9013 = G__9018;
chunk__9010_9014 = G__9019;
count__9011_9015 = G__9020;
i__9012_9016 = G__9021;
continue;
} else {
var temp__4425__auto___9022 = cljs.core.seq.call(null,seq__9009_9013);
if(temp__4425__auto___9022){
var seq__9009_9023__$1 = temp__4425__auto___9022;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9009_9023__$1)){
var c__5897__auto___9024 = cljs.core.chunk_first.call(null,seq__9009_9023__$1);
var G__9025 = cljs.core.chunk_rest.call(null,seq__9009_9023__$1);
var G__9026 = c__5897__auto___9024;
var G__9027 = cljs.core.count.call(null,c__5897__auto___9024);
var G__9028 = (0);
seq__9009_9013 = G__9025;
chunk__9010_9014 = G__9026;
count__9011_9015 = G__9027;
i__9012_9016 = G__9028;
continue;
} else {
var t_9029 = cljs.core.first.call(null,seq__9009_9023__$1);
console.log(t_9029);

var G__9030 = cljs.core.next.call(null,seq__9009_9023__$1);
var G__9031 = null;
var G__9032 = (0);
var G__9033 = (0);
seq__9009_9013 = G__9030;
chunk__9010_9014 = G__9031;
count__9011_9015 = G__9032;
i__9012_9016 = G__9033;
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

var G__9035 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9035,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9035);

adzerk.boot_reload.reload.reload_css.call(null,G__9035);

adzerk.boot_reload.reload.reload_img.call(null,G__9035);

return G__9035;
});

//# sourceMappingURL=reload.js.map