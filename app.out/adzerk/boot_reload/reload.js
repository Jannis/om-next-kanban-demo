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
return (function (p1__15835_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15835_SHARP_),path);
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
var seq__15840 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15841 = null;
var count__15842 = (0);
var i__15843 = (0);
while(true){
if((i__15843 < count__15842)){
var s = cljs.core._nth.call(null,chunk__15841,i__15843);
var temp__4425__auto___15844 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15844)){
var sheet_15845 = temp__4425__auto___15844;
var temp__4425__auto___15846__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15845.href,changed);
if(cljs.core.truth_(temp__4425__auto___15846__$1)){
var href_uri_15847 = temp__4425__auto___15846__$1;
sheet_15845.ownerNode.href = href_uri_15847.makeUnique().toString();
} else {
}
} else {
}

var G__15848 = seq__15840;
var G__15849 = chunk__15841;
var G__15850 = count__15842;
var G__15851 = (i__15843 + (1));
seq__15840 = G__15848;
chunk__15841 = G__15849;
count__15842 = G__15850;
i__15843 = G__15851;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15840);
if(temp__4425__auto__){
var seq__15840__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15840__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15840__$1);
var G__15852 = cljs.core.chunk_rest.call(null,seq__15840__$1);
var G__15853 = c__5897__auto__;
var G__15854 = cljs.core.count.call(null,c__5897__auto__);
var G__15855 = (0);
seq__15840 = G__15852;
chunk__15841 = G__15853;
count__15842 = G__15854;
i__15843 = G__15855;
continue;
} else {
var s = cljs.core.first.call(null,seq__15840__$1);
var temp__4425__auto___15856__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15856__$1)){
var sheet_15857 = temp__4425__auto___15856__$1;
var temp__4425__auto___15858__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15857.href,changed);
if(cljs.core.truth_(temp__4425__auto___15858__$2)){
var href_uri_15859 = temp__4425__auto___15858__$2;
sheet_15857.ownerNode.href = href_uri_15859.makeUnique().toString();
} else {
}
} else {
}

var G__15860 = cljs.core.next.call(null,seq__15840__$1);
var G__15861 = null;
var G__15862 = (0);
var G__15863 = (0);
seq__15840 = G__15860;
chunk__15841 = G__15861;
count__15842 = G__15862;
i__15843 = G__15863;
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
var seq__15868 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15869 = null;
var count__15870 = (0);
var i__15871 = (0);
while(true){
if((i__15871 < count__15870)){
var s = cljs.core._nth.call(null,chunk__15869,i__15871);
var temp__4425__auto___15872 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15872)){
var image_15873 = temp__4425__auto___15872;
var temp__4425__auto___15874__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15873.src,changed);
if(cljs.core.truth_(temp__4425__auto___15874__$1)){
var href_uri_15875 = temp__4425__auto___15874__$1;
image_15873.src = href_uri_15875.makeUnique().toString();
} else {
}
} else {
}

var G__15876 = seq__15868;
var G__15877 = chunk__15869;
var G__15878 = count__15870;
var G__15879 = (i__15871 + (1));
seq__15868 = G__15876;
chunk__15869 = G__15877;
count__15870 = G__15878;
i__15871 = G__15879;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15868);
if(temp__4425__auto__){
var seq__15868__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15868__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15868__$1);
var G__15880 = cljs.core.chunk_rest.call(null,seq__15868__$1);
var G__15881 = c__5897__auto__;
var G__15882 = cljs.core.count.call(null,c__5897__auto__);
var G__15883 = (0);
seq__15868 = G__15880;
chunk__15869 = G__15881;
count__15870 = G__15882;
i__15871 = G__15883;
continue;
} else {
var s = cljs.core.first.call(null,seq__15868__$1);
var temp__4425__auto___15884__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15884__$1)){
var image_15885 = temp__4425__auto___15884__$1;
var temp__4425__auto___15886__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15885.src,changed);
if(cljs.core.truth_(temp__4425__auto___15886__$2)){
var href_uri_15887 = temp__4425__auto___15886__$2;
image_15885.src = href_uri_15887.makeUnique().toString();
} else {
}
} else {
}

var G__15888 = cljs.core.next.call(null,seq__15868__$1);
var G__15889 = null;
var G__15890 = (0);
var G__15891 = (0);
seq__15868 = G__15888;
chunk__15869 = G__15889;
count__15870 = G__15890;
i__15871 = G__15891;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15894){
var map__15897 = p__15894;
var map__15897__$1 = ((((!((map__15897 == null)))?((((map__15897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15897):map__15897);
var on_jsload = cljs.core.get.call(null,map__15897__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15897,map__15897__$1,on_jsload){
return (function (p1__15892_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15892_SHARP_,".js");
});})(map__15897,map__15897__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15897,map__15897__$1,on_jsload){
return (function (p1__15893_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15893_SHARP_).makeUnique());
});})(js_files,map__15897,map__15897__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15897,map__15897__$1,on_jsload){
return (function() { 
var G__15899__delegate = function (_){
return on_jsload.call(null);
};
var G__15899 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15900__i = 0, G__15900__a = new Array(arguments.length -  0);
while (G__15900__i < G__15900__a.length) {G__15900__a[G__15900__i] = arguments[G__15900__i + 0]; ++G__15900__i;}
  _ = new cljs.core.IndexedSeq(G__15900__a,0);
} 
return G__15899__delegate.call(this,_);};
G__15899.cljs$lang$maxFixedArity = 0;
G__15899.cljs$lang$applyTo = (function (arglist__15901){
var _ = cljs.core.seq(arglist__15901);
return G__15899__delegate(_);
});
G__15899.cljs$core$IFn$_invoke$arity$variadic = G__15899__delegate;
return G__15899;
})()
;})(js_files,map__15897,map__15897__$1,on_jsload))
,((function (js_files,map__15897,map__15897__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15897,map__15897__$1,on_jsload))
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

var seq__15906_15910 = cljs.core.seq.call(null,things_to_log);
var chunk__15907_15911 = null;
var count__15908_15912 = (0);
var i__15909_15913 = (0);
while(true){
if((i__15909_15913 < count__15908_15912)){
var t_15914 = cljs.core._nth.call(null,chunk__15907_15911,i__15909_15913);
console.log(t_15914);

var G__15915 = seq__15906_15910;
var G__15916 = chunk__15907_15911;
var G__15917 = count__15908_15912;
var G__15918 = (i__15909_15913 + (1));
seq__15906_15910 = G__15915;
chunk__15907_15911 = G__15916;
count__15908_15912 = G__15917;
i__15909_15913 = G__15918;
continue;
} else {
var temp__4425__auto___15919 = cljs.core.seq.call(null,seq__15906_15910);
if(temp__4425__auto___15919){
var seq__15906_15920__$1 = temp__4425__auto___15919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15906_15920__$1)){
var c__5897__auto___15921 = cljs.core.chunk_first.call(null,seq__15906_15920__$1);
var G__15922 = cljs.core.chunk_rest.call(null,seq__15906_15920__$1);
var G__15923 = c__5897__auto___15921;
var G__15924 = cljs.core.count.call(null,c__5897__auto___15921);
var G__15925 = (0);
seq__15906_15910 = G__15922;
chunk__15907_15911 = G__15923;
count__15908_15912 = G__15924;
i__15909_15913 = G__15925;
continue;
} else {
var t_15926 = cljs.core.first.call(null,seq__15906_15920__$1);
console.log(t_15926);

var G__15927 = cljs.core.next.call(null,seq__15906_15920__$1);
var G__15928 = null;
var G__15929 = (0);
var G__15930 = (0);
seq__15906_15910 = G__15927;
chunk__15907_15911 = G__15928;
count__15908_15912 = G__15929;
i__15909_15913 = G__15930;
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

var G__15932 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15932,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15932);

adzerk.boot_reload.reload.reload_css.call(null,G__15932);

adzerk.boot_reload.reload.reload_img.call(null,G__15932);

return G__15932;
});

//# sourceMappingURL=reload.js.map