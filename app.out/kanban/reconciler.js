// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.reconciler');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('kanban.state');
if(typeof kanban.reconciler.read !== 'undefined'){
} else {
kanban.reconciler.read = (function (){var method_table__6081__auto__ = (function (){var G__13190 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13190) : cljs.core.atom.call(null,G__13190));
})();
var prefer_table__6082__auto__ = (function (){var G__13191 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13191) : cljs.core.atom.call(null,G__13191));
})();
var method_cache__6083__auto__ = (function (){var G__13192 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13192) : cljs.core.atom.call(null,G__13192));
})();
var cached_hierarchy__6084__auto__ = (function (){var G__13193 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13193) : cljs.core.atom.call(null,G__13193));
})();
var hierarchy__6085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kanban.reconciler","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
if(typeof kanban.reconciler.mutate !== 'undefined'){
} else {
kanban.reconciler.mutate = (function (){var method_table__6081__auto__ = (function (){var G__13194 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13194) : cljs.core.atom.call(null,G__13194));
})();
var prefer_table__6082__auto__ = (function (){var G__13195 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13195) : cljs.core.atom.call(null,G__13195));
})();
var method_cache__6083__auto__ = (function (){var G__13196 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13196) : cljs.core.atom.call(null,G__13196));
})();
var cached_hierarchy__6084__auto__ = (function (){var G__13197 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13197) : cljs.core.atom.call(null,G__13197));
})();
var hierarchy__6085__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kanban.reconciler","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
kanban.reconciler.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,kanban.reconciler.read,cljs.core.cst$kw$mutate,kanban.reconciler.mutate], null));
kanban.reconciler.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,kanban.state.initial_state,cljs.core.cst$kw$parser,kanban.reconciler.parser], null));
