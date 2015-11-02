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
return (function (p1__15776_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15776_SHARP_),path);
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
var seq__15781 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15782 = null;
var count__15783 = (0);
var i__15784 = (0);
while(true){
if((i__15784 < count__15783)){
var s = cljs.core._nth.call(null,chunk__15782,i__15784);
var temp__4425__auto___15785 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15785)){
var sheet_15786 = temp__4425__auto___15785;
var temp__4425__auto___15787__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15786.href,changed);
if(cljs.core.truth_(temp__4425__auto___15787__$1)){
var href_uri_15788 = temp__4425__auto___15787__$1;
sheet_15786.ownerNode.href = href_uri_15788.makeUnique().toString();
} else {
}
} else {
}

var G__15789 = seq__15781;
var G__15790 = chunk__15782;
var G__15791 = count__15783;
var G__15792 = (i__15784 + (1));
seq__15781 = G__15789;
chunk__15782 = G__15790;
count__15783 = G__15791;
i__15784 = G__15792;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15781);
if(temp__4425__auto__){
var seq__15781__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15781__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15781__$1);
var G__15793 = cljs.core.chunk_rest.call(null,seq__15781__$1);
var G__15794 = c__5897__auto__;
var G__15795 = cljs.core.count.call(null,c__5897__auto__);
var G__15796 = (0);
seq__15781 = G__15793;
chunk__15782 = G__15794;
count__15783 = G__15795;
i__15784 = G__15796;
continue;
} else {
var s = cljs.core.first.call(null,seq__15781__$1);
var temp__4425__auto___15797__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15797__$1)){
var sheet_15798 = temp__4425__auto___15797__$1;
var temp__4425__auto___15799__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15798.href,changed);
if(cljs.core.truth_(temp__4425__auto___15799__$2)){
var href_uri_15800 = temp__4425__auto___15799__$2;
sheet_15798.ownerNode.href = href_uri_15800.makeUnique().toString();
} else {
}
} else {
}

var G__15801 = cljs.core.next.call(null,seq__15781__$1);
var G__15802 = null;
var G__15803 = (0);
var G__15804 = (0);
seq__15781 = G__15801;
chunk__15782 = G__15802;
count__15783 = G__15803;
i__15784 = G__15804;
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
var seq__15809 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15810 = null;
var count__15811 = (0);
var i__15812 = (0);
while(true){
if((i__15812 < count__15811)){
var s = cljs.core._nth.call(null,chunk__15810,i__15812);
var temp__4425__auto___15813 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15813)){
var image_15814 = temp__4425__auto___15813;
var temp__4425__auto___15815__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15814.src,changed);
if(cljs.core.truth_(temp__4425__auto___15815__$1)){
var href_uri_15816 = temp__4425__auto___15815__$1;
image_15814.src = href_uri_15816.makeUnique().toString();
} else {
}
} else {
}

var G__15817 = seq__15809;
var G__15818 = chunk__15810;
var G__15819 = count__15811;
var G__15820 = (i__15812 + (1));
seq__15809 = G__15817;
chunk__15810 = G__15818;
count__15811 = G__15819;
i__15812 = G__15820;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15809);
if(temp__4425__auto__){
var seq__15809__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15809__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15809__$1);
var G__15821 = cljs.core.chunk_rest.call(null,seq__15809__$1);
var G__15822 = c__5897__auto__;
var G__15823 = cljs.core.count.call(null,c__5897__auto__);
var G__15824 = (0);
seq__15809 = G__15821;
chunk__15810 = G__15822;
count__15811 = G__15823;
i__15812 = G__15824;
continue;
} else {
var s = cljs.core.first.call(null,seq__15809__$1);
var temp__4425__auto___15825__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15825__$1)){
var image_15826 = temp__4425__auto___15825__$1;
var temp__4425__auto___15827__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15826.src,changed);
if(cljs.core.truth_(temp__4425__auto___15827__$2)){
var href_uri_15828 = temp__4425__auto___15827__$2;
image_15826.src = href_uri_15828.makeUnique().toString();
} else {
}
} else {
}

var G__15829 = cljs.core.next.call(null,seq__15809__$1);
var G__15830 = null;
var G__15831 = (0);
var G__15832 = (0);
seq__15809 = G__15829;
chunk__15810 = G__15830;
count__15811 = G__15831;
i__15812 = G__15832;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15835){
var map__15838 = p__15835;
var map__15838__$1 = ((((!((map__15838 == null)))?((((map__15838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15838):map__15838);
var on_jsload = cljs.core.get.call(null,map__15838__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15838,map__15838__$1,on_jsload){
return (function (p1__15833_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15833_SHARP_,".js");
});})(map__15838,map__15838__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15838,map__15838__$1,on_jsload){
return (function (p1__15834_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15834_SHARP_).makeUnique());
});})(js_files,map__15838,map__15838__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15838,map__15838__$1,on_jsload){
return (function() { 
var G__15840__delegate = function (_){
return on_jsload.call(null);
};
var G__15840 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15841__i = 0, G__15841__a = new Array(arguments.length -  0);
while (G__15841__i < G__15841__a.length) {G__15841__a[G__15841__i] = arguments[G__15841__i + 0]; ++G__15841__i;}
  _ = new cljs.core.IndexedSeq(G__15841__a,0);
} 
return G__15840__delegate.call(this,_);};
G__15840.cljs$lang$maxFixedArity = 0;
G__15840.cljs$lang$applyTo = (function (arglist__15842){
var _ = cljs.core.seq(arglist__15842);
return G__15840__delegate(_);
});
G__15840.cljs$core$IFn$_invoke$arity$variadic = G__15840__delegate;
return G__15840;
})()
;})(js_files,map__15838,map__15838__$1,on_jsload))
,((function (js_files,map__15838,map__15838__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15838,map__15838__$1,on_jsload))
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

var seq__15847_15851 = cljs.core.seq.call(null,things_to_log);
var chunk__15848_15852 = null;
var count__15849_15853 = (0);
var i__15850_15854 = (0);
while(true){
if((i__15850_15854 < count__15849_15853)){
var t_15855 = cljs.core._nth.call(null,chunk__15848_15852,i__15850_15854);
console.log(t_15855);

var G__15856 = seq__15847_15851;
var G__15857 = chunk__15848_15852;
var G__15858 = count__15849_15853;
var G__15859 = (i__15850_15854 + (1));
seq__15847_15851 = G__15856;
chunk__15848_15852 = G__15857;
count__15849_15853 = G__15858;
i__15850_15854 = G__15859;
continue;
} else {
var temp__4425__auto___15860 = cljs.core.seq.call(null,seq__15847_15851);
if(temp__4425__auto___15860){
var seq__15847_15861__$1 = temp__4425__auto___15860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15847_15861__$1)){
var c__5897__auto___15862 = cljs.core.chunk_first.call(null,seq__15847_15861__$1);
var G__15863 = cljs.core.chunk_rest.call(null,seq__15847_15861__$1);
var G__15864 = c__5897__auto___15862;
var G__15865 = cljs.core.count.call(null,c__5897__auto___15862);
var G__15866 = (0);
seq__15847_15851 = G__15863;
chunk__15848_15852 = G__15864;
count__15849_15853 = G__15865;
i__15850_15854 = G__15866;
continue;
} else {
var t_15867 = cljs.core.first.call(null,seq__15847_15861__$1);
console.log(t_15867);

var G__15868 = cljs.core.next.call(null,seq__15847_15861__$1);
var G__15869 = null;
var G__15870 = (0);
var G__15871 = (0);
seq__15847_15851 = G__15868;
chunk__15848_15852 = G__15869;
count__15849_15853 = G__15870;
i__15850_15854 = G__15871;
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

var G__15873 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15873,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15873);

adzerk.boot_reload.reload.reload_css.call(null,G__15873);

adzerk.boot_reload.reload.reload_img.call(null,G__15873);

return G__15873;
});

//# sourceMappingURL=reload.js.map