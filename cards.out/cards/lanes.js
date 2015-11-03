// Compiled by ClojureScript 1.7.145 {}
goog.provide('cards.lanes');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('kanban.components.lane');
goog.require('cards.util');
cards.lanes.front_matter = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false], null)], null);
goog.exportSymbol('cards.lanes.front_matter', cards.lanes.front_matter);
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"# Kanban lanes\n\n   Examples demonstrating how Kanban lanes look given different properties\n   or layout constraints.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Properties\n\n  Kanban lanes are identified by IDs, have a name and cards. But what\n  happens if some of these properties are missing? And what happens if there\n  are many cards?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with no id, name and lanes",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with no cards",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog"], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with one card",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The only card in this lane",new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with two cards",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The first card in this lane",new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"The second card in this lane",new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"username","username",1605666410),"zuse",new cljs.core.Keyword(null,"name","name",1843675177),"Konrad Zuse"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with 50 cards",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),(function (){var iter__5866__auto__ = (function cards$lanes$iter__24567(s__24568){
return (new cljs.core.LazySeq(null,(function (){
var s__24568__$1 = s__24568;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24568__$1);
if(temp__4425__auto__){
var s__24568__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24568__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__24568__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__24570 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__24569 = (0);
while(true){
if((i__24569 < size__5865__auto__)){
var i = cljs.core._nth.call(null,c__5864__auto__,i__24569);
cljs.core.chunk_append.call(null,b__24570,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null)], null)], null));

var G__24571 = (i__24569 + (1));
i__24569 = G__24571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24570),cards$lanes$iter__24567.call(null,cljs.core.chunk_rest.call(null,s__24568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24570),null);
}
} else {
var i = cljs.core.first.call(null,s__24568__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null)], null)], null),cards$lanes$iter__24567.call(null,cljs.core.rest.call(null,s__24568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,cljs.core.range.call(null,(0),(50)));
})()], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Layout\n\n  In the Kanban user interface, lanes usually appear as columns in\n  boards. Due to limited screen space to render these columns, it is\n  interesting to see how the rendering of lanes is affected by different\n  layout constraints.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane in a 50px wide parent",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return React.DOM.div({"style": {"display": "table", "width": "50px", "border": "thin solid black"}},kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"The second card in this lane"], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane in a 100px wide parent",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return React.DOM.div({"style": {"display": "table", "width": "100px", "border": "thin solid black"}},kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"The second card in this lane"], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane in a 150px wide parent",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return React.DOM.div({"style": {"display": "table", "width": "150px", "border": "thin solid black"}},kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"The second card in this lane"], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane in a 200px wide parent",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return React.DOM.div({"style": {"display": "table", "width": "200px", "border": "thin solid black"}},kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"The second card in this lane"], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane in a 300px wide parent",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return React.DOM.div({"style": {"display": "table", "width": "300px", "border": "thin solid black"}},kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"The first card in this lane"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"The second card in this lane"], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with 50 cards in a 300px high parent with no overflow\n\n   The resulting layout should be 300px high with the lane providing\n   a way to scroll up and down.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (props,_){
return React.DOM.div({"style": {"display": "table", "width": "300px", "height": "300px", "border": "thin solid black"}},kanban.components.lane.lane.call(null,cljs.core.deref.call(null,props)));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),(function (){var iter__5866__auto__ = (function cards$lanes$iter__24572(s__24573){
return (new cljs.core.LazySeq(null,(function (){
var s__24573__$1 = s__24573;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24573__$1);
if(temp__4425__auto__){
var s__24573__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24573__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__24573__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__24575 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__24574 = (0);
while(true){
if((i__24574 < size__5865__auto__)){
var i = cljs.core._nth.call(null,c__5864__auto__,i__24574);
cljs.core.chunk_append.call(null,b__24575,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null)], null)], null));

var G__24576 = (i__24574 + (1));
i__24574 = G__24576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24575),cards$lanes$iter__24572.call(null,cljs.core.chunk_rest.call(null,s__24573__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24575),null);
}
} else {
var i = cljs.core.first.call(null,s__24573__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str("Card number "),cljs.core.str(i),cljs.core.str(" in this lane. "),cljs.core.str("This one has a rather long caption.")].join(''),new cljs.core.Keyword(null,"assignees","assignees",-298534943),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"username","username",1605666410),"ada",new cljs.core.Keyword(null,"name","name",1843675177),"Ada Lovelace"], null)], null)], null),cards$lanes$iter__24572.call(null,cljs.core.rest.call(null,s__24573__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,cljs.core.range.call(null,(0),(50)));
})()], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"## Behaviour",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),null,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,null))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with a card create callback",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-create-fn","card-create-fn",1899085335),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"create","create",-1301499256),state)], null))),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"create","create",-1301499256),state,"Card create"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lane","lane",463787757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with a card edit callback",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-edit-fn","card-edit-fn",-1723920421),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"edit","edit",-1641834166),state)], null))),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),state,"Card edit"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lane","lane",463787757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"Click this card to edit it"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"Or click this one instead"], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with a card drag start callback",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),state)], null)], null))),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"drag-start","drag-start",292353430),state,"Card drag start"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lane","lane",463787757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"Drag me to trigger the drag start callback"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"Or drag me instead"], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with a card drag end callback",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),state)], null)], null))),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"drag-end","drag-end",-1884248888),state,"Card drag end"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lane","lane",463787757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"Drop the card anywhere to end dragging it"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"It works with this card as well"], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Lane with a card drop callback",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,new cljs.core.Keyword(null,"lane","lane",463787757).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drop","drop",364481611),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"drop","drop",364481611),state)], null)], null))),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"drop","drop",364481611),state,"Card drop"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lane","lane",463787757),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"text","text",-1790561697),"Drag and drop this card inside the lane"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"text","text",-1790561697),"It works with this card as well"], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Two lanes with a card drag and drop callbacks",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,React.DOM.div({"style": {"display": "table", "width": "100%", "tableLayout": "fixed", "borderSpacing": "0.5rem"}},(function (){var iter__5866__auto__ = (function cards$lanes$iter__24577(s__24578){
return (new cljs.core.LazySeq(null,(function (){
var s__24578__$1 = s__24578;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24578__$1);
if(temp__4425__auto__){
var s__24578__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24578__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__24578__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__24580 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__24579 = (0);
while(true){
if((i__24579 < size__5865__auto__)){
var lane = cljs.core._nth.call(null,c__5864__auto__,i__24579);
cljs.core.chunk_append.call(null,b__24580,kanban.components.lane.lane.call(null,om.next.computed.call(null,lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"start","start",-355208981),state),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"end","end",-268185958),state),new cljs.core.Keyword(null,"drop","drop",364481611),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"drop","drop",364481611),state)], null)], null))));

var G__24581 = (i__24579 + (1));
i__24579 = G__24581;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24580),cards$lanes$iter__24577.call(null,cljs.core.chunk_rest.call(null,s__24578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24580),null);
}
} else {
var lane = cljs.core.first.call(null,s__24578__$2);
return cljs.core.cons.call(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"start","start",-355208981),state),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"end","end",-268185958),state),new cljs.core.Keyword(null,"drop","drop",364481611),cljs.core.partial.call(null,cards.util.update_cb_info,new cljs.core.Keyword(null,"drop","drop",364481611),state)], null)], null))),cards$lanes$iter__24577.call(null,cljs.core.rest.call(null,s__24578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
})()),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"start","start",-355208981),state,"Card drag start"),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"end","end",-268185958),state,"Card drag end"),cards.util.render_cb_info.call(null,new cljs.core.Keyword(null,"drop","drop",364481611),state,"Card drop"));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(20),new cljs.core.Keyword(null,"text","text",-1790561697),"This is a card from backlog"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(30),new cljs.core.Keyword(null,"text","text",-1790561697),"This is also a card from backlog"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Doing",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(40),new cljs.core.Keyword(null,"text","text",-1790561697),"This is a card from doing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(50),new cljs.core.Keyword(null,"text","text",-1790561697),"This is also a card from doing"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));
cards.lanes.item_with_id = (function cards$lanes$item_with_id(coll,id){
cljs.core.println.call(null,"item-with-id",coll,id);

return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24582_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24582_SHARP_));
}),coll));
});
cards.lanes.move_card = (function cards$lanes$move_card(state,to_ref){
return cljs.core.swap_BANG_.call(null,state,(function (state__$1){
var vec__24587 = new cljs.core.Keyword(null,"drag-info","drag-info",2088919582).cljs$core$IFn$_invoke$arity$1(state__$1);
var from_ref = cljs.core.nth.call(null,vec__24587,(0),null);
var card_ref = cljs.core.nth.call(null,vec__24587,(1),null);
if(cljs.core._EQ_.call(null,to_ref,from_ref)){
return state__$1;
} else {
var from = cards.lanes.item_with_id.call(null,new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.second.call(null,from_ref));
var to = cards.lanes.item_with_id.call(null,new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(state__$1),cljs.core.second.call(null,to_ref));
var card = cards.lanes.item_with_id.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(from),cljs.core.second.call(null,card_ref));
var new_from = cljs.core.update.call(null,from,new cljs.core.Keyword(null,"cards","cards",169174038),((function (from,to,card,vec__24587,from_ref,card_ref){
return (function (p1__24584_SHARP_,p2__24583_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([p2__24583_SHARP_], true),p1__24584_SHARP_);
});})(from,to,card,vec__24587,from_ref,card_ref))
,card);
var new_to = cljs.core.update.call(null,to,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,card);
return cljs.core.update.call(null,cljs.core.dissoc.call(null,state__$1,new cljs.core.Keyword(null,"drag-info","drag-info",2088919582)),new cljs.core.Keyword(null,"lanes","lanes",1843627072),((function (from,to,card,new_from,new_to,vec__24587,from_ref,card_ref){
return (function (p1__24585_SHARP_){
return cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([from,new_from,to,new_to], true, false),p1__24585_SHARP_);
});})(from,to,card,new_from,new_to,vec__24587,from_ref,card_ref))
);
}
}));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards.lanes","cards.lanes",-589564641),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"### Two lanes with working drag and drop",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,_){
return React.DOM.div(null,React.DOM.div({"style": {"display": "table", "width": "100%", "tableLayout": "fixed", "borderSpacing": "0.5rem"}},(function (){var iter__5866__auto__ = (function cards$lanes$iter__24591(s__24592){
return (new cljs.core.LazySeq(null,(function (){
var s__24592__$1 = s__24592;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24592__$1);
if(temp__4425__auto__){
var s__24592__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24592__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__24592__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__24594 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__24593 = (0);
while(true){
if((i__24593 < size__5865__auto__)){
var lane = cljs.core._nth.call(null,c__5864__auto__,i__24593);
cljs.core.chunk_append.call(null,b__24594,kanban.components.lane.lane.call(null,om.next.computed.call(null,lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__24593,lane,c__5864__auto__,size__5865__auto__,b__24594,s__24592__$2,temp__4425__auto__){
return (function (p1__24588_SHARP_,p2__24589_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-info","drag-info",2088919582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24588_SHARP_,p2__24589_SHARP_], null));
});})(i__24593,lane,c__5864__auto__,size__5865__auto__,b__24594,s__24592__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__24593,lane,c__5864__auto__,size__5865__auto__,b__24594,s__24592__$2,temp__4425__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"drag-info","drag-info",2088919582));
});})(i__24593,lane,c__5864__auto__,size__5865__auto__,b__24594,s__24592__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__24593,lane,c__5864__auto__,size__5865__auto__,b__24594,s__24592__$2,temp__4425__auto__){
return (function (p1__24590_SHARP_){
return cards.lanes.move_card.call(null,state,p1__24590_SHARP_);
});})(i__24593,lane,c__5864__auto__,size__5865__auto__,b__24594,s__24592__$2,temp__4425__auto__))
], null)], null))));

var G__24595 = (i__24593 + (1));
i__24593 = G__24595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24594),cards$lanes$iter__24591.call(null,cljs.core.chunk_rest.call(null,s__24592__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24594),null);
}
} else {
var lane = cljs.core.first.call(null,s__24592__$2);
return cljs.core.cons.call(null,kanban.components.lane.lane.call(null,om.next.computed.call(null,lane,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-drag-fns","card-drag-fns",-295465238),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",-355208981),((function (lane,s__24592__$2,temp__4425__auto__){
return (function (p1__24588_SHARP_,p2__24589_SHARP_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"drag-info","drag-info",2088919582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24588_SHARP_,p2__24589_SHARP_], null));
});})(lane,s__24592__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (lane,s__24592__$2,temp__4425__auto__){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"drag-info","drag-info",2088919582));
});})(lane,s__24592__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (lane,s__24592__$2,temp__4425__auto__){
return (function (p1__24590_SHARP_){
return cards.lanes.move_card.call(null,state,p1__24590_SHARP_);
});})(lane,s__24592__$2,temp__4425__auto__))
], null)], null))),cards$lanes$iter__24591.call(null,cljs.core.rest.call(null,s__24592__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,new cljs.core.Keyword(null,"lanes","lanes",1843627072).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));
})()));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lanes","lanes",1843627072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Backlog",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(20),new cljs.core.Keyword(null,"text","text",-1790561697),"This is a card from backlog"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(30),new cljs.core.Keyword(null,"text","text",-1790561697),"This is also a card from backlog"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Doing",new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(40),new cljs.core.Keyword(null,"text","text",-1790561697),"This is a card from doing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(50),new cljs.core.Keyword(null,"text","text",-1790561697),"This is also a card from doing"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)))], null));
})], null));

//# sourceMappingURL=lanes.js.map