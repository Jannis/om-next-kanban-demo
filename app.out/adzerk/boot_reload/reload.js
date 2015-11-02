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
return (function (p1__15787_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15787_SHARP_),path);
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
var seq__15792 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15793 = null;
var count__15794 = (0);
var i__15795 = (0);
while(true){
if((i__15795 < count__15794)){
var s = cljs.core._nth.call(null,chunk__15793,i__15795);
var temp__4425__auto___15796 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15796)){
var sheet_15797 = temp__4425__auto___15796;
var temp__4425__auto___15798__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15797.href,changed);
if(cljs.core.truth_(temp__4425__auto___15798__$1)){
var href_uri_15799 = temp__4425__auto___15798__$1;
sheet_15797.ownerNode.href = href_uri_15799.makeUnique().toString();
} else {
}
} else {
}

var G__15800 = seq__15792;
var G__15801 = chunk__15793;
var G__15802 = count__15794;
var G__15803 = (i__15795 + (1));
seq__15792 = G__15800;
chunk__15793 = G__15801;
count__15794 = G__15802;
i__15795 = G__15803;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15792);
if(temp__4425__auto__){
var seq__15792__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15792__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15792__$1);
var G__15804 = cljs.core.chunk_rest.call(null,seq__15792__$1);
var G__15805 = c__5897__auto__;
var G__15806 = cljs.core.count.call(null,c__5897__auto__);
var G__15807 = (0);
seq__15792 = G__15804;
chunk__15793 = G__15805;
count__15794 = G__15806;
i__15795 = G__15807;
continue;
} else {
var s = cljs.core.first.call(null,seq__15792__$1);
var temp__4425__auto___15808__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15808__$1)){
var sheet_15809 = temp__4425__auto___15808__$1;
var temp__4425__auto___15810__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15809.href,changed);
if(cljs.core.truth_(temp__4425__auto___15810__$2)){
var href_uri_15811 = temp__4425__auto___15810__$2;
sheet_15809.ownerNode.href = href_uri_15811.makeUnique().toString();
} else {
}
} else {
}

var G__15812 = cljs.core.next.call(null,seq__15792__$1);
var G__15813 = null;
var G__15814 = (0);
var G__15815 = (0);
seq__15792 = G__15812;
chunk__15793 = G__15813;
count__15794 = G__15814;
i__15795 = G__15815;
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
var seq__15820 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15821 = null;
var count__15822 = (0);
var i__15823 = (0);
while(true){
if((i__15823 < count__15822)){
var s = cljs.core._nth.call(null,chunk__15821,i__15823);
var temp__4425__auto___15824 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15824)){
var image_15825 = temp__4425__auto___15824;
var temp__4425__auto___15826__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15825.src,changed);
if(cljs.core.truth_(temp__4425__auto___15826__$1)){
var href_uri_15827 = temp__4425__auto___15826__$1;
image_15825.src = href_uri_15827.makeUnique().toString();
} else {
}
} else {
}

var G__15828 = seq__15820;
var G__15829 = chunk__15821;
var G__15830 = count__15822;
var G__15831 = (i__15823 + (1));
seq__15820 = G__15828;
chunk__15821 = G__15829;
count__15822 = G__15830;
i__15823 = G__15831;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15820);
if(temp__4425__auto__){
var seq__15820__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15820__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15820__$1);
var G__15832 = cljs.core.chunk_rest.call(null,seq__15820__$1);
var G__15833 = c__5897__auto__;
var G__15834 = cljs.core.count.call(null,c__5897__auto__);
var G__15835 = (0);
seq__15820 = G__15832;
chunk__15821 = G__15833;
count__15822 = G__15834;
i__15823 = G__15835;
continue;
} else {
var s = cljs.core.first.call(null,seq__15820__$1);
var temp__4425__auto___15836__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15836__$1)){
var image_15837 = temp__4425__auto___15836__$1;
var temp__4425__auto___15838__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15837.src,changed);
if(cljs.core.truth_(temp__4425__auto___15838__$2)){
var href_uri_15839 = temp__4425__auto___15838__$2;
image_15837.src = href_uri_15839.makeUnique().toString();
} else {
}
} else {
}

var G__15840 = cljs.core.next.call(null,seq__15820__$1);
var G__15841 = null;
var G__15842 = (0);
var G__15843 = (0);
seq__15820 = G__15840;
chunk__15821 = G__15841;
count__15822 = G__15842;
i__15823 = G__15843;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15846){
var map__15849 = p__15846;
var map__15849__$1 = ((((!((map__15849 == null)))?((((map__15849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15849):map__15849);
var on_jsload = cljs.core.get.call(null,map__15849__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15849,map__15849__$1,on_jsload){
return (function (p1__15844_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15844_SHARP_,".js");
});})(map__15849,map__15849__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15849,map__15849__$1,on_jsload){
return (function (p1__15845_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15845_SHARP_).makeUnique());
});})(js_files,map__15849,map__15849__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15849,map__15849__$1,on_jsload){
return (function() { 
var G__15851__delegate = function (_){
return on_jsload.call(null);
};
var G__15851 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15852__i = 0, G__15852__a = new Array(arguments.length -  0);
while (G__15852__i < G__15852__a.length) {G__15852__a[G__15852__i] = arguments[G__15852__i + 0]; ++G__15852__i;}
  _ = new cljs.core.IndexedSeq(G__15852__a,0);
} 
return G__15851__delegate.call(this,_);};
G__15851.cljs$lang$maxFixedArity = 0;
G__15851.cljs$lang$applyTo = (function (arglist__15853){
var _ = cljs.core.seq(arglist__15853);
return G__15851__delegate(_);
});
G__15851.cljs$core$IFn$_invoke$arity$variadic = G__15851__delegate;
return G__15851;
})()
;})(js_files,map__15849,map__15849__$1,on_jsload))
,((function (js_files,map__15849,map__15849__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15849,map__15849__$1,on_jsload))
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

var seq__15858_15862 = cljs.core.seq.call(null,things_to_log);
var chunk__15859_15863 = null;
var count__15860_15864 = (0);
var i__15861_15865 = (0);
while(true){
if((i__15861_15865 < count__15860_15864)){
var t_15866 = cljs.core._nth.call(null,chunk__15859_15863,i__15861_15865);
console.log(t_15866);

var G__15867 = seq__15858_15862;
var G__15868 = chunk__15859_15863;
var G__15869 = count__15860_15864;
var G__15870 = (i__15861_15865 + (1));
seq__15858_15862 = G__15867;
chunk__15859_15863 = G__15868;
count__15860_15864 = G__15869;
i__15861_15865 = G__15870;
continue;
} else {
var temp__4425__auto___15871 = cljs.core.seq.call(null,seq__15858_15862);
if(temp__4425__auto___15871){
var seq__15858_15872__$1 = temp__4425__auto___15871;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15858_15872__$1)){
var c__5897__auto___15873 = cljs.core.chunk_first.call(null,seq__15858_15872__$1);
var G__15874 = cljs.core.chunk_rest.call(null,seq__15858_15872__$1);
var G__15875 = c__5897__auto___15873;
var G__15876 = cljs.core.count.call(null,c__5897__auto___15873);
var G__15877 = (0);
seq__15858_15862 = G__15874;
chunk__15859_15863 = G__15875;
count__15860_15864 = G__15876;
i__15861_15865 = G__15877;
continue;
} else {
var t_15878 = cljs.core.first.call(null,seq__15858_15872__$1);
console.log(t_15878);

var G__15879 = cljs.core.next.call(null,seq__15858_15872__$1);
var G__15880 = null;
var G__15881 = (0);
var G__15882 = (0);
seq__15858_15862 = G__15879;
chunk__15859_15863 = G__15880;
count__15860_15864 = G__15881;
i__15861_15865 = G__15882;
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

var G__15884 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15884,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15884);

adzerk.boot_reload.reload.reload_css.call(null,G__15884);

adzerk.boot_reload.reload.reload_img.call(null,G__15884);

return G__15884;
});

//# sourceMappingURL=reload.js.map