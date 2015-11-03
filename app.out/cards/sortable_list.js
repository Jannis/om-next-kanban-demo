// Compiled by ClojureScript 1.7.145 {}
goog.provide('cards.sortable_list');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('kanban.components.sortable_list');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.sortable_list","cards.sortable_list",348493967),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Sortable List\n\n  This is a generic list component that takes a sequence of items\n  and allows these to be reordered via drag and drop. Custom functions\n  to identify items and to render them in the list are supported.\n\n  ## Invocation\n\n  The overall sortable invocation looks like this:\n  ```\n  (sortable-list {:items ...\n                  :key-fn (fn [item] ...)\n                  :element-fn (fn [item] ...)\n                  :change-fn (fn [items] ...)})\n  ```\n\n  Parameters:\n\n  * `:items` is an ordered sequence of items of any type\n  * `:key-fn` is function that must return a unique key for each item\n  * `:element-fn` is a function that must return a React element for each\n    item\n  * `:change-fn` is a function that is called whenever the order of items\n    in the list changes; it receives an ordered sequence of items in the\n    same form that they were passed in to `:items`, so if `:items [1 2]`\n    was passed in, `:change-fn` may be called with `[2 1]`.\n\n  ### Example invocation\n\n  ```\n  (def data (atom {:people [{:id 1 :name \"John\"} {:id 2 :name \"Tina\"}]}))\n  ...\n  (sortable-list {:items (:people @data)\n                  :key-fn :id\n                  :element-fn (fn [person] (dom/span (:name person)))\n                  :change-fn (fn [people] (swap! data assoc :people %))})\n  ```\n\n  Of course, rather than operating against a plain atom and having to watch\n  it for changes yourself, you would normally use `sortable-list` with Om\n  Next and have `:change-fn` mutate the app state.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.sortable_list","cards.sortable_list",348493967),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Examples",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.sortable_list","cards.sortable_list",348493967),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Sortable list with words",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return kanban.components.sortable_list.sortable_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),(function (word){
return React.DOM.span({"style": {"border": "thin solid black", "padding": "1rem", "display": "inline-block"}},word);
}),new cljs.core.Keyword(null,"change-fn","change-fn",1566440825),(function (p1__152556_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),p1__152556_SHARP_);
})], null));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),clojure.string.split.call(null,"This is a list of short words"," ")], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.sortable_list","cards.sortable_list",348493967),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Sortable list with numbers and a different element function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return kanban.components.sortable_list.sortable_list.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),(function (number){
return React.DOM.span({"style": {"background": "#eee", "padding": "0.5rem", "display": "inline-block"}},number);
}),new cljs.core.Keyword(null,"change-fn","change-fn",1566440825),(function (p1__152557_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),p1__152557_SHARP_);
})], null));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10000),(20000),(30000),(40000),(50000),(60000)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)))], null));
})], null));

//# sourceMappingURL=sortable_list.js.map