// Compiled by ClojureScript 1.7.145 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.expr__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__22091){
var vec__22094 = p__22091;
var f = cljs.core.nth.call(null,vec__22094,(0),null);
var args = cljs.core.nth.call(null,vec__22094,(1),null);
var call = vec__22094;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__5094__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__5094__auto__ = args;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__22095 = ast;
var G__22095__$1 = (((new cljs.core.Keyword(null,"dkey","dkey",-352222233).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.call(null,G__22095,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866)):G__22095);
return G__22095__$1;
}
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__22097 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__22097,(0),null);
var v = cljs.core.nth.call(null,vec__22097,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var ref_QMARK_ = cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"sel","sel",-1686154807),v);
});
om.next.impl.parser.ref__GT_ast = (function om$next$impl$parser$ref__GT_ast(p__22098){
var vec__22100 = p__22098;
var k = cljs.core.nth.call(null,vec__22100,(0),null);
var id = cljs.core.nth.call(null,vec__22100,(1),null);
var ref = vec__22100;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","refid","om.next/refid",1975461791),id], null)], null);
});
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ref__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(p__22101){
var map__22106 = p__22101;
var map__22106__$1 = ((((!((map__22106 == null)))?((((map__22106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22106):map__22106);
var ast = map__22106__$1;
var key = cljs.core.get.call(null,map__22106__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sel = cljs.core.get.call(null,map__22106__$1,new cljs.core.Keyword(null,"sel","sel",-1686154807));
var ref_QMARK_ = cljs.core.vector_QMARK_.call(null,key);
var ast_SINGLEQUOTE_ = (function (){var G__22108 = ast;
var G__22108__$1 = ((ref_QMARK_)?cljs.core.update_in.call(null,G__22108,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.dissoc,new cljs.core.Keyword("om.next","refid","om.next/refid",1975461791)):G__22108);
return G__22108__$1;
})();
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_);
var empty_QMARK_ = (cljs.core.count.call(null,params) === (0));
var ast_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__22109 = ast_SINGLEQUOTE_;
var G__22109__$1 = (((ref_QMARK_) && (empty_QMARK_))?cljs.core.dissoc.call(null,G__22109,new cljs.core.Keyword(null,"params","params",710516235)):G__22109);
return G__22109__$1;
})();
var params_SINGLEQUOTE_ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE__SINGLEQUOTE_);
if(!((params_SINGLEQUOTE_ == null))){
if((cljs.core.count.call(null,params_SINGLEQUOTE_) === (0))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,om$next$impl$parser$ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast_SINGLEQUOTE__SINGLEQUOTE_,new cljs.core.Keyword(null,"params","params",710516235))));
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params_SINGLEQUOTE_),om$next$impl$parser$ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast_SINGLEQUOTE__SINGLEQUOTE_,new cljs.core.Keyword(null,"params","params",710516235))));
}
} else {
if(!((sel == null))){
return cljs.core.PersistentArrayMap.fromArray([key,sel], true, false);
} else {
return key;
}
}
});
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__22117 = x;
var G__22117__$1 = ((cljs.core.map_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__22117){
return (function (p__22118){
var vec__22119 = p__22118;
var k = cljs.core.nth.call(null,vec__22119,(0),null);
var v = cljs.core.nth.call(null,vec__22119,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta.call(null,v,cljs.core.conj.call(null,path,k))], null);
});})(G__22117))
),G__22117):G__22117);
var G__22117__$2 = ((cljs.core.vector_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,((function (G__22117,G__22117__$1){
return (function (p1__22111_SHARP_,p2__22110_SHARP_){
return om$next$impl$parser$path_meta.call(null,p2__22110_SHARP_,cljs.core.conj.call(null,path,p1__22111_SHARP_));
});})(G__22117,G__22117__$1))
),G__22117__$1):G__22117__$1);
return G__22117__$2;
})();
var G__22120 = x_SINGLEQUOTE_;
var G__22120__$1 = ((((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,x_SINGLEQUOTE_)))?cljs.core.vary_meta.call(null,G__22120,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path):G__22120);
return G__22120__$1;
});
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__22122){
var map__22189 = p__22122;
var map__22189__$1 = ((((!((map__22189 == null)))?((((map__22189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22189):map__22189);
var config = map__22189__$1;
var read = cljs.core.get.call(null,map__22189__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__22189__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__22189,map__22189__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,sel){
return om$next$impl$parser$parser_$_self.call(null,env,sel,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,sel,target){
var elide_paths_QMARK_ = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config));
var map__22223 = (function (){var G__22224 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target);
var G__22224__$1 = ((!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168))))?cljs.core.assoc.call(null,G__22224,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY):G__22224);
return G__22224__$1;
})();
var map__22223__$1 = ((((!((map__22223 == null)))?((((map__22223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22223):map__22223);
var env__$1 = map__22223__$1;
var path = cljs.core.get.call(null,map__22223__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__22223,map__22223__$1,env__$1,path,map__22189,map__22189__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__22247 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__22247__$1 = ((((!((map__22247 == null)))?((((map__22247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22247):map__22247);
var ast = map__22247__$1;
var key = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dkey = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"dkey","dkey",-352222233));
var params = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"params","params",710516235));
var sel__$1 = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"sel","sel",-1686154807));
var env__$2 = (function (){var G__22249 = cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"ast","ast",-860334068),ast);
var G__22249__$1 = ((!((sel__$1 == null)))?cljs.core.assoc.call(null,G__22249,new cljs.core.Keyword(null,"selector","selector",762528866),sel__$1):G__22249);
return G__22249__$1;
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null))?(function (){var G__22250 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22250) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)))].join('')));
}

return mutate.call(null,env__$2,dkey,params);

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dkey,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})():null);
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__22251 = ret;
var G__22251__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__22251,expr):G__22251);
var G__22251__$2 = ((cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_))?cljs.core.conj.call(null,G__22251__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_)):G__22251__$1);
var G__22251__$3 = ((cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast)))?cljs.core.conj.call(null,G__22251__$2,om.next.impl.parser.ast__GT_expr.call(null,ast)):G__22251__$2);
return G__22251__$3;
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null);
}catch (e22252){var e_22256 = e22252;
cljs.core.reset_BANG_.call(null,error,e_22256);
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var G__22253 = ret;
var G__22253__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__22253,key,value):G__22253);
var G__22253__$2 = (cljs.core.truth_(cljs.core.deref.call(null,error))?cljs.core.assoc.call(null,G__22253__$1,key,cljs.core.deref.call(null,error)):G__22253__$1);
return G__22253__$2;
}
}
});})(elide_paths_QMARK_,map__22223,map__22223__$1,env__$1,path,map__22189,map__22189__$1,config,read,mutate))
;
var G__22254 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),sel);
var G__22254__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta.call(null,G__22254,path):G__22254);
return G__22254__$1;
});
om$next$impl$parser$parser_$_self = function(env,sel,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,sel);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,sel,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__22189,map__22189__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map