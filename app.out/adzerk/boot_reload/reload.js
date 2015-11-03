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
return (function (p1__15802_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15802_SHARP_),path);
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
var seq__15807 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15808 = null;
var count__15809 = (0);
var i__15810 = (0);
while(true){
if((i__15810 < count__15809)){
var s = cljs.core._nth.call(null,chunk__15808,i__15810);
var temp__4425__auto___15811 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15811)){
var sheet_15812 = temp__4425__auto___15811;
var temp__4425__auto___15813__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15812.href,changed);
if(cljs.core.truth_(temp__4425__auto___15813__$1)){
var href_uri_15814 = temp__4425__auto___15813__$1;
sheet_15812.ownerNode.href = href_uri_15814.makeUnique().toString();
} else {
}
} else {
}

var G__15815 = seq__15807;
var G__15816 = chunk__15808;
var G__15817 = count__15809;
var G__15818 = (i__15810 + (1));
seq__15807 = G__15815;
chunk__15808 = G__15816;
count__15809 = G__15817;
i__15810 = G__15818;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15807);
if(temp__4425__auto__){
var seq__15807__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15807__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15807__$1);
var G__15819 = cljs.core.chunk_rest.call(null,seq__15807__$1);
var G__15820 = c__5897__auto__;
var G__15821 = cljs.core.count.call(null,c__5897__auto__);
var G__15822 = (0);
seq__15807 = G__15819;
chunk__15808 = G__15820;
count__15809 = G__15821;
i__15810 = G__15822;
continue;
} else {
var s = cljs.core.first.call(null,seq__15807__$1);
var temp__4425__auto___15823__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15823__$1)){
var sheet_15824 = temp__4425__auto___15823__$1;
var temp__4425__auto___15825__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15824.href,changed);
if(cljs.core.truth_(temp__4425__auto___15825__$2)){
var href_uri_15826 = temp__4425__auto___15825__$2;
sheet_15824.ownerNode.href = href_uri_15826.makeUnique().toString();
} else {
}
} else {
}

var G__15827 = cljs.core.next.call(null,seq__15807__$1);
var G__15828 = null;
var G__15829 = (0);
var G__15830 = (0);
seq__15807 = G__15827;
chunk__15808 = G__15828;
count__15809 = G__15829;
i__15810 = G__15830;
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
var seq__15835 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15836 = null;
var count__15837 = (0);
var i__15838 = (0);
while(true){
if((i__15838 < count__15837)){
var s = cljs.core._nth.call(null,chunk__15836,i__15838);
var temp__4425__auto___15839 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15839)){
var image_15840 = temp__4425__auto___15839;
var temp__4425__auto___15841__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15840.src,changed);
if(cljs.core.truth_(temp__4425__auto___15841__$1)){
var href_uri_15842 = temp__4425__auto___15841__$1;
image_15840.src = href_uri_15842.makeUnique().toString();
} else {
}
} else {
}

var G__15843 = seq__15835;
var G__15844 = chunk__15836;
var G__15845 = count__15837;
var G__15846 = (i__15838 + (1));
seq__15835 = G__15843;
chunk__15836 = G__15844;
count__15837 = G__15845;
i__15838 = G__15846;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15835);
if(temp__4425__auto__){
var seq__15835__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15835__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15835__$1);
var G__15847 = cljs.core.chunk_rest.call(null,seq__15835__$1);
var G__15848 = c__5897__auto__;
var G__15849 = cljs.core.count.call(null,c__5897__auto__);
var G__15850 = (0);
seq__15835 = G__15847;
chunk__15836 = G__15848;
count__15837 = G__15849;
i__15838 = G__15850;
continue;
} else {
var s = cljs.core.first.call(null,seq__15835__$1);
var temp__4425__auto___15851__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15851__$1)){
var image_15852 = temp__4425__auto___15851__$1;
var temp__4425__auto___15853__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15852.src,changed);
if(cljs.core.truth_(temp__4425__auto___15853__$2)){
var href_uri_15854 = temp__4425__auto___15853__$2;
image_15852.src = href_uri_15854.makeUnique().toString();
} else {
}
} else {
}

var G__15855 = cljs.core.next.call(null,seq__15835__$1);
var G__15856 = null;
var G__15857 = (0);
var G__15858 = (0);
seq__15835 = G__15855;
chunk__15836 = G__15856;
count__15837 = G__15857;
i__15838 = G__15858;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15861){
var map__15864 = p__15861;
var map__15864__$1 = ((((!((map__15864 == null)))?((((map__15864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15864):map__15864);
var on_jsload = cljs.core.get.call(null,map__15864__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15864,map__15864__$1,on_jsload){
return (function (p1__15859_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15859_SHARP_,".js");
});})(map__15864,map__15864__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15864,map__15864__$1,on_jsload){
return (function (p1__15860_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15860_SHARP_).makeUnique());
});})(js_files,map__15864,map__15864__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15864,map__15864__$1,on_jsload){
return (function() { 
var G__15866__delegate = function (_){
return on_jsload.call(null);
};
var G__15866 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15867__i = 0, G__15867__a = new Array(arguments.length -  0);
while (G__15867__i < G__15867__a.length) {G__15867__a[G__15867__i] = arguments[G__15867__i + 0]; ++G__15867__i;}
  _ = new cljs.core.IndexedSeq(G__15867__a,0);
} 
return G__15866__delegate.call(this,_);};
G__15866.cljs$lang$maxFixedArity = 0;
G__15866.cljs$lang$applyTo = (function (arglist__15868){
var _ = cljs.core.seq(arglist__15868);
return G__15866__delegate(_);
});
G__15866.cljs$core$IFn$_invoke$arity$variadic = G__15866__delegate;
return G__15866;
})()
;})(js_files,map__15864,map__15864__$1,on_jsload))
,((function (js_files,map__15864,map__15864__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15864,map__15864__$1,on_jsload))
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

var seq__15873_15877 = cljs.core.seq.call(null,things_to_log);
var chunk__15874_15878 = null;
var count__15875_15879 = (0);
var i__15876_15880 = (0);
while(true){
if((i__15876_15880 < count__15875_15879)){
var t_15881 = cljs.core._nth.call(null,chunk__15874_15878,i__15876_15880);
console.log(t_15881);

var G__15882 = seq__15873_15877;
var G__15883 = chunk__15874_15878;
var G__15884 = count__15875_15879;
var G__15885 = (i__15876_15880 + (1));
seq__15873_15877 = G__15882;
chunk__15874_15878 = G__15883;
count__15875_15879 = G__15884;
i__15876_15880 = G__15885;
continue;
} else {
var temp__4425__auto___15886 = cljs.core.seq.call(null,seq__15873_15877);
if(temp__4425__auto___15886){
var seq__15873_15887__$1 = temp__4425__auto___15886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15873_15887__$1)){
var c__5897__auto___15888 = cljs.core.chunk_first.call(null,seq__15873_15887__$1);
var G__15889 = cljs.core.chunk_rest.call(null,seq__15873_15887__$1);
var G__15890 = c__5897__auto___15888;
var G__15891 = cljs.core.count.call(null,c__5897__auto___15888);
var G__15892 = (0);
seq__15873_15877 = G__15889;
chunk__15874_15878 = G__15890;
count__15875_15879 = G__15891;
i__15876_15880 = G__15892;
continue;
} else {
var t_15893 = cljs.core.first.call(null,seq__15873_15887__$1);
console.log(t_15893);

var G__15894 = cljs.core.next.call(null,seq__15873_15887__$1);
var G__15895 = null;
var G__15896 = (0);
var G__15897 = (0);
seq__15873_15877 = G__15894;
chunk__15874_15878 = G__15895;
count__15875_15879 = G__15896;
i__15876_15880 = G__15897;
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

var G__15899 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15899,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15899);

adzerk.boot_reload.reload.reload_css.call(null,G__15899);

adzerk.boot_reload.reload.reload_img.call(null,G__15899);

return G__15899;
});

//# sourceMappingURL=reload.js.map