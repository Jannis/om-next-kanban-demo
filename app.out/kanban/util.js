// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.util');
goog.require('cljs.core');
goog.require('clojure.string');
kanban.util.class_names = (function kanban$util$class_names(m){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.name,cljs.core.first),cljs.core.filter.call(null,cljs.core.second,m)));
});
kanban.util.indexes_of = (function kanban$util$indexes_of(x,coll){
return cljs.core.keep_indexed.call(null,(function (p1__22702_SHARP_,p2__22701_SHARP_){
if(cljs.core._EQ_.call(null,x,p2__22701_SHARP_)){
return p1__22702_SHARP_;
} else {
return null;
}
}),coll);
});
kanban.util.index_of = (function kanban$util$index_of(x,coll){
return cljs.core.first.call(null,kanban.util.indexes_of.call(null,x,coll));
});

//# sourceMappingURL=util.js.map