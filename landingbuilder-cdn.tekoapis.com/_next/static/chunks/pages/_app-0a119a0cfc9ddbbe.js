(self.webpackChunkhost_app = self.webpackChunkhost_app || []).push([
  [92888],
  {
    7766: (e, n, t) => {
      e.exports = t(48998);
    },
    13863: (e, n, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t(36326);
        },
      ]);
    },
    54381: (e, n, t) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "useReportWebVitals", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = t(88494),
        i = t(78860);
      function o(e) {
        (0, r.useEffect)(() => {
          (0, i.onCLS)(e),
            (0, i.onFID)(e),
            (0, i.onLCP)(e),
            (0, i.onINP)(e),
            (0, i.onFCP)(e),
            (0, i.onTTFB)(e);
        }, [e]);
      }
      ("function" == typeof n.default ||
        ("object" == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, "__esModule", { value: !0 }),
        Object.assign(n.default, n),
        (e.exports = n.default));
    },
    12588: (e, n, t) => {
      "use strict";
      t.d(n, { U: () => o, s: () => a });
      var r = t(88494);
      let i = t.n(r)().createContext({}),
        o = i.Provider;
      function a() {
        let e = (0, r.useContext)(i);
        if (!e)
          throw Error(
            "useGlobalData must be inside a GlobalDataProvider with a state value"
          );
        return e;
      }
    },
    36326: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => p });
      var r,
        i = t(37465),
        o = t(88494),
        a = t.n(o),
        u = t(7766),
        c = t.n(u),
        s = t(12588);
      t(29222);
      var f = t(94384);
      !(function (e) {
        (e.TTFB = "TTFB"),
          (e.FCP = "FCP"),
          (e.LCP = "LCP"),
          (e.CLS = "CLS"),
          (e.INP = "INP"),
          (e.FID = "FID");
      })(r || (r = {}));
      let l = () => {
          let e = (0, o.useRef)({ tracked: new Set(), needTrack: {} });
          (0, f.useReportWebVitals)((n) => {
            var t, r;
            let { name: i } = n;
            if (e.current.tracked.has(i)) return;
            e.current.needTrack[i] = n;
            let o = null === (t = window) || void 0 === t ? void 0 : t.track;
            if (o) {
              let { pathname: n = "", hostname: t = "" } =
                null === (r = window) || void 0 === r ? void 0 : r.location;
              for (let r of Object.values(e.current.needTrack)) {
                let { name: i, value: a } = r;
                o("customEvent", "web-vital", {
                  action: i,
                  label: i,
                  category: t,
                  property: n,
                  value: Math.round("CLS" === r.name ? 1e3 * r.value : a),
                }),
                  e.current.tracked.add(i),
                  delete e.current.needTrack[i];
              }
            }
          });
        },
        d = (e) => {
          let { Component: n, pageProps: t, globalData: r } = e;
          return (
            l(),
            (0, o.useEffect)(() => {
              window.__federation_shared__ = globalThis.backupScope;
            }, []),
            (0, i.jsx)(s.U, { value: r, children: a().createElement(n, t) })
          );
        };
      d.getInitialProps = async (e) => {
        var n, t, r;
        return {
          ...(await c().getInitialProps(e)),
          globalData: {
            isMobile:
              null === (n = e.ctx.req) || void 0 === n ? void 0 : n.isMobile,
            isBot: null === (t = e.ctx.req) || void 0 === t ? void 0 : t.isBot,
            envs: null === (r = e.ctx.req) || void 0 === r ? void 0 : r.envs,
          },
        };
      };
      let p = d;
    },
    29222: () => {},
    78860: (e) => {
      !(function () {
        "use strict";
        var n = {};
        (n.d = function (e, t) {
          for (var r in t)
            n.o(t, r) &&
              !n.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
          (n.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          void 0 !== n && (n.ab = "//");
        var t = {};
        n.r(t),
          n.d(t, {
            CLSThresholds: function () {
              return I;
            },
            FCPThresholds: function () {
              return S;
            },
            FIDThresholds: function () {
              return ee;
            },
            INPThresholds: function () {
              return q;
            },
            LCPThresholds: function () {
              return G;
            },
            TTFBThresholds: function () {
              return W;
            },
            onCLS: function () {
              return F;
            },
            onFCP: function () {
              return L;
            },
            onFID: function () {
              return en;
            },
            onINP: function () {
              return H;
            },
            onLCP: function () {
              return V;
            },
            onTTFB: function () {
              return z;
            },
          });
        var r,
          i,
          o,
          a,
          u,
          c = -1,
          s = function (e) {
            addEventListener(
              "pageshow",
              function (n) {
                n.persisted && ((c = n.timeStamp), e(n));
              },
              !0
            );
          },
          f = function () {
            var e =
              self.performance &&
              performance.getEntriesByType &&
              performance.getEntriesByType("navigation")[0];
            if (e && e.responseStart > 0 && e.responseStart < performance.now())
              return e;
          },
          l = function () {
            var e = f();
            return (e && e.activationStart) || 0;
          },
          d = function (e, n) {
            var t = f(),
              r = "navigate";
            return (
              c >= 0
                ? (r = "back-forward-cache")
                : t &&
                  (document.prerendering || l() > 0
                    ? (r = "prerender")
                    : document.wasDiscarded
                    ? (r = "restore")
                    : t.type && (r = t.type.replace(/_/g, "-"))),
              {
                name: e,
                value: void 0 === n ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v4-"
                  .concat(Date.now(), "-")
                  .concat(Math.floor(0x82f79cd8fff * Math.random()) + 1e12),
                navigationType: r,
              }
            );
          },
          p = function (e, n, t) {
            try {
              if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var r = new PerformanceObserver(function (e) {
                  Promise.resolve().then(function () {
                    n(e.getEntries());
                  });
                });
                return (
                  r.observe(Object.assign({ type: e, buffered: !0 }, t || {})),
                  r
                );
              }
            } catch (e) {}
          },
          v = function (e, n, t, r) {
            var i, o;
            return function (a) {
              var u;
              n.value >= 0 &&
                (a || r) &&
                ((o = n.value - (i || 0)) || void 0 === i) &&
                ((i = n.value),
                (n.delta = o),
                (n.rating =
                  (u = n.value) > t[1]
                    ? "poor"
                    : u > t[0]
                    ? "needs-improvement"
                    : "good"),
                e(n));
            };
          },
          m = function (e) {
            requestAnimationFrame(function () {
              return requestAnimationFrame(function () {
                return e();
              });
            });
          },
          h = function (e) {
            document.addEventListener("visibilitychange", function () {
              "hidden" === document.visibilityState && e();
            });
          },
          g = function (e) {
            var n = !1;
            return function () {
              n || (e(), (n = !0));
            };
          },
          T = -1,
          y = function () {
            return "hidden" !== document.visibilityState ||
              document.prerendering
              ? 1 / 0
              : 0;
          },
          b = function (e) {
            "hidden" === document.visibilityState &&
              T > -1 &&
              ((T = "visibilitychange" === e.type ? e.timeStamp : 0), E());
          },
          C = function () {
            addEventListener("visibilitychange", b, !0),
              addEventListener("prerenderingchange", b, !0);
          },
          E = function () {
            removeEventListener("visibilitychange", b, !0),
              removeEventListener("prerenderingchange", b, !0);
          },
          P = function () {
            return (
              T < 0 &&
                ((T = y()),
                C(),
                s(function () {
                  setTimeout(function () {
                    (T = y()), C();
                  }, 0);
                })),
              {
                get firstHiddenTime() {
                  return T;
                },
              }
            );
          },
          w = function (e) {
            document.prerendering
              ? addEventListener(
                  "prerenderingchange",
                  function () {
                    return e();
                  },
                  !0
                )
              : e();
          },
          S = [1800, 3e3],
          L = function (e, n) {
            (n = n || {}),
              w(function () {
                var t,
                  r = P(),
                  i = d("FCP"),
                  o = p("paint", function (e) {
                    e.forEach(function (e) {
                      "first-contentful-paint" === e.name &&
                        (o.disconnect(),
                        e.startTime < r.firstHiddenTime &&
                          ((i.value = Math.max(e.startTime - l(), 0)),
                          i.entries.push(e),
                          t(!0)));
                    });
                  });
                o &&
                  ((t = v(e, i, S, n.reportAllChanges)),
                  s(function (r) {
                    (t = v(e, (i = d("FCP")), S, n.reportAllChanges)),
                      m(function () {
                        (i.value = performance.now() - r.timeStamp), t(!0);
                      });
                  }));
              });
          },
          I = [0.1, 0.25],
          F = function (e, n) {
            (n = n || {}),
              L(
                g(function () {
                  var t,
                    r = d("CLS", 0),
                    i = 0,
                    o = [],
                    a = function (e) {
                      e.forEach(function (e) {
                        if (!e.hadRecentInput) {
                          var n = o[0],
                            t = o[o.length - 1];
                          i &&
                          e.startTime - t.startTime < 1e3 &&
                          e.startTime - n.startTime < 5e3
                            ? ((i += e.value), o.push(e))
                            : ((i = e.value), (o = [e]));
                        }
                      }),
                        i > r.value && ((r.value = i), (r.entries = o), t());
                    },
                    u = p("layout-shift", a);
                  u &&
                    ((t = v(e, r, I, n.reportAllChanges)),
                    h(function () {
                      a(u.takeRecords()), t(!0);
                    }),
                    s(function () {
                      (i = 0),
                        (t = v(e, (r = d("CLS", 0)), I, n.reportAllChanges)),
                        m(function () {
                          return t();
                        });
                    }),
                    setTimeout(t, 0));
                })
              );
          },
          k = 0,
          _ = 1 / 0,
          M = 0,
          x = function (e) {
            e.forEach(function (e) {
              e.interactionId &&
                ((_ = Math.min(_, e.interactionId)),
                (k = (M = Math.max(M, e.interactionId)) ? (M - _) / 7 + 1 : 0));
            });
          },
          A = function () {
            "interactionCount" in performance ||
              r ||
              (r = p("event", x, {
                type: "event",
                buffered: !0,
                durationThreshold: 0,
              }));
          },
          D = [],
          O = new Map(),
          j = 0,
          R = [],
          B = function (e) {
            if (
              (R.forEach(function (n) {
                return n(e);
              }),
              e.interactionId || "first-input" === e.entryType)
            ) {
              var n = D[D.length - 1],
                t = O.get(e.interactionId);
              if (t || D.length < 10 || e.duration > n.latency) {
                if (t)
                  e.duration > t.latency
                    ? ((t.entries = [e]), (t.latency = e.duration))
                    : e.duration === t.latency &&
                      e.startTime === t.entries[0].startTime &&
                      t.entries.push(e);
                else {
                  var r = {
                    id: e.interactionId,
                    latency: e.duration,
                    entries: [e],
                  };
                  O.set(r.id, r), D.push(r);
                }
                D.sort(function (e, n) {
                  return n.latency - e.latency;
                }),
                  D.length > 10 &&
                    D.splice(10).forEach(function (e) {
                      return O.delete(e.id);
                    });
              }
            }
          },
          N = function (e) {
            var n = self.requestIdleCallback || self.setTimeout,
              t = -1;
            return (
              (e = g(e)),
              "hidden" === document.visibilityState ? e() : ((t = n(e)), h(e)),
              t
            );
          },
          q = [200, 500],
          H = function (e, n) {
            "PerformanceEventTiming" in self &&
              "interactionId" in PerformanceEventTiming.prototype &&
              ((n = n || {}),
              w(function () {
                A();
                var t,
                  i,
                  o = d("INP"),
                  a = function (e) {
                    N(function () {
                      e.forEach(B);
                      var n,
                        t =
                          ((n = Math.min(
                            D.length - 1,
                            Math.floor(
                              ((r ? k : performance.interactionCount || 0) -
                                j) /
                                50
                            )
                          )),
                          D[n]);
                      t &&
                        t.latency !== o.value &&
                        ((o.value = t.latency), (o.entries = t.entries), i());
                    });
                  },
                  u = p("event", a, {
                    durationThreshold:
                      null !== (t = n.durationThreshold) && void 0 !== t
                        ? t
                        : 40,
                  });
                (i = v(e, o, q, n.reportAllChanges)),
                  u &&
                    (u.observe({ type: "first-input", buffered: !0 }),
                    h(function () {
                      a(u.takeRecords()), i(!0);
                    }),
                    s(function () {
                      (j = 0),
                        (D.length = 0),
                        O.clear(),
                        (i = v(e, (o = d("INP")), q, n.reportAllChanges));
                    }));
              }));
          },
          G = [2500, 4e3],
          U = {},
          V = function (e, n) {
            (n = n || {}),
              w(function () {
                var t,
                  r = P(),
                  i = d("LCP"),
                  o = function (e) {
                    n.reportAllChanges || (e = e.slice(-1)),
                      e.forEach(function (e) {
                        e.startTime < r.firstHiddenTime &&
                          ((i.value = Math.max(e.startTime - l(), 0)),
                          (i.entries = [e]),
                          t());
                      });
                  },
                  a = p("largest-contentful-paint", o);
                if (a) {
                  t = v(e, i, G, n.reportAllChanges);
                  var u = g(function () {
                    U[i.id] ||
                      (o(a.takeRecords()),
                      a.disconnect(),
                      (U[i.id] = !0),
                      t(!0));
                  });
                  ["keydown", "click"].forEach(function (e) {
                    addEventListener(
                      e,
                      function () {
                        return N(u);
                      },
                      !0
                    );
                  }),
                    h(u),
                    s(function (r) {
                      (t = v(e, (i = d("LCP")), G, n.reportAllChanges)),
                        m(function () {
                          (i.value = performance.now() - r.timeStamp),
                            (U[i.id] = !0),
                            t(!0);
                        });
                    });
                }
              });
          },
          W = [800, 1800],
          X = function e(n) {
            document.prerendering
              ? w(function () {
                  return e(n);
                })
              : "complete" !== document.readyState
              ? addEventListener(
                  "load",
                  function () {
                    return e(n);
                  },
                  !0
                )
              : setTimeout(n, 0);
          },
          z = function (e, n) {
            n = n || {};
            var t = d("TTFB"),
              r = v(e, t, W, n.reportAllChanges);
            X(function () {
              var i = f();
              i &&
                ((t.value = Math.max(i.responseStart - l(), 0)),
                (t.entries = [i]),
                r(!0),
                s(function () {
                  (r = v(e, (t = d("TTFB", 0)), W, n.reportAllChanges))(!0);
                }));
            });
          },
          J = { passive: !0, capture: !0 },
          K = new Date(),
          Q = function (e, n) {
            i ||
              ((i = n), (o = e), (a = new Date()), $(removeEventListener), Y());
          },
          Y = function () {
            if (o >= 0 && o < a - K) {
              var e = {
                entryType: "first-input",
                name: i.type,
                target: i.target,
                cancelable: i.cancelable,
                startTime: i.timeStamp,
                processingStart: i.timeStamp + o,
              };
              u.forEach(function (n) {
                n(e);
              }),
                (u = []);
            }
          },
          Z = function (e) {
            if (e.cancelable) {
              var n,
                t,
                r,
                i =
                  (e.timeStamp > 1e12 ? new Date() : performance.now()) -
                  e.timeStamp;
              "pointerdown" == e.type
                ? ((n = function () {
                    Q(i, e), r();
                  }),
                  (t = function () {
                    r();
                  }),
                  (r = function () {
                    removeEventListener("pointerup", n, J),
                      removeEventListener("pointercancel", t, J);
                  }),
                  addEventListener("pointerup", n, J),
                  addEventListener("pointercancel", t, J))
                : Q(i, e);
            }
          },
          $ = function (e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(
              function (n) {
                return e(n, Z, J);
              }
            );
          },
          ee = [100, 300],
          en = function (e, n) {
            (n = n || {}),
              w(function () {
                var t,
                  r = P(),
                  a = d("FID"),
                  c = function (e) {
                    e.startTime < r.firstHiddenTime &&
                      ((a.value = e.processingStart - e.startTime),
                      a.entries.push(e),
                      t(!0));
                  },
                  f = function (e) {
                    e.forEach(c);
                  },
                  l = p("first-input", f);
                (t = v(e, a, ee, n.reportAllChanges)),
                  l &&
                    (h(
                      g(function () {
                        f(l.takeRecords()), l.disconnect();
                      })
                    ),
                    s(function () {
                      (t = v(e, (a = d("FID")), ee, n.reportAllChanges)),
                        (u = []),
                        (o = -1),
                        (i = null),
                        $(addEventListener),
                        u.push(c),
                        Y();
                    }));
              });
          };
        e.exports = t;
      })();
    },
    94384: (e, n, t) => {
      e.exports = t(54381);
    },
  },
  (e) => {
    e.getEagerSharedForChunkId &&
      e.getEagerSharedForChunkId(92888, e.initConsumes),
      e.getEagerRemotesForChunkId &&
        e.getEagerRemotesForChunkId(92888, e.initRemotes);
    var n = (n) => e((e.s = n)),
      t = (t) =>
        e.own_remote
          .then(() =>
            Promise.all([
              Promise.all(e.initRemotes),
              Promise.all(e.initConsumes),
            ])
          )
          .then(() => n(t));
    e.O(0, [40179], () => (t(13863), t(18967))), (_N_E = e.O());
  },
]);
