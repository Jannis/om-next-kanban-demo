(ns thi.ng.validate.core
  (:refer-clojure :exclude [map vector sequential not boolean symbol keyword]))

(defn- reduce-specs
  "Reduces given `specs` with `f` and initial `state`.
  Then returns new state with new `path`."
  [f state specs path]
  (conj (->> specs (reduce f state) (take 2) (vec)) path))

(defn- remove-failed-specs
  [[_ errors path] specs]
  (filter
   (fn [[k _]] (clojure.core/not (get-in errors (conj path k))))
   specs))

(defn- validate-1
  "Applies a single validation spec to the collection value for
  given path/key. Adds an error message, if validation fails and
  no correction fn is given, or if correction fails."
  [[coll errors :as state] path [f msg correct]]
  (let [value (get-in coll path)]
    (if-not (f path value)
      (let [msg (or msg "validation failed")]
        (if correct
          (let [corrected (correct path value)]
            (if-not (nil? corrected)
              [(assoc-in coll path corrected) errors]
              [coll (update-in errors path conj msg) true]))
          [coll (update-in errors path conj msg) true]))
      state)))

(defmulti validate-specs
  (fn [_ [k specs]]
    (cond
     (= :* k) :global-spec*
     (fn? (first specs)) :single-spec
     (map? specs) (if (:* specs) :nested-spec* :nested-spec)
     (sequential? specs) :multi-spec)))

(defmethod validate-specs :single-spec
  [[_ _ path :as state] [k specs]]
  (conj (->> (validate-1 state (conj path k) specs) (take 2) (vec)) path))

(defmethod validate-specs :multi-spec
  [[m errors path :as state] [k specs]]
  (let [k-path (conj path k)]
    (reduce-specs
     (fn [[_ _ stop? :as state] spec]
       (if-not stop?
         (validate-1 state k-path spec)
         state))
     [m errors] specs path)))

(defmethod validate-specs :nested-spec
  [[m errors path :as state] [k specs]]
  (reduce-specs validate-specs [m errors (conj path k)] specs path))

(defmethod validate-specs :nested-spec*
  [[m errors path :as state] [k specs]]
  (let [spec (:* specs)
        k-path (conj path k)
        value (get-in m k-path)
        ks (if (map? value) (keys value) (range (count value)))
        state [m errors k-path]
        state (reduce-specs #(validate-specs % [%2 spec]) state ks k-path)
        specs (remove-failed-specs state (dissoc specs :*))]
    (reduce-specs validate-specs state specs path)))

(defmethod validate-specs :global-spec*
  [[m _ path :as state] [k specs]]
  (let [ks (if (map? m) (keys m) (range (count m)))]
    (reduce-specs #(validate-specs % [%2 specs]) state ks path)))

(defn validate
  "Validates `coll` (a map or vector) with given validation specs.
  Returns a 2-element vector of the (possibly corrected) `coll` and a
  map of errors (or nil, if there weren't any).

  Specs have the following format:

  key [validation-fn error-message correction-fn]

  If multiple validations should be applied to a key, then these must be
  given as a seq/vector:

  key [[val-fn1 msg1] [val-fn2 msg2 corr-fn] ...]

  Validation for a key stops with the first failure (so if `val-fn1` fails
  (and can't be corrected), `val-fn2` will *not* be checked etc.)

  For each spec only the `validation-fn` is required. This function takes
  two args: the current path into the data structure (a vector) and the value
  at that path. If an `error-message` is omitted, a generic one will be used.
  The optional `correction-fn` takes the same two args as `validation-fn`
  and should return a non-`nil` value as correction. If correction
  succeeded, no error message will be added for that entry.

  (v/validate
  {:a \"hello world\"}
  {:a (v/max-length 5 (fn [_ v] (.substring v 0 5)))})

  ; [{:a \"hello\"} nil]

  Specs can also be given as nested maps, reflecting the structure
  of the collection:

  key {:a {:b [validation-fn error-msg correction-fn]}
  :c [validation-fn error-msg correction-fn]}

  If a `specs` map contains the wildcard key `:*`, then that key's spec
  is applied *first* to all keys in the data map at that parent path.
  In the example below the wildcard spec ensures all items of `:b` are
  positive numbers, then the last item of `:b` also needs to be > 50.

  (v/validate
  {:a {:b [10 -20 30]}}
  {:a {:b {:* (v/pos), 2 (v/greater-than 50)}}})

  ; [{:a {:b [10 -20 30]}}
  ;  {:a {:b {1 (\"must be positive\")
  ;           2 (\"must be greater than 50\"}}}]

  The fail fast behavior also holds true for wildcard validation:
  If wildcard validation fails for a key, any additionally given validators
  for that key are ignored.

  Some examples using various pre-defined validators:

  (v/validate
  {:a {:name \"toxi\" :age 38}}
  {:a {:name [(v/string) (v/min-length 4)]
  :age  [(v/number) (v/less-than 35)]
  :city [(v/required) (v/string)]}})

  ; [{:a {:age 38, :name \"toxi\"}}
  ;  {:a {:city (\"is required\"),
  ;       :age (\"must be less than 35\")}}]

  (v/validate {:aabb {:min [-100 -200 -300] :max [100 200 300]}}
  {:aabb {:min {0 (v/neg) 1 (v/neg) 2 (v/neg)} :max {:* (v/pos)}}})
  
  ; [{:aabb {:max [100 200 300],
  ;          :min [-100 -200 -300]}}
  ;  nil]"
  [coll specs]
  (->> specs
       (reduce validate-specs [coll nil []])
       (take 2)
       (vec)))

(defn valid?
  "Same as `validate`, but only acts as predicate and returns
  true or false to indicate if validation succeeded."
  [m specs]
  (-> (validate m specs) second nil?))

;; ## Validators

;; Commonly used preset validators are supplied below.
;; Apart from the regex validators, all others can be customized
;; with optional error messages and/or correction fns, given
;; as additional arguments...

(defn validator
  "Higher order function to build a validator fn which accepts
  optional an error message and/or correction fn. The constructed
  fn then generates a validation spec. `validator` itself
  takes two args: `f` the actual validation predicate fn and a
  default validation `error` message."
  [f error]
  (fn [& [msg corr]]
    (if (fn? msg)
      [f error msg]
      [f (or msg error) (if (fn? corr) corr (constantly corr))])))

(defn validator-x
  "Similar to `validator` fn, this is an HOF to build a validator
  fn which takes an extra argument `x` for the validation predicate,
  e.g. to construct a validation of `< x`.

  `validator-x` itself takes 2 fns and a default error message.
  The first fn is the actual validation predicate.
  The second fn is applied to the to-be-verified value before
  passing it to the predicate."
  [pred f err]
  (fn [x & [msg corr]]
    ((validator #(pred (f % %2) x) (str err " " x)) msg corr)))

(defn alts
  "Takes a seq of validators and optional error message & correction fn.
  Tries given validators in order and stops with first positive
  match (or corrected value)."
  [vals & [msg corr]]
  (let [f (fn [path v]
            (loop [vals vals]
              (if vals
                (let [[f msg' corr'] (first vals)]
                  (if-not (f path v)
                    (if-let [corrected (corr' path v)]
                      corrected
                      (recur (next vals)))
                    true)))))
        dmsg "didn't match any alternatives"
        corr (if (fn? corr) corr (constantly corr))]
    (if (fn? msg)
      [f dmsg msg]
      [f (or msg dmsg) corr])))

(defn not
  "Takes a single validation spec and wraps its fn so that it returns
  the logical opposite. Returns modified spec."
  [[f _ corr] msg]
  [#(clojure.core/not (f % %2)) msg corr])

(def required
  "Returns validation spec to ensure the presence of a value.
  For collections, it uses `(seq x)` to only allow
  non-empty collections."
  (validator (fn [_ v] (if (or (coll? v) (string? v)) (seq v) (clojure.core/not (nil? v)))) "is required"))

(defn optional
  "Takes a single validation spec and optional default value, wraps its
  validation fn so that it is only applied when the passed value is not nil.
  Returns modified spec.

  If a default value is given and the to-be-validated value is nil the new
  spec includes a correction fn which returns the default value.
  If the original spec included a correction fn, then this is also wrapped
  and only called if the original value isn't nil, or else returns the default."
  ([spec] (optional spec nil))
  ([[f msg corr] default]
     (if-not (nil? default)
       [(fn [_ v] (if-not (nil? v) (f _ v) false))
        msg
        (if corr
          (fn [_ v] (if-not (nil? v) (corr _ v) default))
          (fn [_ v] default))]
       [(fn [_ v] (if-not (nil? v) (f _ v) true)) msg corr])))

(def pos
  "Returns validation spec to ensure value is a positive number."
  (validator (fn [_ v] (and (number? v) (pos? v))) "must be a positive number"))

(def neg
  "Returns validation spec to ensure value is a negative number."
  (validator (fn [_ v] (and (number? v) (neg? v))) "must be a negative number"))

(def boolean
  "Returns validation spec to ensure value is a boolean."
  (validator (fn [_ v] (or (true? v) (false? v))) "must be true or false"))

(def number
  "Returns validation spec to ensure value is a number."
  (validator (fn [_ v] (number? v)) "must be a number"))

(def vector
  "Returns validation spec to ensure value is a vector."
  (validator (fn [_ v] (vector? v)) "must be a vector"))

(def sequential
  "Returns validation spec to ensure value is a sequential collection"
  (validator (fn [_ v] (sequential? v)) "must be a sequential collection"))

(def map
  "Returns validation spec to ensure value is a map."
  (validator (fn [_ v] (map? v)) "must be a map"))

(def function
  "Returns validation spec to ensure value is a function."
  (validator (fn [_ v] (fn? v)) "must be a function"))

(def symbol
  "Returns validation spec to ensure value is a symbol."
  (validator (fn [_ v] (symbol? v)) "must be a symbol"))

(def keyword
  "Returns validation spec to ensure value is a keyword."
  (validator (fn [_ v] (keyword? v)) "must be a keyword"))

(def string
  "Returns validation spec to ensure value is a string."
  (validator (fn [_ v] (string? v)) "must be a string"))

(def instance
  "Returns validation spec to ensure value satisfies given protocol"
  (validator-x #(instance? %2 %) (fn [_ v] v) "must be an instance of"))

(def satisfies
  "Returns validation spec to ensure value satisfies given protocol"
  (validator-x #(satisfies? %2 %) (fn [_ v] v) "must satisfy protocol"))

(def min-length
  "Returns validation spec to ensure value has a min length."
  (validator-x >= (fn [_ v] (count v)) "must have min length of"))

(def max-length
  "Returns validation spec to ensure value has a max length."
  (validator-x <= (fn [_ v] (count v)) "must have max length of"))

(def fixed-length
  "Returns validation spec to ensure value has the given number of elements."
  (validator-x = (fn [_ v] (count v)) "must have a length of"))

(def less-than
  "Returns validation spec to ensure value is < x."
  (validator-x < (fn [_ v] v) "must be less than"))

(def greater-than
  "Returns validation spec to ensure value is > x."
  (validator-x > (fn [_ v] v) "must be greater than"))

(def equals
  "Returns validation spec to ensure value is x."
  (validator-x = (fn [_ v] v) "must equal"))

(defn in-range
  "Returns validation spec to ensure value is a number in
  the range `min`..`max` (inclusive)."
  [min max & [msg corr]]
  (let [f (fn [_ v] (and (number? v) (>= v min) (<= v max)))
        err (str "must be in range " min ".." max)]
    (if (fn? msg)
      [f err msg]
      [f (or msg err) corr])))

(defn member-of
  [set & [msg corr]]
  (let [set (into #{} set)
        f (fn [_ v] (set v))
        err (apply str "must be one of: " (interpose ", " set))]
    (if (fn? msg)
      [f err msg]
      [f (or msg err) corr])))

(defn required-keys
  [ks & [msg corr]]
  (let [f (fn [_ v] (every? (set (if (map? v) (keys v) v)) ks))
        err (apply str "must have these keys: " (interpose ", " ks))]
    (if (fn? msg)
      [f err msg]
      [f (or msg err) corr])))

(defn matches
  "Takes a regex and optional error message, returns a validator spec
  which applies `clojure.core/re-matches` as validation fn."
  ([re] (matches re "must match regexp"))
  ([re msg] [(fn [_ v] (if v (re-matches re v))) msg]))

(def uuid4-regexp
  #"(?i)^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$")

(def email-regexp
  #"(?i)^[\w.%+-]+@[\w\.-]{2,}\.[a-z]{2,6}$")

(def mailto-regexp
  #"(?i)^mailto:[\w\.%+-]+@[\w\.\-]{2,}\.[a-z]{2,6}$")

(def url-regexp
  #"(?i)^(ftp|http|https|mailto)://(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(/|/([\w#!:.?+=&%@!\-/]))?$")

(defn email
  "Returns validation spec for email addresses."
  ([] (email "must be a valid email address"))
  ([msg] (matches email-regexp msg)))

(defn mailto
  "Returns validation spec for mailto: URIs"
  ([] (mailto "must be a valid mailto: URI"))
  ([msg] (matches mailto-regexp msg)))

(defn uuid4
  "Returns validation spec for email addresses."
  ([] (uuid4 "must be a valid UUID v4"))
  ([msg] (matches uuid4-regexp msg)))

(defn url
  "Returns validation spec for URLs using comprehensive regex
  by Diego Perini. Also see:

  * <https://gist.github.com/dperini/729294>
  * <http://mathiasbynens.be/demo/url-regex>"
  ([] (url "must be a valid URL"))
  ([msg] (matches url-regexp msg)))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/validate/core.cljx
