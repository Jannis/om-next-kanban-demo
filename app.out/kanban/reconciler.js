// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.reconciler');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('om.next');
goog.require('kanban.state');
if(typeof kanban.reconciler.read !== 'undefined'){
} else {
kanban.reconciler.read = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kanban.reconciler","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
if(typeof kanban.reconciler.mutate !== 'undefined'){
} else {
kanban.reconciler.mutate = (function (){var method_table__6081__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6082__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6083__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6084__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6085__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kanban.reconciler","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6085__auto__,method_table__6081__auto__,prefer_table__6082__auto__,method_cache__6083__auto__,cached_hierarchy__6084__auto__));
})();
}
kanban.reconciler.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),kanban.reconciler.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),kanban.reconciler.mutate], null));
kanban.reconciler.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),kanban.state.initial_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),kanban.reconciler.parser], null));

//# sourceMappingURL=reconciler.js.map