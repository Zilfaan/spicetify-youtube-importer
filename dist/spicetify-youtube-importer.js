(async () => {
  for (; !Spicetify.React || !Spicetify.ReactDOM; )
    await new Promise((e) => setTimeout(e, 10));
  var a = Object.create,
    o = Object.defineProperty,
    l = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    n = Object.getOwnPropertySymbols,
    M = Object.getPrototypeOf,
    s = Object.prototype.hasOwnProperty,
    D = Object.prototype.propertyIsEnumerable,
    u = (e, t, r) =>
      t in e
        ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r),
    F = (e, t) => {
      for (var r in (t = t || {})) s.call(t, r) && u(e, r, t[r]);
      if (n) for (var r of n(t)) D.call(t, r) && u(e, r, t[r]);
      return e;
    },
    e = (e, t, r) => (
      (r = null != e ? a(M(e)) : {}),
      ((t, r, a, n) => {
        if ((r && "object" == typeof r) || "function" == typeof r)
          for (let e of i(r))
            s.call(t, e) ||
              e === a ||
              o(t, e, {
                get: () => r[e],
                enumerable: !(n = l(r, e)) || n.enumerable,
              });
        return t;
      })(
        !t && e && e.__esModule
          ? r
          : o(r, "default", { value: e, enumerable: !0 }),
        e
      )
    ),
    t = (y = (e, t) =>
      function () {
        return (
          t || (0, e[i(e)[0]])((t = { exports: {} }).exports, t), t.exports
        );
      })({
      "external-global-plugin:react"(e, t) {
        t.exports = Spicetify.React;
      },
    }),
    r = y({
      "external-global-plugin:react-dom"(e, t) {
        t.exports = Spicetify.ReactDOM;
      },
    }),
    V = y({
      "node_modules/react-is/cjs/react-is.development.js"(e) {
        function t(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                var r = e.type;
                switch (r) {
                  case d:
                  case p:
                  case l:
                  case s:
                  case i:
                  case y:
                    return r;
                  default:
                    var a = r && r.$$typeof;
                    switch (a) {
                      case c:
                      case f:
                      case g:
                      case h:
                      case u:
                        return a;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function r(e) {
          return t(e) === p;
        }
        var a,
          n,
          o,
          l,
          i,
          s,
          u,
          c,
          d,
          p,
          f,
          y,
          m,
          h,
          g,
          v,
          b,
          w,
          x,
          S,
          E,
          P,
          k,
          C,
          O,
          I,
          j,
          A,
          T,
          _,
          R;
        (a = "function" == typeof Symbol && Symbol.for),
          (n = a ? Symbol.for("react.element") : 60103),
          (o = a ? Symbol.for("react.portal") : 60106),
          (l = a ? Symbol.for("react.fragment") : 60107),
          (i = a ? Symbol.for("react.strict_mode") : 60108),
          (s = a ? Symbol.for("react.profiler") : 60114),
          (u = a ? Symbol.for("react.provider") : 60109),
          (c = a ? Symbol.for("react.context") : 60110),
          (d = a ? Symbol.for("react.async_mode") : 60111),
          (p = a ? Symbol.for("react.concurrent_mode") : 60111),
          (f = a ? Symbol.for("react.forward_ref") : 60112),
          (y = a ? Symbol.for("react.suspense") : 60113),
          (m = a ? Symbol.for("react.suspense_list") : 60120),
          (h = a ? Symbol.for("react.memo") : 60115),
          (g = a ? Symbol.for("react.lazy") : 60116),
          (v = a ? Symbol.for("react.block") : 60121),
          (b = a ? Symbol.for("react.fundamental") : 60117),
          (w = a ? Symbol.for("react.responder") : 60118),
          (x = a ? Symbol.for("react.scope") : 60119),
          (a = p),
          (S = c),
          (E = u),
          (P = n),
          (k = f),
          (C = l),
          (O = g),
          (I = h),
          (j = o),
          (A = s),
          (T = i),
          (_ = y),
          (R = !1),
          (e.AsyncMode = d),
          (e.ConcurrentMode = a),
          (e.ContextConsumer = S),
          (e.ContextProvider = E),
          (e.Element = P),
          (e.ForwardRef = k),
          (e.Fragment = C),
          (e.Lazy = O),
          (e.Memo = I),
          (e.Portal = j),
          (e.Profiler = A),
          (e.StrictMode = T),
          (e.Suspense = _),
          (e.isAsyncMode = function (e) {
            return (
              R ||
                ((R = !0),
                console.warn(
                  "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."
                )),
              r(e) || t(e) === d
            );
          }),
          (e.isConcurrentMode = r),
          (e.isContextConsumer = function (e) {
            return t(e) === c;
          }),
          (e.isContextProvider = function (e) {
            return t(e) === u;
          }),
          (e.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }),
          (e.isForwardRef = function (e) {
            return t(e) === f;
          }),
          (e.isFragment = function (e) {
            return t(e) === l;
          }),
          (e.isLazy = function (e) {
            return t(e) === g;
          }),
          (e.isMemo = function (e) {
            return t(e) === h;
          }),
          (e.isPortal = function (e) {
            return t(e) === o;
          }),
          (e.isProfiler = function (e) {
            return t(e) === s;
          }),
          (e.isStrictMode = function (e) {
            return t(e) === i;
          }),
          (e.isSuspense = function (e) {
            return t(e) === y;
          }),
          (e.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === l ||
              e === p ||
              e === s ||
              e === i ||
              e === y ||
              e === m ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === h ||
                  e.$$typeof === u ||
                  e.$$typeof === c ||
                  e.$$typeof === f ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === x ||
                  e.$$typeof === v))
            );
          }),
          (e.typeOf = t);
      },
    }),
    c = y({
      "node_modules/react-is/index.js"(e, t) {
        t.exports = V();
      },
    }),
    B = y({
      "node_modules/object-assign/index.js"(e, t) {
        var s = Object.getOwnPropertySymbols,
          u = Object.prototype.hasOwnProperty,
          c = Object.prototype.propertyIsEnumerable;
        t.exports = (() => {
          try {
            if (Object.assign) {
              var e = new String("abc");
              if (((e[5] = "de"), "5" !== Object.getOwnPropertyNames(e)[0])) {
                for (var t = {}, r = 0; r < 10; r++)
                  t["_" + String.fromCharCode(r)] = r;
                var a,
                  n = Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e];
                  });
                if ("0123456789" === n.join(""))
                  return (
                    (a = {}),
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                      a[e] = e;
                    }),
                    "abcdefghijklmnopqrst" ===
                    Object.keys(Object.assign({}, a)).join("")
                      ? 1
                      : void 0
                  );
              }
            }
          } catch (e) {}
        })()
          ? Object.assign
          : function (e, t) {
              for (
                var r,
                  a = ((e) => {
                    if (null == e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  n = 1;
                n < arguments.length;
                n++
              ) {
                for (var o in (r = Object(arguments[n])))
                  u.call(r, o) && (a[o] = r[o]);
                if (s)
                  for (var l = s(r), i = 0; i < l.length; i++)
                    c.call(r, l[i]) && (a[l[i]] = r[l[i]]);
              }
              return a;
            };
      },
    }),
    p = y({
      "node_modules/prop-types/lib/ReactPropTypesSecret.js"(e, t) {
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    }),
    f = y({
      "node_modules/prop-types/lib/has.js"(e, t) {
        t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
      },
    }),
    z = y({
      "node_modules/prop-types/checkPropTypes.js"(e, t) {
        var s,
          u,
          c,
          d = function () {};
        function r(e, t, r, a, n) {
          for (var o in e)
            if (c(e, o)) {
              var l, i;
              try {
                if ("function" != typeof e[o])
                  throw (
                    (((i = Error(
                      (a || "React class") +
                        ": " +
                        r +
                        " type `" +
                        o +
                        "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                        typeof e[o] +
                        "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                    )).name = "Invariant Violation"),
                    i)
                  );
                l = e[o](t, o, a, r, null, s);
              } catch (e) {
                l = e;
              }
              !l ||
                l instanceof Error ||
                d(
                  (a || "React class") +
                    ": type specification of " +
                    r +
                    " `" +
                    o +
                    "` is invalid; the type checker function must return `null` or an `Error` but returned a " +
                    typeof l +
                    ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                ),
                l instanceof Error &&
                  !(l.message in u) &&
                  ((u[l.message] = !0),
                  (o = n ? n() : ""),
                  d(
                    "Failed " + r + " type: " + l.message + (null != o ? o : "")
                  ));
            }
        }
        (s = p()),
          (u = {}),
          (c = f()),
          (d = function (e) {
            e = "Warning: " + e;
            "undefined" != typeof console && console.error(e);
            try {
              throw new Error(e);
            } catch (e) {}
          }),
          (r.resetWarningCache = function () {
            u = {};
          }),
          (t.exports = r);
      },
    }),
    $ = y({
      "node_modules/prop-types/factoryWithTypeCheckers.js"(e, t) {
        var u = c(),
          h = B(),
          g = p(),
          v = f(),
          a = z(),
          b = function () {};
        function n() {
          return null;
        }
        (b = function (e) {
          e = "Warning: " + e;
          "undefined" != typeof console && console.error(e);
          try {
            throw new Error(e);
          } catch (e) {}
        }),
          (t.exports = function (o, c) {
            var l = "function" == typeof Symbol && Symbol.iterator,
              i = "@@iterator";
            var d = "<<anonymous>>",
              e = {
                array: t("array"),
                bigint: t("bigint"),
                bool: t("boolean"),
                func: t("function"),
                number: t("number"),
                object: t("object"),
                string: t("string"),
                symbol: t("symbol"),
                any: r(n),
                arrayOf: function (s) {
                  return r(function (e, t, r, a, n) {
                    if ("function" != typeof s)
                      return new p(
                        "Property `" +
                          n +
                          "` of component `" +
                          r +
                          "` has invalid PropType notation inside arrayOf."
                      );
                    var o = e[t];
                    if (!Array.isArray(o))
                      return new p(
                        "Invalid " +
                          a +
                          " `" +
                          n +
                          "` of type `" +
                          y(o) +
                          "` supplied to `" +
                          r +
                          "`, expected an array."
                      );
                    for (var l = 0; l < o.length; l++) {
                      var i = s(o, l, r, a, n + "[" + l + "]", g);
                      if (i instanceof Error) return i;
                    }
                    return null;
                  });
                },
                element: r(function (e, t, r, a, n) {
                  return (
                    (e = e[t]),
                    o(e)
                      ? null
                      : new p(
                          "Invalid " +
                            a +
                            " `" +
                            n +
                            "` of type `" +
                            y(e) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement."
                        )
                  );
                }),
                elementType: r(function (e, t, r, a, n) {
                  return (
                    (e = e[t]),
                    u.isValidElementType(e)
                      ? null
                      : new p(
                          "Invalid " +
                            a +
                            " `" +
                            n +
                            "` of type `" +
                            y(e) +
                            "` supplied to `" +
                            r +
                            "`, expected a single ReactElement type."
                        )
                  );
                }),
                instanceOf: function (l) {
                  return r(function (e, t, r, a, n) {
                    var o;
                    return e[t] instanceof l
                      ? null
                      : ((o = l.name || d),
                        new p(
                          "Invalid " +
                            a +
                            " `" +
                            n +
                            "` of type `" +
                            ((a = e[t]).constructor && a.constructor.name
                              ? a.constructor.name
                              : d) +
                            "` supplied to `" +
                            r +
                            "`, expected instance of `" +
                            o +
                            "`."
                        ));
                  });
                },
                node: r(function (e, t, r, a, n) {
                  return s(e[t])
                    ? null
                    : new p(
                        "Invalid " +
                          a +
                          " `" +
                          n +
                          "` supplied to `" +
                          r +
                          "`, expected a ReactNode."
                      );
                }),
                objectOf: function (s) {
                  return r(function (e, t, r, a, n) {
                    if ("function" != typeof s)
                      return new p(
                        "Property `" +
                          n +
                          "` of component `" +
                          r +
                          "` has invalid PropType notation inside objectOf."
                      );
                    var o,
                      l = e[t];
                    if ("object" !== (e = y(l)))
                      return new p(
                        "Invalid " +
                          a +
                          " `" +
                          n +
                          "` of type `" +
                          e +
                          "` supplied to `" +
                          r +
                          "`, expected an object."
                      );
                    for (o in l)
                      if (v(l, o)) {
                        var i = s(l, o, r, a, n + "." + o, g);
                        if (i instanceof Error) return i;
                      }
                    return null;
                  });
                },
                oneOf: function (i) {
                  if (Array.isArray(i))
                    return r(function (e, t, r, a, n) {
                      for (var o = e[t], l = 0; l < i.length; l++)
                        if (
                          ((e, t) =>
                            e === t
                              ? 0 !== e || 1 / e == 1 / t
                              : e != e && t != t)(o, i[l])
                        )
                          return null;
                      e = JSON.stringify(i, function (e, t) {
                        return "symbol" === m(t) ? String(t) : t;
                      });
                      return new p(
                        "Invalid " +
                          a +
                          " `" +
                          n +
                          "` of value `" +
                          String(o) +
                          "` supplied to `" +
                          r +
                          "`, expected one of " +
                          e +
                          "."
                      );
                    });
                  b(
                    1 < arguments.length
                      ? "Invalid arguments supplied to oneOf, expected an array, got " +
                          arguments.length +
                          " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                      : "Invalid argument supplied to oneOf, expected an array."
                  );
                  return n;
                },
                oneOfType: function (s) {
                  if (!Array.isArray(s))
                    return (
                      b(
                        "Invalid argument supplied to oneOfType, expected an instance of array."
                      ),
                      n
                    );
                  for (var e = 0; e < s.length; e++) {
                    var t = s[e];
                    if ("function" != typeof t)
                      return (
                        b(
                          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " +
                            ((e) => {
                              var t = m(e);
                              switch (t) {
                                case "array":
                                case "object":
                                  return "an " + t;
                                case "boolean":
                                case "date":
                                case "regexp":
                                  return "a " + t;
                                default:
                                  return t;
                              }
                            })(t) +
                            " at index " +
                            e +
                            "."
                        ),
                        n
                      );
                  }
                  return r(function (e, t, r, a, n) {
                    for (var o = [], l = 0; l < s.length; l++) {
                      var i = (0, s[l])(e, t, r, a, n, g);
                      if (null == i) return null;
                      i.data &&
                        v(i.data, "expectedType") &&
                        o.push(i.data.expectedType);
                    }
                    return new p(
                      "Invalid " +
                        a +
                        " `" +
                        n +
                        "` supplied to `" +
                        r +
                        "`" +
                        (0 < o.length
                          ? ", expected one of type [" + o.join(", ") + "]"
                          : "") +
                        "."
                    );
                  });
                },
                shape: function (s) {
                  return r(function (e, t, r, a, n) {
                    var o,
                      l = e[t];
                    if ("object" !== (e = y(l)))
                      return new p(
                        "Invalid " +
                          a +
                          " `" +
                          n +
                          "` of type `" +
                          e +
                          "` supplied to `" +
                          r +
                          "`, expected `object`."
                      );
                    for (o in s) {
                      var i = s[o];
                      if ("function" != typeof i) return f(r, a, n, o, m(i));
                      i = i(l, o, r, a, n + "." + o, g);
                      if (i) return i;
                    }
                    return null;
                  });
                },
                exact: function (u) {
                  return r(function (e, t, r, a, n) {
                    var o,
                      l = e[t],
                      i = y(l);
                    if ("object" !== i)
                      return new p(
                        "Invalid " +
                          a +
                          " `" +
                          n +
                          "` of type `" +
                          i +
                          "` supplied to `" +
                          r +
                          "`, expected `object`."
                      );
                    for (o in h({}, e[t], u)) {
                      var s = u[o];
                      if (v(u, o) && "function" != typeof s)
                        return f(r, a, n, o, m(s));
                      if (!s)
                        return new p(
                          "Invalid " +
                            a +
                            " `" +
                            n +
                            "` key `" +
                            o +
                            "` supplied to `" +
                            r +
                            "`.\nBad object: " +
                            JSON.stringify(e[t], null, "  ") +
                            "\nValid keys: " +
                            JSON.stringify(Object.keys(u), null, "  ")
                        );
                      s = s(l, o, r, a, n + "." + o, g);
                      if (s) return s;
                    }
                    return null;
                  });
                },
              };
            function p(e, t) {
              (this.message = e),
                (this.data = t && "object" == typeof t ? t : {}),
                (this.stack = "");
            }
            function r(i) {
              var s = {},
                u = 0;
              function e(e, t, r, a, n, o, l) {
                if (((a = a || d), (o = o || r), l !== g)) {
                  if (c)
                    throw (
                      (((l = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                      )).name = "Invariant Violation"),
                      l)
                    );
                  "undefined" != typeof console &&
                    !s[(l = a + ":" + r)] &&
                    u < 3 &&
                    (b(
                      "You are manually calling a React.PropTypes validation function for the `" +
                        o +
                        "` prop on `" +
                        a +
                        "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                    ),
                    (s[l] = !0),
                    u++);
                }
                return null == t[r]
                  ? e
                    ? null === t[r]
                      ? new p(
                          "The " +
                            n +
                            " `" +
                            o +
                            "` is marked as required in `" +
                            a +
                            "`, but its value is `null`."
                        )
                      : new p(
                          "The " +
                            n +
                            " `" +
                            o +
                            "` is marked as required in `" +
                            a +
                            "`, but its value is `undefined`."
                        )
                    : null
                  : i(t, r, a, n, o);
              }
              var t = e.bind(null, !1);
              return (t.isRequired = e.bind(null, !0)), t;
            }
            function t(l) {
              return r(function (e, t, r, a, n, o) {
                return y((e = e[t])) !== l
                  ? new p(
                      "Invalid " +
                        a +
                        " `" +
                        n +
                        "` of type `" +
                        m(e) +
                        "` supplied to `" +
                        r +
                        "`, expected `" +
                        l +
                        "`.",
                      { expectedType: l }
                    )
                  : null;
              });
            }
            function f(e, t, r, a, n) {
              return new p(
                (e || "React class") +
                  ": " +
                  t +
                  " type `" +
                  r +
                  "." +
                  a +
                  "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                  n +
                  "`."
              );
            }
            function s(e) {
              switch (typeof e) {
                case "number":
                case "string":
                case "undefined":
                  return !0;
                case "boolean":
                  return !e;
                case "object":
                  if (Array.isArray(e)) return e.every(s);
                  if (null !== e && !o(e)) {
                    var t = ((e) => {
                      if ("function" == typeof (e = e && ((l && e[l]) || e[i])))
                        return e;
                    })(e);
                    if (!t) return !1;
                    var r,
                      a = t.call(e);
                    if (t !== e.entries) {
                      for (; !(r = a.next()).done; ) if (!s(r.value)) return !1;
                    } else
                      for (; !(r = a.next()).done; ) {
                        var n = r.value;
                        if (n && !s(n[1])) return !1;
                      }
                  }
                  return !0;
                default:
                  return !1;
              }
            }
            function y(e) {
              var t = typeof e;
              return Array.isArray(e)
                ? "array"
                : e instanceof RegExp
                ? "object"
                : ((e = e),
                  "symbol" === t ||
                  (e &&
                    ("Symbol" === e["@@toStringTag"] ||
                      ("function" == typeof Symbol && e instanceof Symbol)))
                    ? "symbol"
                    : t);
            }
            function m(e) {
              if (null == e) return "" + e;
              var t = y(e);
              if ("object" === t) {
                if (e instanceof Date) return "date";
                if (e instanceof RegExp) return "regexp";
              }
              return t;
            }
            return (
              (p.prototype = Error.prototype),
              (e.checkPropTypes = a),
              (e.resetWarningCache = a.resetWarningCache),
              (e.PropTypes = e)
            );
          });
      },
    }),
    d = y({
      "node_modules/prop-types/index.js"(e, t) {
        var r = c();
        t.exports = $()(r.isElement, !0);
      },
    }),
    Y = y({
      "node_modules/fast-deep-equal/index.js"(e, t) {
        t.exports = function e(t, r) {
          if (t === r) return !0;
          if (t && r && "object" == typeof t && "object" == typeof r) {
            if (t.constructor !== r.constructor) return !1;
            var a, n, o;
            if (Array.isArray(t)) {
              if ((a = t.length) != r.length) return !1;
              for (n = a; 0 != n--; ) if (!e(t[n], r[n])) return !1;
            } else {
              if (t.constructor === RegExp)
                return t.source === r.source && t.flags === r.flags;
              if (t.valueOf !== Object.prototype.valueOf)
                return t.valueOf() === r.valueOf();
              if (t.toString !== Object.prototype.toString)
                return t.toString() === r.toString();
              if ((a = (o = Object.keys(t)).length) !== Object.keys(r).length)
                return !1;
              for (n = a; 0 != n--; )
                if (!Object.prototype.hasOwnProperty.call(r, o[n])) return !1;
              for (n = a; 0 != n--; ) {
                var l = o[n];
                if (!e(t[l], r[l])) return !1;
              }
            }
            return !0;
          }
          return t != t && r != r;
        };
      },
    }),
    q = y({
      "node_modules/sister/src/sister.js"(e, t) {
        t.exports = function () {
          var e = {},
            n = {};
          return (
            (e.on = function (e, t) {
              t = { name: e, handler: t };
              return (n[e] = n[e] || []), n[e].unshift(t), t;
            }),
            (e.off = function (e) {
              var t = n[e.name].indexOf(e);
              -1 !== t && n[e.name].splice(t, 1);
            }),
            (e.trigger = function (e, t) {
              var r,
                a = n[e];
              if (a) for (r = a.length; r--; ) a[r].handler(t);
            }),
            e
          );
        };
      },
    }),
    U = y({
      "node_modules/load-script/index.js"(e, t) {
        function s(e, t) {
          (e.onload = function () {
            (this.onerror = this.onload = null), t(null, e);
          }),
            (e.onerror = function () {
              (this.onerror = this.onload = null),
                t(new Error("Failed to load " + this.src), e);
            });
        }
        function u(e, t) {
          e.onreadystatechange = function () {
            ("complete" != this.readyState && "loaded" != this.readyState) ||
              ((this.onreadystatechange = null), t(null, e));
          };
        }
        t.exports = function (e, t, r) {
          var a = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("script");
          if (
            ("function" == typeof t && ((r = t), (t = {})),
            (r = r || function () {}),
            (n.type = (t = t || {}).type || "text/javascript"),
            (n.charset = t.charset || "utf8"),
            (n.async = !("async" in t && !t.async)),
            (n.src = e),
            t.attrs)
          ) {
            var o,
              l = n,
              i = t.attrs;
            for (o in i) l.setAttribute(o, i[o]);
          }
          t.text && (n.text = "" + t.text),
            ("onload" in n ? s : u)(n, r),
            n.onload || s(n, r),
            a.appendChild(n);
        };
      },
    }),
    H = y({
      "node_modules/youtube-player/dist/loadYouTubeIframeApi.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = U(),
          n = (r = r) && r.__esModule ? r : { default: r };
        (e.default = function (a) {
          return new Promise(function (e) {
            var t, r;
            window.YT &&
            window.YT.Player &&
            window.YT.Player instanceof Function
              ? e(window.YT)
              : ((t =
                  "http:" === window.location.protocol ? "http:" : "https:"),
                (0, n.default)(
                  t + "//www.youtube.com/iframe_api",
                  function (e) {
                    e && a.trigger("error", e);
                  }
                ),
                (r = window.onYouTubeIframeAPIReady),
                (window.onYouTubeIframeAPIReady = function () {
                  r && r(), e(window.YT);
                }));
          });
        }),
          (t.exports = e.default);
      },
    }),
    W = y({
      "node_modules/youtube-player/node_modules/ms/index.js"(e, t) {
        var n = 36e5,
          o = 864e5;
        function l(e, t, r) {
          if (!(e < t))
            return e < 1.5 * t
              ? Math.floor(e / t) + " " + r
              : Math.ceil(e / t) + " " + r + "s";
        }
        t.exports = function (e, t) {
          t = t || {};
          var r = typeof e;
          if (!("string" == r && 0 < e.length)) {
            if ("number" == r && !1 === isNaN(e))
              if (t.long)
                return (
                  l((r = e), o, "day") ||
                  l(r, n, "hour") ||
                  l(r, 6e4, "minute") ||
                  l(r, 1e3, "second") ||
                  r + " ms"
                );
              else {
                t = e;
                return o <= t
                  ? Math.round(t / o) + "d"
                  : n <= t
                  ? Math.round(t / n) + "h"
                  : 6e4 <= t
                  ? Math.round(t / 6e4) + "m"
                  : 1e3 <= t
                  ? Math.round(t / 1e3) + "s"
                  : t + "ms";
              }
            throw new Error(
              "val is not a non-empty string or a valid number. val=" +
                JSON.stringify(e)
            );
          }
          r = e;
          if (!(100 < (r = String(r)).length)) {
            r =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                r
              );
            if (r) {
              var a = parseFloat(r[1]);
              switch ((r[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * a;
                case "days":
                case "day":
                case "d":
                  return a * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return a * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return 6e4 * a;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return 1e3 * a;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return a;
                default:
                  return;
              }
            }
          }
        };
      },
    }),
    G = y({
      "node_modules/youtube-player/node_modules/debug/src/debug.js"(i, e) {
        var s;
        function t(e) {
          function l() {
            if (l.enabled) {
              for (
                var a = l,
                  e = +new Date(),
                  t = e - (s || e),
                  n =
                    ((a.diff = t),
                    (a.prev = s),
                    (a.curr = e),
                    (s = e),
                    new Array(arguments.length)),
                  r = 0;
                r < n.length;
                r++
              )
                n[r] = arguments[r];
              (n[0] = i.coerce(n[0])),
                "string" != typeof n[0] && n.unshift("%O");
              var o = 0;
              (n[0] = n[0].replace(/%([a-zA-Z%])/g, function (e, t) {
                var r;
                return (
                  "%%" !== e &&
                    (o++, "function" == typeof (t = i.formatters[t])) &&
                    ((r = n[o]), (e = t.call(a, r)), n.splice(o, 1), o--),
                  e
                );
              })),
                i.formatArgs.call(a, n),
                (l.log || i.log || console.log.bind(console)).apply(a, n);
            }
          }
          return (
            (l.namespace = e),
            (l.enabled = i.enabled(e)),
            (l.useColors = i.useColors()),
            (l.color = ((e) => {
              var t,
                r = 0;
              for (t in e) (r = (r << 5) - r + e.charCodeAt(t)), (r |= 0);
              return i.colors[Math.abs(r) % i.colors.length];
            })(e)),
            "function" == typeof i.init && i.init(l),
            l
          );
        }
        ((i = e.exports = t.debug = t.default = t).coerce = function (e) {
          return e instanceof Error ? e.stack || e.message : e;
        }),
          (i.disable = function () {
            i.enable("");
          }),
          (i.enable = function (e) {
            i.save(e), (i.names = []), (i.skips = []);
            for (
              var t = ("string" == typeof e ? e : "").split(/[\s,]+/),
                r = t.length,
                a = 0;
              a < r;
              a++
            )
              t[a] &&
                ("-" === (e = t[a].replace(/\*/g, ".*?"))[0]
                  ? i.skips.push(new RegExp("^" + e.substr(1) + "$"))
                  : i.names.push(new RegExp("^" + e + "$")));
          }),
          (i.enabled = function (e) {
            var t, r;
            for (t = 0, r = i.skips.length; t < r; t++)
              if (i.skips[t].test(e)) return !1;
            for (t = 0, r = i.names.length; t < r; t++)
              if (i.names[t].test(e)) return !0;
            return !1;
          }),
          (i.humanize = W()),
          (i.names = []),
          (i.skips = []),
          (i.formatters = {});
      },
    }),
    Q = y({
      "node_modules/youtube-player/node_modules/debug/src/browser.js"(n, e) {
        function t() {
          var e;
          try {
            e = n.storage.debug;
          } catch (e) {}
          return (e =
            !e && "undefined" != typeof process && "env" in process
              ? process.env.DEBUG
              : e);
        }
        ((n = e.exports = G()).log = function () {
          return (
            "object" == typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }),
          (n.formatArgs = function (e) {
            var t,
              r,
              a = this.useColors;
            (e[0] =
              (a ? "%c" : "") +
              this.namespace +
              (a ? " %c" : " ") +
              e[0] +
              (a ? "%c " : " ") +
              "+" +
              n.humanize(this.diff)),
              a &&
                ((a = "color: " + this.color),
                e.splice(1, 0, a, "color: inherit"),
                e[(r = t = 0)].replace(/%[a-zA-Z%]/g, function (e) {
                  "%%" !== e && (t++, "%c" === e) && (r = t);
                }),
                e.splice(r, 0, a));
          }),
          (n.save = function (e) {
            try {
              null == e ? n.storage.removeItem("debug") : (n.storage.debug = e);
            } catch (e) {}
          }),
          (n.load = t),
          (n.useColors = function () {
            if (
              "undefined" != typeof window &&
              window.process &&
              "renderer" === window.process.type
            )
              return !0;
            return (
              ("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" != typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                31 <= parseInt(RegExp.$1, 10)) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (n.storage =
            "undefined" != typeof chrome && void 0 !== chrome.storage
              ? chrome.storage.local
              : (() => {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (n.colors = [
            "lightseagreen",
            "forestgreen",
            "goldenrod",
            "dodgerblue",
            "darkorchid",
            "crimson",
          ]),
          (n.formatters.j = function (e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          }),
          n.enable(t());
      },
    }),
    J = y({
      "node_modules/youtube-player/dist/functionNames.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = [
            "cueVideoById",
            "loadVideoById",
            "cueVideoByUrl",
            "loadVideoByUrl",
            "playVideo",
            "pauseVideo",
            "stopVideo",
            "getVideoLoadedFraction",
            "cuePlaylist",
            "loadPlaylist",
            "nextVideo",
            "previousVideo",
            "playVideoAt",
            "setShuffle",
            "setLoop",
            "getPlaylist",
            "getPlaylistIndex",
            "setOption",
            "mute",
            "unMute",
            "isMuted",
            "setVolume",
            "getVolume",
            "seekTo",
            "getPlayerState",
            "getPlaybackRate",
            "setPlaybackRate",
            "getAvailablePlaybackRates",
            "getPlaybackQuality",
            "setPlaybackQuality",
            "getAvailableQualityLevels",
            "getCurrentTime",
            "getDuration",
            "removeEventListener",
            "getVideoUrl",
            "getVideoEmbedCode",
            "getOptions",
            "getOption",
            "addEventListener",
            "destroy",
            "setSize",
            "getIframe",
          ]),
          (t.exports = e.default);
      },
    }),
    Z = y({
      "node_modules/youtube-player/dist/eventNames.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = [
            "ready",
            "stateChange",
            "playbackQualityChange",
            "playbackRateChange",
            "error",
            "apiChange",
            "volumeChange",
          ]),
          (t.exports = e.default);
      },
    }),
    K = y({
      "node_modules/youtube-player/dist/constants/PlayerStates.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = {
            BUFFERING: 3,
            ENDED: 0,
            PAUSED: 2,
            PLAYING: 1,
            UNSTARTED: -1,
            VIDEO_CUED: 5,
          }),
          (t.exports = e.default);
      },
    }),
    X = y({
      "node_modules/youtube-player/dist/FunctionStateMap.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = K(),
          r = (r = r) && r.__esModule ? r : { default: r };
        (e.default = {
          pauseVideo: {
            acceptableStates: [r.default.ENDED, r.default.PAUSED],
            stateChangeRequired: !1,
          },
          playVideo: {
            acceptableStates: [r.default.ENDED, r.default.PLAYING],
            stateChangeRequired: !1,
          },
          seekTo: {
            acceptableStates: [
              r.default.ENDED,
              r.default.PLAYING,
              r.default.PAUSED,
            ],
            stateChangeRequired: !0,
            timeout: 3e3,
          },
        }),
          (t.exports = e.default);
      },
    }),
    ee = y({
      "node_modules/youtube-player/dist/YouTubePlayer.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = a(Q()),
          s = a(J()),
          i = a(Z()),
          u = a(X());
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var c = (0, r.default)("youtube-player"),
          r = {};
        (r.proxyEvents = function (a) {
          var e = {},
            t = !0,
            r = !1,
            n = void 0;
          try {
            for (
              var o, l = i.default[Symbol.iterator]();
              !(t = (o = l.next()).done);
              t = !0
            )
              ((t) => {
                var r = "on" + t.slice(0, 1).toUpperCase() + t.slice(1);
                e[r] = function (e) {
                  c('event "%s"', r, e), a.trigger(t, e);
                };
              })(o.value);
          } catch (e) {
            (r = !0), (n = e);
          } finally {
            try {
              !t && l.return && l.return();
            } finally {
              if (r) throw n;
            }
          }
          return e;
        }),
          (r.promisifyPlayer = function (n) {
            var e =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              t = {},
              r = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var l, i = s.default[Symbol.iterator]();
                !(r = (l = i.next()).done);
                r = !0
              )
                ((a) => {
                  e && u.default[a]
                    ? (t[a] = function () {
                        for (
                          var e = arguments.length, r = Array(e), t = 0;
                          t < e;
                          t++
                        )
                          r[t] = arguments[t];
                        return n.then(function (n) {
                          var o = u.default[a],
                            e = n.getPlayerState(),
                            t = n[a].apply(n, r);
                          return o.stateChangeRequired ||
                            (Array.isArray(o.acceptableStates) &&
                              -1 === o.acceptableStates.indexOf(e))
                            ? new Promise(function (a) {
                                n.addEventListener(
                                  "onStateChange",
                                  function e() {
                                    var t = n.getPlayerState(),
                                      r = void 0;
                                    "number" == typeof o.timeout &&
                                      (r = setTimeout(function () {
                                        n.removeEventListener(
                                          "onStateChange",
                                          e
                                        ),
                                          a();
                                      }, o.timeout)),
                                      Array.isArray(o.acceptableStates) &&
                                        -1 !== o.acceptableStates.indexOf(t) &&
                                        (n.removeEventListener(
                                          "onStateChange",
                                          e
                                        ),
                                        clearTimeout(r),
                                        a());
                                  }
                                );
                              }).then(function () {
                                return t;
                              })
                            : t;
                        });
                      })
                    : (t[a] = function () {
                        for (
                          var e = arguments.length, t = Array(e), r = 0;
                          r < e;
                          r++
                        )
                          t[r] = arguments[r];
                        return n.then(function (e) {
                          return e[a].apply(e, t);
                        });
                      });
                })(l.value);
            } catch (e) {
              (a = !0), (o = e);
            } finally {
              try {
                !r && i.return && i.return();
              } finally {
                if (a) throw o;
              }
            }
            return t;
          }),
          (e.default = r),
          (t.exports = e.default);
      },
    }),
    y = y({
      "node_modules/youtube-player/dist/index.js"(e, t) {
        Object.defineProperty(e, "__esModule", { value: !0 });
        var l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r = a(q()),
          i = a(H()),
          s = a(ee());
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var u = void 0;
        (e.default = function (a) {
          var n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            o = (0, r.default)();
          if (((u = u || (0, i.default)(o)), n.events))
            throw new Error("Event handlers cannot be overwritten.");
          if ("string" == typeof a && !document.getElementById(a))
            throw new Error('Element "' + a + '" does not exist.');
          n.events = s.default.proxyEvents(o);
          var t = new Promise(function (r) {
              "object" === (void 0 === a ? "undefined" : l(a)) &&
              a.playVideo instanceof Function
                ? r(a)
                : u.then(function (e) {
                    var t = new e.Player(a, n);
                    return (
                      o.on("ready", function () {
                        r(t);
                      }),
                      null
                    );
                  });
            }),
            t = s.default.promisifyPlayer(t, e);
          return (t.on = o.on), (t.off = o.off), t;
        }),
          (t.exports = e.default);
      },
    }),
    m = e(t()),
    h = e(t()),
    te = e(t()),
    O = e(t()),
    re = (e) => {
      try {
        var t = new URL(e).searchParams.get("list");
        return t && 0 !== t.length ? !t.startsWith("RD") : !1;
      } catch (e) {
        return !1;
      }
    },
    I = (e) => {
      try {
        var t = new URL(e),
          r = t.hostname.toLowerCase();
        if (
          "www.youtube.com" === r ||
          "youtube.com" === r ||
          "m.youtube.com" === r ||
          "youtu.be" === r
        ) {
          if (r.includes("youtube.com"))
            return t.searchParams.has("v") || t.searchParams.has("list");
          if ("youtu.be" === r) return 1 < t.pathname.length;
        }
        return !1;
      } catch (e) {
        return !1;
      }
    },
    ae = (e) => {
      e = e.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:[?&]|$)/);
      return e ? e[1] : null;
    },
    ne = (e) => {
      e = e.match(/[?&]list=([a-zA-Z0-9_-]+)/);
      return e ? e[1] : null;
    },
    g = (e) => {
      e = e.match(/\[([a-zA-Z0-9_-]{11})\]\.mp3$/);
      return e ? e[1] : null;
    },
    v = e(t());
  function j() {
    var e = 2 * Math.PI * 23.25,
      t = 0.25 * e;
    return v.default.createElement(
      "div",
      {
        role: "status",
        "aria-live": "polite",
        "aria-label": "loading",
        style: {
          display: "block",
          margin: "15px auto 0",
          width: 32,
          height: 32,
        },
      },
      v.default.createElement(
        "svg",
        {
          width: 32,
          height: 32,
          viewBox: "0 0 50 50",
          style: { transform: "rotate(-90deg)" },
          "aria-hidden": "true",
        },
        v.default.createElement("circle", {
          cx: 25,
          cy: 25,
          r: 23.25,
          fill: "none",
          stroke: "rgba(255,255,255,0.08)",
          strokeWidth: 3.5,
        }),
        v.default.createElement("circle", {
          cx: 25,
          cy: 25,
          r: 23.25,
          fill: "none",
          stroke: "var(--spice-button, #1db954)",
          strokeWidth: 3.5,
          strokeLinecap: "round",
          strokeDasharray: t + " " + (e - t),
          style: {
            transformOrigin: "50% 50%",
            animation:
              "spice-rotate 1s linear infinite, spice-dash 1.5s ease-in-out infinite",
          },
        }),
        v.default.createElement(
          "style",
          null,
          `
          @keyframes spice-rotate {
            100% { transform: rotate(360deg); }
          }
          @keyframes spice-dash {
            0% { stroke-dashoffset: 0; }
            50% { stroke-dashoffset: ${0.15 * -e}; }
            100% { stroke-dashoffset: 0; }
          }
        `
        )
      )
    );
  }
  var b = e(t()),
    oe = () =>
      b.default.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--spice-text)",
          },
        },
        b.default.createElement(
          "div",
          {
            style: {
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            },
          },
          b.default.createElement(
            "p",
            {
              style: {
                lineHeight: "1.8",
                marginBottom: "2rem",
                paddingLeft: "1.5rem",
              },
            },
            "1. Paste your YouTube video or playlist link in the search bar.",
            b.default.createElement("br", null),
            "2. Click ",
            b.default.createElement("b", null, "Download"),
            " to start the process.",
            b.default.createElement("br", null),
            "3. Select a valid location to save the files to.",
            b.default.createElement("br", null),
            "4. Wait for the download(s) to finish — you'll see a notification when it's done.",
            b.default.createElement("br", null),
            "5. For playlists, you can select what videos to download, and it will sequentially download each of them."
          ),
          b.default.createElement(
            "div",
            {
              style: {
                background: "rgba(255, 200, 0, 0.1)",
                borderLeft: "4px solid var(--spice-highlight)",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "6px",
              },
            },
            "⚠️ If you get ",
            b.default.createElement("code", null, "NaN:NaN"),
            " for a video link, put the video into a playlist and use that playlist link instead."
          ),
          b.default.createElement(
            "div",
            {
              style: {
                background: "rgba(0, 200, 255, 0.1)",
                borderLeft: "4px solid var(--spice-highlight)",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "6px",
              },
            },
            "💡 Stay tabbed in while downloading, and grant any permissions that are requested, Chromium limits file-saving without them."
          ),
          b.default.createElement(
            "div",
            {
              style: {
                background: "rgba(0, 255, 150, 0.1)",
                borderLeft: "4px solid var(--spice-success)",
                padding: "1rem",
                marginBottom: "2rem",
                borderRadius: "6px",
              },
            },
            "✅ Make sure you have manually enabled Local Files in your spotify settings and added the location your downloading the songs to."
          ),
          b.default.createElement(
            "button",
            {
              onClick: () => {
                Spicetify.LocalStorage.set("youtubeDLTutCompleted", "true");
              },
              style: {
                padding: "0.75rem 1.5rem",
                background: "var(--spice-button)",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "1rem",
                transition: "background 0.2s ease",
              },
              onMouseOver: (e) =>
                (e.currentTarget.style.background = "var(--spice-button)"),
              onMouseOut: (e) =>
                (e.currentTarget.style.background =
                  "var(--spice-button-active))"),
            },
            "Got it"
          )
        )
      );
  function le() {
    let [t, r] = (0, O.useState)(""),
      [e, n] = (0, O.useState)(null),
      [s, a] = (0, O.useState)("invalid"),
      [u, o] = (0, O.useState)(null),
      [c, l] = (0, O.useState)([]),
      [d, i] = (0, O.useState)(new Set()),
      [p, f] = (0, O.useState)(!1),
      [y, m] = (0, O.useState)(!1),
      [h, g] = (0, O.useState)([]),
      [v, b] = (0, O.useState)([]),
      [, w] = (0, O.useState)(0),
      [x, S] =
        ((0, O.useEffect)(() => {
          let e = setInterval(() => {
            w((e) => e + 1);
          }, 1e3);
          return () => clearInterval(e);
        }, []),
        (0, O.useState)(null)),
      E = L.getFieldValue("backend-server"),
      P = (e) => {
        e = e.split(":");
        return 2 < e.length || 5 < parseInt(e[0]);
      };
    async function k(e, a, n) {
      var o,
        l,
        n = n || x;
      if (!n) throw new Error("No download directory provided");
      let t = (a || e).replace(/[\/\\?%*:|"<>]/g, "_"),
        i = Date.now();
      g((e) => [...e, { title: t, startTime: i }]);
      try {
        var s = await fetch(E + "/audio/" + e);
        if (!s.ok) throw new Error(`Failed to download (${s.status})`);
        let t = a || e;
        var u = (t = t.replace(/[\/\\?%*:|"<>]/g, "_")) + ` [${e}].mp3`,
          c = await s.arrayBuffer(),
          d = s.headers.get("Content-Type") || "audio/mpeg",
          p = new Blob([c], { type: d });
        (l = p),
          await (o = await (
            await (o = n).getFileHandle(u, { create: !0 })
          ).createWritable()).write(l),
          await o.close(),
          Spicetify.showNotification("Saved " + u, !1);
        let r = Math.floor((Date.now() - i) / 1e3);
        b((e) => [...e, { title: t, time: r, status: "success" }]);
      } catch (e) {
        console.error("download error", e),
          Spicetify.showNotification("Failed to save file", !0),
          b((e) => [...e, { title: t, status: "failed" }]);
      } finally {
        g((e) => e.filter((e) => e.title !== t));
      }
    }
    return (
      (0, O.useEffect)(() => {
        var e;
        n(null),
          l([]),
          i(new Set()),
          o(null),
          I(t)
            ? re(t)
              ? (a("playlist"),
                (e = ne(t)) &&
                  (async (e) => {
                    let t = [];
                    try {
                      f(!0), l([]), n(null);
                      var r = await fetch(E + "/playlist/" + e);
                      if (!r.ok) throw new Error("HTTP error! " + r.status);
                      var a = (await r.json()).filter(
                        (e) => !P(e.duration) || (t.push(e.id), !1)
                      );
                      0 < t.length &&
                        n(
                          "Hid " +
                            t.length +
                            " videos which exceeded the 5 minute limit."
                        ),
                        l(a || []);
                    } catch (e) {
                      console.error("Error fetching playlist info:", e),
                        n("Failed to fetch playlist details");
                    } finally {
                      f(!1);
                    }
                  })(e))
              : (a("video"),
                (e = ae(t)) &&
                  (async (e) => {
                    try {
                      f(!0), o(null), n(null);
                      var t = await fetch(E + "/video/" + e);
                      if (!t.ok) throw new Error("HTTP error! " + t.status);
                      var r = await t.json();
                      P(r.duration) ? n("Video " + e + " is too long") : o(r);
                    } catch (e) {
                      console.error("Error fetching video info:", e),
                        n("Failed to fetch video details");
                    } finally {
                      f(!1);
                    }
                  })(e))
            : a("invalid");
      }, [t]),
      (0, O.useEffect)(() => {
        i(new Set());
      }, [c]),
      Spicetify.LocalStorage.get("youtubeDLTutCompleted")
        ? 0 < v.length || 0 < h.length
          ? O.default.createElement(
              "div",
              {
                style: {
                  padding: "10px",
                  borderRadius: "8px",
                  maxHeight: "200px",
                  overflowY: "auto",
                  fontSize: "13px",
                },
              },
              O.default.createElement(
                "p",
                { style: { marginBottom: 10 } },
                "You may close the tab, but please stay on the app as the download may fail otherwise."
              ),
              v.map((e, t) =>
                O.default.createElement(
                  "div",
                  {
                    key: t,
                    style: {
                      color: "success" === e.status ? "#1db954" : "#ff4d4d",
                      marginBottom: "4px",
                    },
                  },
                  "success" === e.status
                    ? `Downloaded ${e.title} in ${e.time}s`
                    : "Failed to download " + e.title
                )
              ),
              h.map((e, t) => {
                var r = Math.floor((Date.now() - e.startTime) / 1e3);
                return O.default.createElement(
                  "div",
                  { key: "active-" + t, style: { color: "#aaa" } },
                  "Downloading: ",
                  O.default.createElement("strong", null, e.title),
                  " for ",
                  r,
                  "s"
                );
              })
            )
          : O.default.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                },
              },
              O.default.createElement(
                "label",
                {
                  style: {
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--spice-text)",
                    marginBottom: "2px",
                    display: "block",
                  },
                },
                "YouTube URL:"
              ),
              O.default.createElement("input", {
                type: "text",
                placeholder: "Paste YouTube link...",
                value: t,
                onChange: (e) => r(e.target.value),
                style: {
                  padding: "10px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--spice-border, #444)",
                  backgroundColor: "var(--spice-background, #222)",
                  color: "var(--spice-text, #eee)",
                  fontSize: "14px",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                },
              }),
              "playlist" === s
                ? p
                  ? O.default.createElement(j, null)
                  : O.default.createElement(
                      "div",
                      null,
                      c.length &&
                        O.default.createElement("h3", null, "Playlist"),
                      O.default.createElement(
                        "ul",
                        {
                          style: {
                            maxHeight: "200px",
                            overflowY: "auto",
                            marginTop: 15,
                            padding: 0,
                            listStyle: "none",
                          },
                        },
                        c.map((e, t) => {
                          var r = d.has(e.id);
                          return O.default.createElement(
                            "li",
                            {
                              key: t,
                              onClick: () => {
                                var t;
                                (t = e.id),
                                  i((e) => {
                                    e = new Set(e);
                                    return e.has(t) ? e.delete(t) : e.add(t), e;
                                  });
                              },
                              style: {
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "8px",
                                padding: "8px 12px",
                                borderLeft: r
                                  ? "4px solid var(--spice-button, #1db954)"
                                  : "4px solid transparent",
                                color: r
                                  ? "var(--spice-text, #eee)"
                                  : "var(--spice-text-muted, #aaa)",
                                fontWeight: r ? 600 : 400,
                                transition:
                                  "border-color 0.3s ease, color 0.3s ease",
                                userSelect: "none",
                              },
                            },
                            O.default.createElement("img", {
                              src:
                                null ==
                                (r =
                                  null ==
                                  (t = null == e ? void 0 : e.thumbnails)
                                    ? void 0
                                    : t[0])
                                  ? void 0
                                  : r.url,
                              alt: null == e ? void 0 : e.title,
                              width: 80,
                              height: 45,
                              style: { borderRadius: "6px", flexShrink: 0 },
                            }),
                            O.default.createElement(
                              "span",
                              { style: { flex: 1, userSelect: "text" } },
                              "string" == typeof e.title
                                ? e.title
                                : (null == (t = e.title) ? void 0 : t.text) ||
                                    "Untitled"
                            ),
                            O.default.createElement(
                              "span",
                              {
                                style: {
                                  marginLeft: "auto",
                                  fontSize: 10,
                                  color: "#aaa",
                                },
                              },
                              e.duration || "-"
                            )
                          );
                        })
                      )
                    )
                : "video" === s
                ? p
                  ? O.default.createElement(j, null)
                  : u
                  ? O.default.createElement(
                      "div",
                      {
                        style: {
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        },
                      },
                      O.default.createElement("img", {
                        src:
                          null ==
                          (C =
                            null == (C = null == u ? void 0 : u.thumbnails)
                              ? void 0
                              : C[0])
                            ? void 0
                            : C.url,
                        alt: null == u ? void 0 : u.title,
                        width: 120,
                        height: 67,
                      }),
                      O.default.createElement(
                        "div",
                        null,
                        O.default.createElement("h4", null, u.title),
                        O.default.createElement(
                          "p",
                          null,
                          "Duration: ",
                          u.duration
                        )
                      )
                    )
                  : null
                : null,
              e &&
                O.default.createElement(
                  "div",
                  { style: { color: "red", fontSize: "13px" } },
                  e
                ),
              O.default.createElement(
                "div",
                { style: { display: "flex", justifyContent: "flex-end" } },
                O.default.createElement(
                  "button",
                  {
                    type: "button",
                    disabled: !I(t),
                    onMouseOver: () => m(!0),
                    onMouseLeave: () => m(!1),
                    style: F(
                      {
                        border: "none",
                        width: "13%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        borderRadius: "20px",
                        backgroundColor: "var(--spice-button, #1db954)",
                        color: "var(--spice-text)",
                        transition: "all",
                        cursor: u || 0 < d.size ? "pointer" : "not-allowed",
                        opacity: u || 0 < d.size ? 1 : 0.8,
                      },
                      y && (u || 0 < d.size)
                        ? { filter: "brightness(0.85)" }
                        : {}
                    ),
                    onClick: async () => {
                      if (t.trim())
                        if ("playlist" === s && 0 === d.size)
                          Spicetify.showNotification(
                            "Please select at least one video!",
                            !0
                          );
                        else {
                          let r = x;
                          if (
                            r ||
                            (r = await (async () => {
                              try {
                                var e = await window.showDirectoryPicker(),
                                  t =
                                    (S(e),
                                    Spicetify.Platform.LocalFilesAPI.getIsEnabled());
                                return (
                                  t ||
                                    Spicetify.Platform.LocalFilesAPI.setIsEnabled(
                                      !0
                                    ),
                                  e
                                );
                              } catch (e) {
                                return (
                                  console.warn(
                                    "Directory pick cancelled or failed",
                                    e
                                  ),
                                  null
                                );
                              }
                            })())
                          )
                            if ("video" === s && null != u && u.id)
                              await k(u.id, u.title, r);
                            else if ("playlist" === s) {
                              var a = r;
                              let e,
                                t = a || x;
                              if (!t) throw new Error("No download dir");
                              var n = c.filter((e) => d.has(e.id));
                              if (L.getFieldValue("download-parallelly")) {
                                var o = parseInt(L.getFieldValue("batch-size"));
                                for (let e = 0; e < n.length; e += o) {
                                  var l = n
                                    .slice(e, e + o)
                                    .map((e) =>
                                      k(
                                        e.id,
                                        "string" == typeof e.title
                                          ? e.title
                                          : null == (e = e.title)
                                          ? void 0
                                          : e.text,
                                        t
                                      )
                                    );
                                  await Promise.all(l);
                                }
                              } else
                                for (var i of n)
                                  await k(
                                    i.id,
                                    "string" == typeof i.title
                                      ? i.title
                                      : null == (e = i.title)
                                      ? void 0
                                      : e.text,
                                    t
                                  );
                              return void (await 0);
                            }
                        }
                      else
                        Spicetify.showNotification(
                          "Please enter a YouTube URL!",
                          !0
                        );
                    },
                  },
                  "Add"
                )
              )
            )
        : O.default.createElement(oe, null)
    );
    var C;
  }
  function w() {
    var e = document.querySelector(
        'button.AIlmv6h8bR5NY5R0VceT[aria-label="Create"]'
      ),
      t =
        null ==
        (t = document.querySelector(
          '[id^="tippy-"][data-tippy-root] > #context-menu'
        ))
          ? void 0
          : t.getElementsByTagName("ul")[0],
      t =
        (t &&
          t.querySelector(
            'button[aria-describedby="subtitle-global-create-playlist"]'
          ) &&
          e instanceof HTMLElement &&
          e.click(),
        document.createElement("div"));
    Spicetify.ReactDOM.createRoot(t).render(te.default.createElement(le, null)),
      Spicetify.PopupModal.display({
        title: "Import a Song or Playlist from Youtube",
        content: t,
        isLarge: !0,
      });
  }
  var ie = {
      "--box-padding-block-start": "2px",
      "--box-padding-block-end": "2px",
      "--box-padding-inline-start": "calc(var(--encore-spacing-tighter) - 4px)",
      "--box-padding-inline-end": "var(--encore-spacing-tighter)",
      "--box-min-block-size": "56px",
    },
    se = () => {
      let [e, t] = (0, h.useState)(!1);
      return h.default.createElement(
        "button",
        {
          onClick: w,
          id: "spicetify-youtube-menuitem",
          className: "kLKq7fz4Llya50jObe9a",
          role: "menuitem",
          tabIndex: -1,
          onMouseOver: () => t(!0),
          onMouseLeave: () => t(!1),
          "aria-describedby": "subtitle-global-create-youtube",
        },
        h.default.createElement(
          "div",
          {
            className:
              "e-91000-box e-91000-baseline e-91000-box--naked e-91000-box--browser-default-focus e-91000-box--padding-custom e-91000-box--min-size e-91000-Box-sc-8t9c76-0 Box-group-naked-listRow-hasLeadingOrMedia-minBlockSize_56px",
            style: ie,
          },
          h.default.createElement(
            "div",
            { className: "Areas__HeaderSideArea-sc-8gfrea-1 HeaderSideArea" },
            h.default.createElement(
              "div",
              {
                className:
                  "Areas__HeaderSideAreaFlexContainer-sc-8gfrea-2 HeaderSideAreaFlexContainer",
              },
              h.default.createElement(
                "div",
                {
                  className:
                    "Areas__InteractiveArea-sc-8gfrea-0 Areas__LeadingSlot-sc-8gfrea-6 bJSfgC hUkHtl",
                },
                h.default.createElement(
                  "div",
                  { className: "uKWufPQjLFxGolUWWIqH" },
                  h.default.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "25",
                      height: "25",
                      fill: e ? "#1DB954" : "currentColor",
                      style: e
                        ? { transition: "all", transform: "rotate(5deg)" }
                        : {},
                      className: "bi bi-youtube",
                      viewBox: "0 0 16 16",
                    },
                    h.default.createElement("path", {
                      d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z",
                    })
                  )
                )
              )
            )
          ),
          h.default.createElement(
            "div",
            { className: "Areas__HeaderArea-sc-8gfrea-3 HeaderArea" },
            h.default.createElement(
              "div",
              {
                className:
                  "Areas__InteractiveArea-sc-8gfrea-0 Areas__Column-sc-8gfrea-5 bJSfgC Column-lg",
              },
              h.default.createElement(
                "p",
                {
                  className:
                    "e-91000-text encore-text-body-medium-bold ListRowTitle__ListRowText-sc-1xe2if1-1",
                  id: "listrow-title-global-create-youtube",
                },
                "Add From Youtube"
              ),
              h.default.createElement(
                "p",
                {
                  className:
                    "e-91000-text encore-text-body-small encore-internal-color-text-subdued ListRowDetails__ListRowDetailText-sc-sozu4l-0",
                  id: "subtitle-global-create-youtube",
                },
                "Add a song or playlist from youtube"
              )
            )
          )
        )
      );
    },
    x = e(t()),
    ue = e(r()),
    ce = class {
      constructor(e, t, r = {}) {
        (this.name = e),
          (this.settingsId = t),
          (this.initialSettingsFields = r),
          (this.settingsFields = this.initialSettingsFields),
          (this.setRerender = null),
          (this.pushSettings = async () => {
            for (
              Object.entries(this.settingsFields).forEach(([e, t]) => {
                "button" !== t.type &&
                  void 0 === this.getFieldValue(e) &&
                  this.setFieldValue(e, t.defaultValue);
              });
              !Spicetify?.Platform?.History?.listen;

            )
              await new Promise((e) => setTimeout(e, 100));
            this.stopHistoryListener && this.stopHistoryListener(),
              (this.stopHistoryListener = Spicetify.Platform.History.listen(
                (e) => {
                  "/preferences" === e.pathname && this.render();
                }
              )),
              "/preferences" === Spicetify.Platform.History.location.pathname &&
                (await this.render());
          }),
          (this.rerender = () => {
            this.setRerender && this.setRerender(Math.random());
          }),
          (this.render = async () => {
            for (
              ;
              !document.getElementById("desktop.settings.selectLanguage");

            ) {
              if (
                "/preferences" !== Spicetify.Platform.History.location.pathname
              )
                return;
              await new Promise((e) => setTimeout(e, 100));
            }
            var e = document.querySelector(
              ".main-view-container__scroll-node-child main div"
            );
            if (!e)
              return console.error(
                "[spcr-settings] settings container not found"
              );
            let t = Array.from(e.children).find(
              (e) => e.id === this.settingsId
            );
            t
              ? console.log(t)
              : (((t = document.createElement("div")).id = this.settingsId),
                e.appendChild(t)),
              ue.default.render(
                x.default.createElement(this.FieldsContainer, null),
                t
              );
          }),
          (this.addButton = (e, t, r, a, n) => {
            this.settingsFields[e] = {
              type: "button",
              description: t,
              value: r,
              events: { onClick: a, ...n },
            };
          }),
          (this.addInput = (e, t, r, a, n, o) => {
            this.settingsFields[e] = {
              type: "input",
              description: t,
              defaultValue: r,
              inputType: n,
              events: { onChange: a, ...o },
            };
          }),
          (this.addHidden = (e, t) => {
            this.settingsFields[e] = { type: "hidden", defaultValue: t };
          }),
          (this.addToggle = (e, t, r, a, n) => {
            this.settingsFields[e] = {
              type: "toggle",
              description: t,
              defaultValue: r,
              events: { onChange: a, ...n },
            };
          }),
          (this.addDropDown = (e, t, r, a, n, o) => {
            this.settingsFields[e] = {
              type: "dropdown",
              description: t,
              defaultValue: r[a],
              options: r,
              events: { onSelect: n, ...o },
            };
          }),
          (this.getFieldValue = (e) =>
            JSON.parse(
              Spicetify.LocalStorage.get(this.settingsId + "." + e) || "{}"
            )?.value),
          (this.setFieldValue = (e, t) => {
            Spicetify.LocalStorage.set(
              this.settingsId + "." + e,
              JSON.stringify({ value: t })
            );
          }),
          (this.FieldsContainer = () => {
            var [e, t] = (0, x.useState)(0);
            return (
              (this.setRerender = t),
              x.default.createElement(
                "div",
                { className: "x-settings-section", key: e },
                x.default.createElement(
                  "h2",
                  { className: "TypeElement-cello-textBase-type" },
                  this.name
                ),
                Object.entries(this.settingsFields).map(([e, t]) =>
                  x.default.createElement(this.Field, { nameId: e, field: t })
                )
              )
            );
          }),
          (this.Field = (r) => {
            var e = this.settingsId + "." + r.nameId;
            let t;
            if (
              ((t =
                "button" === r.field.type
                  ? r.field.value
                  : this.getFieldValue(r.nameId)),
              "hidden" === r.field.type)
            )
              return x.default.createElement(x.default.Fragment, null);
            let [a, n] = (0, x.useState)(t),
              o = (e) => {
                void 0 !== e && (n(e), this.setFieldValue(r.nameId, e));
              };
            return x.default.createElement(
              "div",
              { className: "x-settings-row" },
              x.default.createElement(
                "div",
                { className: "x-settings-firstColumn" },
                x.default.createElement(
                  "label",
                  {
                    className: "TypeElement-viola-textSubdued-type",
                    htmlFor: e,
                  },
                  r.field.description || ""
                )
              ),
              x.default.createElement(
                "div",
                { className: "x-settings-secondColumn" },
                "input" === r.field.type
                  ? x.default.createElement("input", {
                      className: "x-settings-input",
                      id: e,
                      dir: "ltr",
                      value: a,
                      type: r.field.inputType || "text",
                      ...r.field.events,
                      onChange: (e) => {
                        o(e.currentTarget.value);
                        var t = r.field.events?.onChange;
                        t && t(e);
                      },
                    })
                  : "button" === r.field.type
                  ? x.default.createElement(
                      "span",
                      null,
                      x.default.createElement(
                        "button",
                        {
                          id: e,
                          className:
                            "Button-sc-y0gtbx-0 Button-small-buttonSecondary-useBrowserDefaultFocusStyle x-settings-button",
                          ...r.field.events,
                          onClick: (e) => {
                            o();
                            var t = r.field.events?.onClick;
                            t && t(e);
                          },
                          type: "button",
                        },
                        a
                      )
                    )
                  : "toggle" === r.field.type
                  ? x.default.createElement(
                      "label",
                      { className: "x-settings-secondColumn x-toggle-wrapper" },
                      x.default.createElement("input", {
                        id: e,
                        className: "x-toggle-input",
                        type: "checkbox",
                        checked: a,
                        ...r.field.events,
                        onClick: (e) => {
                          o(e.currentTarget.checked);
                          var t = r.field.events?.onClick;
                          t && t(e);
                        },
                      }),
                      x.default.createElement(
                        "span",
                        { className: "x-toggle-indicatorWrapper" },
                        x.default.createElement("span", {
                          className: "x-toggle-indicator",
                        })
                      )
                    )
                  : "dropdown" === r.field.type
                  ? x.default.createElement(
                      "select",
                      {
                        className: "main-dropDown-dropDown",
                        id: e,
                        ...r.field.events,
                        onChange: (e) => {
                          o(r.field.options[e.currentTarget.selectedIndex]);
                          var t = r.field.events?.onChange;
                          t && t(e);
                        },
                      },
                      r.field.options.map((e, t) =>
                        x.default.createElement(
                          "option",
                          { selected: e === a, value: t + 1 },
                          e
                        )
                      )
                    )
                  : x.default.createElement(x.default.Fragment, null)
              )
            );
          });
      }
    },
    S = e(t()),
    E =
      null == (r = null == Spicetify ? void 0 : Spicetify.Platform)
        ? void 0
        : r.History,
    P = e(t()),
    r = e(d()),
    k = e(t()),
    de = e(Y()),
    pe = e(y()),
    fe = Object.defineProperty,
    ye = Object.defineProperties,
    me = Object.getOwnPropertyDescriptors,
    C = Object.getOwnPropertySymbols,
    he = Object.prototype.hasOwnProperty,
    ge = Object.prototype.propertyIsEnumerable,
    A = (e, t, r) =>
      t in e
        ? fe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (e[t] = r),
    T = (e, t) => {
      for (var r in (t = t || {})) he.call(t, r) && A(e, r, t[r]);
      if (C) for (var r of C(t)) ge.call(t, r) && A(e, r, t[r]);
      return e;
    },
    _ = (e, t) => ye(e, me(t));
  function R(e = {}) {
    return _(T({}, e), {
      height: 0,
      width: 0,
      playerVars: _(T({}, e.playerVars), { autoplay: 0, start: 0, end: 0 }),
    });
  }
  var d = {
      videoId: r.default.string,
      id: r.default.string,
      className: r.default.string,
      iframeClassName: r.default.string,
      style: r.default.object,
      title: r.default.string,
      loading: r.default.oneOf(["lazy", "eager"]),
      opts: r.default.objectOf(r.default.any),
      onReady: r.default.func,
      onError: r.default.func,
      onPlay: r.default.func,
      onPause: r.default.func,
      onEnd: r.default.func,
      onStateChange: r.default.func,
      onPlaybackRateChange: r.default.func,
      onPlaybackQualityChange: r.default.func,
    },
    N = class extends k.default.Component {
      constructor(e) {
        super(e),
          (this.destroyPlayerPromise = void 0),
          (this.onPlayerReady = (e) => {
            var t, r;
            return null == (r = (t = this.props).onReady)
              ? void 0
              : r.call(t, e);
          }),
          (this.onPlayerError = (e) => {
            var t, r;
            return null == (r = (t = this.props).onError)
              ? void 0
              : r.call(t, e);
          }),
          (this.onPlayerStateChange = (e) => {
            var t, r, a, n;
            switch (
              (null != (r = (t = this.props).onStateChange) && r.call(t, e),
              e.data)
            ) {
              case N.PlayerState.ENDED:
                null != (n = (a = this.props).onEnd) && n.call(a, e);
                break;
              case N.PlayerState.PLAYING:
                null != (a = (n = this.props).onPlay) && a.call(n, e);
                break;
              case N.PlayerState.PAUSED:
                null != (n = (a = this.props).onPause) && n.call(a, e);
            }
          }),
          (this.onPlayerPlaybackRateChange = (e) => {
            var t, r;
            return null == (r = (t = this.props).onPlaybackRateChange)
              ? void 0
              : r.call(t, e);
          }),
          (this.onPlayerPlaybackQualityChange = (e) => {
            var t, r;
            return null == (r = (t = this.props).onPlaybackQualityChange)
              ? void 0
              : r.call(t, e);
          }),
          (this.destroyPlayer = () =>
            this.internalPlayer
              ? ((this.destroyPlayerPromise = this.internalPlayer
                  .destroy()
                  .then(() => (this.destroyPlayerPromise = void 0))),
                this.destroyPlayerPromise)
              : Promise.resolve()),
          (this.createPlayer = () => {
            var e;
            "undefined" != typeof document &&
              (this.destroyPlayerPromise
                ? this.destroyPlayerPromise.then(this.createPlayer)
                : ((e = _(T({}, this.props.opts), {
                    videoId: this.props.videoId,
                  })),
                  (this.internalPlayer = (0, pe.default)(this.container, e)),
                  this.internalPlayer.on("ready", this.onPlayerReady),
                  this.internalPlayer.on("error", this.onPlayerError),
                  this.internalPlayer.on(
                    "stateChange",
                    this.onPlayerStateChange
                  ),
                  this.internalPlayer.on(
                    "playbackRateChange",
                    this.onPlayerPlaybackRateChange
                  ),
                  this.internalPlayer.on(
                    "playbackQualityChange",
                    this.onPlayerPlaybackQualityChange
                  ),
                  (this.props.title || this.props.loading) &&
                    this.internalPlayer.getIframe().then((e) => {
                      this.props.title &&
                        e.setAttribute("title", this.props.title),
                        this.props.loading &&
                          e.setAttribute("loading", this.props.loading);
                    })));
          }),
          (this.resetPlayer = () =>
            this.destroyPlayer().then(this.createPlayer)),
          (this.updatePlayer = () => {
            var e;
            null != (e = this.internalPlayer) &&
              e.getIframe().then((e) => {
                this.props.id
                  ? e.setAttribute("id", this.props.id)
                  : e.removeAttribute("id"),
                  this.props.iframeClassName
                    ? e.setAttribute("class", this.props.iframeClassName)
                    : e.removeAttribute("class"),
                  this.props.opts && this.props.opts.width
                    ? e.setAttribute("width", this.props.opts.width.toString())
                    : e.removeAttribute("width"),
                  this.props.opts && this.props.opts.height
                    ? e.setAttribute(
                        "height",
                        this.props.opts.height.toString()
                      )
                    : e.removeAttribute("height"),
                  this.props.title
                    ? e.setAttribute("title", this.props.title)
                    : e.setAttribute("title", "YouTube video player"),
                  this.props.loading
                    ? e.setAttribute("loading", this.props.loading)
                    : e.removeAttribute("loading");
              });
          }),
          (this.getInternalPlayer = () => this.internalPlayer),
          (this.updateVideo = () => {
            var t;
            if (null == this.props.videoId)
              null != (r = this.internalPlayer) && r.stopVideo();
            else {
              let e = !1;
              var r = { videoId: this.props.videoId };
              null != (t = this.props.opts) &&
                t.playerVars &&
                ((e = 1 === this.props.opts.playerVars.autoplay),
                "start" in this.props.opts.playerVars &&
                  (r.startSeconds = this.props.opts.playerVars.start),
                "end" in this.props.opts.playerVars) &&
                (r.endSeconds = this.props.opts.playerVars.end),
                e
                  ? null != (t = this.internalPlayer) && t.loadVideoById(r)
                  : null != (t = this.internalPlayer) && t.cueVideoById(r);
            }
          }),
          (this.refContainer = (e) => {
            this.container = e;
          }),
          (this.container = null),
          (this.internalPlayer = null);
      }
      componentDidMount() {
        this.createPlayer();
      }
      componentDidUpdate(a) {
        return (
          (e = this),
          (l = null),
          (i = function* () {
            var e, t, r;
            (r = a),
              (t = this.props),
              (r.id === t.id &&
                r.className === t.className &&
                (null == (e = r.opts) ? void 0 : e.width) ===
                  (null == (e = t.opts) ? void 0 : e.width) &&
                (null == (e = r.opts) ? void 0 : e.height) ===
                  (null == (e = t.opts) ? void 0 : e.height) &&
                r.iframeClassName === t.iframeClassName &&
                r.title === t.title) ||
                this.updatePlayer(),
              (e = a),
              (r = this.props),
              (e.videoId === r.videoId &&
                (0, de.default)(R(e.opts), R(r.opts))) ||
                (yield this.resetPlayer()),
              (t = a),
              (r = this.props),
              (t.videoId === r.videoId &&
                ((t = (null == (t = t.opts) ? void 0 : t.playerVars) || {}),
                (r = (null == (r = r.opts) ? void 0 : r.playerVars) || {}),
                t.start === r.start) &&
                t.end === r.end) ||
                this.updateVideo();
          }),
          new Promise((t, r) => {
            var a = (e) => {
                try {
                  o(i.next(e));
                } catch (e) {
                  r(e);
                }
              },
              n = (e) => {
                try {
                  o(i.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              o = (e) =>
                e.done ? t(e.value) : Promise.resolve(e.value).then(a, n);
            o((i = i.apply(e, l)).next());
          })
        );
        var e, l, i;
      }
      componentWillUnmount() {
        this.destroyPlayer();
      }
      render() {
        return k.default.createElement(
          "div",
          { className: this.props.className, style: this.props.style },
          k.default.createElement("div", {
            id: this.props.id,
            className: this.props.iframeClassName,
            ref: this.refContainer,
          })
        );
      }
    },
    ve =
      (((t = N).propTypes = d),
      (t.defaultProps = {
        videoId: "",
        id: "",
        className: "",
        iframeClassName: "",
        style: {},
        title: "",
        loading: void 0,
        opts: {},
        onReady: () => {},
        onError: () => {},
        onPlay: () => {},
        onPause: () => {},
        onEnd: () => {},
        onStateChange: () => {},
        onPlaybackRateChange: () => {},
        onPlaybackQualityChange: () => {},
      }),
      (t.PlayerState = {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5,
      }),
      t),
    { goToPage: be, goBack: we } = (({ pathname: e, container: r }) => {
      let a = `/${e}/`,
        n = null,
        t = "root-" + e,
        o = null,
        l = document.createElement("div"),
        i =
          ((l.id = t),
          (l.style.position = "absolute"),
          (l.style.top = "0"),
          (l.style.left = "0"),
          (l.style.width = "100%"),
          (l.style.height = "100%"),
          (l.style.overflow = "hidden"),
          async () => {
            var e = await ((n, { timeout: o = 3e3 } = {}) => {
              let l = performance.now();
              return new Promise((r, a) => {
                !(function e() {
                  var t = document.querySelector(n);
                  t
                    ? r(t)
                    : performance.now() - l > o
                    ? (a(null),
                      console.warn("Timeout: Could not find element: " + n))
                    : requestAnimationFrame(e);
                })();
              });
            })(
              ".main-view-container__scroll-node div[data-overlayscrollbars-viewport]"
            );
            e.querySelector("#" + t) || e.appendChild(l);
          });
      e = (e) => {
        var t;
        E &&
          e &&
          ((t = E.entries.slice(-2, -1)[0]),
          (n = null != (t = null == t ? void 0 : t.pathname) ? t : "/"),
          e.pathname === a
            ? (async () => {
                o ||
                  ((o = Spicetify.ReactDOM.createRoot(l)).render(r), await i());
              })()
            : o && (o.unmount(), (o = null), l.remove()));
      };
      e(null == E ? void 0 : E.location), null != E && E.listen(e);
      return {
        goToPage: () => (null == E ? void 0 : E.push(a)),
        goBack: () => (null == E ? void 0 : E.push(null != n ? n : "/")),
      };
    })({
      pathname: "youtube-player-local",
      container: S.default.createElement(() => {
        let [r, a] = (0, P.useState)(null),
          n = (0, P.useRef)(null),
          o = (0, P.useRef)(!1),
          t = () => {
            var e = null == (e = Spicetify.Player.data) ? void 0 : e.item,
              t = null == e ? void 0 : e.metadata;
            null != e && e.isLocal && null != t && t.local_file_path
              ? a(g(t.local_file_path))
              : a(null);
          };
        (0, P.useEffect)(() => {
          let e = setTimeout(() => {
            t();
          }, 500);
          return (
            Spicetify.Player.addEventListener("songchange", t),
            () => {
              clearTimeout(e),
                Spicetify.Player.removeEventListener("songchange", t);
            }
          );
        }, []);
        let l = () => {
          var e, t;
          n.current &&
            o.current &&
            r &&
            (n.current.mute(),
            1 !== n.current.getPlaybackRate() && n.current.setPlaybackRate(1),
            (t = Spicetify.Player.getProgress() / 1e3),
            (e = n.current.getCurrentTime() || 0),
            (t = Math.max(t, 0)),
            0.2 < Math.abs(t - e) && n.current.seekTo(t, !0),
            (e = Spicetify.Player.isPlaying()),
            (t = n.current.getPlayerState()),
            e && 1 !== t
              ? n.current.playVideo()
              : e || 1 !== t || n.current.pauseVideo());
        };
        return (
          (0, P.useEffect)(() => {
            if (r) {
              let e = setInterval(l, 500);
              return (
                Spicetify.Player.addEventListener("songchange", l),
                Spicetify.Player.addEventListener("playpause", l),
                () => {
                  clearInterval(e),
                    Spicetify.Player.removeEventListener("songchange", l),
                    Spicetify.Player.removeEventListener("playpause", l);
                }
              );
            }
          }, [r]),
          P.default.createElement(
            "div",
            {
              style: {
                width: "100%",
                height: "100%",
                padding: 20,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
              },
            },
            r
              ? P.default.createElement(
                  "div",
                  { style: { width: "100%", flexGrow: 1 } },
                  P.default.createElement(ve, {
                    videoId: r,
                    opts: {
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        disablekb: 1,
                        modestbranding: 1,
                        rel: 0,
                        fs: 0,
                        loop: 0,
                        mute: 1,
                      },
                    },
                    onReady: (e) => {
                      (n.current = e.target), (o.current = !0), l();
                    },
                    style: { width: "100%", height: "100%" },
                  }),
                  P.default.createElement(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        zIndex: "-10",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      },
                    },
                    P.default.createElement(j, null)
                  )
                )
              : P.default.createElement("p", null, "No local video detected")
          )
        );
      }, null),
    }),
    xe = () => {
      let [e, r] = (0, S.useState)(null),
        t = () => {
          var e = null == (e = Spicetify.Player.data) ? void 0 : e.item,
            t = null == e ? void 0 : e.metadata;
          null != e && e.isLocal && null != t && t.local_file_path
            ? ((e = g(t.local_file_path)), r(e))
            : r(null);
        };
      return (
        (0, S.useEffect)(() => {
          let e = setTimeout(() => {
            t();
          }, 500);
          return (
            Spicetify.Player.addEventListener("songchange", t),
            () => {
              clearTimeout(e),
                Spicetify.Player.removeEventListener("songchange", t);
            }
          );
        }, []),
        e
          ? S.default.createElement(
              "button",
              {
                className:
                  "Button-sc-1dqy6lx-0 Button-buttonTertiary-small-iconOnly-useBrowserDefaultFocusStyle-condensed view-from-youtube",
                onClick: () => {
                  var e;
                  ("/youtube-player-local/" ===
                    (null == (e = Spicetify.Platform)
                      ? void 0
                      : e.History.location.pathname)
                    ? we
                    : be)();
                },
                style: {
                  width: 20,
                  height: 20,
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  flexGrow: 0,
                },
              },
              S.default.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 16 16",
                  fill: "currentColor",
                },
                S.default.createElement("path", {
                  d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z",
                })
              )
            )
          : null
      );
    },
    L = (() => {
      let t = "https://sc-youtube-api-production.up.railway.app",
        r = new ce("Youtube Importer Settings", "youtube-importer");
      return (
        r.addInput("backend-server", "Backend to get videos from", t, () => {
          var e = r.getFieldValue("backend-server");
          ("" !== e.trim() &&
            /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/.test(e)) ||
            (r.setFieldValue("backend-server", t), r.rerender());
        }),
        r.addToggle(
          "download-parallelly",
          "Queue downloads parallelly instead of in a queue",
          !0
        ),
        r.addDropDown(
          "batch-size",
          "Size of batches if downloading parallelly",
          Array.from({ length: 8 }, (e, t) => (t + 1).toString()),
          4
        ),
        r.pushSettings(),
        r
      );
    })();
  (async () => {
    new MutationObserver(() => {
      var e,
        t = document.querySelector(
          '[id^="tippy-"][data-tippy-root] > #context-menu ul'
        );
      t &&
        !document.getElementById("spicetify-youtube-menuitem") &&
        t.querySelector(
          'button[aria-describedby="subtitle-global-create-playlist"]'
        ) &&
        (((e = document.createElement("li")).className =
          "jzMBaEByD6M9xRmS9mv8"),
        e.setAttribute("role", "presentation"),
        (e.id = "spicetify-youtube-menuitem"),
        t.appendChild(e),
        Spicetify.ReactDOM.createRoot(e).render(
          m.default.createElement(se, null)
        ));
    }).observe(document.body, { childList: !0, subtree: !0 }),
      (Spicetify.SVGIcons.youtube = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
  </svg>
`),
      new Spicetify.ContextMenu.Item(
        "Import from YouTube",
        w,
        void 0,
        "youtube"
      ).register(),
      ((t, r, e = { childList: !0, subtree: !0 }) => {
        let a = new MutationObserver(() => {
          var e = document.querySelector(t);
          e && (a.disconnect(), r(e));
        });
        a.observe(document.body, e);
      })('[data-testid="now-playing-widget"]', (e) => {
        var t,
          e = e.querySelector(".ZbFkATBbLkWh2SHMXDt6");
        e &&
          !e.querySelector(".view-from-youtube") &&
          (((t = document.createElement("div")).style.display = "flex"),
          (t.style.alignItems = "center"),
          e.appendChild(t),
          Spicetify.ReactDOM.createRoot(t).render(
            m.default.createElement(xe, null)
          ));
      });
  })();
})();
