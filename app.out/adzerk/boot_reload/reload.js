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
return (function (p1__15769_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15769_SHARP_),path);
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
var seq__15774 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15775 = null;
var count__15776 = (0);
var i__15777 = (0);
while(true){
if((i__15777 < count__15776)){
var s = cljs.core._nth.call(null,chunk__15775,i__15777);
var temp__4425__auto___15778 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15778)){
var sheet_15779 = temp__4425__auto___15778;
var temp__4425__auto___15780__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15779.href,changed);
if(cljs.core.truth_(temp__4425__auto___15780__$1)){
var href_uri_15781 = temp__4425__auto___15780__$1;
sheet_15779.ownerNode.href = href_uri_15781.makeUnique().toString();
} else {
}
} else {
}

var G__15782 = seq__15774;
var G__15783 = chunk__15775;
var G__15784 = count__15776;
var G__15785 = (i__15777 + (1));
seq__15774 = G__15782;
chunk__15775 = G__15783;
count__15776 = G__15784;
i__15777 = G__15785;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15774);
if(temp__4425__auto__){
var seq__15774__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15774__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15774__$1);
var G__15786 = cljs.core.chunk_rest.call(null,seq__15774__$1);
var G__15787 = c__5897__auto__;
var G__15788 = cljs.core.count.call(null,c__5897__auto__);
var G__15789 = (0);
seq__15774 = G__15786;
chunk__15775 = G__15787;
count__15776 = G__15788;
i__15777 = G__15789;
continue;
} else {
var s = cljs.core.first.call(null,seq__15774__$1);
var temp__4425__auto___15790__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15790__$1)){
var sheet_15791 = temp__4425__auto___15790__$1;
var temp__4425__auto___15792__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15791.href,changed);
if(cljs.core.truth_(temp__4425__auto___15792__$2)){
var href_uri_15793 = temp__4425__auto___15792__$2;
sheet_15791.ownerNode.href = href_uri_15793.makeUnique().toString();
} else {
}
} else {
}

var G__15794 = cljs.core.next.call(null,seq__15774__$1);
var G__15795 = null;
var G__15796 = (0);
var G__15797 = (0);
seq__15774 = G__15794;
chunk__15775 = G__15795;
count__15776 = G__15796;
i__15777 = G__15797;
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
var seq__15802 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15803 = null;
var count__15804 = (0);
var i__15805 = (0);
while(true){
if((i__15805 < count__15804)){
var s = cljs.core._nth.call(null,chunk__15803,i__15805);
var temp__4425__auto___15806 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15806)){
var image_15807 = temp__4425__auto___15806;
var temp__4425__auto___15808__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15807.src,changed);
if(cljs.core.truth_(temp__4425__auto___15808__$1)){
var href_uri_15809 = temp__4425__auto___15808__$1;
image_15807.src = href_uri_15809.makeUnique().toString();
} else {
}
} else {
}

var G__15810 = seq__15802;
var G__15811 = chunk__15803;
var G__15812 = count__15804;
var G__15813 = (i__15805 + (1));
seq__15802 = G__15810;
chunk__15803 = G__15811;
count__15804 = G__15812;
i__15805 = G__15813;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15802);
if(temp__4425__auto__){
var seq__15802__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15802__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15802__$1);
var G__15814 = cljs.core.chunk_rest.call(null,seq__15802__$1);
var G__15815 = c__5897__auto__;
var G__15816 = cljs.core.count.call(null,c__5897__auto__);
var G__15817 = (0);
seq__15802 = G__15814;
chunk__15803 = G__15815;
count__15804 = G__15816;
i__15805 = G__15817;
continue;
} else {
var s = cljs.core.first.call(null,seq__15802__$1);
var temp__4425__auto___15818__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15818__$1)){
var image_15819 = temp__4425__auto___15818__$1;
var temp__4425__auto___15820__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15819.src,changed);
if(cljs.core.truth_(temp__4425__auto___15820__$2)){
var href_uri_15821 = temp__4425__auto___15820__$2;
image_15819.src = href_uri_15821.makeUnique().toString();
} else {
}
} else {
}

var G__15822 = cljs.core.next.call(null,seq__15802__$1);
var G__15823 = null;
var G__15824 = (0);
var G__15825 = (0);
seq__15802 = G__15822;
chunk__15803 = G__15823;
count__15804 = G__15824;
i__15805 = G__15825;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15828){
var map__15831 = p__15828;
var map__15831__$1 = ((((!((map__15831 == null)))?((((map__15831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15831):map__15831);
var on_jsload = cljs.core.get.call(null,map__15831__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15831,map__15831__$1,on_jsload){
return (function (p1__15826_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15826_SHARP_,".js");
});})(map__15831,map__15831__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15831,map__15831__$1,on_jsload){
return (function (p1__15827_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15827_SHARP_).makeUnique());
});})(js_files,map__15831,map__15831__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15831,map__15831__$1,on_jsload){
return (function() { 
var G__15833__delegate = function (_){
return on_jsload.call(null);
};
var G__15833 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15834__i = 0, G__15834__a = new Array(arguments.length -  0);
while (G__15834__i < G__15834__a.length) {G__15834__a[G__15834__i] = arguments[G__15834__i + 0]; ++G__15834__i;}
  _ = new cljs.core.IndexedSeq(G__15834__a,0);
} 
return G__15833__delegate.call(this,_);};
G__15833.cljs$lang$maxFixedArity = 0;
G__15833.cljs$lang$applyTo = (function (arglist__15835){
var _ = cljs.core.seq(arglist__15835);
return G__15833__delegate(_);
});
G__15833.cljs$core$IFn$_invoke$arity$variadic = G__15833__delegate;
return G__15833;
})()
;})(js_files,map__15831,map__15831__$1,on_jsload))
,((function (js_files,map__15831,map__15831__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15831,map__15831__$1,on_jsload))
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

var seq__15840_15844 = cljs.core.seq.call(null,things_to_log);
var chunk__15841_15845 = null;
var count__15842_15846 = (0);
var i__15843_15847 = (0);
while(true){
if((i__15843_15847 < count__15842_15846)){
var t_15848 = cljs.core._nth.call(null,chunk__15841_15845,i__15843_15847);
console.log(t_15848);

var G__15849 = seq__15840_15844;
var G__15850 = chunk__15841_15845;
var G__15851 = count__15842_15846;
var G__15852 = (i__15843_15847 + (1));
seq__15840_15844 = G__15849;
chunk__15841_15845 = G__15850;
count__15842_15846 = G__15851;
i__15843_15847 = G__15852;
continue;
} else {
var temp__4425__auto___15853 = cljs.core.seq.call(null,seq__15840_15844);
if(temp__4425__auto___15853){
var seq__15840_15854__$1 = temp__4425__auto___15853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15840_15854__$1)){
var c__5897__auto___15855 = cljs.core.chunk_first.call(null,seq__15840_15854__$1);
var G__15856 = cljs.core.chunk_rest.call(null,seq__15840_15854__$1);
var G__15857 = c__5897__auto___15855;
var G__15858 = cljs.core.count.call(null,c__5897__auto___15855);
var G__15859 = (0);
seq__15840_15844 = G__15856;
chunk__15841_15845 = G__15857;
count__15842_15846 = G__15858;
i__15843_15847 = G__15859;
continue;
} else {
var t_15860 = cljs.core.first.call(null,seq__15840_15854__$1);
console.log(t_15860);

var G__15861 = cljs.core.next.call(null,seq__15840_15854__$1);
var G__15862 = null;
var G__15863 = (0);
var G__15864 = (0);
seq__15840_15844 = G__15861;
chunk__15841_15845 = G__15862;
count__15842_15846 = G__15863;
i__15843_15847 = G__15864;
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

var G__15866 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15866,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15866);

adzerk.boot_reload.reload.reload_css.call(null,G__15866);

adzerk.boot_reload.reload.reload_img.call(null,G__15866);

return G__15866;
});

//# sourceMappingURL=reload.js.map