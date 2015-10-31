// Compiled by ClojureScript 1.7.145 {}
goog.provide('thi.ng.validate.core');
goog.require('cljs.core');
/**
 * Reduces given `specs` with `f` and initial `state`.
 *   Then returns new state with new `path`.
 */
thi.ng.validate.core.reduce_specs = (function thi$ng$validate$core$reduce_specs(f,state,specs,path){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(2),cljs.core.reduce.call(null,f,state,specs))),path);
});
thi.ng.validate.core.remove_failed_specs = (function thi$ng$validate$core$remove_failed_specs(p__10284,specs){
var vec__10288 = p__10284;
var _ = cljs.core.nth.call(null,vec__10288,(0),null);
var errors = cljs.core.nth.call(null,vec__10288,(1),null);
var path = cljs.core.nth.call(null,vec__10288,(2),null);
return cljs.core.filter.call(null,((function (vec__10288,_,errors,path){
return (function (p__10289){
var vec__10290 = p__10289;
var k = cljs.core.nth.call(null,vec__10290,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10290,(1),null);
return cljs.core.not.call(null,cljs.core.get_in.call(null,errors,cljs.core.conj.call(null,path,k)));
});})(vec__10288,_,errors,path))
,specs);
});
/**
 * Applies a single validation spec to the collection value for
 *   given path/key. Adds an error message, if validation fails and
 *   no correction fn is given, or if correction fails.
 */
thi.ng.validate.core.validate_1 = (function thi$ng$validate$core$validate_1(p__10291,path,p__10292){
var vec__10295 = p__10291;
var coll = cljs.core.nth.call(null,vec__10295,(0),null);
var errors = cljs.core.nth.call(null,vec__10295,(1),null);
var state = vec__10295;
var vec__10296 = p__10292;
var f = cljs.core.nth.call(null,vec__10296,(0),null);
var msg = cljs.core.nth.call(null,vec__10296,(1),null);
var correct = cljs.core.nth.call(null,vec__10296,(2),null);
var value = cljs.core.get_in.call(null,coll,path);
if(cljs.core.not.call(null,f.call(null,path,value))){
var msg__$1 = (function (){var or__5094__auto__ = msg;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return "validation failed";
}
})();
if(cljs.core.truth_(correct)){
var corrected = correct.call(null,path,value);
if(!((corrected == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in.call(null,coll,path,corrected),errors], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,cljs.core.update_in.call(null,errors,path,cljs.core.conj,msg__$1),true], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,cljs.core.update_in.call(null,errors,path,cljs.core.conj,msg__$1),true], null);
}
} else {
return state;
}
});
if(typeof thi.ng.validate.core.validate_specs !== 'undefined'){
} else {
thi.ng.validate.core.validate_specs = (function (){var method_table__6007__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6011__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"thi.ng.validate.core","validate-specs"),((function (method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__,hierarchy__6011__auto__){
return (function (_,p__10297){
var vec__10298 = p__10297;
var k = cljs.core.nth.call(null,vec__10298,(0),null);
var specs = cljs.core.nth.call(null,vec__10298,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"*","*",-1294732318),k)){
return new cljs.core.Keyword(null,"global-spec*","global-spec*",450111401);
} else {
if(cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,specs))){
return new cljs.core.Keyword(null,"single-spec","single-spec",496593251);
} else {
if(cljs.core.map_QMARK_.call(null,specs)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(specs))){
return new cljs.core.Keyword(null,"nested-spec*","nested-spec*",450704406);
} else {
return new cljs.core.Keyword(null,"nested-spec","nested-spec",-257125339);
}
} else {
if(cljs.core.sequential_QMARK_.call(null,specs)){
return new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724);
} else {
return null;
}
}
}
}
});})(method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__,hierarchy__6011__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6011__auto__,method_table__6007__auto__,prefer_table__6008__auto__,method_cache__6009__auto__,cached_hierarchy__6010__auto__));
})();
}
cljs.core._add_method.call(null,thi.ng.validate.core.validate_specs,new cljs.core.Keyword(null,"single-spec","single-spec",496593251),(function (p__10299,p__10300){
var vec__10301 = p__10299;
var _ = cljs.core.nth.call(null,vec__10301,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10301,(1),null);
var path = cljs.core.nth.call(null,vec__10301,(2),null);
var state = vec__10301;
var vec__10302 = p__10300;
var k = cljs.core.nth.call(null,vec__10302,(0),null);
var specs = cljs.core.nth.call(null,vec__10302,(1),null);
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,(2),thi.ng.validate.core.validate_1.call(null,state,cljs.core.conj.call(null,path,k),specs))),path);
}));
cljs.core._add_method.call(null,thi.ng.validate.core.validate_specs,new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),(function (p__10303,p__10304){
var vec__10305 = p__10303;
var m = cljs.core.nth.call(null,vec__10305,(0),null);
var errors = cljs.core.nth.call(null,vec__10305,(1),null);
var path = cljs.core.nth.call(null,vec__10305,(2),null);
var state = vec__10305;
var vec__10306 = p__10304;
var k = cljs.core.nth.call(null,vec__10306,(0),null);
var specs = cljs.core.nth.call(null,vec__10306,(1),null);
var k_path = cljs.core.conj.call(null,path,k);
return thi.ng.validate.core.reduce_specs.call(null,((function (k_path,vec__10305,m,errors,path,state,vec__10306,k,specs){
return (function (p__10307,spec){
var vec__10308 = p__10307;
var _ = cljs.core.nth.call(null,vec__10308,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10308,(1),null);
var stop_QMARK_ = cljs.core.nth.call(null,vec__10308,(2),null);
var state__$1 = vec__10308;
if(cljs.core.not.call(null,stop_QMARK_)){
return thi.ng.validate.core.validate_1.call(null,state__$1,k_path,spec);
} else {
return state__$1;
}
});})(k_path,vec__10305,m,errors,path,state,vec__10306,k,specs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,errors], null),specs,path);
}));
cljs.core._add_method.call(null,thi.ng.validate.core.validate_specs,new cljs.core.Keyword(null,"nested-spec","nested-spec",-257125339),(function (p__10309,p__10310){
var vec__10311 = p__10309;
var m = cljs.core.nth.call(null,vec__10311,(0),null);
var errors = cljs.core.nth.call(null,vec__10311,(1),null);
var path = cljs.core.nth.call(null,vec__10311,(2),null);
var state = vec__10311;
var vec__10312 = p__10310;
var k = cljs.core.nth.call(null,vec__10312,(0),null);
var specs = cljs.core.nth.call(null,vec__10312,(1),null);
return thi.ng.validate.core.reduce_specs.call(null,thi.ng.validate.core.validate_specs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,errors,cljs.core.conj.call(null,path,k)], null),specs,path);
}));
cljs.core._add_method.call(null,thi.ng.validate.core.validate_specs,new cljs.core.Keyword(null,"nested-spec*","nested-spec*",450704406),(function (p__10315,p__10316){
var vec__10317 = p__10315;
var m = cljs.core.nth.call(null,vec__10317,(0),null);
var errors = cljs.core.nth.call(null,vec__10317,(1),null);
var path = cljs.core.nth.call(null,vec__10317,(2),null);
var state = vec__10317;
var vec__10318 = p__10316;
var k = cljs.core.nth.call(null,vec__10318,(0),null);
var specs = cljs.core.nth.call(null,vec__10318,(1),null);
var spec = new cljs.core.Keyword(null,"*","*",-1294732318).cljs$core$IFn$_invoke$arity$1(specs);
var k_path = cljs.core.conj.call(null,path,k);
var value = cljs.core.get_in.call(null,m,k_path);
var ks = ((cljs.core.map_QMARK_.call(null,value))?cljs.core.keys.call(null,value):cljs.core.range.call(null,cljs.core.count.call(null,value)));
var state__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,errors,k_path], null);
var state__$2 = thi.ng.validate.core.reduce_specs.call(null,((function (spec,k_path,value,ks,state__$1,vec__10317,m,errors,path,state,vec__10318,k,specs){
return (function (p1__10313_SHARP_,p2__10314_SHARP_){
return thi.ng.validate.core.validate_specs.call(null,p1__10313_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__10314_SHARP_,spec], null));
});})(spec,k_path,value,ks,state__$1,vec__10317,m,errors,path,state,vec__10318,k,specs))
,state__$1,ks,k_path);
var specs__$1 = thi.ng.validate.core.remove_failed_specs.call(null,state__$2,cljs.core.dissoc.call(null,specs,new cljs.core.Keyword(null,"*","*",-1294732318)));
return thi.ng.validate.core.reduce_specs.call(null,thi.ng.validate.core.validate_specs,state__$2,specs__$1,path);
}));
cljs.core._add_method.call(null,thi.ng.validate.core.validate_specs,new cljs.core.Keyword(null,"global-spec*","global-spec*",450111401),(function (p__10321,p__10322){
var vec__10323 = p__10321;
var m = cljs.core.nth.call(null,vec__10323,(0),null);
var _ = cljs.core.nth.call(null,vec__10323,(1),null);
var path = cljs.core.nth.call(null,vec__10323,(2),null);
var state = vec__10323;
var vec__10324 = p__10322;
var k = cljs.core.nth.call(null,vec__10324,(0),null);
var specs = cljs.core.nth.call(null,vec__10324,(1),null);
var ks = ((cljs.core.map_QMARK_.call(null,m))?cljs.core.keys.call(null,m):cljs.core.range.call(null,cljs.core.count.call(null,m)));
return thi.ng.validate.core.reduce_specs.call(null,((function (ks,vec__10323,m,_,path,state,vec__10324,k,specs){
return (function (p1__10319_SHARP_,p2__10320_SHARP_){
return thi.ng.validate.core.validate_specs.call(null,p1__10319_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__10320_SHARP_,specs], null));
});})(ks,vec__10323,m,_,path,state,vec__10324,k,specs))
,state,ks,path);
}));
/**
 * Validates `coll` (a map or vector) with given validation specs.
 *   Returns a 2-element vector of the (possibly corrected) `coll` and a
 *   map of errors (or nil, if there weren't any).
 * 
 *   Specs have the following format:
 * 
 *   key [validation-fn error-message correction-fn]
 * 
 *   If multiple validations should be applied to a key, then these must be
 *   given as a seq/vector:
 * 
 *   key [[val-fn1 msg1] [val-fn2 msg2 corr-fn] ...]
 * 
 *   Validation for a key stops with the first failure (so if `val-fn1` fails
 *   (and can't be corrected), `val-fn2` will *not* be checked etc.)
 * 
 *   For each spec only the `validation-fn` is required. This function takes
 *   two args: the current path into the data structure (a vector) and the value
 *   at that path. If an `error-message` is omitted, a generic one will be used.
 *   The optional `correction-fn` takes the same two args as `validation-fn`
 *   and should return a non-`nil` value as correction. If correction
 *   succeeded, no error message will be added for that entry.
 * 
 *   (v/validate
 *   {:a "hello world"}
 *   {:a (v/max-length 5 (fn [_ v] (.substring v 0 5)))})
 * 
 *   ; [{:a "hello"} nil]
 * 
 *   Specs can also be given as nested maps, reflecting the structure
 *   of the collection:
 * 
 *   key {:a {:b [validation-fn error-msg correction-fn]}
 *   :c [validation-fn error-msg correction-fn]}
 * 
 *   If a `specs` map contains the wildcard key `:*`, then that key's spec
 *   is applied *first* to all keys in the data map at that parent path.
 *   In the example below the wildcard spec ensures all items of `:b` are
 *   positive numbers, then the last item of `:b` also needs to be > 50.
 * 
 *   (v/validate
 *   {:a {:b [10 -20 30]}}
 *   {:a {:b {:* (v/pos), 2 (v/greater-than 50)}}})
 * 
 *   ; [{:a {:b [10 -20 30]}}
 *   ;  {:a {:b {1 ("must be positive")
 *   ;           2 ("must be greater than 50"}}}]
 * 
 *   The fail fast behavior also holds true for wildcard validation:
 *   If wildcard validation fails for a key, any additionally given validators
 *   for that key are ignored.
 * 
 *   Some examples using various pre-defined validators:
 * 
 *   (v/validate
 *   {:a {:name "toxi" :age 38}}
 *   {:a {:name [(v/string) (v/min-length 4)]
 *   :age  [(v/number) (v/less-than 35)]
 *   :city [(v/required) (v/string)]}})
 * 
 *   ; [{:a {:age 38, :name "toxi"}}
 *   ;  {:a {:city ("is required"),
 *   ;       :age ("must be less than 35")}}]
 * 
 *   (v/validate {:aabb {:min [-100 -200 -300] :max [100 200 300]}}
 *   {:aabb {:min {0 (v/neg) 1 (v/neg) 2 (v/neg)} :max {:* (v/pos)}}})
 *   
 *   ; [{:aabb {:max [100 200 300],
 *   ;          :min [-100 -200 -300]}}
 *   ;  nil]
 */
thi.ng.validate.core.validate = (function thi$ng$validate$core$validate(coll,specs){
return cljs.core.vec.call(null,cljs.core.take.call(null,(2),cljs.core.reduce.call(null,thi.ng.validate.core.validate_specs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll,null,cljs.core.PersistentVector.EMPTY], null),specs)));
});
/**
 * Same as `validate`, but only acts as predicate and returns
 *   true or false to indicate if validation succeeded.
 */
thi.ng.validate.core.valid_QMARK_ = (function thi$ng$validate$core$valid_QMARK_(m,specs){
return (cljs.core.second.call(null,thi.ng.validate.core.validate.call(null,m,specs)) == null);
});
/**
 * Higher order function to build a validator fn which accepts
 *   optional an error message and/or correction fn. The constructed
 *   fn then generates a validation spec. `validator` itself
 *   takes two args: `f` the actual validation predicate fn and a
 *   default validation `error` message.
 */
thi.ng.validate.core.validator = (function thi$ng$validate$core$validator(f,error){
return (function() { 
var G__10329__delegate = function (p__10327){
var vec__10328 = p__10327;
var msg = cljs.core.nth.call(null,vec__10328,(0),null);
var corr = cljs.core.nth.call(null,vec__10328,(1),null);
if(cljs.core.fn_QMARK_.call(null,msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,error,msg], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,(function (){var or__5094__auto__ = msg;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return error;
}
})(),((cljs.core.fn_QMARK_.call(null,corr))?corr:cljs.core.constantly.call(null,corr))], null);
}
};
var G__10329 = function (var_args){
var p__10327 = null;
if (arguments.length > 0) {
var G__10330__i = 0, G__10330__a = new Array(arguments.length -  0);
while (G__10330__i < G__10330__a.length) {G__10330__a[G__10330__i] = arguments[G__10330__i + 0]; ++G__10330__i;}
  p__10327 = new cljs.core.IndexedSeq(G__10330__a,0);
} 
return G__10329__delegate.call(this,p__10327);};
G__10329.cljs$lang$maxFixedArity = 0;
G__10329.cljs$lang$applyTo = (function (arglist__10331){
var p__10327 = cljs.core.seq(arglist__10331);
return G__10329__delegate(p__10327);
});
G__10329.cljs$core$IFn$_invoke$arity$variadic = G__10329__delegate;
return G__10329;
})()
;
});
/**
 * Similar to `validator` fn, this is an HOF to build a validator
 *   fn which takes an extra argument `x` for the validation predicate,
 *   e.g. to construct a validation of `< x`.
 * 
 *   `validator-x` itself takes 2 fns and a default error message.
 *   The first fn is the actual validation predicate.
 *   The second fn is applied to the to-be-verified value before
 *   passing it to the predicate.
 */
thi.ng.validate.core.validator_x = (function thi$ng$validate$core$validator_x(pred,f,err){
return (function() { 
var G__10338__delegate = function (x,p__10336){
var vec__10337 = p__10336;
var msg = cljs.core.nth.call(null,vec__10337,(0),null);
var corr = cljs.core.nth.call(null,vec__10337,(1),null);
return thi.ng.validate.core.validator.call(null,((function (vec__10337,msg,corr){
return (function (p1__10332_SHARP_,p2__10333_SHARP_){
return pred.call(null,f.call(null,p1__10332_SHARP_,p2__10333_SHARP_),x);
});})(vec__10337,msg,corr))
,[cljs.core.str(err),cljs.core.str(" "),cljs.core.str(x)].join('')).call(null,msg,corr);
};
var G__10338 = function (x,var_args){
var p__10336 = null;
if (arguments.length > 1) {
var G__10339__i = 0, G__10339__a = new Array(arguments.length -  1);
while (G__10339__i < G__10339__a.length) {G__10339__a[G__10339__i] = arguments[G__10339__i + 1]; ++G__10339__i;}
  p__10336 = new cljs.core.IndexedSeq(G__10339__a,0);
} 
return G__10338__delegate.call(this,x,p__10336);};
G__10338.cljs$lang$maxFixedArity = 1;
G__10338.cljs$lang$applyTo = (function (arglist__10340){
var x = cljs.core.first(arglist__10340);
var p__10336 = cljs.core.rest(arglist__10340);
return G__10338__delegate(x,p__10336);
});
G__10338.cljs$core$IFn$_invoke$arity$variadic = G__10338__delegate;
return G__10338;
})()
;
});
/**
 * Takes a seq of validators and optional error message & correction fn.
 *   Tries given validators in order and stops with first positive
 *   match (or corrected value).
 */
thi.ng.validate.core.alts = (function thi$ng$validate$core$alts(var_args){
var args__6159__auto__ = [];
var len__6152__auto___10346 = arguments.length;
var i__6153__auto___10347 = (0);
while(true){
if((i__6153__auto___10347 < len__6152__auto___10346)){
args__6159__auto__.push((arguments[i__6153__auto___10347]));

var G__10348 = (i__6153__auto___10347 + (1));
i__6153__auto___10347 = G__10348;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return thi.ng.validate.core.alts.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

thi.ng.validate.core.alts.cljs$core$IFn$_invoke$arity$variadic = (function (vals,p__10343){
var vec__10344 = p__10343;
var msg = cljs.core.nth.call(null,vec__10344,(0),null);
var corr = cljs.core.nth.call(null,vec__10344,(1),null);
var f = ((function (vec__10344,msg,corr){
return (function (path,v){
var vals__$1 = vals;
while(true){
if(cljs.core.truth_(vals__$1)){
var vec__10345 = cljs.core.first.call(null,vals__$1);
var f = cljs.core.nth.call(null,vec__10345,(0),null);
var msg_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10345,(1),null);
var corr_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__10345,(2),null);
if(cljs.core.not.call(null,f.call(null,path,v))){
var temp__4423__auto__ = corr_SINGLEQUOTE_.call(null,path,v);
if(cljs.core.truth_(temp__4423__auto__)){
var corrected = temp__4423__auto__;
return corrected;
} else {
var G__10349 = cljs.core.next.call(null,vals__$1);
vals__$1 = G__10349;
continue;
}
} else {
return true;
}
} else {
return null;
}
break;
}
});})(vec__10344,msg,corr))
;
var dmsg = "didn't match any alternatives";
var corr__$1 = ((cljs.core.fn_QMARK_.call(null,corr))?corr:cljs.core.constantly.call(null,corr));
if(cljs.core.fn_QMARK_.call(null,msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,dmsg,msg], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,(function (){var or__5094__auto__ = msg;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return dmsg;
}
})(),corr__$1], null);
}
});

thi.ng.validate.core.alts.cljs$lang$maxFixedArity = (1);

thi.ng.validate.core.alts.cljs$lang$applyTo = (function (seq10341){
var G__10342 = cljs.core.first.call(null,seq10341);
var seq10341__$1 = cljs.core.next.call(null,seq10341);
return thi.ng.validate.core.alts.cljs$core$IFn$_invoke$arity$variadic(G__10342,seq10341__$1);
});
/**
 * Takes a single validation spec and wraps its fn so that it returns
 *   the logical opposite. Returns modified spec.
 */
thi.ng.validate.core.not = (function thi$ng$validate$core$not(p__10352,msg){
var vec__10354 = p__10352;
var f = cljs.core.nth.call(null,vec__10354,(0),null);
var _ = cljs.core.nth.call(null,vec__10354,(1),null);
var corr = cljs.core.nth.call(null,vec__10354,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__10354,f,_,corr){
return (function (p1__10350_SHARP_,p2__10351_SHARP_){
return cljs.core.not.call(null,f.call(null,p1__10350_SHARP_,p2__10351_SHARP_));
});})(vec__10354,f,_,corr))
,msg,corr], null);
});
/**
 * Returns validation spec to ensure the presence of a value.
 *   For collections, it uses `(seq x)` to only allow
 *   non-empty collections.
 */
thi.ng.validate.core.required = thi.ng.validate.core.validator.call(null,(function (_,v){
if((cljs.core.coll_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.seq.call(null,v);
} else {
return !((v == null));
}
}),"is required");
/**
 * Takes a single validation spec and optional default value, wraps its
 *   validation fn so that it is only applied when the passed value is not nil.
 *   Returns modified spec.
 * 
 *   If a default value is given and the to-be-validated value is nil the new
 *   spec includes a correction fn which returns the default value.
 *   If the original spec included a correction fn, then this is also wrapped
 *   and only called if the original value isn't nil, or else returns the default.
 */
thi.ng.validate.core.optional = (function thi$ng$validate$core$optional(var_args){
var args10355 = [];
var len__6152__auto___10360 = arguments.length;
var i__6153__auto___10361 = (0);
while(true){
if((i__6153__auto___10361 < len__6152__auto___10360)){
args10355.push((arguments[i__6153__auto___10361]));

var G__10362 = (i__6153__auto___10361 + (1));
i__6153__auto___10361 = G__10362;
continue;
} else {
}
break;
}

var G__10357 = args10355.length;
switch (G__10357) {
case 1:
return thi.ng.validate.core.optional.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.validate.core.optional.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10355.length)].join('')));

}
});

thi.ng.validate.core.optional.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return thi.ng.validate.core.optional.call(null,spec,null);
});

thi.ng.validate.core.optional.cljs$core$IFn$_invoke$arity$2 = (function (p__10358,default$){
var vec__10359 = p__10358;
var f = cljs.core.nth.call(null,vec__10359,(0),null);
var msg = cljs.core.nth.call(null,vec__10359,(1),null);
var corr = cljs.core.nth.call(null,vec__10359,(2),null);
if(!((default$ == null))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__10359,f,msg,corr){
return (function (_,v){
if(!((v == null))){
return f.call(null,_,v);
} else {
return false;
}
});})(vec__10359,f,msg,corr))
,msg,(cljs.core.truth_(corr)?((function (vec__10359,f,msg,corr){
return (function (_,v){
if(!((v == null))){
return corr.call(null,_,v);
} else {
return default$;
}
});})(vec__10359,f,msg,corr))
:((function (vec__10359,f,msg,corr){
return (function (_,v){
return default$;
});})(vec__10359,f,msg,corr))
)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (vec__10359,f,msg,corr){
return (function (_,v){
if(!((v == null))){
return f.call(null,_,v);
} else {
return true;
}
});})(vec__10359,f,msg,corr))
,msg,corr], null);
}
});

thi.ng.validate.core.optional.cljs$lang$maxFixedArity = 2;
/**
 * Returns validation spec to ensure value is a positive number.
 */
thi.ng.validate.core.pos = thi.ng.validate.core.validator.call(null,(function (_,v){
return (typeof v === 'number') && ((v > (0)));
}),"must be a positive number");
/**
 * Returns validation spec to ensure value is a negative number.
 */
thi.ng.validate.core.neg = thi.ng.validate.core.validator.call(null,(function (_,v){
return (typeof v === 'number') && ((v < (0)));
}),"must be a negative number");
/**
 * Returns validation spec to ensure value is a boolean.
 */
thi.ng.validate.core.boolean$ = thi.ng.validate.core.validator.call(null,(function (_,v){
return (v === true) || (v === false);
}),"must be true or false");
/**
 * Returns validation spec to ensure value is a number.
 */
thi.ng.validate.core.number = thi.ng.validate.core.validator.call(null,(function (_,v){
return typeof v === 'number';
}),"must be a number");
/**
 * Returns validation spec to ensure value is a vector.
 */
thi.ng.validate.core.vector = thi.ng.validate.core.validator.call(null,(function (_,v){
return cljs.core.vector_QMARK_.call(null,v);
}),"must be a vector");
/**
 * Returns validation spec to ensure value is a sequential collection
 */
thi.ng.validate.core.sequential = thi.ng.validate.core.validator.call(null,(function (_,v){
return cljs.core.sequential_QMARK_.call(null,v);
}),"must be a sequential collection");
/**
 * Returns validation spec to ensure value is a map.
 */
thi.ng.validate.core.map = thi.ng.validate.core.validator.call(null,(function (_,v){
return cljs.core.map_QMARK_.call(null,v);
}),"must be a map");
/**
 * Returns validation spec to ensure value is a function.
 */
thi.ng.validate.core.function$ = thi.ng.validate.core.validator.call(null,(function (_,v){
return cljs.core.fn_QMARK_.call(null,v);
}),"must be a function");
/**
 * Returns validation spec to ensure value is a symbol.
 */
thi.ng.validate.core.symbol = thi.ng.validate.core.validator.call(null,(function (_,v){
return (v instanceof cljs.core.Symbol);
}),"must be a symbol");
/**
 * Returns validation spec to ensure value is a keyword.
 */
thi.ng.validate.core.keyword = thi.ng.validate.core.validator.call(null,(function (_,v){
return (v instanceof cljs.core.Keyword);
}),"must be a keyword");
/**
 * Returns validation spec to ensure value is a string.
 */
thi.ng.validate.core.string = thi.ng.validate.core.validator.call(null,(function (_,v){
return typeof v === 'string';
}),"must be a string");
/**
 * Returns validation spec to ensure value satisfies given protocol
 */
thi.ng.validate.core.instance = thi.ng.validate.core.validator_x.call(null,(function (p1__10365_SHARP_,p2__10364_SHARP_){
return (p1__10365_SHARP_ instanceof p2__10364_SHARP_);
}),(function (_,v){
return v;
}),"must be an instance of");
/**
 * Returns validation spec to ensure value satisfies given protocol
 */
thi.ng.validate.core.satisfies = thi.ng.validate.core.validator_x.call(null,(function (p1__10367_SHARP_,p2__10366_SHARP_){
if(!((p1__10367_SHARP_ == null))){
if((false) || (p1__10367_SHARP_.thi$ng$validate$core$p2__10366_SHARP_$)){
return true;
} else {
if((!p1__10367_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,p2__10366_SHARP_,p1__10367_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,p2__10366_SHARP_,p1__10367_SHARP_);
}
}),(function (_,v){
return v;
}),"must satisfy protocol");
/**
 * Returns validation spec to ensure value has a min length.
 */
thi.ng.validate.core.min_length = thi.ng.validate.core.validator_x.call(null,cljs.core._GT__EQ_,(function (_,v){
return cljs.core.count.call(null,v);
}),"must have min length of");
/**
 * Returns validation spec to ensure value has a max length.
 */
thi.ng.validate.core.max_length = thi.ng.validate.core.validator_x.call(null,cljs.core._LT__EQ_,(function (_,v){
return cljs.core.count.call(null,v);
}),"must have max length of");
/**
 * Returns validation spec to ensure value has the given number of elements.
 */
thi.ng.validate.core.fixed_length = thi.ng.validate.core.validator_x.call(null,cljs.core._EQ_,(function (_,v){
return cljs.core.count.call(null,v);
}),"must have a length of");
/**
 * Returns validation spec to ensure value is < x.
 */
thi.ng.validate.core.less_than = thi.ng.validate.core.validator_x.call(null,cljs.core._LT_,(function (_,v){
return v;
}),"must be less than");
/**
 * Returns validation spec to ensure value is > x.
 */
thi.ng.validate.core.greater_than = thi.ng.validate.core.validator_x.call(null,cljs.core._GT_,(function (_,v){
return v;
}),"must be greater than");
/**
 * Returns validation spec to ensure value is x.
 */
thi.ng.validate.core.equals = thi.ng.validate.core.validator_x.call(null,cljs.core._EQ_,(function (_,v){
return v;
}),"must equal");
/**
 * Returns validation spec to ensure value is a number in
 *   the range `min`..`max` (inclusive).
 */
thi.ng.validate.core.in_range = (function thi$ng$validate$core$in_range(var_args){
var args__6159__auto__ = [];
var len__6152__auto___10374 = arguments.length;
var i__6153__auto___10375 = (0);
while(true){
if((i__6153__auto___10375 < len__6152__auto___10374)){
args__6159__auto__.push((arguments[i__6153__auto___10375]));

var G__10376 = (i__6153__auto___10375 + (1));
i__6153__auto___10375 = G__10376;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((2) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((2)),(0))):null);
return thi.ng.validate.core.in_range.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6160__auto__);
});

thi.ng.validate.core.in_range.cljs$core$IFn$_invoke$arity$variadic = (function (min,max,p__10372){
var vec__10373 = p__10372;
var msg = cljs.core.nth.call(null,vec__10373,(0),null);
var corr = cljs.core.nth.call(null,vec__10373,(1),null);
var f = ((function (vec__10373,msg,corr){
return (function (_,v){
return (typeof v === 'number') && ((v >= min)) && ((v <= max));
});})(vec__10373,msg,corr))
;
var err = [cljs.core.str("must be in range "),cljs.core.str(min),cljs.core.str(".."),cljs.core.str(max)].join('');
if(cljs.core.fn_QMARK_.call(null,msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,err,msg], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,(function (){var or__5094__auto__ = msg;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return err;
}
})(),corr], null);
}
});

thi.ng.validate.core.in_range.cljs$lang$maxFixedArity = (2);

thi.ng.validate.core.in_range.cljs$lang$applyTo = (function (seq10369){
var G__10370 = cljs.core.first.call(null,seq10369);
var seq10369__$1 = cljs.core.next.call(null,seq10369);
var G__10371 = cljs.core.first.call(null,seq10369__$1);
var seq10369__$2 = cljs.core.next.call(null,seq10369__$1);
return thi.ng.validate.core.in_range.cljs$core$IFn$_invoke$arity$variadic(G__10370,G__10371,seq10369__$2);
});
thi.ng.validate.core.member_of = (function thi$ng$validate$core$member_of(var_args){
var args__6159__auto__ = [];
var len__6152__auto___10381 = arguments.length;
var i__6153__auto___10382 = (0);
while(true){
if((i__6153__auto___10382 < len__6152__auto___10381)){
args__6159__auto__.push((arguments[i__6153__auto___10382]));

var G__10383 = (i__6153__auto___10382 + (1));
i__6153__auto___10382 = G__10383;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return thi.ng.validate.core.member_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

thi.ng.validate.core.member_of.cljs$core$IFn$_invoke$arity$variadic = (function (set,p__10379){
var vec__10380 = p__10379;
var msg = cljs.core.nth.call(null,vec__10380,(0),null);
var corr = cljs.core.nth.call(null,vec__10380,(1),null);
var set__$1 = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,set);
var f = ((function (set__$1,vec__10380,msg,corr){
return (function (_,v){
return set__$1.call(null,v);
});})(set__$1,vec__10380,msg,corr))
;
var err = cljs.core.apply.call(null,cljs.core.str,"must be one of: ",cljs.core.interpose.call(null,", ",set__$1));
if(cljs.core.fn_QMARK_.call(null,msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,err,msg], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,(function (){var or__5094__auto__ = msg;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return err;
}
})(),corr], null);
}
});

thi.ng.validate.core.member_of.cljs$lang$maxFixedArity = (1);

thi.ng.validate.core.member_of.cljs$lang$applyTo = (function (seq10377){
var G__10378 = cljs.core.first.call(null,seq10377);
var seq10377__$1 = cljs.core.next.call(null,seq10377);
return thi.ng.validate.core.member_of.cljs$core$IFn$_invoke$arity$variadic(G__10378,seq10377__$1);
});
thi.ng.validate.core.required_keys = (function thi$ng$validate$core$required_keys(var_args){
var args__6159__auto__ = [];
var len__6152__auto___10388 = arguments.length;
var i__6153__auto___10389 = (0);
while(true){
if((i__6153__auto___10389 < len__6152__auto___10388)){
args__6159__auto__.push((arguments[i__6153__auto___10389]));

var G__10390 = (i__6153__auto___10389 + (1));
i__6153__auto___10389 = G__10390;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return thi.ng.validate.core.required_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

thi.ng.validate.core.required_keys.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__10386){
var vec__10387 = p__10386;
var msg = cljs.core.nth.call(null,vec__10387,(0),null);
var corr = cljs.core.nth.call(null,vec__10387,(1),null);
var f = ((function (vec__10387,msg,corr){
return (function (_,v){
return cljs.core.every_QMARK_.call(null,cljs.core.set.call(null,((cljs.core.map_QMARK_.call(null,v))?cljs.core.keys.call(null,v):v)),ks);
});})(vec__10387,msg,corr))
;
var err = cljs.core.apply.call(null,cljs.core.str,"must have these keys: ",cljs.core.interpose.call(null,", ",ks));
if(cljs.core.fn_QMARK_.call(null,msg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,err,msg], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,(function (){var or__5094__auto__ = msg;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return err;
}
})(),corr], null);
}
});

thi.ng.validate.core.required_keys.cljs$lang$maxFixedArity = (1);

thi.ng.validate.core.required_keys.cljs$lang$applyTo = (function (seq10384){
var G__10385 = cljs.core.first.call(null,seq10384);
var seq10384__$1 = cljs.core.next.call(null,seq10384);
return thi.ng.validate.core.required_keys.cljs$core$IFn$_invoke$arity$variadic(G__10385,seq10384__$1);
});
/**
 * Takes a regex and optional error message, returns a validator spec
 *   which applies `clojure.core/re-matches` as validation fn.
 */
thi.ng.validate.core.matches = (function thi$ng$validate$core$matches(var_args){
var args10391 = [];
var len__6152__auto___10394 = arguments.length;
var i__6153__auto___10395 = (0);
while(true){
if((i__6153__auto___10395 < len__6152__auto___10394)){
args10391.push((arguments[i__6153__auto___10395]));

var G__10396 = (i__6153__auto___10395 + (1));
i__6153__auto___10395 = G__10396;
continue;
} else {
}
break;
}

var G__10393 = args10391.length;
switch (G__10393) {
case 1:
return thi.ng.validate.core.matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.validate.core.matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10391.length)].join('')));

}
});

thi.ng.validate.core.matches.cljs$core$IFn$_invoke$arity$1 = (function (re){
return thi.ng.validate.core.matches.call(null,re,"must match regexp");
});

thi.ng.validate.core.matches.cljs$core$IFn$_invoke$arity$2 = (function (re,msg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (_,v){
if(cljs.core.truth_(v)){
return cljs.core.re_matches.call(null,re,v);
} else {
return null;
}
}),msg], null);
});

thi.ng.validate.core.matches.cljs$lang$maxFixedArity = 2;
thi.ng.validate.core.uuid4_regexp = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
thi.ng.validate.core.email_regexp = /^[\w.%+-]+@[\w\.-]{2,}\.[a-z]{2,6}$/i;
thi.ng.validate.core.mailto_regexp = /^mailto:[\w\.%+-]+@[\w\.\-]{2,}\.[a-z]{2,6}$/i;
thi.ng.validate.core.url_regexp = /^(ftp|http|https|mailto):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i;
/**
 * Returns validation spec for email addresses.
 */
thi.ng.validate.core.email = (function thi$ng$validate$core$email(var_args){
var args10398 = [];
var len__6152__auto___10401 = arguments.length;
var i__6153__auto___10402 = (0);
while(true){
if((i__6153__auto___10402 < len__6152__auto___10401)){
args10398.push((arguments[i__6153__auto___10402]));

var G__10403 = (i__6153__auto___10402 + (1));
i__6153__auto___10402 = G__10403;
continue;
} else {
}
break;
}

var G__10400 = args10398.length;
switch (G__10400) {
case 0:
return thi.ng.validate.core.email.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.validate.core.email.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10398.length)].join('')));

}
});

thi.ng.validate.core.email.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.validate.core.email.call(null,"must be a valid email address");
});

thi.ng.validate.core.email.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return thi.ng.validate.core.matches.call(null,thi.ng.validate.core.email_regexp,msg);
});

thi.ng.validate.core.email.cljs$lang$maxFixedArity = 1;
/**
 * Returns validation spec for mailto: URIs
 */
thi.ng.validate.core.mailto = (function thi$ng$validate$core$mailto(var_args){
var args10405 = [];
var len__6152__auto___10408 = arguments.length;
var i__6153__auto___10409 = (0);
while(true){
if((i__6153__auto___10409 < len__6152__auto___10408)){
args10405.push((arguments[i__6153__auto___10409]));

var G__10410 = (i__6153__auto___10409 + (1));
i__6153__auto___10409 = G__10410;
continue;
} else {
}
break;
}

var G__10407 = args10405.length;
switch (G__10407) {
case 0:
return thi.ng.validate.core.mailto.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.validate.core.mailto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10405.length)].join('')));

}
});

thi.ng.validate.core.mailto.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.validate.core.mailto.call(null,"must be a valid mailto: URI");
});

thi.ng.validate.core.mailto.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return thi.ng.validate.core.matches.call(null,thi.ng.validate.core.mailto_regexp,msg);
});

thi.ng.validate.core.mailto.cljs$lang$maxFixedArity = 1;
/**
 * Returns validation spec for email addresses.
 */
thi.ng.validate.core.uuid4 = (function thi$ng$validate$core$uuid4(var_args){
var args10412 = [];
var len__6152__auto___10415 = arguments.length;
var i__6153__auto___10416 = (0);
while(true){
if((i__6153__auto___10416 < len__6152__auto___10415)){
args10412.push((arguments[i__6153__auto___10416]));

var G__10417 = (i__6153__auto___10416 + (1));
i__6153__auto___10416 = G__10417;
continue;
} else {
}
break;
}

var G__10414 = args10412.length;
switch (G__10414) {
case 0:
return thi.ng.validate.core.uuid4.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.validate.core.uuid4.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10412.length)].join('')));

}
});

thi.ng.validate.core.uuid4.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.validate.core.uuid4.call(null,"must be a valid UUID v4");
});

thi.ng.validate.core.uuid4.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return thi.ng.validate.core.matches.call(null,thi.ng.validate.core.uuid4_regexp,msg);
});

thi.ng.validate.core.uuid4.cljs$lang$maxFixedArity = 1;
/**
 * Returns validation spec for URLs using comprehensive regex
 *   by Diego Perini. Also see:
 * 
 *   * <https://gist.github.com/dperini/729294>
 *   * <http://mathiasbynens.be/demo/url-regex>
 */
thi.ng.validate.core.url = (function thi$ng$validate$core$url(var_args){
var args10419 = [];
var len__6152__auto___10422 = arguments.length;
var i__6153__auto___10423 = (0);
while(true){
if((i__6153__auto___10423 < len__6152__auto___10422)){
args10419.push((arguments[i__6153__auto___10423]));

var G__10424 = (i__6153__auto___10423 + (1));
i__6153__auto___10423 = G__10424;
continue;
} else {
}
break;
}

var G__10421 = args10419.length;
switch (G__10421) {
case 0:
return thi.ng.validate.core.url.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.validate.core.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10419.length)].join('')));

}
});

thi.ng.validate.core.url.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.validate.core.url.call(null,"must be a valid URL");
});

thi.ng.validate.core.url.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return thi.ng.validate.core.matches.call(null,thi.ng.validate.core.url_regexp,msg);
});

thi.ng.validate.core.url.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=core.js.map