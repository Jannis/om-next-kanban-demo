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
return (function (p1__8661_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8661_SHARP_),path);
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
var seq__8666 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8667 = null;
var count__8668 = (0);
var i__8669 = (0);
while(true){
if((i__8669 < count__8668)){
var s = cljs.core._nth.call(null,chunk__8667,i__8669);
var temp__4425__auto___8670 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8670)){
var sheet_8671 = temp__4425__auto___8670;
var temp__4425__auto___8672__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8671.href,changed);
if(cljs.core.truth_(temp__4425__auto___8672__$1)){
var href_uri_8673 = temp__4425__auto___8672__$1;
sheet_8671.ownerNode.href = href_uri_8673.makeUnique().toString();
} else {
}
} else {
}

var G__8674 = seq__8666;
var G__8675 = chunk__8667;
var G__8676 = count__8668;
var G__8677 = (i__8669 + (1));
seq__8666 = G__8674;
chunk__8667 = G__8675;
count__8668 = G__8676;
i__8669 = G__8677;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8666);
if(temp__4425__auto__){
var seq__8666__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8666__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8666__$1);
var G__8678 = cljs.core.chunk_rest.call(null,seq__8666__$1);
var G__8679 = c__5897__auto__;
var G__8680 = cljs.core.count.call(null,c__5897__auto__);
var G__8681 = (0);
seq__8666 = G__8678;
chunk__8667 = G__8679;
count__8668 = G__8680;
i__8669 = G__8681;
continue;
} else {
var s = cljs.core.first.call(null,seq__8666__$1);
var temp__4425__auto___8682__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8682__$1)){
var sheet_8683 = temp__4425__auto___8682__$1;
var temp__4425__auto___8684__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8683.href,changed);
if(cljs.core.truth_(temp__4425__auto___8684__$2)){
var href_uri_8685 = temp__4425__auto___8684__$2;
sheet_8683.ownerNode.href = href_uri_8685.makeUnique().toString();
} else {
}
} else {
}

var G__8686 = cljs.core.next.call(null,seq__8666__$1);
var G__8687 = null;
var G__8688 = (0);
var G__8689 = (0);
seq__8666 = G__8686;
chunk__8667 = G__8687;
count__8668 = G__8688;
i__8669 = G__8689;
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
var seq__8694 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8695 = null;
var count__8696 = (0);
var i__8697 = (0);
while(true){
if((i__8697 < count__8696)){
var s = cljs.core._nth.call(null,chunk__8695,i__8697);
var temp__4425__auto___8698 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8698)){
var image_8699 = temp__4425__auto___8698;
var temp__4425__auto___8700__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8699.src,changed);
if(cljs.core.truth_(temp__4425__auto___8700__$1)){
var href_uri_8701 = temp__4425__auto___8700__$1;
image_8699.src = href_uri_8701.makeUnique().toString();
} else {
}
} else {
}

var G__8702 = seq__8694;
var G__8703 = chunk__8695;
var G__8704 = count__8696;
var G__8705 = (i__8697 + (1));
seq__8694 = G__8702;
chunk__8695 = G__8703;
count__8696 = G__8704;
i__8697 = G__8705;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8694);
if(temp__4425__auto__){
var seq__8694__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8694__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__8694__$1);
var G__8706 = cljs.core.chunk_rest.call(null,seq__8694__$1);
var G__8707 = c__5897__auto__;
var G__8708 = cljs.core.count.call(null,c__5897__auto__);
var G__8709 = (0);
seq__8694 = G__8706;
chunk__8695 = G__8707;
count__8696 = G__8708;
i__8697 = G__8709;
continue;
} else {
var s = cljs.core.first.call(null,seq__8694__$1);
var temp__4425__auto___8710__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8710__$1)){
var image_8711 = temp__4425__auto___8710__$1;
var temp__4425__auto___8712__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8711.src,changed);
if(cljs.core.truth_(temp__4425__auto___8712__$2)){
var href_uri_8713 = temp__4425__auto___8712__$2;
image_8711.src = href_uri_8713.makeUnique().toString();
} else {
}
} else {
}

var G__8714 = cljs.core.next.call(null,seq__8694__$1);
var G__8715 = null;
var G__8716 = (0);
var G__8717 = (0);
seq__8694 = G__8714;
chunk__8695 = G__8715;
count__8696 = G__8716;
i__8697 = G__8717;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8720){
var map__8723 = p__8720;
var map__8723__$1 = ((((!((map__8723 == null)))?((((map__8723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8723):map__8723);
var on_jsload = cljs.core.get.call(null,map__8723__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8723,map__8723__$1,on_jsload){
return (function (p1__8718_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8718_SHARP_,".js");
});})(map__8723,map__8723__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8723,map__8723__$1,on_jsload){
return (function (p1__8719_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8719_SHARP_).makeUnique());
});})(js_files,map__8723,map__8723__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8723,map__8723__$1,on_jsload){
return (function() { 
var G__8725__delegate = function (_){
return on_jsload.call(null);
};
var G__8725 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8726__i = 0, G__8726__a = new Array(arguments.length -  0);
while (G__8726__i < G__8726__a.length) {G__8726__a[G__8726__i] = arguments[G__8726__i + 0]; ++G__8726__i;}
  _ = new cljs.core.IndexedSeq(G__8726__a,0);
} 
return G__8725__delegate.call(this,_);};
G__8725.cljs$lang$maxFixedArity = 0;
G__8725.cljs$lang$applyTo = (function (arglist__8727){
var _ = cljs.core.seq(arglist__8727);
return G__8725__delegate(_);
});
G__8725.cljs$core$IFn$_invoke$arity$variadic = G__8725__delegate;
return G__8725;
})()
;})(js_files,map__8723,map__8723__$1,on_jsload))
,((function (js_files,map__8723,map__8723__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8723,map__8723__$1,on_jsload))
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

var seq__8732_8736 = cljs.core.seq.call(null,things_to_log);
var chunk__8733_8737 = null;
var count__8734_8738 = (0);
var i__8735_8739 = (0);
while(true){
if((i__8735_8739 < count__8734_8738)){
var t_8740 = cljs.core._nth.call(null,chunk__8733_8737,i__8735_8739);
console.log(t_8740);

var G__8741 = seq__8732_8736;
var G__8742 = chunk__8733_8737;
var G__8743 = count__8734_8738;
var G__8744 = (i__8735_8739 + (1));
seq__8732_8736 = G__8741;
chunk__8733_8737 = G__8742;
count__8734_8738 = G__8743;
i__8735_8739 = G__8744;
continue;
} else {
var temp__4425__auto___8745 = cljs.core.seq.call(null,seq__8732_8736);
if(temp__4425__auto___8745){
var seq__8732_8746__$1 = temp__4425__auto___8745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8732_8746__$1)){
var c__5897__auto___8747 = cljs.core.chunk_first.call(null,seq__8732_8746__$1);
var G__8748 = cljs.core.chunk_rest.call(null,seq__8732_8746__$1);
var G__8749 = c__5897__auto___8747;
var G__8750 = cljs.core.count.call(null,c__5897__auto___8747);
var G__8751 = (0);
seq__8732_8736 = G__8748;
chunk__8733_8737 = G__8749;
count__8734_8738 = G__8750;
i__8735_8739 = G__8751;
continue;
} else {
var t_8752 = cljs.core.first.call(null,seq__8732_8746__$1);
console.log(t_8752);

var G__8753 = cljs.core.next.call(null,seq__8732_8746__$1);
var G__8754 = null;
var G__8755 = (0);
var G__8756 = (0);
seq__8732_8736 = G__8753;
chunk__8733_8737 = G__8754;
count__8734_8738 = G__8755;
i__8735_8739 = G__8756;
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

var G__8758 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8758,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8758);

adzerk.boot_reload.reload.reload_css.call(null,G__8758);

adzerk.boot_reload.reload.reload_img.call(null,G__8758);

return G__8758;
});

//# sourceMappingURL=reload.js.map