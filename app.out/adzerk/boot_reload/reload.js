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
return (function (p1__9145_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9145_SHARP_),path);
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
var seq__9150 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9151 = null;
var count__9152 = (0);
var i__9153 = (0);
while(true){
if((i__9153 < count__9152)){
var s = cljs.core._nth.call(null,chunk__9151,i__9153);
var temp__4425__auto___9154 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9154)){
var sheet_9155 = temp__4425__auto___9154;
var temp__4425__auto___9156__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9155.href,changed);
if(cljs.core.truth_(temp__4425__auto___9156__$1)){
var href_uri_9157 = temp__4425__auto___9156__$1;
sheet_9155.ownerNode.href = href_uri_9157.makeUnique().toString();
} else {
}
} else {
}

var G__9158 = seq__9150;
var G__9159 = chunk__9151;
var G__9160 = count__9152;
var G__9161 = (i__9153 + (1));
seq__9150 = G__9158;
chunk__9151 = G__9159;
count__9152 = G__9160;
i__9153 = G__9161;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9150);
if(temp__4425__auto__){
var seq__9150__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9150__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__9150__$1);
var G__9162 = cljs.core.chunk_rest.call(null,seq__9150__$1);
var G__9163 = c__5789__auto__;
var G__9164 = cljs.core.count.call(null,c__5789__auto__);
var G__9165 = (0);
seq__9150 = G__9162;
chunk__9151 = G__9163;
count__9152 = G__9164;
i__9153 = G__9165;
continue;
} else {
var s = cljs.core.first.call(null,seq__9150__$1);
var temp__4425__auto___9166__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9166__$1)){
var sheet_9167 = temp__4425__auto___9166__$1;
var temp__4425__auto___9168__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9167.href,changed);
if(cljs.core.truth_(temp__4425__auto___9168__$2)){
var href_uri_9169 = temp__4425__auto___9168__$2;
sheet_9167.ownerNode.href = href_uri_9169.makeUnique().toString();
} else {
}
} else {
}

var G__9170 = cljs.core.next.call(null,seq__9150__$1);
var G__9171 = null;
var G__9172 = (0);
var G__9173 = (0);
seq__9150 = G__9170;
chunk__9151 = G__9171;
count__9152 = G__9172;
i__9153 = G__9173;
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
var seq__9178 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9179 = null;
var count__9180 = (0);
var i__9181 = (0);
while(true){
if((i__9181 < count__9180)){
var s = cljs.core._nth.call(null,chunk__9179,i__9181);
var temp__4425__auto___9182 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9182)){
var image_9183 = temp__4425__auto___9182;
var temp__4425__auto___9184__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9183.src,changed);
if(cljs.core.truth_(temp__4425__auto___9184__$1)){
var href_uri_9185 = temp__4425__auto___9184__$1;
image_9183.src = href_uri_9185.makeUnique().toString();
} else {
}
} else {
}

var G__9186 = seq__9178;
var G__9187 = chunk__9179;
var G__9188 = count__9180;
var G__9189 = (i__9181 + (1));
seq__9178 = G__9186;
chunk__9179 = G__9187;
count__9180 = G__9188;
i__9181 = G__9189;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9178);
if(temp__4425__auto__){
var seq__9178__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9178__$1)){
var c__5789__auto__ = cljs.core.chunk_first.call(null,seq__9178__$1);
var G__9190 = cljs.core.chunk_rest.call(null,seq__9178__$1);
var G__9191 = c__5789__auto__;
var G__9192 = cljs.core.count.call(null,c__5789__auto__);
var G__9193 = (0);
seq__9178 = G__9190;
chunk__9179 = G__9191;
count__9180 = G__9192;
i__9181 = G__9193;
continue;
} else {
var s = cljs.core.first.call(null,seq__9178__$1);
var temp__4425__auto___9194__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9194__$1)){
var image_9195 = temp__4425__auto___9194__$1;
var temp__4425__auto___9196__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9195.src,changed);
if(cljs.core.truth_(temp__4425__auto___9196__$2)){
var href_uri_9197 = temp__4425__auto___9196__$2;
image_9195.src = href_uri_9197.makeUnique().toString();
} else {
}
} else {
}

var G__9198 = cljs.core.next.call(null,seq__9178__$1);
var G__9199 = null;
var G__9200 = (0);
var G__9201 = (0);
seq__9178 = G__9198;
chunk__9179 = G__9199;
count__9180 = G__9200;
i__9181 = G__9201;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9204){
var map__9207 = p__9204;
var map__9207__$1 = ((((!((map__9207 == null)))?((((map__9207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9207):map__9207);
var on_jsload = cljs.core.get.call(null,map__9207__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9207,map__9207__$1,on_jsload){
return (function (p1__9202_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9202_SHARP_,".js");
});})(map__9207,map__9207__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9207,map__9207__$1,on_jsload){
return (function (p1__9203_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__9203_SHARP_).makeUnique());
});})(js_files,map__9207,map__9207__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9207,map__9207__$1,on_jsload){
return (function() { 
var G__9209__delegate = function (_){
return on_jsload.call(null);
};
var G__9209 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9210__i = 0, G__9210__a = new Array(arguments.length -  0);
while (G__9210__i < G__9210__a.length) {G__9210__a[G__9210__i] = arguments[G__9210__i + 0]; ++G__9210__i;}
  _ = new cljs.core.IndexedSeq(G__9210__a,0);
} 
return G__9209__delegate.call(this,_);};
G__9209.cljs$lang$maxFixedArity = 0;
G__9209.cljs$lang$applyTo = (function (arglist__9211){
var _ = cljs.core.seq(arglist__9211);
return G__9209__delegate(_);
});
G__9209.cljs$core$IFn$_invoke$arity$variadic = G__9209__delegate;
return G__9209;
})()
;})(js_files,map__9207,map__9207__$1,on_jsload))
,((function (js_files,map__9207,map__9207__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9207,map__9207__$1,on_jsload))
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

var seq__9216_9220 = cljs.core.seq.call(null,things_to_log);
var chunk__9217_9221 = null;
var count__9218_9222 = (0);
var i__9219_9223 = (0);
while(true){
if((i__9219_9223 < count__9218_9222)){
var t_9224 = cljs.core._nth.call(null,chunk__9217_9221,i__9219_9223);
console.log(t_9224);

var G__9225 = seq__9216_9220;
var G__9226 = chunk__9217_9221;
var G__9227 = count__9218_9222;
var G__9228 = (i__9219_9223 + (1));
seq__9216_9220 = G__9225;
chunk__9217_9221 = G__9226;
count__9218_9222 = G__9227;
i__9219_9223 = G__9228;
continue;
} else {
var temp__4425__auto___9229 = cljs.core.seq.call(null,seq__9216_9220);
if(temp__4425__auto___9229){
var seq__9216_9230__$1 = temp__4425__auto___9229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9216_9230__$1)){
var c__5789__auto___9231 = cljs.core.chunk_first.call(null,seq__9216_9230__$1);
var G__9232 = cljs.core.chunk_rest.call(null,seq__9216_9230__$1);
var G__9233 = c__5789__auto___9231;
var G__9234 = cljs.core.count.call(null,c__5789__auto___9231);
var G__9235 = (0);
seq__9216_9220 = G__9232;
chunk__9217_9221 = G__9233;
count__9218_9222 = G__9234;
i__9219_9223 = G__9235;
continue;
} else {
var t_9236 = cljs.core.first.call(null,seq__9216_9230__$1);
console.log(t_9236);

var G__9237 = cljs.core.next.call(null,seq__9216_9230__$1);
var G__9238 = null;
var G__9239 = (0);
var G__9240 = (0);
seq__9216_9220 = G__9237;
chunk__9217_9221 = G__9238;
count__9218_9222 = G__9239;
i__9219_9223 = G__9240;
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

var G__9242 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__9242,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__9242);

adzerk.boot_reload.reload.reload_css.call(null,G__9242);

adzerk.boot_reload.reload.reload_img.call(null,G__9242);

return G__9242;
});

//# sourceMappingURL=reload.js.map