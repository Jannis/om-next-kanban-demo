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
return (function (p1__9048_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9048_SHARP_),path);
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
var seq__9053 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9054 = null;
var count__9055 = (0);
var i__9056 = (0);
while(true){
if((i__9056 < count__9055)){
var s = cljs.core._nth.call(null,chunk__9054,i__9056);
var temp__4425__auto___9057 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9057)){
var sheet_9058 = temp__4425__auto___9057;
var temp__4425__auto___9059__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9058.href,changed);
if(cljs.core.truth_(temp__4425__auto___9059__$1)){
var href_uri_9060 = temp__4425__auto___9059__$1;
sheet_9058.ownerNode.href = href_uri_9060.makeUnique().toString();
} else {
}
} else {
}

var G__9061 = seq__9053;
var G__9062 = chunk__9054;
var G__9063 = count__9055;
var G__9064 = (i__9056 + (1));
seq__9053 = G__9061;
chunk__9054 = G__9062;
count__9055 = G__9063;
i__9056 = G__9064;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9053);
if(temp__4425__auto__){
var seq__9053__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9053__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__9053__$1);
var G__9065 = cljs.core.chunk_rest.call(null,seq__9053__$1);
var G__9066 = c__5789__auto__;
var G__9067 = cljs.core.count.call(null,c__5789__auto__);
var G__9068 = (0);
seq__9053 = G__9065;
chunk__9054 = G__9066;
count__9055 = G__9067;
i__9056 = G__9068;
continue;
} else {
var s = cljs.core.first.call(null,seq__9053__$1);
var temp__4425__auto___9069__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9069__$1)){
var sheet_9070 = temp__4425__auto___9069__$1;
var temp__4425__auto___9071__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9070.href,changed);
if(cljs.core.truth_(temp__4425__auto___9071__$2)){
var href_uri_9072 = temp__4425__auto___9071__$2;
sheet_9070.ownerNode.href = href_uri_9072.makeUnique().toString();
} else {
}
} else {
}

var G__9073 = cljs.core.next.call(null,seq__9053__$1);
var G__9074 = null;
var G__9075 = (0);
var G__9076 = (0);
seq__9053 = G__9073;
chunk__9054 = G__9074;
count__9055 = G__9075;
i__9056 = G__9076;
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
var seq__9081 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9082 = null;
var count__9083 = (0);
var i__9084 = (0);
while(true){
if((i__9084 < count__9083)){
var s = cljs.core._nth.call(null,chunk__9082,i__9084);
var temp__4425__auto___9085 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9085)){
var image_9086 = temp__4425__auto___9085;
var temp__4425__auto___9087__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9086.src,changed);
if(cljs.core.truth_(temp__4425__auto___9087__$1)){
var href_uri_9088 = temp__4425__auto___9087__$1;
image_9086.src = href_uri_9088.makeUnique().toString();
} else {
}
} else {
}

var G__9089 = seq__9081;
var G__9090 = chunk__9082;
var G__9091 = count__9083;
var G__9092 = (i__9084 + (1));
seq__9081 = G__9089;
chunk__9082 = G__9090;
count__9083 = G__9091;
i__9084 = G__9092;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9081);
if(temp__4425__auto__){
var seq__9081__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9081__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__9081__$1);
var G__9093 = cljs.core.chunk_rest.call(null,seq__9081__$1);
var G__9094 = c__5789__auto__;
var G__9095 = cljs.core.count.call(null,c__5789__auto__);
var G__9096 = (0);
seq__9081 = G__9093;
chunk__9082 = G__9094;
count__9083 = G__9095;
i__9084 = G__9096;
continue;
} else {
var s = cljs.core.first.call(null,seq__9081__$1);
var temp__4425__auto___9097__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9097__$1)){
var image_9098 = temp__4425__auto___9097__$1;
var temp__4425__auto___9099__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9098.src,changed);
if(cljs.core.truth_(temp__4425__auto___9099__$2)){
var href_uri_9100 = temp__4425__auto___9099__$2;
image_9098.src = href_uri_9100.makeUnique().toString();
} else {
}
} else {
}

var G__9101 = cljs.core.next.call(null,seq__9081__$1);
var G__9102 = null;
var G__9103 = (0);
var G__9104 = (0);
seq__9081 = G__9101;
chunk__9082 = G__9102;
count__9083 = G__9103;
i__9084 = G__9104;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9107){
var map__9110 = p__9107;
var map__9110__$1 = ((((!((map__9110 == null)))?((((map__9110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9110):map__9110);
var on_jsload = cljs.core.get.call(null,map__9110__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9110,map__9110__$1,on_jsload){
return (function (p1__9105_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9105_SHARP_,".js");
});})(map__9110,map__9110__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9110,map__9110__$1,on_jsload){
return (function (p1__9106_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__9106_SHARP_).makeUnique());
});})(js_files,map__9110,map__9110__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9110,map__9110__$1,on_jsload){
return (function() { 
var G__9112__delegate = function (_){
return on_jsload.call(null);
};
var G__9112 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9113__i = 0, G__9113__a = new Array(arguments.length -  0);
while (G__9113__i < G__9113__a.length) {G__9113__a[G__9113__i] = arguments[G__9113__i + 0]; ++G__9113__i;}
  _ = new cljs.core.IndexedSeq(G__9113__a,0);
} 
return G__9112__delegate.call(this,_);};
G__9112.cljs$lang$maxFixedArity = 0;
G__9112.cljs$lang$applyTo = (function (arglist__9114){
var _ = cljs.core.seq(arglist__9114);
return G__9112__delegate(_);
});
G__9112.cljs$core$IFn$_invoke$arity$variadic = G__9112__delegate;
return G__9112;
})()
;})(js_files,map__9110,map__9110__$1,on_jsload))
,((function (js_files,map__9110,map__9110__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9110,map__9110__$1,on_jsload))
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

var seq__9119_9123 = cljs.core.seq.call(null,things_to_log);
var chunk__9120_9124 = null;
var count__9121_9125 = (0);
var i__9122_9126 = (0);
while(true){
if((i__9122_9126 < count__9121_9125)){
var t_9127 = cljs.core._nth.call(null,chunk__9120_9124,i__9122_9126);
console.log(t_9127);

var G__9128 = seq__9119_9123;
var G__9129 = chunk__9120_9124;
var G__9130 = count__9121_9125;
var G__9131 = (i__9122_9126 + (1));
seq__9119_9123 = G__9128;
chunk__9120_9124 = G__9129;
count__9121_9125 = G__9130;
i__9122_9126 = G__9131;
continue;
} else {
var temp__4425__auto___9132 = cljs.core.seq.call(null,seq__9119_9123);
if(temp__4425__auto___9132){
var seq__9119_9133__$1 = temp__4425__auto___9132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9119_9133__$1)){
var c__5789__auto___9134 = cljs.core.chunk_first.call(null,seq__9119_9133__$1);
var G__9135 = cljs.core.chunk_rest.call(null,seq__9119_9133__$1);
var G__9136 = c__5789__auto___9134;
var G__9137 = cljs.core.count.call(null,c__5789__auto___9134);
var G__9138 = (0);
seq__9119_9123 = G__9135;
chunk__9120_9124 = G__9136;
count__9121_9125 = G__9137;
i__9122_9126 = G__9138;
continue;
} else {
var t_9139 = cljs.core.first.call(null,seq__9119_9133__$1);
console.log(t_9139);

var G__9140 = cljs.core.next.call(null,seq__9119_9133__$1);
var G__9141 = null;
var G__9142 = (0);
var G__9143 = (0);
seq__9119_9123 = G__9140;
chunk__9120_9124 = G__9141;
count__9121_9125 = G__9142;
i__9122_9126 = G__9143;
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

var G__9145 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9145,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9145);

adzerk.boot_reload.reload.reload_css.call(null,G__9145);

adzerk.boot_reload.reload.reload_img.call(null,G__9145);

return G__9145;
});

//# sourceMappingURL=reload.js.map