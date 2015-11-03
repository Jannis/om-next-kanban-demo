// Compiled by ClojureScript 1.7.145 {}
goog.provide('kanban.parsing.users');
goog.require('cljs.core');
goog.require('kanban.reconciler');
kanban.parsing.users.get_user = (function kanban$parsing$users$get_user(st,ref){
return cljs.core.get_in.call(null,st,ref);
});
kanban.parsing.users.get_users = (function kanban$parsing$users$get_users(st,key){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__81577_SHARP_){
return kanban.parsing.users.get_user.call(null,st,p1__81577_SHARP_);
})),cljs.core.get.call(null,st,key));
});
kanban.parsing.users.resolve_users = (function kanban$parsing$users$resolve_users(st,refs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__81578_SHARP_){
return kanban.parsing.users.get_user.call(null,st,p1__81578_SHARP_);
}),refs));
});
cljs.core._add_method.call(null,kanban.reconciler.read,new cljs.core.Keyword(null,"users","users",-713552705),(function (p__81579,key,_){
var map__81580 = p__81579;
var map__81580__$1 = ((((!((map__81580 == null)))?((((map__81580.cljs$lang$protocol_mask$partition0$ & (64))) || (map__81580.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__81580):map__81580);
var state = cljs.core.get.call(null,map__81580__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),kanban.parsing.users.get_users.call(null,st,key)], null);
}));

//# sourceMappingURL=users.js.map