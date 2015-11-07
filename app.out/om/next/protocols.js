// Compiled by ClojureScript 1.7.170 {}
goog.provide('om.next.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
om.next.protocols.IIndexer = function(){};

om.next.protocols.indexes = (function om$next$protocols$indexes(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$indexes$arity$1 == null)))){
return this$.om$next$protocols$IIndexer$indexes$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.indexes[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.next.protocols.indexes["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexer.indexes",this$);
}
}
}
});

om.next.protocols.index_root = (function om$next$protocols$index_root(this$,x){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$index_root$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$index_root$arity$2(this$,x);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.index_root[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,x);
} else {
var m__5824__auto____$1 = (om.next.protocols.index_root["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,x);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexer.index-root",this$);
}
}
}
});

om.next.protocols.index_component_BANG_ = (function om$next$protocols$index_component_BANG_(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$index_component_BANG_$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$index_component_BANG_$arity$2(this$,component);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.index_component_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,component);
} else {
var m__5824__auto____$1 = (om.next.protocols.index_component_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,component);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexer.index-component!",this$);
}
}
}
});

om.next.protocols.drop_component_BANG_ = (function om$next$protocols$drop_component_BANG_(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$drop_component_BANG_$arity$2(this$,component);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.drop_component_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,component);
} else {
var m__5824__auto____$1 = (om.next.protocols.drop_component_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,component);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexer.drop-component!",this$);
}
}
}
});

om.next.protocols.ref_for = (function om$next$protocols$ref_for(this$,component){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$ref_for$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$ref_for$arity$2(this$,component);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.ref_for[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,component);
} else {
var m__5824__auto____$1 = (om.next.protocols.ref_for["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,component);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexer.ref-for",this$);
}
}
}
});

om.next.protocols.key__GT_components = (function om$next$protocols$key__GT_components(this$,k){
if((!((this$ == null))) && (!((this$.om$next$protocols$IIndexer$key__GT_components$arity$2 == null)))){
return this$.om$next$protocols$IIndexer$key__GT_components$arity$2(this$,k);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.key__GT_components[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$,k);
} else {
var m__5824__auto____$1 = (om.next.protocols.key__GT_components["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$,k);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexer.key->components",this$);
}
}
}
});


/**
 * @interface
 */
om.next.protocols.IReconciler = function(){};

om.next.protocols.basis_t = (function om$next$protocols$basis_t(this$){
if((!((this$ == null))) && (!((this$.om$next$protocols$IReconciler$basis_t$arity$1 == null)))){
return this$.om$next$protocols$IReconciler$basis_t$arity$1(this$);
} else {
var x__5823__auto__ = (((this$ == null))?null:this$);
var m__5824__auto__ = (om.next.protocols.basis_t[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,this$);
} else {
var m__5824__auto____$1 = (om.next.protocols.basis_t["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.basis-t",this$);
}
}
}
});

om.next.protocols.add_root_BANG_ = (function om$next$protocols$add_root_BANG_(reconciler,root_class,target,options){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$add_root_BANG_$arity$4 == null)))){
return reconciler.om$next$protocols$IReconciler$add_root_BANG_$arity$4(reconciler,root_class,target,options);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.add_root_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler,root_class,target,options);
} else {
var m__5824__auto____$1 = (om.next.protocols.add_root_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler,root_class,target,options);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.add-root!",reconciler);
}
}
}
});

om.next.protocols.remove_root_BANG_ = (function om$next$protocols$remove_root_BANG_(reconciler,target){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$remove_root_BANG_$arity$2(reconciler,target);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.remove_root_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler,target);
} else {
var m__5824__auto____$1 = (om.next.protocols.remove_root_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler,target);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.remove-root!",reconciler);
}
}
}
});

om.next.protocols.schedule_render_BANG_ = (function om$next$protocols$schedule_render_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1(reconciler);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.schedule_render_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler);
} else {
var m__5824__auto____$1 = (om.next.protocols.schedule_render_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.schedule-render!",reconciler);
}
}
}
});

om.next.protocols.schedule_sends_BANG_ = (function om$next$protocols$schedule_sends_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1(reconciler);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.schedule_sends_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler);
} else {
var m__5824__auto____$1 = (om.next.protocols.schedule_sends_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.schedule-sends!",reconciler);
}
}
}
});

om.next.protocols.queue_BANG_ = (function om$next$protocols$queue_BANG_(reconciler,ks){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$queue_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$queue_BANG_$arity$2(reconciler,ks);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.queue_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler,ks);
} else {
var m__5824__auto____$1 = (om.next.protocols.queue_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler,ks);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.queue!",reconciler);
}
}
}
});

om.next.protocols.queue_sends_BANG_ = (function om$next$protocols$queue_sends_BANG_(reconciler,sends){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 == null)))){
return reconciler.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2(reconciler,sends);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.queue_sends_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler,sends);
} else {
var m__5824__auto____$1 = (om.next.protocols.queue_sends_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler,sends);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.queue-sends!",reconciler);
}
}
}
});

om.next.protocols.reindex_BANG_ = (function om$next$protocols$reindex_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$reindex_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$reindex_BANG_$arity$1(reconciler);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.reindex_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler);
} else {
var m__5824__auto____$1 = (om.next.protocols.reindex_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.reindex!",reconciler);
}
}
}
});

om.next.protocols.reconcile_BANG_ = (function om$next$protocols$reconcile_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$reconcile_BANG_$arity$1(reconciler);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.reconcile_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler);
} else {
var m__5824__auto____$1 = (om.next.protocols.reconcile_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.reconcile!",reconciler);
}
}
}
});

om.next.protocols.send_BANG_ = (function om$next$protocols$send_BANG_(reconciler){
if((!((reconciler == null))) && (!((reconciler.om$next$protocols$IReconciler$send_BANG_$arity$1 == null)))){
return reconciler.om$next$protocols$IReconciler$send_BANG_$arity$1(reconciler);
} else {
var x__5823__auto__ = (((reconciler == null))?null:reconciler);
var m__5824__auto__ = (om.next.protocols.send_BANG_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return m__5824__auto__.call(null,reconciler);
} else {
var m__5824__auto____$1 = (om.next.protocols.send_BANG_["_"]);
if(!((m__5824__auto____$1 == null))){
return m__5824__auto____$1.call(null,reconciler);
} else {
throw cljs.core.missing_protocol.call(null,"IReconciler.send!",reconciler);
}
}
}
});


//# sourceMappingURL=protocols.js.map