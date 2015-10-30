(ns om.next.impl.parser)

(declare expr->ast)

(defn symbol->ast [k]
  {:dkey k
   :key  k})

(defn keyword->ast [k]
  {:type :prop
   :dkey k
   :key  k})

(defn call->ast [[f args :as call]]
  (if (= 'quote f)
    (assoc (expr->ast args) :target (or (-> call meta :target) :remote))
    (let [ast (update-in (expr->ast f) [:params] merge (or args {}))]
      (cond-> ast
        (symbol? (:dkey ast)) (assoc :type :call)))))

(defn join->ast [join]
  (let [[k v] (first join)
        ast   (expr->ast k)
        ref?  (vector? (:key ast))]
    (assoc ast :type :prop :sel v)))

(defn ref->ast [[k id :as ref]]
  {:type   :prop
   :dkey   k
   :key    ref
   :params {:om.next/refid id}})

(defn expr->ast [x]
  (cond
    (symbol? x)  (symbol->ast x)
    (keyword? x) (keyword->ast x)
    (map? x)     (join->ast x)
    (vector? x)  (ref->ast x)
    (seq? x)     (call->ast x)
    :else        (throw
                   (ex-info (str "Invalid expression " x)
                     {:type :error/invalid-expression}))))

(defn ast->expr [{:keys [key sel] :as ast}]
  (let [ref?    (vector? key)
        ast'    (cond-> ast
                  ref? (update-in [:params] dissoc :om.next/refid))
        params  (:params ast')
        empty?  (zero? (count params))
        ast''   (cond-> ast'
                  (and ref? empty?) (dissoc :params))
        params' (:params ast'')]
    (if-not (nil? params')
      (if (zero? (count params'))
        (list (ast->expr (dissoc ast'' :params)))
        (list (ast->expr (dissoc ast'' :params)) params'))
      (if-not (nil? sel)
        {key sel}
        key))))

(defn path-meta [x path]
  (let [x' (cond->> x
             (map? x) (into {} (map (fn [[k v]] [k (path-meta v (conj path k))])))
             (vector? x) (into [] (map-indexed #(path-meta %2 (conj path %1)))))]
    (cond-> x'
      #?(:clj  (instance? clojure.lang.IObj x')
         :cljs (satisfies? IWithMeta x'))
      (vary-meta assoc :om-path path))))

(defn parser [{:keys [read mutate] :as config}]
  (fn self
    ([env sel] (self env sel nil))
    ([env sel target]
     (let [elide-paths? (boolean (:elide-paths config))
           {:keys [path] :as env}
           (cond-> (assoc env :parser self :target target)
             (not (contains? env :path)) (assoc :path []))]
       (letfn [(step [ret expr]
                 (let [{:keys [key dkey params sel] :as ast} (expr->ast expr)
                       env   (cond-> (assoc env :ast ast)
                               (not (nil? sel)) (assoc :selector sel))
                       type  (:type ast)
                       call? (= :call type)
                       res   (when (nil? (:target ast))
                               (case type
                                 :call (do
                                         (assert mutate "Parse mutation attempted but no :mutate function supplied")
                                         (mutate env dkey params))
                                 :prop (do
                                         (assert read "Parse read attempted but no :read function supplied")
                                         (read env dkey params))))]
                   (if-not (nil? target)
                     (let [ast' (get res target)]
                       (cond-> ret
                         (true? ast') (conj expr)
                         (map? ast') (conj (ast->expr ast'))
                         (= target (:target ast)) (conj (ast->expr ast))))
                     (if-not (or call? (nil? (:target ast)) (contains? res :value))
                       ret
                       (let [error (atom nil)]
                         (when (and call? (not (nil? (:action res))))
                           (try
                             ((:action res))
                             #?(:clj  (catch Throwable e
                                        (reset! error e))
                                :cljs (catch :default e
                                        (reset! error e)))))
                         (let [value (:value res)]
                           (cond-> ret
                             (not (nil? value)) (assoc key value)
                             @error (assoc key @error))))))))]
         (cond-> (reduce step (if (nil? target) {} []) sel)
           (not (or (not (nil? target)) elide-paths?)) (path-meta path)))))))

(defn dispatch [_ k _] k)
