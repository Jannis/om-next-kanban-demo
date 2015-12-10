// Compiled by ClojureScript 1.7.170 {}
goog.provide('cards.util');
goog.require('cljs.core');
goog.require('om.dom');
cards.util.update_cb_info = (function cards$util$update_cb_info(var_args){
var args__6051__auto__ = [];
var len__6044__auto___17688 = arguments.length;
var i__6045__auto___17689 = (0);
while(true){
if((i__6045__auto___17689 < len__6044__auto___17688)){
args__6051__auto__.push((arguments[i__6045__auto___17689]));

var G__17690 = (i__6045__auto___17689 + (1));
i__6045__auto___17689 = G__17690;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((2) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((2)),(0))):null);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6052__auto__);
});

cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic = (function (tag,state,params){
return cljs.core.swap_BANG_.call(null,state,(function (state__$1){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks","callbacks",71591310),tag,new cljs.core.Keyword(null,"counter","counter",804008177)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks","callbacks",71591310),tag,new cljs.core.Keyword(null,"params","params",710516235)], null),params);
}));
});

cards.util.update_cb_info.cljs$lang$maxFixedArity = (2);

cards.util.update_cb_info.cljs$lang$applyTo = (function (seq17685){
var G__17686 = cljs.core.first.call(null,seq17685);
var seq17685__$1 = cljs.core.next.call(null,seq17685);
var G__17687 = cljs.core.first.call(null,seq17685__$1);
var seq17685__$2 = cljs.core.next.call(null,seq17685__$1);
return cards.util.update_cb_info.cljs$core$IFn$_invoke$arity$variadic(G__17686,G__17687,seq17685__$2);
});
cards.util.render_cb_info = (function cards$util$render_cb_info(tag,state,label){
var map__17693 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks","callbacks",71591310),tag], null));
var map__17693__$1 = ((((!((map__17693 == null)))?((((map__17693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17693):map__17693);
var counter = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"counter","counter",804008177));
var params = cljs.core.get.call(null,map__17693__$1,new cljs.core.Keyword(null,"params","params",710516235));
return React.DOM.div({"style": {"marginTop": "1rem"}},om.util.force_children.call(null,React.DOM.strong(null,om.util.force_children.call(null,"Callback: "),om.util.force_children.call(null,label))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str("Triggered "),cljs.core.str((function (){var or__4986__auto__ = counter;
if(cljs.core.truth_(or__4986__auto__)){
return or__4986__auto__;
} else {
return (0);
}
})()),cljs.core.str(" times")].join('')))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,"Parameters: "),om.util.force_children.call(null,React.DOM.code(null,om.util.force_children.call(null,[cljs.core.str(params)].join('')))))));
});

//# sourceMappingURL=util.js.map