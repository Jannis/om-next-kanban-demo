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
return (function (p1__15780_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15780_SHARP_),path);
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
var seq__15785 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15786 = null;
var count__15787 = (0);
var i__15788 = (0);
while(true){
if((i__15788 < count__15787)){
var s = cljs.core._nth.call(null,chunk__15786,i__15788);
var temp__4425__auto___15789 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15789)){
var sheet_15790 = temp__4425__auto___15789;
var temp__4425__auto___15791__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15790.href,changed);
if(cljs.core.truth_(temp__4425__auto___15791__$1)){
var href_uri_15792 = temp__4425__auto___15791__$1;
sheet_15790.ownerNode.href = href_uri_15792.makeUnique().toString();
} else {
}
} else {
}

var G__15793 = seq__15785;
var G__15794 = chunk__15786;
var G__15795 = count__15787;
var G__15796 = (i__15788 + (1));
seq__15785 = G__15793;
chunk__15786 = G__15794;
count__15787 = G__15795;
i__15788 = G__15796;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15785);
if(temp__4425__auto__){
var seq__15785__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15785__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15785__$1);
var G__15797 = cljs.core.chunk_rest.call(null,seq__15785__$1);
var G__15798 = c__5897__auto__;
var G__15799 = cljs.core.count.call(null,c__5897__auto__);
var G__15800 = (0);
seq__15785 = G__15797;
chunk__15786 = G__15798;
count__15787 = G__15799;
i__15788 = G__15800;
continue;
} else {
var s = cljs.core.first.call(null,seq__15785__$1);
var temp__4425__auto___15801__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15801__$1)){
var sheet_15802 = temp__4425__auto___15801__$1;
var temp__4425__auto___15803__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15802.href,changed);
if(cljs.core.truth_(temp__4425__auto___15803__$2)){
var href_uri_15804 = temp__4425__auto___15803__$2;
sheet_15802.ownerNode.href = href_uri_15804.makeUnique().toString();
} else {
}
} else {
}

var G__15805 = cljs.core.next.call(null,seq__15785__$1);
var G__15806 = null;
var G__15807 = (0);
var G__15808 = (0);
seq__15785 = G__15805;
chunk__15786 = G__15806;
count__15787 = G__15807;
i__15788 = G__15808;
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
var seq__15813 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15814 = null;
var count__15815 = (0);
var i__15816 = (0);
while(true){
if((i__15816 < count__15815)){
var s = cljs.core._nth.call(null,chunk__15814,i__15816);
var temp__4425__auto___15817 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15817)){
var image_15818 = temp__4425__auto___15817;
var temp__4425__auto___15819__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15818.src,changed);
if(cljs.core.truth_(temp__4425__auto___15819__$1)){
var href_uri_15820 = temp__4425__auto___15819__$1;
image_15818.src = href_uri_15820.makeUnique().toString();
} else {
}
} else {
}

var G__15821 = seq__15813;
var G__15822 = chunk__15814;
var G__15823 = count__15815;
var G__15824 = (i__15816 + (1));
seq__15813 = G__15821;
chunk__15814 = G__15822;
count__15815 = G__15823;
i__15816 = G__15824;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15813);
if(temp__4425__auto__){
var seq__15813__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15813__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15813__$1);
var G__15825 = cljs.core.chunk_rest.call(null,seq__15813__$1);
var G__15826 = c__5897__auto__;
var G__15827 = cljs.core.count.call(null,c__5897__auto__);
var G__15828 = (0);
seq__15813 = G__15825;
chunk__15814 = G__15826;
count__15815 = G__15827;
i__15816 = G__15828;
continue;
} else {
var s = cljs.core.first.call(null,seq__15813__$1);
var temp__4425__auto___15829__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15829__$1)){
var image_15830 = temp__4425__auto___15829__$1;
var temp__4425__auto___15831__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15830.src,changed);
if(cljs.core.truth_(temp__4425__auto___15831__$2)){
var href_uri_15832 = temp__4425__auto___15831__$2;
image_15830.src = href_uri_15832.makeUnique().toString();
} else {
}
} else {
}

var G__15833 = cljs.core.next.call(null,seq__15813__$1);
var G__15834 = null;
var G__15835 = (0);
var G__15836 = (0);
seq__15813 = G__15833;
chunk__15814 = G__15834;
count__15815 = G__15835;
i__15816 = G__15836;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15839){
var map__15842 = p__15839;
var map__15842__$1 = ((((!((map__15842 == null)))?((((map__15842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15842):map__15842);
var on_jsload = cljs.core.get.call(null,map__15842__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15842,map__15842__$1,on_jsload){
return (function (p1__15837_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15837_SHARP_,".js");
});})(map__15842,map__15842__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15842,map__15842__$1,on_jsload){
return (function (p1__15838_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15838_SHARP_).makeUnique());
});})(js_files,map__15842,map__15842__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15842,map__15842__$1,on_jsload){
return (function() { 
var G__15844__delegate = function (_){
return on_jsload.call(null);
};
var G__15844 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15845__i = 0, G__15845__a = new Array(arguments.length -  0);
while (G__15845__i < G__15845__a.length) {G__15845__a[G__15845__i] = arguments[G__15845__i + 0]; ++G__15845__i;}
  _ = new cljs.core.IndexedSeq(G__15845__a,0);
} 
return G__15844__delegate.call(this,_);};
G__15844.cljs$lang$maxFixedArity = 0;
G__15844.cljs$lang$applyTo = (function (arglist__15846){
var _ = cljs.core.seq(arglist__15846);
return G__15844__delegate(_);
});
G__15844.cljs$core$IFn$_invoke$arity$variadic = G__15844__delegate;
return G__15844;
})()
;})(js_files,map__15842,map__15842__$1,on_jsload))
,((function (js_files,map__15842,map__15842__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15842,map__15842__$1,on_jsload))
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

var seq__15851_15855 = cljs.core.seq.call(null,things_to_log);
var chunk__15852_15856 = null;
var count__15853_15857 = (0);
var i__15854_15858 = (0);
while(true){
if((i__15854_15858 < count__15853_15857)){
var t_15859 = cljs.core._nth.call(null,chunk__15852_15856,i__15854_15858);
console.log(t_15859);

var G__15860 = seq__15851_15855;
var G__15861 = chunk__15852_15856;
var G__15862 = count__15853_15857;
var G__15863 = (i__15854_15858 + (1));
seq__15851_15855 = G__15860;
chunk__15852_15856 = G__15861;
count__15853_15857 = G__15862;
i__15854_15858 = G__15863;
continue;
} else {
var temp__4425__auto___15864 = cljs.core.seq.call(null,seq__15851_15855);
if(temp__4425__auto___15864){
var seq__15851_15865__$1 = temp__4425__auto___15864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15851_15865__$1)){
var c__5897__auto___15866 = cljs.core.chunk_first.call(null,seq__15851_15865__$1);
var G__15867 = cljs.core.chunk_rest.call(null,seq__15851_15865__$1);
var G__15868 = c__5897__auto___15866;
var G__15869 = cljs.core.count.call(null,c__5897__auto___15866);
var G__15870 = (0);
seq__15851_15855 = G__15867;
chunk__15852_15856 = G__15868;
count__15853_15857 = G__15869;
i__15854_15858 = G__15870;
continue;
} else {
var t_15871 = cljs.core.first.call(null,seq__15851_15865__$1);
console.log(t_15871);

var G__15872 = cljs.core.next.call(null,seq__15851_15865__$1);
var G__15873 = null;
var G__15874 = (0);
var G__15875 = (0);
seq__15851_15855 = G__15872;
chunk__15852_15856 = G__15873;
count__15853_15857 = G__15874;
i__15854_15858 = G__15875;
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

var G__15877 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15877,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15877);

adzerk.boot_reload.reload.reload_css.call(null,G__15877);

adzerk.boot_reload.reload.reload_img.call(null,G__15877);

return G__15877;
});

//# sourceMappingURL=reload.js.map