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
return (function (p1__15797_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15797_SHARP_),path);
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
var seq__15802 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15803 = null;
var count__15804 = (0);
var i__15805 = (0);
while(true){
if((i__15805 < count__15804)){
var s = cljs.core._nth.call(null,chunk__15803,i__15805);
var temp__4425__auto___15806 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15806)){
var sheet_15807 = temp__4425__auto___15806;
var temp__4425__auto___15808__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15807.href,changed);
if(cljs.core.truth_(temp__4425__auto___15808__$1)){
var href_uri_15809 = temp__4425__auto___15808__$1;
sheet_15807.ownerNode.href = href_uri_15809.makeUnique().toString();
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
var temp__4425__auto___15818__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15818__$1)){
var sheet_15819 = temp__4425__auto___15818__$1;
var temp__4425__auto___15820__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15819.href,changed);
if(cljs.core.truth_(temp__4425__auto___15820__$2)){
var href_uri_15821 = temp__4425__auto___15820__$2;
sheet_15819.ownerNode.href = href_uri_15821.makeUnique().toString();
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
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__15830 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15831 = null;
var count__15832 = (0);
var i__15833 = (0);
while(true){
if((i__15833 < count__15832)){
var s = cljs.core._nth.call(null,chunk__15831,i__15833);
var temp__4425__auto___15834 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15834)){
var image_15835 = temp__4425__auto___15834;
var temp__4425__auto___15836__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15835.src,changed);
if(cljs.core.truth_(temp__4425__auto___15836__$1)){
var href_uri_15837 = temp__4425__auto___15836__$1;
image_15835.src = href_uri_15837.makeUnique().toString();
} else {
}
} else {
}

var G__15838 = seq__15830;
var G__15839 = chunk__15831;
var G__15840 = count__15832;
var G__15841 = (i__15833 + (1));
seq__15830 = G__15838;
chunk__15831 = G__15839;
count__15832 = G__15840;
i__15833 = G__15841;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15830);
if(temp__4425__auto__){
var seq__15830__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15830__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15830__$1);
var G__15842 = cljs.core.chunk_rest.call(null,seq__15830__$1);
var G__15843 = c__5897__auto__;
var G__15844 = cljs.core.count.call(null,c__5897__auto__);
var G__15845 = (0);
seq__15830 = G__15842;
chunk__15831 = G__15843;
count__15832 = G__15844;
i__15833 = G__15845;
continue;
} else {
var s = cljs.core.first.call(null,seq__15830__$1);
var temp__4425__auto___15846__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15846__$1)){
var image_15847 = temp__4425__auto___15846__$1;
var temp__4425__auto___15848__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15847.src,changed);
if(cljs.core.truth_(temp__4425__auto___15848__$2)){
var href_uri_15849 = temp__4425__auto___15848__$2;
image_15847.src = href_uri_15849.makeUnique().toString();
} else {
}
} else {
}

var G__15850 = cljs.core.next.call(null,seq__15830__$1);
var G__15851 = null;
var G__15852 = (0);
var G__15853 = (0);
seq__15830 = G__15850;
chunk__15831 = G__15851;
count__15832 = G__15852;
i__15833 = G__15853;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15856){
var map__15859 = p__15856;
var map__15859__$1 = ((((!((map__15859 == null)))?((((map__15859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15859):map__15859);
var on_jsload = cljs.core.get.call(null,map__15859__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15859,map__15859__$1,on_jsload){
return (function (p1__15854_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15854_SHARP_,".js");
});})(map__15859,map__15859__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15859,map__15859__$1,on_jsload){
return (function (p1__15855_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15855_SHARP_).makeUnique());
});})(js_files,map__15859,map__15859__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15859,map__15859__$1,on_jsload){
return (function() { 
var G__15861__delegate = function (_){
return on_jsload.call(null);
};
var G__15861 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15862__i = 0, G__15862__a = new Array(arguments.length -  0);
while (G__15862__i < G__15862__a.length) {G__15862__a[G__15862__i] = arguments[G__15862__i + 0]; ++G__15862__i;}
  _ = new cljs.core.IndexedSeq(G__15862__a,0);
} 
return G__15861__delegate.call(this,_);};
G__15861.cljs$lang$maxFixedArity = 0;
G__15861.cljs$lang$applyTo = (function (arglist__15863){
var _ = cljs.core.seq(arglist__15863);
return G__15861__delegate(_);
});
G__15861.cljs$core$IFn$_invoke$arity$variadic = G__15861__delegate;
return G__15861;
})()
;})(js_files,map__15859,map__15859__$1,on_jsload))
,((function (js_files,map__15859,map__15859__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15859,map__15859__$1,on_jsload))
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

var seq__15868_15872 = cljs.core.seq.call(null,things_to_log);
var chunk__15869_15873 = null;
var count__15870_15874 = (0);
var i__15871_15875 = (0);
while(true){
if((i__15871_15875 < count__15870_15874)){
var t_15876 = cljs.core._nth.call(null,chunk__15869_15873,i__15871_15875);
console.log(t_15876);

var G__15877 = seq__15868_15872;
var G__15878 = chunk__15869_15873;
var G__15879 = count__15870_15874;
var G__15880 = (i__15871_15875 + (1));
seq__15868_15872 = G__15877;
chunk__15869_15873 = G__15878;
count__15870_15874 = G__15879;
i__15871_15875 = G__15880;
continue;
} else {
var temp__4425__auto___15881 = cljs.core.seq.call(null,seq__15868_15872);
if(temp__4425__auto___15881){
var seq__15868_15882__$1 = temp__4425__auto___15881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15868_15882__$1)){
var c__5897__auto___15883 = cljs.core.chunk_first.call(null,seq__15868_15882__$1);
var G__15884 = cljs.core.chunk_rest.call(null,seq__15868_15882__$1);
var G__15885 = c__5897__auto___15883;
var G__15886 = cljs.core.count.call(null,c__5897__auto___15883);
var G__15887 = (0);
seq__15868_15872 = G__15884;
chunk__15869_15873 = G__15885;
count__15870_15874 = G__15886;
i__15871_15875 = G__15887;
continue;
} else {
var t_15888 = cljs.core.first.call(null,seq__15868_15882__$1);
console.log(t_15888);

var G__15889 = cljs.core.next.call(null,seq__15868_15882__$1);
var G__15890 = null;
var G__15891 = (0);
var G__15892 = (0);
seq__15868_15872 = G__15889;
chunk__15869_15873 = G__15890;
count__15870_15874 = G__15891;
i__15871_15875 = G__15892;
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

var G__15894 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15894,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15894);

adzerk.boot_reload.reload.reload_css.call(null,G__15894);

adzerk.boot_reload.reload.reload_img.call(null,G__15894);

return G__15894;
});

//# sourceMappingURL=reload.js.map