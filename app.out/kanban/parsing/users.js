// Compiled by ClojureScript 1.7.170 {}
goog.provide('kanban.parsing.users');
goog.require('cljs.core');
goog.require('om.next');
goog.require('kanban.reconciler');
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"users","users",-713552705),(function (p__27103,key,_){
var map__27104 = p__27103;
var map__27104__$1 = ((((!((map__27104 == null)))?((((map__27104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27104):map__27104);
var state = cljs.core.get.call(null,map__27104__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__27104__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
}));

//# sourceMappingURL=users.js.map