// Compiled by ClojureScript 1.7.170 {}
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
return (function (p1__8553_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8553_SHARP_),path);
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
var seq__8558 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8559 = null;
var count__8560 = (0);
var i__8561 = (0);
while(true){
if((i__8561 < count__8560)){
var s = cljs.core._nth.call(null,chunk__8559,i__8561);
var temp__4425__auto___8562 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8562)){
var sheet_8563 = temp__4425__auto___8562;
var temp__4425__auto___8564__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8563.href,changed);
if(cljs.core.truth_(temp__4425__auto___8564__$1)){
var href_uri_8565 = temp__4425__auto___8564__$1;
sheet_8563.ownerNode.href = href_uri_8565.makeUnique().toString();
} else {
}
} else {
}

var G__8566 = seq__8558;
var G__8567 = chunk__8559;
var G__8568 = count__8560;
var G__8569 = (i__8561 + (1));
seq__8558 = G__8566;
chunk__8559 = G__8567;
count__8560 = G__8568;
i__8561 = G__8569;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8558);
if(temp__4425__auto__){
var seq__8558__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8558__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__8558__$1);
var G__8570 = cljs.core.chunk_rest.call(null,seq__8558__$1);
var G__8571 = c__5971__auto__;
var G__8572 = cljs.core.count.call(null,c__5971__auto__);
var G__8573 = (0);
seq__8558 = G__8570;
chunk__8559 = G__8571;
count__8560 = G__8572;
i__8561 = G__8573;
continue;
} else {
var s = cljs.core.first.call(null,seq__8558__$1);
var temp__4425__auto___8574__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8574__$1)){
var sheet_8575 = temp__4425__auto___8574__$1;
var temp__4425__auto___8576__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8575.href,changed);
if(cljs.core.truth_(temp__4425__auto___8576__$2)){
var href_uri_8577 = temp__4425__auto___8576__$2;
sheet_8575.ownerNode.href = href_uri_8577.makeUnique().toString();
} else {
}
} else {
}

var G__8578 = cljs.core.next.call(null,seq__8558__$1);
var G__8579 = null;
var G__8580 = (0);
var G__8581 = (0);
seq__8558 = G__8578;
chunk__8559 = G__8579;
count__8560 = G__8580;
i__8561 = G__8581;
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
var seq__8586 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8587 = null;
var count__8588 = (0);
var i__8589 = (0);
while(true){
if((i__8589 < count__8588)){
var s = cljs.core._nth.call(null,chunk__8587,i__8589);
var temp__4425__auto___8590 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8590)){
var image_8591 = temp__4425__auto___8590;
var temp__4425__auto___8592__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8591.src,changed);
if(cljs.core.truth_(temp__4425__auto___8592__$1)){
var href_uri_8593 = temp__4425__auto___8592__$1;
image_8591.src = href_uri_8593.makeUnique().toString();
} else {
}
} else {
}

var G__8594 = seq__8586;
var G__8595 = chunk__8587;
var G__8596 = count__8588;
var G__8597 = (i__8589 + (1));
seq__8586 = G__8594;
chunk__8587 = G__8595;
count__8588 = G__8596;
i__8589 = G__8597;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8586);
if(temp__4425__auto__){
var seq__8586__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8586__$1)){
var c__5971__auto__ = cljs.core.chunk_first.call(null,seq__8586__$1);
var G__8598 = cljs.core.chunk_rest.call(null,seq__8586__$1);
var G__8599 = c__5971__auto__;
var G__8600 = cljs.core.count.call(null,c__5971__auto__);
var G__8601 = (0);
seq__8586 = G__8598;
chunk__8587 = G__8599;
count__8588 = G__8600;
i__8589 = G__8601;
continue;
} else {
var s = cljs.core.first.call(null,seq__8586__$1);
var temp__4425__auto___8602__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8602__$1)){
var image_8603 = temp__4425__auto___8602__$1;
var temp__4425__auto___8604__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8603.src,changed);
if(cljs.core.truth_(temp__4425__auto___8604__$2)){
var href_uri_8605 = temp__4425__auto___8604__$2;
image_8603.src = href_uri_8605.makeUnique().toString();
} else {
}
} else {
}

var G__8606 = cljs.core.next.call(null,seq__8586__$1);
var G__8607 = null;
var G__8608 = (0);
var G__8609 = (0);
seq__8586 = G__8606;
chunk__8587 = G__8607;
count__8588 = G__8608;
i__8589 = G__8609;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8612){
var map__8615 = p__8612;
var map__8615__$1 = ((((!((map__8615 == null)))?((((map__8615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8615):map__8615);
var on_jsload = cljs.core.get.call(null,map__8615__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8615,map__8615__$1,on_jsload){
return (function (p1__8610_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8610_SHARP_,".js");
});})(map__8615,map__8615__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8615,map__8615__$1,on_jsload){
return (function (p1__8611_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8611_SHARP_).makeUnique());
});})(js_files,map__8615,map__8615__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8615,map__8615__$1,on_jsload){
return (function() { 
var G__8617__delegate = function (_){
return on_jsload.call(null);
};
var G__8617 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8618__i = 0, G__8618__a = new Array(arguments.length -  0);
while (G__8618__i < G__8618__a.length) {G__8618__a[G__8618__i] = arguments[G__8618__i + 0]; ++G__8618__i;}
  _ = new cljs.core.IndexedSeq(G__8618__a,0);
} 
return G__8617__delegate.call(this,_);};
G__8617.cljs$lang$maxFixedArity = 0;
G__8617.cljs$lang$applyTo = (function (arglist__8619){
var _ = cljs.core.seq(arglist__8619);
return G__8617__delegate(_);
});
G__8617.cljs$core$IFn$_invoke$arity$variadic = G__8617__delegate;
return G__8617;
})()
;})(js_files,map__8615,map__8615__$1,on_jsload))
,((function (js_files,map__8615,map__8615__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8615,map__8615__$1,on_jsload))
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

var seq__8624_8628 = cljs.core.seq.call(null,things_to_log);
var chunk__8625_8629 = null;
var count__8626_8630 = (0);
var i__8627_8631 = (0);
while(true){
if((i__8627_8631 < count__8626_8630)){
var t_8632 = cljs.core._nth.call(null,chunk__8625_8629,i__8627_8631);
console.log(t_8632);

var G__8633 = seq__8624_8628;
var G__8634 = chunk__8625_8629;
var G__8635 = count__8626_8630;
var G__8636 = (i__8627_8631 + (1));
seq__8624_8628 = G__8633;
chunk__8625_8629 = G__8634;
count__8626_8630 = G__8635;
i__8627_8631 = G__8636;
continue;
} else {
var temp__4425__auto___8637 = cljs.core.seq.call(null,seq__8624_8628);
if(temp__4425__auto___8637){
var seq__8624_8638__$1 = temp__4425__auto___8637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8624_8638__$1)){
var c__5971__auto___8639 = cljs.core.chunk_first.call(null,seq__8624_8638__$1);
var G__8640 = cljs.core.chunk_rest.call(null,seq__8624_8638__$1);
var G__8641 = c__5971__auto___8639;
var G__8642 = cljs.core.count.call(null,c__5971__auto___8639);
var G__8643 = (0);
seq__8624_8628 = G__8640;
chunk__8625_8629 = G__8641;
count__8626_8630 = G__8642;
i__8627_8631 = G__8643;
continue;
} else {
var t_8644 = cljs.core.first.call(null,seq__8624_8638__$1);
console.log(t_8644);

var G__8645 = cljs.core.next.call(null,seq__8624_8638__$1);
var G__8646 = null;
var G__8647 = (0);
var G__8648 = (0);
seq__8624_8628 = G__8645;
chunk__8625_8629 = G__8646;
count__8626_8630 = G__8647;
i__8627_8631 = G__8648;
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

var G__8650 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8650,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8650);

adzerk.boot_reload.reload.reload_css.call(null,G__8650);

adzerk.boot_reload.reload.reload_img.call(null,G__8650);

return G__8650;
});

//# sourceMappingURL=reload.js.map