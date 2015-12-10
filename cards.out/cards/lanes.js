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
var G__23380 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23380) : kanban.components.lane.lane.call(null,G__23380));
}),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with no cards",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23381 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23381) : kanban.components.lane.lane.call(null,G__23381));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog"], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with one card",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23382 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23382) : kanban.components.lane.lane.call(null,G__23382));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The only card in this lane",cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with two cards",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23383 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23383) : kanban.components.lane.lane.call(null,G__23383));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane",cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane",cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(4),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(5),cljs.core.cst$kw$username,"zuse",cljs.core.cst$kw$name,"Konrad Zuse"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inspect_DASH_data,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with 50 cards",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23384 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23384) : kanban.components.lane.lane.call(null,G__23384));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,(function (){var iter__5758__auto__ = (function cards$lanes$iter__23385(s__23386){
return (new cljs.core.LazySeq(null,(function (){
var s__23386__$1 = s__23386;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23386__$1);
if(temp__4425__auto__){
var s__23386__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23386__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__23386__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__23388 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__23387 = (0);
while(true){
if((i__23387 < size__5757__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__23387);
cljs.core.chunk_append(b__23388,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null));

var G__23391 = (i__23387 + (1));
i__23387 = G__23391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23388),cards$lanes$iter__23385(cljs.core.chunk_rest(s__23386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23388),null);
}
} else {
var i = cljs.core.first(s__23386__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null),cards$lanes$iter__23385(cljs.core.rest(s__23386__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(50)));
})()], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"## Layout\n\n  In the Kanban user interface, lanes usually appear as columns in\n  boards. Due to limited screen space to render these columns, it is\n  interesting to see how the rendering of lanes is affected by different\n  layout constraints.",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 50px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23392 = {"style": {"display": "table", "width": "50px", "border": "thin solid black"}};
var G__23393 = om.util.force_children((function (){var G__23394 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23394) : kanban.components.lane.lane.call(null,G__23394));
})());
return React.DOM.div(G__23392,G__23393);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 100px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23395 = {"style": {"display": "table", "width": "100px", "border": "thin solid black"}};
var G__23396 = om.util.force_children((function (){var G__23397 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23397) : kanban.components.lane.lane.call(null,G__23397));
})());
return React.DOM.div(G__23395,G__23396);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 150px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23398 = {"style": {"display": "table", "width": "150px", "border": "thin solid black"}};
var G__23399 = om.util.force_children((function (){var G__23400 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23400) : kanban.components.lane.lane.call(null,G__23400));
})());
return React.DOM.div(G__23398,G__23399);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 200px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23401 = {"style": {"display": "table", "width": "200px", "border": "thin solid black"}};
var G__23402 = om.util.force_children((function (){var G__23403 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23403) : kanban.components.lane.lane.call(null,G__23403));
})());
return React.DOM.div(G__23401,G__23402);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane in a 300px wide parent",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23404 = {"style": {"display": "table", "width": "300px", "border": "thin solid black"}};
var G__23405 = om.util.force_children((function (){var G__23406 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23406) : kanban.components.lane.lane.call(null,G__23406));
})());
return React.DOM.div(G__23404,G__23405);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"The second card in this lane"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with 50 cards in a 300px high parent with no overflow\n\n   The resulting layout should be 300px high with the lane providing\n   a way to scroll up and down.",cljs.core.cst$kw$main_DASH_obj,(function (props,_){
var G__23407 = {"style": {"display": "table", "width": "300px", "height": "300px", "border": "thin solid black"}};
var G__23408 = om.util.force_children((function (){var G__23409 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(props) : cljs.core.deref.call(null,props));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23409) : kanban.components.lane.lane.call(null,G__23409));
})());
return React.DOM.div(G__23407,G__23408);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,(function (){var iter__5758__auto__ = (function cards$lanes$iter__23410(s__23411){
return (new cljs.core.LazySeq(null,(function (){
var s__23411__$1 = s__23411;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23411__$1);
if(temp__4425__auto__){
var s__23411__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23411__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__23411__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__23413 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__23412 = (0);
while(true){
if((i__23412 < size__5757__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__23412);
cljs.core.chunk_append(b__23413,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null));

var G__23416 = (i__23412 + (1));
i__23412 = G__23416;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23413),cards$lanes$iter__23410(cljs.core.chunk_rest(s__23411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23413),null);
}
} else {
var i = cljs.core.first(s__23411__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,i,cljs.core.cst$kw$text,[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),cljs.core.cst$kw$assignees,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$username,"ada",cljs.core.cst$kw$name,"Ada Lovelace"], null)], null)], null),cards$lanes$iter__23410(cljs.core.rest(s__23411__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5758__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(50)));
})()], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"## Behaviour",cljs.core.cst$kw$main_DASH_obj,null,cljs.core.cst$kw$initial_DASH_data,null,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(null)], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card create callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23418 = null;
var G__23419 = om.util.force_children((function (){var G__23421 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_create_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$create,state)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23421) : kanban.components.lane.lane.call(null,G__23421));
})());
var G__23420 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$create,state,"Card create"));
return React.DOM.div(G__23418,G__23419,G__23420);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card edit callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23423 = null;
var G__23424 = om.util.force_children((function (){var G__23426 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_edit_DASH_fn,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$edit,state)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23426) : kanban.components.lane.lane.call(null,G__23426));
})());
var G__23425 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$edit,state,"Card edit"));
return React.DOM.div(G__23423,G__23424,G__23425);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Click this card to edit it"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"Or click this one instead"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card drag start callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23428 = null;
var G__23429 = om.util.force_children((function (){var G__23431 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$start,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drag_DASH_start,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23431) : kanban.components.lane.lane.call(null,G__23431));
})());
var G__23430 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$drag_DASH_start,state,"Card drag start"));
return React.DOM.div(G__23428,G__23429,G__23430);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Drag me to trigger the drag start callback"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"Or drag me instead"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card drag end callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23433 = null;
var G__23434 = om.util.force_children((function (){var G__23436 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$end,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drag_DASH_end,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23436) : kanban.components.lane.lane.call(null,G__23436));
})());
var G__23435 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$drag_DASH_end,state,"Card drag end"));
return React.DOM.div(G__23433,G__23434,G__23435);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Drop the card anywhere to end dragging it"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"It works with this card as well"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Lane with a card drop callback",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23438 = null;
var G__23439 = om.util.force_children((function (){var G__23441 = om.next.computed(cljs.core.cst$kw$lane.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$drop,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drop,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23441) : kanban.components.lane.lane.call(null,G__23441));
})());
var G__23440 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$drop,state,"Card drop"));
return React.DOM.div(G__23438,G__23439,G__23440);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lane,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Drag and drop this card inside the lane"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"It works with this card as well"], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Two lanes with a card drag and drop callbacks",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23454 = null;
var G__23455 = om.util.force_children((function (){var G__23459 = {"style": {"display": "table", "width": "100%", "tableLayout": "fixed", "borderSpacing": "0.5rem"}};
var G__23460 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__23459,G__23454){
return (function cards$lanes$iter__23461(s__23462){
return (new cljs.core.LazySeq(null,((function (G__23459,G__23454){
return (function (){
var s__23462__$1 = s__23462;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23462__$1);
if(temp__4425__auto__){
var s__23462__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23462__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__23462__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__23464 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__23463 = (0);
while(true){
if((i__23463 < size__5757__auto__)){
var lane = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__23463);
cljs.core.chunk_append(b__23464,(function (){var G__23469 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$start,state),cljs.core.cst$kw$end,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$end,state),cljs.core.cst$kw$drop,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drop,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23469) : kanban.components.lane.lane.call(null,G__23469));
})());

var G__23471 = (i__23463 + (1));
i__23463 = G__23471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23464),cards$lanes$iter__23461(cljs.core.chunk_rest(s__23462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23464),null);
}
} else {
var lane = cljs.core.first(s__23462__$2);
return cljs.core.cons((function (){var G__23470 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$start,state),cljs.core.cst$kw$end,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$end,state),cljs.core.cst$kw$drop,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cards.util.update_cb_info,cljs.core.cst$kw$drop,state)], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23470) : kanban.components.lane.lane.call(null,G__23470));
})(),cards$lanes$iter__23461(cljs.core.rest(s__23462__$2)));
}
} else {
return null;
}
break;
}
});})(G__23459,G__23454))
,null,null));
});})(G__23459,G__23454))
;
return iter__5758__auto__(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))));
})());
return React.DOM.div(G__23459,G__23460);
})());
var G__23456 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$start,state,"Card drag start"));
var G__23457 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$end,state,"Card drag end"));
var G__23458 = om.util.force_children(cards.util.render_cb_info(cljs.core.cst$kw$drop,state,"Card drop"));
return React.DOM.div(G__23454,G__23455,G__23456,G__23457,G__23458);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(20),cljs.core.cst$kw$text,"This is a card from backlog"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(30),cljs.core.cst$kw$text,"This is also a card from backlog"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Doing",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(40),cljs.core.cst$kw$text,"This is a card from doing"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(50),cljs.core.cst$kw$text,"This is also a card from doing"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
cards.lanes.item_with_id = (function cards$lanes$item_with_id(coll,id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["item-with-id",coll,id], 0));

return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23472_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__23472_SHARP_));
}),coll));
});
cards.lanes.move_card = (function cards$lanes$move_card(state,to_ref){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,(function (state__$1){
var vec__23477 = cljs.core.cst$kw$drag_DASH_info.cljs$core$IFn$_invoke$arity$1(state__$1);
var from_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(0),null);
var card_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23477,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to_ref,from_ref)){
return state__$1;
} else {
var from = cards.lanes.item_with_id(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.second(from_ref));
var to = cards.lanes.item_with_id(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.second(to_ref));
var card = cards.lanes.item_with_id(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(from),cljs.core.second(card_ref));
var new_from = cljs.core.update.cljs$core$IFn$_invoke$arity$4(from,cljs.core.cst$kw$cards,((function (from,to,card,vec__23477,from_ref,card_ref){
return (function (p1__23474_SHARP_,p2__23473_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([p2__23473_SHARP_], true),p1__23474_SHARP_);
});})(from,to,card,vec__23477,from_ref,card_ref))
,card);
var new_to = cljs.core.update.cljs$core$IFn$_invoke$arity$4(to,cljs.core.cst$kw$cards,cljs.core.conj,card);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state__$1,cljs.core.cst$kw$drag_DASH_info),cljs.core.cst$kw$lanes,((function (from,to,card,new_from,new_to,vec__23477,from_ref,card_ref){
return (function (p1__23475_SHARP_){
return cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.fromArray([from,new_from,to,new_to], true, false),p1__23475_SHARP_);
});})(from,to,card,new_from,new_to,vec__23477,from_ref,card_ref))
);
}
}));
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cards$lanes,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"### Two lanes with working drag and drop",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23493 = null;
var G__23494 = om.util.force_children((function (){var G__23495 = {"style": {"display": "table", "width": "100%", "tableLayout": "fixed", "borderSpacing": "0.5rem"}};
var G__23496 = om.util.force_children((function (){var iter__5758__auto__ = ((function (G__23495,G__23493){
return (function cards$lanes$iter__23497(s__23498){
return (new cljs.core.LazySeq(null,((function (G__23495,G__23493){
return (function (){
var s__23498__$1 = s__23498;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23498__$1);
if(temp__4425__auto__){
var s__23498__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23498__$2)){
var c__5756__auto__ = cljs.core.chunk_first(s__23498__$2);
var size__5757__auto__ = cljs.core.count(c__5756__auto__);
var b__23500 = cljs.core.chunk_buffer(size__5757__auto__);
if((function (){var i__23499 = (0);
while(true){
if((i__23499 < size__5757__auto__)){
var lane = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5756__auto__,i__23499);
cljs.core.chunk_append(b__23500,(function (){var G__23505 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,((function (i__23499,lane,c__5756__auto__,size__5757__auto__,b__23500,s__23498__$2,temp__4425__auto__,G__23495,G__23493){
return (function (p1__23478_SHARP_,p2__23479_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23478_SHARP_,p2__23479_SHARP_], null));
});})(i__23499,lane,c__5756__auto__,size__5757__auto__,b__23500,s__23498__$2,temp__4425__auto__,G__23495,G__23493))
,cljs.core.cst$kw$end,((function (i__23499,lane,c__5756__auto__,size__5757__auto__,b__23500,s__23498__$2,temp__4425__auto__,G__23495,G__23493){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$drag_DASH_info);
});})(i__23499,lane,c__5756__auto__,size__5757__auto__,b__23500,s__23498__$2,temp__4425__auto__,G__23495,G__23493))
,cljs.core.cst$kw$drop,((function (i__23499,lane,c__5756__auto__,size__5757__auto__,b__23500,s__23498__$2,temp__4425__auto__,G__23495,G__23493){
return (function (p1__23480_SHARP_){
return cards.lanes.move_card(state,p1__23480_SHARP_);
});})(i__23499,lane,c__5756__auto__,size__5757__auto__,b__23500,s__23498__$2,temp__4425__auto__,G__23495,G__23493))
], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23505) : kanban.components.lane.lane.call(null,G__23505));
})());

var G__23507 = (i__23499 + (1));
i__23499 = G__23507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23500),cards$lanes$iter__23497(cljs.core.chunk_rest(s__23498__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23500),null);
}
} else {
var lane = cljs.core.first(s__23498__$2);
return cljs.core.cons((function (){var G__23506 = om.next.computed(lane,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$card_DASH_drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,((function (lane,s__23498__$2,temp__4425__auto__,G__23495,G__23493){
return (function (p1__23478_SHARP_,p2__23479_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23478_SHARP_,p2__23479_SHARP_], null));
});})(lane,s__23498__$2,temp__4425__auto__,G__23495,G__23493))
,cljs.core.cst$kw$end,((function (lane,s__23498__$2,temp__4425__auto__,G__23495,G__23493){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$drag_DASH_info);
});})(lane,s__23498__$2,temp__4425__auto__,G__23495,G__23493))
,cljs.core.cst$kw$drop,((function (lane,s__23498__$2,temp__4425__auto__,G__23495,G__23493){
return (function (p1__23480_SHARP_){
return cards.lanes.move_card(state,p1__23480_SHARP_);
});})(lane,s__23498__$2,temp__4425__auto__,G__23495,G__23493))
], null)], null));
return (kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1 ? kanban.components.lane.lane.cljs$core$IFn$_invoke$arity$1(G__23506) : kanban.components.lane.lane.call(null,G__23506));
})(),cards$lanes$iter__23497(cljs.core.rest(s__23498__$2)));
}
} else {
return null;
}
break;
}
});})(G__23495,G__23493))
,null,null));
});})(G__23495,G__23493))
;
return iter__5758__auto__(cljs.core.cst$kw$lanes.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))));
})());
return React.DOM.div(G__23495,G__23496);
})());
return React.DOM.div(G__23493,G__23494);
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lanes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Backlog",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(20),cljs.core.cst$kw$text,"This is a card from backlog"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(30),cljs.core.cst$kw$text,"This is also a card from backlog"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Doing",cljs.core.cst$kw$cards,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(40),cljs.core.cst$kw$text,"This is a card from doing"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(50),cljs.core.cst$kw$text,"This is also a card from doing"], null)], null)], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
