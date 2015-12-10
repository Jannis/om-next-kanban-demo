// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.reconciler');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('kanban.state');
if(typeof kanban.reconciler.read !== 'undefined'){
} else {
kanban.reconciler.read = (function (){var method_table__5899__auto__ = (function (){var G__14108 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14108) : cljs.core.atom.call(null,G__14108));
})();
var prefer_table__5900__auto__ = (function (){var G__14109 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14109) : cljs.core.atom.call(null,G__14109));
})();
var method_cache__5901__auto__ = (function (){var G__14110 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14110) : cljs.core.atom.call(null,G__14110));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__14111 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14111) : cljs.core.atom.call(null,G__14111));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kanban.reconciler","read"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
if(typeof kanban.reconciler.mutate !== 'undefined'){
} else {
kanban.reconciler.mutate = (function (){var method_table__5899__auto__ = (function (){var G__14112 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14112) : cljs.core.atom.call(null,G__14112));
})();
var prefer_table__5900__auto__ = (function (){var G__14113 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14113) : cljs.core.atom.call(null,G__14113));
})();
var method_cache__5901__auto__ = (function (){var G__14114 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14114) : cljs.core.atom.call(null,G__14114));
})();
var cached_hierarchy__5902__auto__ = (function (){var G__14115 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14115) : cljs.core.atom.call(null,G__14115));
})();
var hierarchy__5903__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kanban.reconciler","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__5903__auto__,method_table__5899__auto__,prefer_table__5900__auto__,method_cache__5901__auto__,cached_hierarchy__5902__auto__));
})();
}
kanban.reconciler.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,kanban.reconciler.read,cljs.core.cst$kw$mutate,kanban.reconciler.mutate], null));
kanban.reconciler.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,kanban.state.initial_state,cljs.core.cst$kw$parser,kanban.reconciler.parser], null));
