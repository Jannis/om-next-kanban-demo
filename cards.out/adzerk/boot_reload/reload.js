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
return (function (p1__15795_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15795_SHARP_),path);
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
var seq__15800 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15801 = null;
var count__15802 = (0);
var i__15803 = (0);
while(true){
if((i__15803 < count__15802)){
var s = cljs.core._nth.call(null,chunk__15801,i__15803);
var temp__4425__auto___15804 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15804)){
var sheet_15805 = temp__4425__auto___15804;
var temp__4425__auto___15806__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15805.href,changed);
if(cljs.core.truth_(temp__4425__auto___15806__$1)){
var href_uri_15807 = temp__4425__auto___15806__$1;
sheet_15805.ownerNode.href = href_uri_15807.makeUnique().toString();
} else {
}
} else {
}

var G__15808 = seq__15800;
var G__15809 = chunk__15801;
var G__15810 = count__15802;
var G__15811 = (i__15803 + (1));
seq__15800 = G__15808;
chunk__15801 = G__15809;
count__15802 = G__15810;
i__15803 = G__15811;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15800);
if(temp__4425__auto__){
var seq__15800__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15800__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15800__$1);
var G__15812 = cljs.core.chunk_rest.call(null,seq__15800__$1);
var G__15813 = c__5897__auto__;
var G__15814 = cljs.core.count.call(null,c__5897__auto__);
var G__15815 = (0);
seq__15800 = G__15812;
chunk__15801 = G__15813;
count__15802 = G__15814;
i__15803 = G__15815;
continue;
} else {
var s = cljs.core.first.call(null,seq__15800__$1);
var temp__4425__auto___15816__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15816__$1)){
var sheet_15817 = temp__4425__auto___15816__$1;
var temp__4425__auto___15818__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15817.href,changed);
if(cljs.core.truth_(temp__4425__auto___15818__$2)){
var href_uri_15819 = temp__4425__auto___15818__$2;
sheet_15817.ownerNode.href = href_uri_15819.makeUnique().toString();
} else {
}
} else {
}

var G__15820 = cljs.core.next.call(null,seq__15800__$1);
var G__15821 = null;
var G__15822 = (0);
var G__15823 = (0);
seq__15800 = G__15820;
chunk__15801 = G__15821;
count__15802 = G__15822;
i__15803 = G__15823;
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
var seq__15828 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15829 = null;
var count__15830 = (0);
var i__15831 = (0);
while(true){
if((i__15831 < count__15830)){
var s = cljs.core._nth.call(null,chunk__15829,i__15831);
var temp__4425__auto___15832 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15832)){
var image_15833 = temp__4425__auto___15832;
var temp__4425__auto___15834__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15833.src,changed);
if(cljs.core.truth_(temp__4425__auto___15834__$1)){
var href_uri_15835 = temp__4425__auto___15834__$1;
image_15833.src = href_uri_15835.makeUnique().toString();
} else {
}
} else {
}

var G__15836 = seq__15828;
var G__15837 = chunk__15829;
var G__15838 = count__15830;
var G__15839 = (i__15831 + (1));
seq__15828 = G__15836;
chunk__15829 = G__15837;
count__15830 = G__15838;
i__15831 = G__15839;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15828);
if(temp__4425__auto__){
var seq__15828__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15828__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15828__$1);
var G__15840 = cljs.core.chunk_rest.call(null,seq__15828__$1);
var G__15841 = c__5897__auto__;
var G__15842 = cljs.core.count.call(null,c__5897__auto__);
var G__15843 = (0);
seq__15828 = G__15840;
chunk__15829 = G__15841;
count__15830 = G__15842;
i__15831 = G__15843;
continue;
} else {
var s = cljs.core.first.call(null,seq__15828__$1);
var temp__4425__auto___15844__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15844__$1)){
var image_15845 = temp__4425__auto___15844__$1;
var temp__4425__auto___15846__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15845.src,changed);
if(cljs.core.truth_(temp__4425__auto___15846__$2)){
var href_uri_15847 = temp__4425__auto___15846__$2;
image_15845.src = href_uri_15847.makeUnique().toString();
} else {
}
} else {
}

var G__15848 = cljs.core.next.call(null,seq__15828__$1);
var G__15849 = null;
var G__15850 = (0);
var G__15851 = (0);
seq__15828 = G__15848;
chunk__15829 = G__15849;
count__15830 = G__15850;
i__15831 = G__15851;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15854){
var map__15857 = p__15854;
var map__15857__$1 = ((((!((map__15857 == null)))?((((map__15857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15857):map__15857);
var on_jsload = cljs.core.get.call(null,map__15857__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15857,map__15857__$1,on_jsload){
return (function (p1__15852_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15852_SHARP_,".js");
});})(map__15857,map__15857__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15857,map__15857__$1,on_jsload){
return (function (p1__15853_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15853_SHARP_).makeUnique());
});})(js_files,map__15857,map__15857__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15857,map__15857__$1,on_jsload){
return (function() { 
var G__15859__delegate = function (_){
return on_jsload.call(null);
};
var G__15859 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15860__i = 0, G__15860__a = new Array(arguments.length -  0);
while (G__15860__i < G__15860__a.length) {G__15860__a[G__15860__i] = arguments[G__15860__i + 0]; ++G__15860__i;}
  _ = new cljs.core.IndexedSeq(G__15860__a,0);
} 
return G__15859__delegate.call(this,_);};
G__15859.cljs$lang$maxFixedArity = 0;
G__15859.cljs$lang$applyTo = (function (arglist__15861){
var _ = cljs.core.seq(arglist__15861);
return G__15859__delegate(_);
});
G__15859.cljs$core$IFn$_invoke$arity$variadic = G__15859__delegate;
return G__15859;
})()
;})(js_files,map__15857,map__15857__$1,on_jsload))
,((function (js_files,map__15857,map__15857__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15857,map__15857__$1,on_jsload))
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

var seq__15866_15870 = cljs.core.seq.call(null,things_to_log);
var chunk__15867_15871 = null;
var count__15868_15872 = (0);
var i__15869_15873 = (0);
while(true){
if((i__15869_15873 < count__15868_15872)){
var t_15874 = cljs.core._nth.call(null,chunk__15867_15871,i__15869_15873);
console.log(t_15874);

var G__15875 = seq__15866_15870;
var G__15876 = chunk__15867_15871;
var G__15877 = count__15868_15872;
var G__15878 = (i__15869_15873 + (1));
seq__15866_15870 = G__15875;
chunk__15867_15871 = G__15876;
count__15868_15872 = G__15877;
i__15869_15873 = G__15878;
continue;
} else {
var temp__4425__auto___15879 = cljs.core.seq.call(null,seq__15866_15870);
if(temp__4425__auto___15879){
var seq__15866_15880__$1 = temp__4425__auto___15879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15866_15880__$1)){
var c__5897__auto___15881 = cljs.core.chunk_first.call(null,seq__15866_15880__$1);
var G__15882 = cljs.core.chunk_rest.call(null,seq__15866_15880__$1);
var G__15883 = c__5897__auto___15881;
var G__15884 = cljs.core.count.call(null,c__5897__auto___15881);
var G__15885 = (0);
seq__15866_15870 = G__15882;
chunk__15867_15871 = G__15883;
count__15868_15872 = G__15884;
i__15869_15873 = G__15885;
continue;
} else {
var t_15886 = cljs.core.first.call(null,seq__15866_15880__$1);
console.log(t_15886);

var G__15887 = cljs.core.next.call(null,seq__15866_15880__$1);
var G__15888 = null;
var G__15889 = (0);
var G__15890 = (0);
seq__15866_15870 = G__15887;
chunk__15867_15871 = G__15888;
count__15868_15872 = G__15889;
i__15869_15873 = G__15890;
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

var G__15892 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15892,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15892);

adzerk.boot_reload.reload.reload_css.call(null,G__15892);

adzerk.boot_reload.reload.reload_img.call(null,G__15892);

return G__15892;
});

//# sourceMappingURL=reload.js.map