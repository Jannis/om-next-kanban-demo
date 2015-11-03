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
return (function (p1__15633_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15633_SHARP_),path);
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
var seq__15638 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15639 = null;
var count__15640 = (0);
var i__15641 = (0);
while(true){
if((i__15641 < count__15640)){
var s = cljs.core._nth.call(null,chunk__15639,i__15641);
var temp__4425__auto___15642 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15642)){
var sheet_15643 = temp__4425__auto___15642;
var temp__4425__auto___15644__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15643.href,changed);
if(cljs.core.truth_(temp__4425__auto___15644__$1)){
var href_uri_15645 = temp__4425__auto___15644__$1;
sheet_15643.ownerNode.href = href_uri_15645.makeUnique().toString();
} else {
}
} else {
}

var G__15646 = seq__15638;
var G__15647 = chunk__15639;
var G__15648 = count__15640;
var G__15649 = (i__15641 + (1));
seq__15638 = G__15646;
chunk__15639 = G__15647;
count__15640 = G__15648;
i__15641 = G__15649;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15638);
if(temp__4425__auto__){
var seq__15638__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15638__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15638__$1);
var G__15650 = cljs.core.chunk_rest.call(null,seq__15638__$1);
var G__15651 = c__5897__auto__;
var G__15652 = cljs.core.count.call(null,c__5897__auto__);
var G__15653 = (0);
seq__15638 = G__15650;
chunk__15639 = G__15651;
count__15640 = G__15652;
i__15641 = G__15653;
continue;
} else {
var s = cljs.core.first.call(null,seq__15638__$1);
var temp__4425__auto___15654__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15654__$1)){
var sheet_15655 = temp__4425__auto___15654__$1;
var temp__4425__auto___15656__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15655.href,changed);
if(cljs.core.truth_(temp__4425__auto___15656__$2)){
var href_uri_15657 = temp__4425__auto___15656__$2;
sheet_15655.ownerNode.href = href_uri_15657.makeUnique().toString();
} else {
}
} else {
}

var G__15658 = cljs.core.next.call(null,seq__15638__$1);
var G__15659 = null;
var G__15660 = (0);
var G__15661 = (0);
seq__15638 = G__15658;
chunk__15639 = G__15659;
count__15640 = G__15660;
i__15641 = G__15661;
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
var seq__15666 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15667 = null;
var count__15668 = (0);
var i__15669 = (0);
while(true){
if((i__15669 < count__15668)){
var s = cljs.core._nth.call(null,chunk__15667,i__15669);
var temp__4425__auto___15670 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15670)){
var image_15671 = temp__4425__auto___15670;
var temp__4425__auto___15672__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15671.src,changed);
if(cljs.core.truth_(temp__4425__auto___15672__$1)){
var href_uri_15673 = temp__4425__auto___15672__$1;
image_15671.src = href_uri_15673.makeUnique().toString();
} else {
}
} else {
}

var G__15674 = seq__15666;
var G__15675 = chunk__15667;
var G__15676 = count__15668;
var G__15677 = (i__15669 + (1));
seq__15666 = G__15674;
chunk__15667 = G__15675;
count__15668 = G__15676;
i__15669 = G__15677;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15666);
if(temp__4425__auto__){
var seq__15666__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15666__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15666__$1);
var G__15678 = cljs.core.chunk_rest.call(null,seq__15666__$1);
var G__15679 = c__5897__auto__;
var G__15680 = cljs.core.count.call(null,c__5897__auto__);
var G__15681 = (0);
seq__15666 = G__15678;
chunk__15667 = G__15679;
count__15668 = G__15680;
i__15669 = G__15681;
continue;
} else {
var s = cljs.core.first.call(null,seq__15666__$1);
var temp__4425__auto___15682__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15682__$1)){
var image_15683 = temp__4425__auto___15682__$1;
var temp__4425__auto___15684__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15683.src,changed);
if(cljs.core.truth_(temp__4425__auto___15684__$2)){
var href_uri_15685 = temp__4425__auto___15684__$2;
image_15683.src = href_uri_15685.makeUnique().toString();
} else {
}
} else {
}

var G__15686 = cljs.core.next.call(null,seq__15666__$1);
var G__15687 = null;
var G__15688 = (0);
var G__15689 = (0);
seq__15666 = G__15686;
chunk__15667 = G__15687;
count__15668 = G__15688;
i__15669 = G__15689;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15692){
var map__15695 = p__15692;
var map__15695__$1 = ((((!((map__15695 == null)))?((((map__15695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15695):map__15695);
var on_jsload = cljs.core.get.call(null,map__15695__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15695,map__15695__$1,on_jsload){
return (function (p1__15690_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15690_SHARP_,".js");
});})(map__15695,map__15695__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15695,map__15695__$1,on_jsload){
return (function (p1__15691_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15691_SHARP_).makeUnique());
});})(js_files,map__15695,map__15695__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15695,map__15695__$1,on_jsload){
return (function() { 
var G__15697__delegate = function (_){
return on_jsload.call(null);
};
var G__15697 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15698__i = 0, G__15698__a = new Array(arguments.length -  0);
while (G__15698__i < G__15698__a.length) {G__15698__a[G__15698__i] = arguments[G__15698__i + 0]; ++G__15698__i;}
  _ = new cljs.core.IndexedSeq(G__15698__a,0);
} 
return G__15697__delegate.call(this,_);};
G__15697.cljs$lang$maxFixedArity = 0;
G__15697.cljs$lang$applyTo = (function (arglist__15699){
var _ = cljs.core.seq(arglist__15699);
return G__15697__delegate(_);
});
G__15697.cljs$core$IFn$_invoke$arity$variadic = G__15697__delegate;
return G__15697;
})()
;})(js_files,map__15695,map__15695__$1,on_jsload))
,((function (js_files,map__15695,map__15695__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15695,map__15695__$1,on_jsload))
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

var seq__15704_15708 = cljs.core.seq.call(null,things_to_log);
var chunk__15705_15709 = null;
var count__15706_15710 = (0);
var i__15707_15711 = (0);
while(true){
if((i__15707_15711 < count__15706_15710)){
var t_15712 = cljs.core._nth.call(null,chunk__15705_15709,i__15707_15711);
console.log(t_15712);

var G__15713 = seq__15704_15708;
var G__15714 = chunk__15705_15709;
var G__15715 = count__15706_15710;
var G__15716 = (i__15707_15711 + (1));
seq__15704_15708 = G__15713;
chunk__15705_15709 = G__15714;
count__15706_15710 = G__15715;
i__15707_15711 = G__15716;
continue;
} else {
var temp__4425__auto___15717 = cljs.core.seq.call(null,seq__15704_15708);
if(temp__4425__auto___15717){
var seq__15704_15718__$1 = temp__4425__auto___15717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15704_15718__$1)){
var c__5897__auto___15719 = cljs.core.chunk_first.call(null,seq__15704_15718__$1);
var G__15720 = cljs.core.chunk_rest.call(null,seq__15704_15718__$1);
var G__15721 = c__5897__auto___15719;
var G__15722 = cljs.core.count.call(null,c__5897__auto___15719);
var G__15723 = (0);
seq__15704_15708 = G__15720;
chunk__15705_15709 = G__15721;
count__15706_15710 = G__15722;
i__15707_15711 = G__15723;
continue;
} else {
var t_15724 = cljs.core.first.call(null,seq__15704_15718__$1);
console.log(t_15724);

var G__15725 = cljs.core.next.call(null,seq__15704_15718__$1);
var G__15726 = null;
var G__15727 = (0);
var G__15728 = (0);
seq__15704_15708 = G__15725;
chunk__15705_15709 = G__15726;
count__15706_15710 = G__15727;
i__15707_15711 = G__15728;
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

var G__15730 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15730,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15730);

adzerk.boot_reload.reload.reload_css.call(null,G__15730);

adzerk.boot_reload.reload.reload_img.call(null,G__15730);

return G__15730;
});

//# sourceMappingURL=reload.js.map