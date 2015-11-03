// Compiled by ClojureScript 1.7.145 {}
goog.provide('cards.util');
goog.require('cljs.core');
goog.require('om.dom');
cards.util.update_cb_info = (function cards$util$update_cb_info(var_args){
var args__6159__auto__ = [];
var len__6152__auto___24556 = arguments.length;
var i__6153__auto___24557 = (0);
while(true){
if((i__6153__auto___24557 < len__6152__auto___24556)){
args__6159__auto__.push((arguments[i__6153__auto___24557]));

var G__24558 = (i__6153__auto___24557 + (1));
i__6153__auto___24557 = G__24558;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((2) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((2)),(0))):null);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6160__auto__);
});

cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic = (function (tag,state,params){
return cljs.core.swap_BANG_.call(null,state,(function (state__$1){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks","callbacks",71591310),tag,new cljs.core.Keyword(null,"counter","counter",804008177)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks","callbacks",71591310),tag,new cljs.core.Keyword(null,"params","params",710516235)], null),params);
}));
});

cards.util.update_cb_info.cljs$lang$maxFixedArity = (2);

cards.util.update_cb_info.cljs$lang$applyTo = (function (seq24553){
var G__24554 = cljs.core.first.call(null,seq24553);
var seq24553__$1 = cljs.core.next.call(null,seq24553);
var G__24555 = cljs.core.first.call(null,seq24553__$1);
var seq24553__$2 = cljs.core.next.call(null,seq24553__$1);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic(G__24554,G__24555,seq24553__$2);
});
cards.util.render_cb_info = (function cards$util$render_cb_info(tag,state,label){
var map__24561 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks","callbacks",71591310),tag], null));
var map__24561__$1 = ((((!((map__24561 == null)))?((((map__24561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24561):map__24561);
var counter = cljs.core.get.call(null,map__24561__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var params = cljs.core.get.call(null,map__24561__$1,new cljs.core.Keyword(null,"params","params",710516235));
return React.DOM.div({"style": {"marginTop": "1rem"}},React.DOM.strong(null,"Callback: ",label),React.DOM.div(null,[cljs.core.str("Triggered "),cljs.core.str((function (){var or__5094__auto__ = counter;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (0);
}
})()),cljs.core.str(" times")].join('')),React.DOM.div(null,"Parameters: ",React.DOM.code(null,[cljs.core.str(params)].join(''))));
});

//# sourceMappingURL=util.js.map