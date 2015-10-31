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
return (function (p1__8816_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8816_SHARP_),path);
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
var seq__8821 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8822 = null;
var count__8823 = (0);
var i__8824 = (0);
while(true){
if((i__8824 < count__8823)){
var s = cljs.core._nth.call(null,chunk__8822,i__8824);
var temp__4425__auto___8825 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8825)){
var sheet_8826 = temp__4425__auto___8825;
var temp__4425__auto___8827__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8826.href,changed);
if(cljs.core.truth_(temp__4425__auto___8827__$1)){
var href_uri_8828 = temp__4425__auto___8827__$1;
sheet_8826.ownerNode.href = href_uri_8828.makeUnique().toString();
} else {
}
} else {
}

var G__8829 = seq__8821;
var G__8830 = chunk__8822;
var G__8831 = count__8823;
var G__8832 = (i__8824 + (1));
seq__8821 = G__8829;
chunk__8822 = G__8830;
count__8823 = G__8831;
i__8824 = G__8832;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8821);
if(temp__4425__auto__){
var seq__8821__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8821__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8821__$1);
var G__8833 = cljs.core.chunk_rest.call(null,seq__8821__$1);
var G__8834 = c__5897__auto__;
var G__8835 = cljs.core.count.call(null,c__5897__auto__);
var G__8836 = (0);
seq__8821 = G__8833;
chunk__8822 = G__8834;
count__8823 = G__8835;
i__8824 = G__8836;
continue;
} else {
var s = cljs.core.first.call(null,seq__8821__$1);
var temp__4425__auto___8837__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8837__$1)){
var sheet_8838 = temp__4425__auto___8837__$1;
var temp__4425__auto___8839__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8838.href,changed);
if(cljs.core.truth_(temp__4425__auto___8839__$2)){
var href_uri_8840 = temp__4425__auto___8839__$2;
sheet_8838.ownerNode.href = href_uri_8840.makeUnique().toString();
} else {
}
} else {
}

var G__8841 = cljs.core.next.call(null,seq__8821__$1);
var G__8842 = null;
var G__8843 = (0);
var G__8844 = (0);
seq__8821 = G__8841;
chunk__8822 = G__8842;
count__8823 = G__8843;
i__8824 = G__8844;
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
var seq__8849 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8850 = null;
var count__8851 = (0);
var i__8852 = (0);
while(true){
if((i__8852 < count__8851)){
var s = cljs.core._nth.call(null,chunk__8850,i__8852);
var temp__4425__auto___8853 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8853)){
var image_8854 = temp__4425__auto___8853;
var temp__4425__auto___8855__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8854.src,changed);
if(cljs.core.truth_(temp__4425__auto___8855__$1)){
var href_uri_8856 = temp__4425__auto___8855__$1;
image_8854.src = href_uri_8856.makeUnique().toString();
} else {
}
} else {
}

var G__8857 = seq__8849;
var G__8858 = chunk__8850;
var G__8859 = count__8851;
var G__8860 = (i__8852 + (1));
seq__8849 = G__8857;
chunk__8850 = G__8858;
count__8851 = G__8859;
i__8852 = G__8860;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8849);
if(temp__4425__auto__){
var seq__8849__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8849__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8849__$1);
var G__8861 = cljs.core.chunk_rest.call(null,seq__8849__$1);
var G__8862 = c__5897__auto__;
var G__8863 = cljs.core.count.call(null,c__5897__auto__);
var G__8864 = (0);
seq__8849 = G__8861;
chunk__8850 = G__8862;
count__8851 = G__8863;
i__8852 = G__8864;
continue;
} else {
var s = cljs.core.first.call(null,seq__8849__$1);
var temp__4425__auto___8865__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8865__$1)){
var image_8866 = temp__4425__auto___8865__$1;
var temp__4425__auto___8867__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8866.src,changed);
if(cljs.core.truth_(temp__4425__auto___8867__$2)){
var href_uri_8868 = temp__4425__auto___8867__$2;
image_8866.src = href_uri_8868.makeUnique().toString();
} else {
}
} else {
}

var G__8869 = cljs.core.next.call(null,seq__8849__$1);
var G__8870 = null;
var G__8871 = (0);
var G__8872 = (0);
seq__8849 = G__8869;
chunk__8850 = G__8870;
count__8851 = G__8871;
i__8852 = G__8872;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8875){
var map__8878 = p__8875;
var map__8878__$1 = ((((!((map__8878 == null)))?((((map__8878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8878):map__8878);
var on_jsload = cljs.core.get.call(null,map__8878__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8878,map__8878__$1,on_jsload){
return (function (p1__8873_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8873_SHARP_,".js");
});})(map__8878,map__8878__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8878,map__8878__$1,on_jsload){
return (function (p1__8874_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8874_SHARP_).makeUnique());
});})(js_files,map__8878,map__8878__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8878,map__8878__$1,on_jsload){
return (function() { 
var G__8880__delegate = function (_){
return on_jsload.call(null);
};
var G__8880 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8881__i = 0, G__8881__a = new Array(arguments.length -  0);
while (G__8881__i < G__8881__a.length) {G__8881__a[G__8881__i] = arguments[G__8881__i + 0]; ++G__8881__i;}
  _ = new cljs.core.IndexedSeq(G__8881__a,0);
} 
return G__8880__delegate.call(this,_);};
G__8880.cljs$lang$maxFixedArity = 0;
G__8880.cljs$lang$applyTo = (function (arglist__8882){
var _ = cljs.core.seq(arglist__8882);
return G__8880__delegate(_);
});
G__8880.cljs$core$IFn$_invoke$arity$variadic = G__8880__delegate;
return G__8880;
})()
;})(js_files,map__8878,map__8878__$1,on_jsload))
,((function (js_files,map__8878,map__8878__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8878,map__8878__$1,on_jsload))
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

var seq__8887_8891 = cljs.core.seq.call(null,things_to_log);
var chunk__8888_8892 = null;
var count__8889_8893 = (0);
var i__8890_8894 = (0);
while(true){
if((i__8890_8894 < count__8889_8893)){
var t_8895 = cljs.core._nth.call(null,chunk__8888_8892,i__8890_8894);
console.log(t_8895);

var G__8896 = seq__8887_8891;
var G__8897 = chunk__8888_8892;
var G__8898 = count__8889_8893;
var G__8899 = (i__8890_8894 + (1));
seq__8887_8891 = G__8896;
chunk__8888_8892 = G__8897;
count__8889_8893 = G__8898;
i__8890_8894 = G__8899;
continue;
} else {
var temp__4425__auto___8900 = cljs.core.seq.call(null,seq__8887_8891);
if(temp__4425__auto___8900){
var seq__8887_8901__$1 = temp__4425__auto___8900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8887_8901__$1)){
var c__5897__auto___8902 = cljs.core.chunk_first.call(null,seq__8887_8901__$1);
var G__8903 = cljs.core.chunk_rest.call(null,seq__8887_8901__$1);
var G__8904 = c__5897__auto___8902;
var G__8905 = cljs.core.count.call(null,c__5897__auto___8902);
var G__8906 = (0);
seq__8887_8891 = G__8903;
chunk__8888_8892 = G__8904;
count__8889_8893 = G__8905;
i__8890_8894 = G__8906;
continue;
} else {
var t_8907 = cljs.core.first.call(null,seq__8887_8901__$1);
console.log(t_8907);

var G__8908 = cljs.core.next.call(null,seq__8887_8901__$1);
var G__8909 = null;
var G__8910 = (0);
var G__8911 = (0);
seq__8887_8891 = G__8908;
chunk__8888_8892 = G__8909;
count__8889_8893 = G__8910;
i__8890_8894 = G__8911;
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

var G__8913 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8913,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8913);

adzerk.boot_reload.reload.reload_css.call(null,G__8913);

adzerk.boot_reload.reload.reload_img.call(null,G__8913);

return G__8913;
});

//# sourceMappingURL=reload.js.map