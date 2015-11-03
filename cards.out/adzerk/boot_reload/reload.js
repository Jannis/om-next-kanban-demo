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
return (function (p1__15522_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__15522_SHARP_),path);
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
var seq__15527 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__15528 = null;
var count__15529 = (0);
var i__15530 = (0);
while(true){
if((i__15530 < count__15529)){
var s = cljs.core._nth.call(null,chunk__15528,i__15530);
var temp__4425__auto___15531 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15531)){
var sheet_15532 = temp__4425__auto___15531;
var temp__4425__auto___15533__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15532.href,changed);
if(cljs.core.truth_(temp__4425__auto___15533__$1)){
var href_uri_15534 = temp__4425__auto___15533__$1;
sheet_15532.ownerNode.href = href_uri_15534.makeUnique().toString();
} else {
}
} else {
}

var G__15535 = seq__15527;
var G__15536 = chunk__15528;
var G__15537 = count__15529;
var G__15538 = (i__15530 + (1));
seq__15527 = G__15535;
chunk__15528 = G__15536;
count__15529 = G__15537;
i__15530 = G__15538;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15527);
if(temp__4425__auto__){
var seq__15527__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15527__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15527__$1);
var G__15539 = cljs.core.chunk_rest.call(null,seq__15527__$1);
var G__15540 = c__5897__auto__;
var G__15541 = cljs.core.count.call(null,c__5897__auto__);
var G__15542 = (0);
seq__15527 = G__15539;
chunk__15528 = G__15540;
count__15529 = G__15541;
i__15530 = G__15542;
continue;
} else {
var s = cljs.core.first.call(null,seq__15527__$1);
var temp__4425__auto___15543__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___15543__$1)){
var sheet_15544 = temp__4425__auto___15543__$1;
var temp__4425__auto___15545__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_15544.href,changed);
if(cljs.core.truth_(temp__4425__auto___15545__$2)){
var href_uri_15546 = temp__4425__auto___15545__$2;
sheet_15544.ownerNode.href = href_uri_15546.makeUnique().toString();
} else {
}
} else {
}

var G__15547 = cljs.core.next.call(null,seq__15527__$1);
var G__15548 = null;
var G__15549 = (0);
var G__15550 = (0);
seq__15527 = G__15547;
chunk__15528 = G__15548;
count__15529 = G__15549;
i__15530 = G__15550;
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
var seq__15555 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__15556 = null;
var count__15557 = (0);
var i__15558 = (0);
while(true){
if((i__15558 < count__15557)){
var s = cljs.core._nth.call(null,chunk__15556,i__15558);
var temp__4425__auto___15559 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15559)){
var image_15560 = temp__4425__auto___15559;
var temp__4425__auto___15561__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15560.src,changed);
if(cljs.core.truth_(temp__4425__auto___15561__$1)){
var href_uri_15562 = temp__4425__auto___15561__$1;
image_15560.src = href_uri_15562.makeUnique().toString();
} else {
}
} else {
}

var G__15563 = seq__15555;
var G__15564 = chunk__15556;
var G__15565 = count__15557;
var G__15566 = (i__15558 + (1));
seq__15555 = G__15563;
chunk__15556 = G__15564;
count__15557 = G__15565;
i__15558 = G__15566;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15555);
if(temp__4425__auto__){
var seq__15555__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15555__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__15555__$1);
var G__15567 = cljs.core.chunk_rest.call(null,seq__15555__$1);
var G__15568 = c__5897__auto__;
var G__15569 = cljs.core.count.call(null,c__5897__auto__);
var G__15570 = (0);
seq__15555 = G__15567;
chunk__15556 = G__15568;
count__15557 = G__15569;
i__15558 = G__15570;
continue;
} else {
var s = cljs.core.first.call(null,seq__15555__$1);
var temp__4425__auto___15571__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___15571__$1)){
var image_15572 = temp__4425__auto___15571__$1;
var temp__4425__auto___15573__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_15572.src,changed);
if(cljs.core.truth_(temp__4425__auto___15573__$2)){
var href_uri_15574 = temp__4425__auto___15573__$2;
image_15572.src = href_uri_15574.makeUnique().toString();
} else {
}
} else {
}

var G__15575 = cljs.core.next.call(null,seq__15555__$1);
var G__15576 = null;
var G__15577 = (0);
var G__15578 = (0);
seq__15555 = G__15575;
chunk__15556 = G__15576;
count__15557 = G__15577;
i__15558 = G__15578;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__15581){
var map__15584 = p__15581;
var map__15584__$1 = ((((!((map__15584 == null)))?((((map__15584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15584):map__15584);
var on_jsload = cljs.core.get.call(null,map__15584__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__15584,map__15584__$1,on_jsload){
return (function (p1__15579_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__15579_SHARP_,".js");
});})(map__15584,map__15584__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__15584,map__15584__$1,on_jsload){
return (function (p1__15580_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__15580_SHARP_).makeUnique());
});})(js_files,map__15584,map__15584__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__15584,map__15584__$1,on_jsload){
return (function() { 
var G__15586__delegate = function (_){
return on_jsload.call(null);
};
var G__15586 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__15587__i = 0, G__15587__a = new Array(arguments.length -  0);
while (G__15587__i < G__15587__a.length) {G__15587__a[G__15587__i] = arguments[G__15587__i + 0]; ++G__15587__i;}
  _ = new cljs.core.IndexedSeq(G__15587__a,0);
} 
return G__15586__delegate.call(this,_);};
G__15586.cljs$lang$maxFixedArity = 0;
G__15586.cljs$lang$applyTo = (function (arglist__15588){
var _ = cljs.core.seq(arglist__15588);
return G__15586__delegate(_);
});
G__15586.cljs$core$IFn$_invoke$arity$variadic = G__15586__delegate;
return G__15586;
})()
;})(js_files,map__15584,map__15584__$1,on_jsload))
,((function (js_files,map__15584,map__15584__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__15584,map__15584__$1,on_jsload))
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

var seq__15593_15597 = cljs.core.seq.call(null,things_to_log);
var chunk__15594_15598 = null;
var count__15595_15599 = (0);
var i__15596_15600 = (0);
while(true){
if((i__15596_15600 < count__15595_15599)){
var t_15601 = cljs.core._nth.call(null,chunk__15594_15598,i__15596_15600);
console.log(t_15601);

var G__15602 = seq__15593_15597;
var G__15603 = chunk__15594_15598;
var G__15604 = count__15595_15599;
var G__15605 = (i__15596_15600 + (1));
seq__15593_15597 = G__15602;
chunk__15594_15598 = G__15603;
count__15595_15599 = G__15604;
i__15596_15600 = G__15605;
continue;
} else {
var temp__4425__auto___15606 = cljs.core.seq.call(null,seq__15593_15597);
if(temp__4425__auto___15606){
var seq__15593_15607__$1 = temp__4425__auto___15606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15593_15607__$1)){
var c__5897__auto___15608 = cljs.core.chunk_first.call(null,seq__15593_15607__$1);
var G__15609 = cljs.core.chunk_rest.call(null,seq__15593_15607__$1);
var G__15610 = c__5897__auto___15608;
var G__15611 = cljs.core.count.call(null,c__5897__auto___15608);
var G__15612 = (0);
seq__15593_15597 = G__15609;
chunk__15594_15598 = G__15610;
count__15595_15599 = G__15611;
i__15596_15600 = G__15612;
continue;
} else {
var t_15613 = cljs.core.first.call(null,seq__15593_15607__$1);
console.log(t_15613);

var G__15614 = cljs.core.next.call(null,seq__15593_15607__$1);
var G__15615 = null;
var G__15616 = (0);
var G__15617 = (0);
seq__15593_15597 = G__15614;
chunk__15594_15598 = G__15615;
count__15595_15599 = G__15616;
i__15596_15600 = G__15617;
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

var G__15619 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__15619,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__15619);

adzerk.boot_reload.reload.reload_css.call(null,G__15619);

adzerk.boot_reload.reload.reload_img.call(null,G__15619);

return G__15619;
});

//# sourceMappingURL=reload.js.map