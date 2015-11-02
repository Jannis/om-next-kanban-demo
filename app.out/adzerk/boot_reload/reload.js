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
return (function (p1__15788_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15788_SHARP_),path);
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
var seq__15793 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15794 = null;
var count__15795 = (0);
var i__15796 = (0);
while(true){
if((i__15796 < count__15795)){
var s = cljs.core._nth.call(null,chunk__15794,i__15796);
var temp__4425__auto___15797 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15797)){
var sheet_15798 = temp__4425__auto___15797;
var temp__4425__auto___15799__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15798.href,changed);
if(cljs.core.truth_(temp__4425__auto___15799__$1)){
var href_uri_15800 = temp__4425__auto___15799__$1;
sheet_15798.ownerNode.href = href_uri_15800.makeUnique().toString();
} else {
}
} else {
}

var G__15801 = seq__15793;
var G__15802 = chunk__15794;
var G__15803 = count__15795;
var G__15804 = (i__15796 + (1));
seq__15793 = G__15801;
chunk__15794 = G__15802;
count__15795 = G__15803;
i__15796 = G__15804;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15793);
if(temp__4425__auto__){
var seq__15793__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15793__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15793__$1);
var G__15805 = cljs.core.chunk_rest.call(null,seq__15793__$1);
var G__15806 = c__5897__auto__;
var G__15807 = cljs.core.count.call(null,c__5897__auto__);
var G__15808 = (0);
seq__15793 = G__15805;
chunk__15794 = G__15806;
count__15795 = G__15807;
i__15796 = G__15808;
continue;
} else {
var s = cljs.core.first.call(null,seq__15793__$1);
var temp__4425__auto___15809__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15809__$1)){
var sheet_15810 = temp__4425__auto___15809__$1;
var temp__4425__auto___15811__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15810.href,changed);
if(cljs.core.truth_(temp__4425__auto___15811__$2)){
var href_uri_15812 = temp__4425__auto___15811__$2;
sheet_15810.ownerNode.href = href_uri_15812.makeUnique().toString();
} else {
}
} else {
}

var G__15813 = cljs.core.next.call(null,seq__15793__$1);
var G__15814 = null;
var G__15815 = (0);
var G__15816 = (0);
seq__15793 = G__15813;
chunk__15794 = G__15814;
count__15795 = G__15815;
i__15796 = G__15816;
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
var seq__15821 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15822 = null;
var count__15823 = (0);
var i__15824 = (0);
while(true){
if((i__15824 < count__15823)){
var s = cljs.core._nth.call(null,chunk__15822,i__15824);
var temp__4425__auto___15825 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15825)){
var image_15826 = temp__4425__auto___15825;
var temp__4425__auto___15827__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15826.src,changed);
if(cljs.core.truth_(temp__4425__auto___15827__$1)){
var href_uri_15828 = temp__4425__auto___15827__$1;
image_15826.src = href_uri_15828.makeUnique().toString();
} else {
}
} else {
}

var G__15829 = seq__15821;
var G__15830 = chunk__15822;
var G__15831 = count__15823;
var G__15832 = (i__15824 + (1));
seq__15821 = G__15829;
chunk__15822 = G__15830;
count__15823 = G__15831;
i__15824 = G__15832;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15821);
if(temp__4425__auto__){
var seq__15821__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15821__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15821__$1);
var G__15833 = cljs.core.chunk_rest.call(null,seq__15821__$1);
var G__15834 = c__5897__auto__;
var G__15835 = cljs.core.count.call(null,c__5897__auto__);
var G__15836 = (0);
seq__15821 = G__15833;
chunk__15822 = G__15834;
count__15823 = G__15835;
i__15824 = G__15836;
continue;
} else {
var s = cljs.core.first.call(null,seq__15821__$1);
var temp__4425__auto___15837__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15837__$1)){
var image_15838 = temp__4425__auto___15837__$1;
var temp__4425__auto___15839__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15838.src,changed);
if(cljs.core.truth_(temp__4425__auto___15839__$2)){
var href_uri_15840 = temp__4425__auto___15839__$2;
image_15838.src = href_uri_15840.makeUnique().toString();
} else {
}
} else {
}

var G__15841 = cljs.core.next.call(null,seq__15821__$1);
var G__15842 = null;
var G__15843 = (0);
var G__15844 = (0);
seq__15821 = G__15841;
chunk__15822 = G__15842;
count__15823 = G__15843;
i__15824 = G__15844;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15847){
var map__15850 = p__15847;
var map__15850__$1 = ((((!((map__15850 == null)))?((((map__15850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15850):map__15850);
var on_jsload = cljs.core.get.call(null,map__15850__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15850,map__15850__$1,on_jsload){
return (function (p1__15845_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15845_SHARP_,".js");
});})(map__15850,map__15850__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15850,map__15850__$1,on_jsload){
return (function (p1__15846_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15846_SHARP_).makeUnique());
});})(js_files,map__15850,map__15850__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15850,map__15850__$1,on_jsload){
return (function() { 
var G__15852__delegate = function (_){
return on_jsload.call(null);
};
var G__15852 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15853__i = 0, G__15853__a = new Array(arguments.length -  0);
while (G__15853__i < G__15853__a.length) {G__15853__a[G__15853__i] = arguments[G__15853__i + 0]; ++G__15853__i;}
  _ = new cljs.core.IndexedSeq(G__15853__a,0);
} 
return G__15852__delegate.call(this,_);};
G__15852.cljs$lang$maxFixedArity = 0;
G__15852.cljs$lang$applyTo = (function (arglist__15854){
var _ = cljs.core.seq(arglist__15854);
return G__15852__delegate(_);
});
G__15852.cljs$core$IFn$_invoke$arity$variadic = G__15852__delegate;
return G__15852;
})()
;})(js_files,map__15850,map__15850__$1,on_jsload))
,((function (js_files,map__15850,map__15850__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15850,map__15850__$1,on_jsload))
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

var seq__15859_15863 = cljs.core.seq.call(null,things_to_log);
var chunk__15860_15864 = null;
var count__15861_15865 = (0);
var i__15862_15866 = (0);
while(true){
if((i__15862_15866 < count__15861_15865)){
var t_15867 = cljs.core._nth.call(null,chunk__15860_15864,i__15862_15866);
console.log(t_15867);

var G__15868 = seq__15859_15863;
var G__15869 = chunk__15860_15864;
var G__15870 = count__15861_15865;
var G__15871 = (i__15862_15866 + (1));
seq__15859_15863 = G__15868;
chunk__15860_15864 = G__15869;
count__15861_15865 = G__15870;
i__15862_15866 = G__15871;
continue;
} else {
var temp__4425__auto___15872 = cljs.core.seq.call(null,seq__15859_15863);
if(temp__4425__auto___15872){
var seq__15859_15873__$1 = temp__4425__auto___15872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15859_15873__$1)){
var c__5897__auto___15874 = cljs.core.chunk_first.call(null,seq__15859_15873__$1);
var G__15875 = cljs.core.chunk_rest.call(null,seq__15859_15873__$1);
var G__15876 = c__5897__auto___15874;
var G__15877 = cljs.core.count.call(null,c__5897__auto___15874);
var G__15878 = (0);
seq__15859_15863 = G__15875;
chunk__15860_15864 = G__15876;
count__15861_15865 = G__15877;
i__15862_15866 = G__15878;
continue;
} else {
var t_15879 = cljs.core.first.call(null,seq__15859_15873__$1);
console.log(t_15879);

var G__15880 = cljs.core.next.call(null,seq__15859_15873__$1);
var G__15881 = null;
var G__15882 = (0);
var G__15883 = (0);
seq__15859_15863 = G__15880;
chunk__15860_15864 = G__15881;
count__15861_15865 = G__15882;
i__15862_15866 = G__15883;
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

var G__15885 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15885,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15885);

adzerk.boot_reload.reload.reload_css.call(null,G__15885);

adzerk.boot_reload.reload.reload_img.call(null,G__15885);

return G__15885;
});

//# sourceMappingURL=reload.js.map