// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cards.util');
goog.require('cljs.core');
goog.require('om.dom');
cards.util.update_cb_info = (function cards$util$update_cb_info(var_args){
var args__6051__auto__ = [];
var len__6044__auto___22323 = arguments.length;
var i__6045__auto___22324 = (0);
while(true){
if((i__6045__auto___22324 < len__6044__auto___22323)){
args__6051__auto__.push((arguments[i__6045__auto___22324]));

var G__22325 = (i__6045__auto___22324 + (1));
i__6045__auto___22324 = G__22325;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((2) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((2)),(0))):null);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6052__auto__);
});

cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic = (function (tag,state,params){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (state__$1){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callbacks,tag,cljs.core.cst$kw$counter], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callbacks,tag,cljs.core.cst$kw$params], null),params);
}));
});

cards.util.update_cb_info.cljs$lang$maxFixedArity = (2);

cards.util.update_cb_info.cljs$lang$applyTo = (function (seq22320){
var G__22321 = cljs.core.first(seq22320);
var seq22320__$1 = cljs.core.next(seq22320);
var G__22322 = cljs.core.first(seq22320__$1);
var seq22320__$2 = cljs.core.next(seq22320__$1);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic(G__22321,G__22322,seq22320__$2);
});
cards.util.render_cb_info = (function cards$util$render_cb_info(tag,state,label){
var map__22342 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callbacks,tag], null));
var map__22342__$1 = ((((!((map__22342 == null)))?((((map__22342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22342):map__22342);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$counter);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$params);
var G__22344 = {"style": {"marginTop": "1rem"}};
var G__22345 = om.util.force_children((function (){var G__22348 = null;
var G__22349 = om.util.force_children("Callback: ");
var G__22350 = om.util.force_children(label);
return React.DOM.strong(G__22348,G__22349,G__22350);
})());
var G__22346 = om.util.force_children((function (){var G__22351 = null;
var G__22352 = om.util.force_children([cljs.core.str("Triggered "),cljs.core.str((function (){var or__4986__auto__ = counter;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (0);
}
})()),cljs.core.str(" times")].join(''));
return React.DOM.div(G__22351,G__22352);
})());
var G__22347 = om.util.force_children((function (){var G__22353 = null;
var G__22354 = om.util.force_children("Parameters: ");
var G__22355 = om.util.force_children((function (){var G__22356 = null;
var G__22357 = om.util.force_children([cljs.core.str(params)].join(''));
return React.DOM.code(G__22356,G__22357);
})());
return React.DOM.div(G__22353,G__22354,G__22355);
})());
return React.DOM.div(G__22344,G__22345,G__22346,G__22347);
});
