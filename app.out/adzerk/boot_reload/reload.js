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
return (function (p1__8810_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8810_SHARP_),path);
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
var seq__8815 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8816 = null;
var count__8817 = (0);
var i__8818 = (0);
while(true){
if((i__8818 < count__8817)){
var s = cljs.core._nth.call(null,chunk__8816,i__8818);
var temp__4425__auto___8819 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8819)){
var sheet_8820 = temp__4425__auto___8819;
var temp__4425__auto___8821__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8820.href,changed);
if(cljs.core.truth_(temp__4425__auto___8821__$1)){
var href_uri_8822 = temp__4425__auto___8821__$1;
sheet_8820.ownerNode.href = href_uri_8822.makeUnique().toString();
} else {
}
} else {
}

var G__8823 = seq__8815;
var G__8824 = chunk__8816;
var G__8825 = count__8817;
var G__8826 = (i__8818 + (1));
seq__8815 = G__8823;
chunk__8816 = G__8824;
count__8817 = G__8825;
i__8818 = G__8826;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8815);
if(temp__4425__auto__){
var seq__8815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8815__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8815__$1);
var G__8827 = cljs.core.chunk_rest.call(null,seq__8815__$1);
var G__8828 = c__5897__auto__;
var G__8829 = cljs.core.count.call(null,c__5897__auto__);
var G__8830 = (0);
seq__8815 = G__8827;
chunk__8816 = G__8828;
count__8817 = G__8829;
i__8818 = G__8830;
continue;
} else {
var s = cljs.core.first.call(null,seq__8815__$1);
var temp__4425__auto___8831__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8831__$1)){
var sheet_8832 = temp__4425__auto___8831__$1;
var temp__4425__auto___8833__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8832.href,changed);
if(cljs.core.truth_(temp__4425__auto___8833__$2)){
var href_uri_8834 = temp__4425__auto___8833__$2;
sheet_8832.ownerNode.href = href_uri_8834.makeUnique().toString();
} else {
}
} else {
}

var G__8835 = cljs.core.next.call(null,seq__8815__$1);
var G__8836 = null;
var G__8837 = (0);
var G__8838 = (0);
seq__8815 = G__8835;
chunk__8816 = G__8836;
count__8817 = G__8837;
i__8818 = G__8838;
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
var seq__8843 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8844 = null;
var count__8845 = (0);
var i__8846 = (0);
while(true){
if((i__8846 < count__8845)){
var s = cljs.core._nth.call(null,chunk__8844,i__8846);
var temp__4425__auto___8847 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8847)){
var image_8848 = temp__4425__auto___8847;
var temp__4425__auto___8849__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8848.src,changed);
if(cljs.core.truth_(temp__4425__auto___8849__$1)){
var href_uri_8850 = temp__4425__auto___8849__$1;
image_8848.src = href_uri_8850.makeUnique().toString();
} else {
}
} else {
}

var G__8851 = seq__8843;
var G__8852 = chunk__8844;
var G__8853 = count__8845;
var G__8854 = (i__8846 + (1));
seq__8843 = G__8851;
chunk__8844 = G__8852;
count__8845 = G__8853;
i__8846 = G__8854;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8843);
if(temp__4425__auto__){
var seq__8843__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8843__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8843__$1);
var G__8855 = cljs.core.chunk_rest.call(null,seq__8843__$1);
var G__8856 = c__5897__auto__;
var G__8857 = cljs.core.count.call(null,c__5897__auto__);
var G__8858 = (0);
seq__8843 = G__8855;
chunk__8844 = G__8856;
count__8845 = G__8857;
i__8846 = G__8858;
continue;
} else {
var s = cljs.core.first.call(null,seq__8843__$1);
var temp__4425__auto___8859__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8859__$1)){
var image_8860 = temp__4425__auto___8859__$1;
var temp__4425__auto___8861__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8860.src,changed);
if(cljs.core.truth_(temp__4425__auto___8861__$2)){
var href_uri_8862 = temp__4425__auto___8861__$2;
image_8860.src = href_uri_8862.makeUnique().toString();
} else {
}
} else {
}

var G__8863 = cljs.core.next.call(null,seq__8843__$1);
var G__8864 = null;
var G__8865 = (0);
var G__8866 = (0);
seq__8843 = G__8863;
chunk__8844 = G__8864;
count__8845 = G__8865;
i__8846 = G__8866;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8869){
var map__8872 = p__8869;
var map__8872__$1 = ((((!((map__8872 == null)))?((((map__8872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8872):map__8872);
var on_jsload = cljs.core.get.call(null,map__8872__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8872,map__8872__$1,on_jsload){
return (function (p1__8867_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8867_SHARP_,".js");
});})(map__8872,map__8872__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8872,map__8872__$1,on_jsload){
return (function (p1__8868_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8868_SHARP_).makeUnique());
});})(js_files,map__8872,map__8872__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8872,map__8872__$1,on_jsload){
return (function() { 
var G__8874__delegate = function (_){
return on_jsload.call(null);
};
var G__8874 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8875__i = 0, G__8875__a = new Array(arguments.length -  0);
while (G__8875__i < G__8875__a.length) {G__8875__a[G__8875__i] = arguments[G__8875__i + 0]; ++G__8875__i;}
  _ = new cljs.core.IndexedSeq(G__8875__a,0);
} 
return G__8874__delegate.call(this,_);};
G__8874.cljs$lang$maxFixedArity = 0;
G__8874.cljs$lang$applyTo = (function (arglist__8876){
var _ = cljs.core.seq(arglist__8876);
return G__8874__delegate(_);
});
G__8874.cljs$core$IFn$_invoke$arity$variadic = G__8874__delegate;
return G__8874;
})()
;})(js_files,map__8872,map__8872__$1,on_jsload))
,((function (js_files,map__8872,map__8872__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8872,map__8872__$1,on_jsload))
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

var seq__8881_8885 = cljs.core.seq.call(null,things_to_log);
var chunk__8882_8886 = null;
var count__8883_8887 = (0);
var i__8884_8888 = (0);
while(true){
if((i__8884_8888 < count__8883_8887)){
var t_8889 = cljs.core._nth.call(null,chunk__8882_8886,i__8884_8888);
console.log(t_8889);

var G__8890 = seq__8881_8885;
var G__8891 = chunk__8882_8886;
var G__8892 = count__8883_8887;
var G__8893 = (i__8884_8888 + (1));
seq__8881_8885 = G__8890;
chunk__8882_8886 = G__8891;
count__8883_8887 = G__8892;
i__8884_8888 = G__8893;
continue;
} else {
var temp__4425__auto___8894 = cljs.core.seq.call(null,seq__8881_8885);
if(temp__4425__auto___8894){
var seq__8881_8895__$1 = temp__4425__auto___8894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8881_8895__$1)){
var c__5897__auto___8896 = cljs.core.chunk_first.call(null,seq__8881_8895__$1);
var G__8897 = cljs.core.chunk_rest.call(null,seq__8881_8895__$1);
var G__8898 = c__5897__auto___8896;
var G__8899 = cljs.core.count.call(null,c__5897__auto___8896);
var G__8900 = (0);
seq__8881_8885 = G__8897;
chunk__8882_8886 = G__8898;
count__8883_8887 = G__8899;
i__8884_8888 = G__8900;
continue;
} else {
var t_8901 = cljs.core.first.call(null,seq__8881_8895__$1);
console.log(t_8901);

var G__8902 = cljs.core.next.call(null,seq__8881_8895__$1);
var G__8903 = null;
var G__8904 = (0);
var G__8905 = (0);
seq__8881_8885 = G__8902;
chunk__8882_8886 = G__8903;
count__8883_8887 = G__8904;
i__8884_8888 = G__8905;
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

var G__8907 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8907,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8907);

adzerk.boot_reload.reload.reload_css.call(null,G__8907);

adzerk.boot_reload.reload.reload_img.call(null,G__8907);

return G__8907;
});

//# sourceMappingURL=reload.js.map