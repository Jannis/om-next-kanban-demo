// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kanban.util');
goog.require('cljs.core');
goog.require('clojure.string');
kanban.util.class_names = (function kanban$util$class_names(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.first),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,m)));
});
kanban.util.indexes_of = (function kanban$util$indexes_of(x,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__12322_SHARP_,p2__12321_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,p2__12321_SHARP_)){
return p1__12322_SHARP_;
} else {
return null;
}
}),coll);
});
kanban.util.index_of = (function kanban$util$index_of(x,coll){
return cljs.core.first(kanban.util.indexes_of(x,coll));
});
