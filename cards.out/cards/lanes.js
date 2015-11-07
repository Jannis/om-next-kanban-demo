// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cards.lanes');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.lane');
goog.require('cards.util');
cards.lanes.front_matter = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$base_DASH_card_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$frame,false], null)], null);
goog.exportSymbol('cards.lanes.front_matter', cards.lanes.front_matter);
cljs.core.enable_console_print_BANG_();
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"# Kanban lanes\n\n   Examples demonstrating how Kanban lanes look given different properties\n   or layout constraints.",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"## Properties\n\n  Kanban lanes are identified by IDs, have a name and cards. But what\n  happens if some of these properties are missing? And what happens if there\n  are many cards?",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with no id, name and lanes",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22301 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22301) : kanban.components.lane.lane.call(null,G__22301));
}),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with no cards",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22302 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22302) : kanban.components.lane.lane.call(null,G__22302));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog"], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with one card",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22303 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22303) : kanban.components.lane.lane.call(null,G__22303));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The only card in this lane",cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with two cards",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22304 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22304) : kanban.components.lane.lane.call(null,G__22304));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane",cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane",cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(5),cljs.core.cst$kw$username,"zuse",cljs.core.cst$kw$name,"Konrad Zuse"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with 50 cards",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22305 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22305) : kanban.components.lane.lane.call(null,G__22305));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,(function (){var iter__5940__auto__ = (function cards$lanes$iter__22306(s__22307){
return (new cljs.core.LazySeq(null,(function (){
var s__22307__$1 = s__22307;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22307__$1);
if(temp__4425__auto__){
var s__22307__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22307__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__22307__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__22309 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__22308 = (0);
while(true){
if((i__22308 < size__5939__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__22308);
cljs.core.chunk_append(b__22309,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null));

var G__22312 = (i__22308 + (1));
i__22308 = G__22312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22309),cards$lanes$iter__22306(cljs.core.chunk_rest(s__22307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22309),null);
}
} else {
var i = cljs.core.first(s__22307__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null),cards$lanes$iter__22306(cljs.core.rest(s__22307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(50)));
})()], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"## Layout\n\n  In the Kanban user interface, lanes usually appear as columns in\n  boards. Due to limited screen space to render these columns, it is\n  interesting to see how the rendering of lanes is affected by different\n  layout constraints.",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 50px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22313 = {"style": {"display": "table", "width": "50px", "border": "thin solid black"}};
var G__22314 = (function (){var G__22315 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22315) : kanban.components.lane.lane.call(null,G__22315));
})();
return React.DOM.div(G__22313,G__22314);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 100px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22316 = {"style": {"display": "table", "width": "100px", "border": "thin solid black"}};
var G__22317 = (function (){var G__22318 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22318) : kanban.components.lane.lane.call(null,G__22318));
})();
return React.DOM.div(G__22316,G__22317);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 150px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22319 = {"style": {"display": "table", "width": "150px", "border": "thin solid black"}};
var G__22320 = (function (){var G__22321 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22321) : kanban.components.lane.lane.call(null,G__22321));
})();
return React.DOM.div(G__22319,G__22320);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 200px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22322 = {"style": {"display": "table", "width": "200px", "border": "thin solid black"}};
var G__22323 = (function (){var G__22324 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22324) : kanban.components.lane.lane.call(null,G__22324));
})();
return React.DOM.div(G__22322,G__22323);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 300px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22325 = {"style": {"display": "table", "width": "300px", "border": "thin solid black"}};
var G__22326 = (function (){var G__22327 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22327) : kanban.components.lane.lane.call(null,G__22327));
})();
return React.DOM.div(G__22325,G__22326);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with 50 cards in a 300px high parent with no overflow\n\n   The resulting layout should be 300px high with the lane providing\n   a way to scroll up and down.",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__22328 = {"style": {"display": "table", "width": "300px", "height": "300px", "border": "thin solid black"}};
var G__22329 = (function (){var G__22330 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22330) : kanban.components.lane.lane.call(null,G__22330));
})();
return React.DOM.div(G__22328,G__22329);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,(function (){var iter__5940__auto__ = (function cards$lanes$iter__22331(s__22332){
return (new cljs.core.LazySeq(null,(function (){
var s__22332__$1 = s__22332;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22332__$1);
if(temp__4425__auto__){
var s__22332__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22332__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__22332__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__22334 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__22333 = (0);
while(true){
if((i__22333 < size__5939__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__22333);
cljs.core.chunk_append(b__22334,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null));

var G__22337 = (i__22333 + (1));
i__22333 = G__22337;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22334),cards$lanes$iter__22331(cljs.core.chunk_rest(s__22332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22334),null);
}
} else {
var i = cljs.core.first(s__22332__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null),cards$lanes$iter__22331(cljs.core.rest(s__22332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(50)));
})()], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"## Behaviour",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card create callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22339 = null;
var G__22340 = (function (){var G__22342 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_create_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$create,state)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22342) : kanban.components.lane.lane.call(null,G__22342));
})();
var G__22341 = cards.util.render_cb_info(cljs.core.cst$kw$create,state,"Card create");
return React.DOM.div(G__22339,G__22340,G__22341);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card edit callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22344 = null;
var G__22345 = (function (){var G__22347 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_edit_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$edit,state)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22347) : kanban.components.lane.lane.call(null,G__22347));
})();
var G__22346 = cards.util.render_cb_info(cljs.core.cst$kw$edit,state,"Card edit");
return React.DOM.div(G__22344,G__22345,G__22346);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Click this card to edit it"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"Or click this one instead"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card drag start callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22349 = null;
var G__22350 = (function (){var G__22352 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drag_DASH_start,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22352) : kanban.components.lane.lane.call(null,G__22352));
})();
var G__22351 = cards.util.render_cb_info(cljs.core.cst$kw$drag_DASH_start,state,"Card drag start");
return React.DOM.div(G__22349,G__22350,G__22351);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Drag me to trigger the drag start callback"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"Or drag me instead"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card drag end callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22354 = null;
var G__22355 = (function (){var G__22357 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drag_DASH_end,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22357) : kanban.components.lane.lane.call(null,G__22357));
})();
var G__22356 = cards.util.render_cb_info(cljs.core.cst$kw$drag_DASH_end,state,"Card drag end");
return React.DOM.div(G__22354,G__22355,G__22356);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Drop the card anywhere to end dragging it"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"It works with this card as well"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card drop callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22359 = null;
var G__22360 = (function (){var G__22362 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$drop,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drop,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22362) : kanban.components.lane.lane.call(null,G__22362));
})();
var G__22361 = cards.util.render_cb_info(cljs.core.cst$kw$drop,state,"Card drop");
return React.DOM.div(G__22359,G__22360,G__22361);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Drag and drop this card inside the lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"It works with this card as well"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Two lanes with a card drag and drop callbacks",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22375 = null;
var G__22376 = (function (){var G__22380 = {"style": {"display": "table", "width": "100%", "tableLayout": "fixed", "borderSpacing": "0.5rem"}};
var G__22381 = (function (){var iter__5940__auto__ = ((function (G__22380,G__22375){
return (function cards$lanes$iter__22382(s__22383){
return (new cljs.core.LazySeq(null,((function (G__22380,G__22375){
return (function (){
var s__22383__$1 = s__22383;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22383__$1);
if(temp__4425__auto__){
var s__22383__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22383__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__22383__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__22385 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__22384 = (0);
while(true){
if((i__22384 < size__5939__auto__)){
var lane = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__22384);
cljs.core.chunk_append(b__22385,(function (){var G__22390 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$start,state),cljs.core.cst$kw$end,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$end,state),cljs.core.cst$kw$drop,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drop,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22390) : kanban.components.lane.lane.call(null,G__22390));
})());

var G__22392 = (i__22384 + (1));
i__22384 = G__22392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22385),cards$lanes$iter__22382(cljs.core.chunk_rest(s__22383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22385),null);
}
} else {
var lane = cljs.core.first(s__22383__$2);
return cljs.core.cons((function (){var G__22391 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$start,state),cljs.core.cst$kw$end,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$end,state),cljs.core.cst$kw$drop,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drop,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22391) : kanban.components.lane.lane.call(null,G__22391));
})(),cards$lanes$iter__22382(cljs.core.rest(s__22383__$2)));
}
} else {
return null;
}
break;
}
});})(G__22380,G__22375))
,null,null));
});})(G__22380,G__22375))
;
return iter__5940__auto__(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))));
})();
return React.DOM.div(G__22380,G__22381);
})();
var G__22377 = cards.util.render_cb_info(cljs.core.cst$kw$start,state,"Card drag start");
var G__22378 = cards.util.render_cb_info(cljs.core.cst$kw$end,state,"Card drag end");
var G__22379 = cards.util.render_cb_info(cljs.core.cst$kw$drop,state,"Card drop");
return React.DOM.div(G__22375,G__22376,G__22377,G__22378,G__22379);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(20),cljs.core.cst$kw$text,"This is a card from backlog"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(30),cljs.core.cst$kw$text,"This is also a card from backlog"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Doing",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(40),cljs.core.cst$kw$text,"This is a card from doing"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(50),cljs.core.cst$kw$text,"This is also a card from doing"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
cards.lanes.item_with_id = (function cards$lanes$item_with_id(coll,id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["item-with-id",coll,id], 0));

return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22393_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__22393_SHARP_));
}),coll));
});
cards.lanes.move_card = (function cards$lanes$move_card(state,to_ref){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (state__$1){
var vec__22398 = cljs.core.cst$kw$drag_DASH_info.cljs$core$IFn$_invoke$arity$1(state__$1);
var from_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22398,(0),null);
var card_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22398,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to_ref,from_ref)){
return state__$1;
} else {
var from = cards.lanes.item_with_id(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.second(from_ref));
var to = cards.lanes.item_with_id(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.second(to_ref));
var card = cards.lanes.item_with_id(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(from),cljs.core.second(card_ref));
var new_from = cljs.core.update.cljs$core$IFn$_invoke$arity$4(from,cljs.core.cst$kw$cards,((function (from,to,card,vec__22398,from_ref,card_ref){
return (function (p1__22395_SHARP_,p2__22394_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([p2__22394_SHARP_], true),p1__22395_SHARP_);
});})(from,to,card,vec__22398,from_ref,card_ref))
,card);
var new_to = cljs.core.update.cljs$core$IFn$_invoke$arity$4(to,cljs.core.cst$kw$cards,cljs.core.conj,card);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$1,cljs.core.cst$kw$drag_DASH_info),cljs.core.cst$kw$lanes,((function (from,to,card,new_from,new_to,vec__22398,from_ref,card_ref){
return (function (p1__22396_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([from,new_from,to,new_to], true, false),p1__22396_SHARP_);
});})(from,to,card,new_from,new_to,vec__22398,from_ref,card_ref))
);
}
}));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Two lanes with working drag and drop",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__22414 = null;
var G__22415 = (function (){var G__22416 = {"style": {"display": "table", "width": "100%", "tableLayout": "fixed", "borderSpacing": "0.5rem"}};
var G__22417 = (function (){var iter__5940__auto__ = ((function (G__22416,G__22414){
return (function cards$lanes$iter__22418(s__22419){
return (new cljs.core.LazySeq(null,((function (G__22416,G__22414){
return (function (){
var s__22419__$1 = s__22419;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22419__$1);
if(temp__4425__auto__){
var s__22419__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22419__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__22419__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__22421 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__22420 = (0);
while(true){
if((i__22420 < size__5939__auto__)){
var lane = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__22420);
cljs.core.chunk_append(b__22421,(function (){var G__22426 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,((function (i__22420,lane,c__5938__auto__,size__5939__auto__,b__22421,s__22419__$2,temp__4425__auto__,G__22416,G__22414){
return (function (p1__22399_SHARP_,p2__22400_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22399_SHARP_,p2__22400_SHARP_], null));
});})(i__22420,lane,c__5938__auto__,size__5939__auto__,b__22421,s__22419__$2,temp__4425__auto__,G__22416,G__22414))
,cljs.core.cst$kw$end,((function (i__22420,lane,c__5938__auto__,size__5939__auto__,b__22421,s__22419__$2,temp__4425__auto__,G__22416,G__22414){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$drag_DASH_info);
});})(i__22420,lane,c__5938__auto__,size__5939__auto__,b__22421,s__22419__$2,temp__4425__auto__,G__22416,G__22414))
,cljs.core.cst$kw$drop,((function (i__22420,lane,c__5938__auto__,size__5939__auto__,b__22421,s__22419__$2,temp__4425__auto__,G__22416,G__22414){
return (function (p1__22401_SHARP_){
return cards.lanes.move_card(state,p1__22401_SHARP_);
});})(i__22420,lane,c__5938__auto__,size__5939__auto__,b__22421,s__22419__$2,temp__4425__auto__,G__22416,G__22414))
], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22426) : kanban.components.lane.lane.call(null,G__22426));
})());

var G__22428 = (i__22420 + (1));
i__22420 = G__22428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22421),cards$lanes$iter__22418(cljs.core.chunk_rest(s__22419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22421),null);
}
} else {
var lane = cljs.core.first(s__22419__$2);
return cljs.core.cons((function (){var G__22427 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,((function (lane,s__22419__$2,temp__4425__auto__,G__22416,G__22414){
return (function (p1__22399_SHARP_,p2__22400_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22399_SHARP_,p2__22400_SHARP_], null));
});})(lane,s__22419__$2,temp__4425__auto__,G__22416,G__22414))
,cljs.core.cst$kw$end,((function (lane,s__22419__$2,temp__4425__auto__,G__22416,G__22414){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$drag_DASH_info);
});})(lane,s__22419__$2,temp__4425__auto__,G__22416,G__22414))
,cljs.core.cst$kw$drop,((function (lane,s__22419__$2,temp__4425__auto__,G__22416,G__22414){
return (function (p1__22401_SHARP_){
return cards.lanes.move_card(state,p1__22401_SHARP_);
});})(lane,s__22419__$2,temp__4425__auto__,G__22416,G__22414))
], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__22427) : kanban.components.lane.lane.call(null,G__22427));
})(),cards$lanes$iter__22418(cljs.core.rest(s__22419__$2)));
}
} else {
return null;
}
break;
}
});})(G__22416,G__22414))
,null,null));
});})(G__22416,G__22414))
;
return iter__5940__auto__(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))));
})();
return React.DOM.div(G__22416,G__22417);
})();
return React.DOM.div(G__22414,G__22415);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(20),cljs.core.cst$kw$text,"This is a card from backlog"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(30),cljs.core.cst$kw$text,"This is also a card from backlog"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Doing",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(40),cljs.core.cst$kw$text,"This is a card from doing"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(50),cljs.core.cst$kw$text,"This is also a card from doing"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
