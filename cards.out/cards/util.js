// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cards.util');
goog.require('cljs.core');
goog.require('om.dom');
cards.util.update_cb_info = (function cards$util$update_cb_info(var_args){
var args__6233__auto__ = [];
var len__6226__auto___21405 = arguments.length;
var i__6227__auto___21406 = (0);
while(true){
if((i__6227__auto___21406 < len__6226__auto___21405)){
args__6233__auto__.push((arguments[i__6227__auto___21406]));

var G__21407 = (i__6227__auto___21406 + (1));
i__6227__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((2) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((2)),(0))):null);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6234__auto__);
});

cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic = (function (tag,state,params){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (state__$1){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callbacks,tag,cljs.core.cst$kw$counter], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callbacks,tag,cljs.core.cst$kw$params], null),params);
}));
});

cards.util.update_cb_info.cljs$lang$maxFixedArity = (2);

cards.util.update_cb_info.cljs$lang$applyTo = (function (seq21402){
var G__21403 = cljs.core.first(seq21402);
var seq21402__$1 = cljs.core.next(seq21402);
var G__21404 = cljs.core.first(seq21402__$1);
var seq21402__$2 = cljs.core.next(seq21402__$1);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic(G__21403,G__21404,seq21402__$2);
});
cards.util.render_cb_info = (function cards$util$render_cb_info(tag,state,label){
var map__21423 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$callbacks,tag], null));
var map__21423__$1 = ((((!((map__21423 == null)))?((((map__21423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21423):map__21423);
var counter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21423__$1,cljs.core.cst$kw$counter);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21423__$1,cljs.core.cst$kw$params);
var G__21425 = {"style": {"marginTop": "1rem"}};
var G__21426 = React.DOM.strong(null,"Callback: ",label);
var G__21427 = (function (){var G__21429 = null;
var G__21430 = [cljs.core.str("Triggered "),cljs.core.str((function (){var or__5168__auto__ = counter;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (0);
}
})()),cljs.core.str(" times")].join('');
return React.DOM.div(G__21429,G__21430);
})();
var G__21428 = (function (){var G__21433 = null;
var G__21434 = "Parameters: ";
var G__21435 = (function (){var G__21436 = null;
var G__21437 = [cljs.core.str(params)].join('');
return React.DOM.code(G__21436,G__21437);
})();
return React.DOM.div(G__21433,G__21434,G__21435);
})();
return React.DOM.div(G__21425,G__21426,G__21427,G__21428);
});
