(self.webpackChunkhost_app = self.webpackChunkhost_app || []).push([
  [95405],
  {
    44440: (e, t, n) => {
      var r = n(61597),
        o = n(57722),
        i = n(36570);
      i = "function" == typeof i.default ? i.default : i;
      var a = { lowerCaseAttributeNames: !1 };
      function s(e, t) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        return "" === e ? [] : r(i(e, (t = t || {}).htmlparser2 || a), t);
      }
      (s.domToReact = r),
        (s.htmlToDOM = i),
        (s.attributesToProps = o),
        (s.Element = n(99692).Element),
        (e.exports = s),
        (e.exports.default = s);
    },
    57722: (e, t, n) => {
      var r = n(50610),
        o = n(69578);
      function i(e) {
        return r.possibleStandardNames[e];
      }
      e.exports = function (e) {
        var t,
          n,
          a,
          s,
          l,
          c = {},
          u = (e = e || {}).type && { reset: !0, submit: !0 }[e.type];
        for (t in e) {
          if (((a = e[t]), r.isCustomAttribute(t))) {
            c[t] = a;
            continue;
          }
          if ((s = i((n = t.toLowerCase())))) {
            switch (
              ((l = r.getPropertyInfo(s)),
              ("checked" !== s && "value" !== s) || u || (s = i("default" + n)),
              (c[s] = a),
              l && l.type)
            ) {
              case r.BOOLEAN:
                c[s] = !0;
                break;
              case r.OVERLOADED_BOOLEAN:
                "" === a && (c[s] = !0);
            }
            continue;
          }
          o.PRESERVE_CUSTOM_ATTRIBUTES && (c[t] = a);
        }
        return o.setStyleProp(e.style, c), c;
      };
    },
    61597: (e, t, n) => {
      var r = n(88494),
        o = n(57722),
        i = n(69578),
        a = i.setStyleProp,
        s = i.canTextBeChildOfNode;
      e.exports = function e(t, n) {
        for (
          var l,
            c,
            u,
            d,
            p,
            f = (n = n || {}).library || r,
            h = f.cloneElement,
            g = f.createElement,
            m = f.isValidElement,
            y = [],
            x = "function" == typeof n.replace,
            v = n.trim,
            b = 0,
            k = t.length;
          b < k;
          b++
        ) {
          if (((l = t[b]), x && m((u = n.replace(l))))) {
            k > 1 && (u = h(u, { key: u.key || b })), y.push(u);
            continue;
          }
          if ("text" === l.type) {
            if (
              ((c = !l.data.trim().length) && l.parent && !s(l.parent)) ||
              (v && c)
            )
              continue;
            y.push(l.data);
            continue;
          }
          switch (
            ((d = l.attribs),
            i.PRESERVE_CUSTOM_ATTRIBUTES &&
            "tag" === l.type &&
            i.isCustomComponent(l.name, l.attribs)
              ? a(d.style, d)
              : d && (d = o(d)),
            (p = null),
            l.type)
          ) {
            case "script":
            case "style":
              l.children[0] &&
                (d.dangerouslySetInnerHTML = { __html: l.children[0].data });
              break;
            case "tag":
              "textarea" === l.name && l.children[0]
                ? (d.defaultValue = l.children[0].data)
                : l.children && l.children.length && (p = e(l.children, n));
              break;
            default:
              continue;
          }
          k > 1 && (d.key = b), y.push(g(l.name, d, p));
        }
        return 1 === y.length ? y[0] : y;
      };
    },
    69578: (e, t, n) => {
      var r = n(88494),
        o = n(37464).default,
        i = { reactCompat: !0 },
        a = r.version.split(".")[0] >= 16,
        s = new Set([
          "tr",
          "tbody",
          "thead",
          "tfoot",
          "colgroup",
          "table",
          "head",
          "html",
          "frameset",
        ]);
      e.exports = {
        PRESERVE_CUSTOM_ATTRIBUTES: a,
        invertObject: function (e, t) {
          if (!e || "object" != typeof e)
            throw TypeError("First argument must be an object");
          var n,
            r,
            o = "function" == typeof t,
            i = {},
            a = {};
          for (n in e) {
            if (((r = e[n]), o && (i = t(n, r)) && 2 === i.length)) {
              a[i[0]] = i[1];
              continue;
            }
            "string" == typeof r && (a[r] = n);
          }
          return a;
        },
        isCustomComponent: function (e, t) {
          if (-1 === e.indexOf("-")) return t && "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        },
        setStyleProp: function (e, t) {
          if (null != e)
            try {
              t.style = o(e, i);
            } catch (e) {
              t.style = {};
            }
        },
        canTextBeChildOfNode: function (e) {
          return !s.has(e.name);
        },
        elementsWithNoTextChildren: s,
      };
    },
    62510: (e, t, n) => {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(67241);
    },
    2218: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(31181);
        },
      ]);
    },
    8760: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var r = n(37465),
        o = n(88494),
        i = n(34471);
      class a extends o.Component {
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e) {
          window.track("error", {
            errorSource: "client",
            errorCode: "crashClient",
            errorMessage: null == e ? void 0 : e.toString(),
            apiCall: "unknown",
            apiPayload: "unknown",
          });
        }
        render() {
          return this.state.hasError
            ? (0, r.jsx)(i.o, {
                statusCode: 404e3,
                description: "C\xf3 lỗi xảy ra, vui l\xf2ng thử lại sau",
              })
            : this.props.children;
        }
        constructor(e) {
          super(e), (this.state = { hasError: !1 });
        }
      }
      let s = a;
    },
    34471: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => a });
      var r = n(37465),
        o = n(88494),
        i = n(11132);
      let a = (e) => {
        let {
            statusCode: t = 404,
            description: n = "This page could not be found.",
            envs: a = {},
          } = e,
          s = a.FREE_LANDING_DOMAINS,
          l = (0, i.useRouter)(),
          [c, u] = (0, o.useState)(10),
          [d, p] = (0, o.useState)(!1),
          [f, h] = (0, o.useState)(!1),
          g = "/" === l.pathname || "/" === l.asPath,
          m = f && !d && !g;
        return (
          (0, o.useEffect)(() => {
            h(!0);
          }, []),
          (0, o.useEffect)(() => {
            if (f && s) {
              let e = window.location.hostname;
              p(s.includes(e));
            }
          }, [s, f]),
          (0, o.useEffect)(() => {
            if (!m) return;
            let e = setInterval(() => {
              u((t) => (t <= 1 ? (clearInterval(e), l.push("/"), 0) : t - 1));
            }, 1e3);
            return () => clearInterval(e);
          }, [l, m]),
          (0, r.jsxs)("div", {
            style: {
              color: "#2D1B69",
              background: "#fff",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif",
              height: "100vh",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            },
            children: [
              (0, r.jsx)("div", {
                style: { fontSize: "120px", fontWeight: "bold" },
                children: t,
              }),
              (0, r.jsxs)("h2", {
                style: {
                  fontSize: "24px",
                  fontWeight: "normal",
                  margin: "0",
                  color: "#2D1B69",
                },
                children: [
                  n,
                  m && " You will be redirected to homepage in ".concat(c, "s"),
                ],
              }),
              m &&
                (0, r.jsx)("button", {
                  onClick: () => l.push("/"),
                  style: {
                    backgroundColor: "#7C3AED",
                    color: "white",
                    border: "none",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    cursor: "pointer",
                    marginTop: "20px",
                  },
                  children: "Back to Homepage",
                }),
            ],
          })
        );
      };
    },
    33373: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => r.o });
      var r = n(34471);
      n(8760);
    },
    15792: (e, t, n) => {
      "use strict";
      n.d(t, { I: () => s });
      var r = n(37465);
      n(88494);
      var o = n(8212),
        i = n.n(o),
        a = n(4831);
      let s = (e) => {
        let {
          metaTitle: t,
          metaDescription: n,
          metaImage: o,
          metaKeywords: s = [],
          faviconUrl: l,
          noIndex: c,
          headContentHtml: u,
          children: d,
          canonical: p,
        } = e;
        return (0, r.jsxs)(i(), {
          children: [
            (0, r.jsx)("title", { children: t || "Tempi Landing Page" }),
            (0, r.jsx)("link", { rel: "icon", href: l || "/favicon.png" }),
            (0, r.jsx)("link", {
              rel: "preconnect",
              href: "https://fonts.gstatic.com",
              crossOrigin: "anonymous",
            }),
            (0, r.jsx)("link", {
              rel: "preconnect",
              href: "https://fonts.googleapis.com",
              crossOrigin: "anonymous",
            }),
            (0, r.jsx)("link", {
              rel: "preconnect",
              href: "https://cdnjs.cloudflare.com",
              crossOrigin: "anonymous",
            }),
            (0, r.jsx)("link", {
              rel: "preload stylesheet",
              href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
              as: "style",
              type: "text/css",
            }),
            (0, r.jsx)("meta", { name: "google", content: "notranslate" }),
            t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("meta", { name: "title", content: t }),
                  (0, r.jsx)("meta", { property: "og:title", content: t }),
                ],
              }),
            n &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("meta", { name: "description", content: n }),
                  (0, r.jsx)("meta", {
                    property: "og:description",
                    content: n,
                  }),
                ],
              }),
            o &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("meta", { name: "image", content: o }),
                  (0, r.jsx)("meta", { property: "og:image", content: o }),
                ],
              }),
            s.length > 0 &&
              (0, r.jsx)("meta", { name: "keywords", content: s.join(", ") }),
            c && (0, r.jsx)("meta", { name: "robots", content: "noindex" }),
            p && (0, r.jsx)("link", { rel: "canonical", href: p }),
            d,
            u && (0, a.ZP)(u),
          ],
        });
      };
    },
    8834: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => D });
      var r = n(37465),
        o = n(32579),
        i = n(12588),
        a = n(88494);
      let s = () => {
        (0, a.useEffect)(() => {
          let e = () => {
            let e;
            let t = window.location.hash,
              n =
                Number(
                  new URLSearchParams(window.location.search).get(
                    "sectionMarginTop"
                  )
                ) || 0;
            if (!n) {
              var r, o, i, a;
              n =
                ((null ===
                  (o = document.querySelectorAll(
                    'header[data-selector-name="website-header"][data-sticky="true"]'
                  )[0]) || void 0 === o
                  ? void 0
                  : null === (r = o.getBoundingClientRect()) || void 0 === r
                  ? void 0
                  : r.height) || 0) +
                ((null ===
                  (a = document.querySelectorAll(
                    'div[data-selector-name="top-banner"][data-sticky="true"]'
                  )[0]) || void 0 === a
                  ? void 0
                  : null === (i = a.getBoundingClientRect()) || void 0 === i
                  ? void 0
                  : i.height) || 0);
            }
            if (t) {
              let r = () => {
                let o = document.querySelector(t);
                if (o) {
                  var i;
                  o.style.scrollMarginTop = "".concat(n, "px");
                  let e =
                      null === (i = document.getElementById("__next")) ||
                      void 0 === i
                        ? void 0
                        : i.firstElementChild,
                    t =
                      (null == e ? void 0 : e.getBoundingClientRect().top) || 0,
                    r = o.getBoundingClientRect().top,
                    a = window.scrollY + r - t - n;
                  window.scrollTo({ top: a, behavior: "smooth" });
                } else e = window.requestAnimationFrame(r);
              };
              r(),
                setTimeout(() => {
                  e && window.cancelAnimationFrame(e);
                }, 1e3);
            }
          };
          return (
            window.addEventListener("hashchange", e),
            e(),
            () => {
              window.removeEventListener("hashchange", e);
            }
          );
        }, []);
      };
      var l = n(4831),
        c = n(81194),
        u = n.n(c);
      function d(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function p() {
        let e = d([
          "\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  white-space: pre;\n  min-height: 15vh;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 28px;\n  margin-bottom: 2px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 17px -3px;\n  background-color: #ffffff;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 16px;\n  }\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        let e = d([
          "\n  color: #ec2424;\n  &:hover {\n    color: #ec2424;\n  }\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        let e = d([
          "\n  border: 0;\n  border-radius: 999px;\n  padding: 10px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  background-color: ",
          ";\n  color: rgb(255, 255, 255);\n  margin-left: 0.5em;\n  cursor: pointer;\n  height: 48px;\n\n  @media only screen and (max-width: 600px) {\n    height: 28px;\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n\n  &:hover {\n    opacity: 0.8;\n    color: rgb(255, 255, 255);\n  }\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        let e = d([
          "\n  display: flex;\n  position: sticky;\n  bottom: 0;\n  z-index: 9999;\n  justify-content: center;\n  align-items: center;\n  white-space: pre;\n  min-height: 15vh;\n  font-size: 22px;\n  line-height: 28px;\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 17px -3px;\n  background-color: #ffffff;\n  @media only screen and (max-width: 600px) {\n    font-size: 16px;\n  }\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      let m = "#7367f0",
        y = (e) => {
          let {
              children: t,
              envs: n,
              isValidLicense: o,
              actionsForToxicContent: a,
            } = e,
            { isMobile: s } = (0, i.s)(),
            l = n.TEMPI_URL,
            c = n.RENEW_GUIDE_URL,
            u = (null == a ? void 0 : a.includes("add_nofollow_to_link"))
              ? { rel: "nofollow" }
              : {},
            d = (0, r.jsx)(b, {
              href: l,
              target: "_blank",
              ...u,
              children: s ? "Bắt đầu" : "Sử dụng miễn ph\xed ngay",
            }),
            p = s
              ? (0, r.jsxs)(x, {
                  children: [
                    "X\xe2y dựng website với",
                    " ",
                    (0, r.jsxs)("strong", {
                      children: [
                        "Temp",
                        (0, r.jsx)("span", {
                          style: { color: m },
                          children: "i",
                        }),
                      ],
                    }),
                    d,
                  ],
                })
              : (0, r.jsxs)(x, {
                  children: [
                    "Trang được x\xe2y dựng tr\xean",
                    " ",
                    (0, r.jsxs)("strong", {
                      children: [
                        "Temp",
                        (0, r.jsx)("span", {
                          style: { color: m },
                          children: "i ",
                        }),
                      ],
                    }),
                    " ",
                    "- nền tảng x\xe2y dựng Website & Landing Page chuy\xean nghiệp",
                    d,
                  ],
                }),
            f = s
              ? (0, r.jsxs)(k, {
                  children: [
                    "Ph\xe1t triển bởi ",
                    (0, r.jsxs)("strong", {
                      children: [
                        "Temp",
                        (0, r.jsx)("span", {
                          style: { color: m },
                          children: "i",
                        }),
                      ],
                    }),
                    " |",
                    (0, r.jsx)(v, {
                      href: l,
                      target: "_blank",
                      ...u,
                      children: " Đăng k\xfd ",
                    }),
                    "Hoặc",
                    (0, r.jsx)(v, {
                      href: c,
                      target: "_blank",
                      ...u,
                      children: " Gia hạn ",
                    }),
                  ],
                })
              : (0, r.jsxs)(k, {
                  children: [
                    "Ph\xe1t triển bởi ",
                    (0, r.jsxs)("strong", {
                      children: [
                        "Temp",
                        (0, r.jsx)("span", {
                          style: { color: m },
                          children: "i",
                        }),
                      ],
                    }),
                    " |",
                    (0, r.jsx)(v, {
                      href: l,
                      target: "_blank",
                      ...u,
                      children: " Đăng k\xfd ",
                    }),
                    "Hoặc",
                    (0, r.jsx)(v, {
                      href: c,
                      target: "_blank",
                      ...u,
                      children: " Gia hạn ",
                    }),
                    "để nhận ngay ưu đ\xe3i l\xean đến ",
                    (0, r.jsx)(v, { target: "_blank", children: "50%" }),
                  ],
                });
          return o || !l ? t : (0, r.jsxs)(r.Fragment, { children: [p, t, f] });
        },
        x = u().div(p()),
        v = u().a(f()),
        b = u().a(h(), m),
        k = u().div(g());
      var w = n(66585),
        C = n.n(w);
      let E = (e, t) => {
        if (Object.is(e, t)) return !0;
        if ("object" != typeof e || "object" != typeof t) return !1;
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let r of n) if (!E(e[r], t[r])) return !1;
        return !0;
      };
      var T = n(44697),
        j = n(33373),
        S = n(15792),
        A = n(76727),
        O = n(8760),
        _ = n(62510);
      let P = C()(
          () =>
            n
              .e(33118)
              .then(n.bind(n, 33118))
              .then((e) => e.LoadingOverlay),
          { loadableGenerated: { webpack: () => [33118] } }
        ),
        L = C()(
          () =>
            n
              .e(86359)
              .then(n.bind(n, 86359))
              .then((e) => e.Content),
          { loadableGenerated: { webpack: () => [86359] } }
        ),
        R = "403000",
        D = (e) => {
          var t, n, c;
          let {
            page: u,
            prefixLangUrl: d,
            hostname: p,
            slug: f,
            languageCode: h,
            errorCode: g,
            fontQuery: m,
            ssrData: x,
            ...v
          } = e;
          s();
          let { isMobile: b } = (0, i.s)(),
            [k, w] = (0, a.useState)(),
            [C, D] = (0, a.useState)(!0),
            [I, M] = (0, a.useState)(),
            [N, F] = (0, a.useState)(u),
            z = b ? "mobile" : "desktop";
          (0, a.useEffect)(() => {
            V.REVALIDATE_PAGE_FLAG &&
              (async () => {
                o.builder.init(p, { env: V.ENV }), D(!0);
                try {
                  let {
                    pbConfig: e,
                    fonts: t,
                    ...n
                  } = await o.builder.getPublicPageV2({
                    slug: f,
                    device: z,
                    languageCode: h,
                    password: k,
                  });
                  E(n, N) || F(n);
                } catch (e) {
                  M(e);
                }
                D(!1);
              })();
          }, [k, z, p]);
          let V = (null == v ? void 0 : v.envs) || {},
            B = (V.REVALIDATE_PAGE_FLAG && V.SHOW_LOADING_FLAG) || !1,
            q = V.EXTEND_LOADING_TIME || 0,
            H = (null == N ? void 0 : N.extraInfo) || {};
          if (void 0 !== _) {
            let e =
              null == _
                ? void 0
                : null === (c = _.memoryUsage) || void 0 === c
                ? void 0
                : c.call(_);
            if (e) {
              let t = e.heapUsed / 1024 / 1024;
              t > 500 &&
                console.log(
                  p,
                  f,
                  "The script uses approximately ".concat(
                    Math.round(100 * t) / 100,
                    " MB"
                  )
                );
            }
          }
          let G = (0, a.useMemo)(
            () =>
              (0, r.jsxs)(O.Z, {
                children: [
                  (0, r.jsxs)(S.I, {
                    ...H,
                    metaTitle: H.metaTitle || (null == N ? void 0 : N.name),
                    canonical: null == N ? void 0 : N.canonical,
                    children: [
                      (0, r.jsx)("link", {
                        rel: "preload stylesheet",
                        href:
                          null !== m
                            ? m
                            : "https://fonts.googleapis.com/css2?".concat(
                                o.fontQueryParams,
                                "&display=swap"
                              ),
                        as: "style",
                        type: "text/css",
                      }),
                      (0, r.jsx)("link", {
                        rel: "preload stylesheet",
                        href: "https://storage.googleapis.com/teko-landing-builder-cdn/tempi-editor-v2/font-static-file/tempi-font-face.css",
                        as: "style",
                        type: "text/css",
                      }),
                      (0, r.jsx)("link", {
                        rel: "preconnect",
                        href: o.publicBffUrl[V.ENV],
                        crossOrigin: "anonymous",
                      }),
                    ],
                  }),
                  (0, r.jsx)(A.D, {
                    tekoTrackingAppId: b
                      ? H.tekoTrackingWebMobile
                      : H.tekoTrackingWebDesktop,
                    configs: { env: V.ENV },
                    facebookPixelId: H.facebookPixelId,
                    googleAdsId: H.googleAdsId,
                    googleAnalyticsId: H.googleAnalyticsId,
                    googleTagManagerId: H.googleTagManagerId,
                    tiktokPixelId: H.tiktokPixelId,
                  }),
                  (0, r.jsx)(L, {
                    prefixLangUrl: d,
                    page: N,
                    envs: V,
                    fontQuery: m,
                    ssrData: x,
                  }),
                  H.bodyContentHtml && (0, l.ZP)(H.bodyContentHtml),
                ],
              }),
            [N]
          );
          return (null == I
            ? void 0
            : null === (t = I.response) || void 0 === t
            ? void 0
            : t.code) == 404001
            ? (0, r.jsx)(j.o, {
                statusCode: 404,
                description: "This page could not be found.",
                envs: V,
              })
            : (g !== R &&
                (null == I
                  ? void 0
                  : null === (n = I.response) || void 0 === n
                  ? void 0
                  : n.code) !== R) ||
              N
            ? (0, r.jsx)(y, {
                envs: V,
                isValidLicense: null == N ? void 0 : N.isValidLicense,
                actionsForToxicContent:
                  null == N ? void 0 : N.actionsForToxicContent,
                children: (0, r.jsxs)(r.Fragment, {
                  children: [
                    B && (0, r.jsx)(P, { loading: C, extendTime: q }),
                    G,
                  ],
                }),
              })
            : (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)(T.J, {
                  password: k,
                  langCode: h,
                  setPassword: w,
                  isLoading: C,
                }),
              });
        };
    },
    44697: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => E });
      var r = n(37465),
        o = n(81194),
        i = n.n(o),
        a = n(88494);
      let s = () =>
          (0, r.jsxs)("svg", {
            width: "13",
            height: "12",
            viewBox: "0 0 13 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("path", {
                d: "M12.3817 5.64778C11.901 4.63524 11.3291 3.80946 10.6658 3.17044L9.97021 3.86606C10.5375 4.40815 11.0316 5.11731 11.4588 6.00052C10.3213 8.35481 8.70666 9.47317 6.50002 9.47317C5.83766 9.47317 5.22758 9.37118 4.66976 9.1672L3.91603 9.92093C4.69077 10.2787 5.5521 10.4575 6.50002 10.4575C9.12775 10.4575 11.0883 9.08899 12.3817 6.35188C12.4337 6.2418 12.4606 6.12157 12.4606 5.99983C12.4606 5.87809 12.4337 5.75786 12.3817 5.64778ZM11.5125 1.26403L10.9297 0.680516C10.9195 0.670346 10.9075 0.662279 10.8942 0.656775C10.8809 0.651271 10.8667 0.648438 10.8523 0.648438C10.8379 0.648438 10.8237 0.651271 10.8104 0.656775C10.7972 0.662279 10.7851 0.670346 10.7749 0.680516L9.27965 2.17513C8.45523 1.75403 7.52869 1.54348 6.50002 1.54348C3.87228 1.54348 1.91174 2.91204 0.618377 5.64915C0.566391 5.75923 0.539429 5.87946 0.539429 6.0012C0.539429 6.12294 0.566391 6.24317 0.618377 6.35325C1.13508 7.44153 1.75715 8.31384 2.48459 8.97018L1.03783 10.4165C1.01733 10.437 1.00582 10.4649 1.00582 10.4938C1.00582 10.5228 1.01733 10.5507 1.03783 10.5712L1.62148 11.1548C1.64199 11.1753 1.6698 11.1868 1.6988 11.1868C1.72779 11.1868 1.7556 11.1753 1.77611 11.1548L11.5125 1.4188C11.5227 1.40864 11.5308 1.39658 11.5363 1.3833C11.5418 1.37002 11.5446 1.35579 11.5446 1.34141C11.5446 1.32704 11.5418 1.31281 11.5363 1.29953C11.5308 1.28625 11.5227 1.27419 11.5125 1.26403ZM1.54123 6.00052C2.6801 3.64622 4.29474 2.52786 6.50002 2.52786C7.24568 2.52786 7.92367 2.65583 8.53877 2.916L7.57764 3.87714C7.12245 3.63427 6.60127 3.54414 6.09096 3.62003C5.58066 3.69592 5.10825 3.93382 4.74344 4.29863C4.37863 4.66344 4.14074 5.13584 4.06485 5.64615C3.98895 6.15645 4.07909 6.67764 4.32195 7.13282L3.18144 8.27333C2.55021 7.7162 2.00607 6.96137 1.54123 6.00052ZM4.91408 6.00052C4.91432 5.75943 4.97142 5.5218 5.08075 5.30694C5.19009 5.09207 5.34856 4.90602 5.5433 4.76391C5.73805 4.62179 5.96357 4.52762 6.20154 4.48904C6.43952 4.45046 6.68324 4.46856 6.91291 4.54186L4.98668 6.46809C4.9384 6.31694 4.91391 6.1592 4.91408 6.00052Z",
                fill: "black",
                fillOpacity: "0.45",
              }),
              (0, r.jsx)("path", {
                d: "M6.44545 7.53165C6.39815 7.53165 6.35153 7.52946 6.30532 7.52522L5.58317 8.24737C6.01751 8.41371 6.49074 8.45067 6.94564 8.35379C7.40054 8.25691 7.81764 8.03034 8.14652 7.70146C8.4754 7.37259 8.70197 6.95549 8.79885 6.50059C8.89572 6.04568 8.85876 5.57246 8.69242 5.13812L7.97027 5.86026C7.97451 5.90647 7.9767 5.9531 7.9767 6.0004C7.97681 6.20152 7.93727 6.40068 7.86036 6.58651C7.78345 6.77234 7.67066 6.94118 7.52845 7.0834C7.38624 7.22561 7.21739 7.33839 7.03156 7.41531C6.84574 7.49222 6.64657 7.53175 6.44545 7.53165Z",
                fill: "black",
                fillOpacity: "0.45",
              }),
            ],
          }),
        l = () =>
          (0, r.jsx)("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M6.92473 5.99916L11.6122 0.411663C11.6908 0.318806 11.6247 0.177734 11.5033 0.177734H10.0783C9.99437 0.177734 9.91401 0.215234 9.85865 0.27952L5.99258 4.88845L2.12651 0.27952C2.07294 0.215234 1.99258 0.177734 1.90687 0.177734H0.481867C0.360439 0.177734 0.294367 0.318806 0.372939 0.411663L5.06044 5.99916L0.372939 11.5867C0.355338 11.6074 0.344047 11.6327 0.340404 11.6596C0.336762 11.6865 0.340922 11.7139 0.352391 11.7386C0.36386 11.7632 0.382156 11.784 0.405107 11.7985C0.428057 11.8131 0.454698 11.8207 0.481867 11.8206H1.90687C1.9908 11.8206 2.07115 11.7831 2.12651 11.7188L5.99258 7.10988L9.85865 11.7188C9.91222 11.7831 9.99258 11.8206 10.0783 11.8206H11.5033C11.6247 11.8206 11.6908 11.6795 11.6122 11.5867L6.92473 5.99916Z",
              fill: "black",
              fillOpacity: "0.45",
            }),
          });
      function c() {
        var e, t;
        let n =
          ((e = ["\n  padding: 16px;\n"]),
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          ));
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      let u = () =>
          (0, r.jsx)(d, {
            children: (0, r.jsx)("svg", {
              width: "22",
              height: "29",
              viewBox: "0 0 22 29",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)("path", {
                d: "M2.99998 28.333C2.26665 28.333 1.63909 28.0721 1.11731 27.5503C0.595535 27.0286 0.334202 26.4006 0.333313 25.6663V12.333C0.333313 11.5997 0.594646 10.9721 1.11731 10.4503C1.63998 9.92857 2.26754 9.66723 2.99998 9.66634H4.33331V6.99968C4.33331 5.15523 4.98354 3.58323 6.28398 2.28368C7.58442 0.98412 9.15642 0.333898 11 0.333009C12.8435 0.33212 14.416 0.982342 15.7173 2.28368C17.0186 3.58501 17.6684 5.15701 17.6666 6.99968V9.66634H19C19.7333 9.66634 20.3613 9.92768 20.884 10.4503C21.4066 10.973 21.6675 11.6006 21.6666 12.333V25.6663C21.6666 26.3997 21.4058 27.0277 20.884 27.5503C20.3622 28.073 19.7342 28.3339 19 28.333H2.99998ZM11 21.6663C11.7333 21.6663 12.3613 21.4055 12.884 20.8837C13.4066 20.3619 13.6675 19.7339 13.6666 18.9997C13.6658 18.2655 13.4049 17.6379 12.884 17.117C12.3631 16.5961 11.7351 16.3348 11 16.333C10.2649 16.3312 9.63731 16.5926 9.11731 17.117C8.59731 17.6415 8.33598 18.269 8.33331 18.9997C8.33065 19.7303 8.59198 20.3583 9.11731 20.8837C9.64265 21.409 10.2702 21.6699 11 21.6663ZM6.99998 9.66634H15V6.99968C15 5.88856 14.6111 4.94412 13.8333 4.16634C13.0555 3.38856 12.1111 2.99968 11 2.99968C9.88887 2.99968 8.94442 3.38856 8.16665 4.16634C7.38887 4.94412 6.99998 5.88856 6.99998 6.99968V9.66634Z",
                fill: "black",
              }),
            }),
          }),
        d = i().div(c());
      function p(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      function f() {
        let e = p([
          "\n  color: #000;\n  background: #f1f1f1;\n  height: 100vh;\n  text-align: center;\n  display: grid;\n  place-items: center;\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function h() {
        let e = p([
          "\n  font-size: 28px;\n  font-weight: 500;\n  line-height: 36px;\n  text-align: center;\n  padding: 0 16px 20px 16px;\n",
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        let e = p([
          "\n  display: flex;\n  justify-content: flex-end;\n  margin-left: auto;\n",
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        let e = p([
          "\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 468px;\n  height: 260px;\n  padding: 16px;\n  border-radius: 16px;\n  background: #ffffff;\n  box-shadow: 0px 9px 28px 8px #0000000d, 0px 6px 16px 0px #00000014,\n    0px 3px 6px -4px #0000001f;\n\n  @media only screen and (max-width: 600px) {\n    width: 300 px;\n    height: 244 px;\n  }\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        let e = p([
          "\n  position: relative;\n  width: 259px;\n  transform: translateX(-20px);\n",
        ]);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        let e = p([
          "\n  width: 259px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  padding-right: 30px;\n\n  ",
          "\n",
        ]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        let e = p([
          "\n  position: absolute;\n  top: 50%;\n  right: -35px;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 18px;\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        let e = p([
          "\n  margin: 8px 0 0 0;\n  color: red;\n  font-size: 14px;\n  display: ",
          ";\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        let e = p([
          "\n  width: 110px;\n  height: 32px;\n  padding: 4px 24px 4px 24px;\n  gap: 8px;\n  margin-top: 14px;\n\n  background: #7367f0;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #a195fc;\n  }\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      let w = {
          VALIDATE_CORRECT_PASSWORD_ERROR: "Vui l\xf2ng nhập đ\xfang mật khẩu",
          VALIDATE_EMPTY_PASSWORD_ERROR: "Vui l\xf2ng nhập mật khẩu",
          PROTECTED_PAGE: "Trang n\xe0y đang được bảo vệ",
          ACCESS_PAGE: "V\xe0o trang",
          PASSWORD_PLACEHOLDER: "Vui l\xf2ng nhập mật khẩu để tiếp tục",
        },
        C = {
          VALIDATE_CORRECT_PASSWORD_ERROR: "Please enter the correct password",
          VALIDATE_EMPTY_PASSWORD_ERROR: "Please enter password",
          PROTECTED_PAGE: "Protected page",
          ACCESS_PAGE: "View page",
          PASSWORD_PLACEHOLDER: "Please enter password to continue",
        },
        E = (e) => {
          let { langCode: t, setPassword: n, password: o, isLoading: i } = e,
            [c, d] = (0, a.useState)(o || ""),
            [p, f] = (0, a.useState)(!1),
            [h, g] = (0, a.useState)(""),
            m = "vi" === t || !t,
            y = m ? w : C;
          (0, a.useEffect)(() => {
            o && g(y.VALIDATE_CORRECT_PASSWORD_ERROR);
          }, [o, m]);
          let x = (e) => {
            if ((e.preventDefault(), c)) f(!1), null == n || n(c);
            else {
              g(y.VALIDATE_EMPTY_PASSWORD_ERROR);
              return;
            }
          };
          return (0, r.jsx)(T, {
            children: (0, r.jsxs)(A, {
              children: [
                (0, r.jsx)(S, {
                  children: (0, r.jsx)("div", {
                    style: { cursor: "pointer" },
                    onClick: () => window.history.go(-1),
                    children: (0, r.jsx)(l, {}),
                  }),
                }),
                (0, r.jsx)(u, {}),
                (0, r.jsx)(j, { children: y.PROTECTED_PAGE }),
                (0, r.jsxs)("form", {
                  children: [
                    (0, r.jsxs)(O, {
                      children: [
                        (0, r.jsx)(_, {
                          type: p ? "text" : "password",
                          id: "password",
                          value: c,
                          onChange: (e) => d(e.target.value),
                          hasError: !!h && !i,
                          placeholder: y.PASSWORD_PLACEHOLDER,
                        }),
                        (0, r.jsx)(P, {
                          type: "button",
                          onClick: () => {
                            f(!p);
                          },
                          children: (0, r.jsx)(s, {}),
                        }),
                      ],
                    }),
                    (0, r.jsx)(L, { showError: !!h && !i, children: h }),
                    (0, r.jsx)(R, {
                      type: "submit",
                      onClick: (e) => x(e),
                      children: y.ACCESS_PAGE,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        T = i().div(f()),
        j = i().div(h()),
        S = i().div(g()),
        A = i().div(m()),
        O = i().div(y()),
        _ = i().input(x(), (e) => e.hasError && "\n    border-color: red;\n  "),
        P = i().button(v()),
        L = i().p(b(), (e) => (e.showError ? "block" : "none")),
        R = i().button(k());
    },
    76727: (e, t, n) => {
      "use strict";
      n.d(t, { D: () => a });
      var r = n(37465),
        o = n(14172),
        i = n.n(o);
      let a = (e) => {
        let {
            facebookPixelId: t,
            googleAnalyticsId: n,
            googleTagManagerId: o,
            googleAdsId: a,
            tiktokPixelId: s,
            tekoTrackingAppId: l,
          } = e,
          c =
            "window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  "
              .concat(n ? "gtag('config', '".concat(n, "');") : "", "\n  ")
              .concat(a ? "gtag('config', '".concat(a, "');") : ""),
          u =
            "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n  })(window,document,'script','dataLayer','".concat(
              o,
              "');"
            ),
          d =
            "!function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window, document,'script',\n  'https://connect.facebook.net/en_US/fbevents.js');\n  fbq('init', '".concat(
              t,
              "');\n  fbq('track', 'PageView');\n  fbq('track', 'ViewContent');"
            ),
          p =
            '!function(t,e,r,n,s,a,o,c){t[s]||(t.GlobalTrackerNamespace=t.GlobalTrackerNamespace||[],\n    t.GlobalTrackerNamespace.push(s),\n    t.GlobalTrackerNamespace.push("https://tracking.tekoapis.com"),\n    t[s]=function(){(t[s].q=t[s].q||[]).push(arguments)},t[s].q=t[s].q||[],(o=e.createElement(r)).async=!0,o.src=n,\n    (c=e.getElementsByTagName(r)[0]).parentNode.insertBefore(o,c),window.onerror=function(e,r,a,o,c)\n  {if(r===n)return t[s]("exception",{msg:e,error:c}),!1})}\n  (window,document,"script","https://cdn.tekoapis.com/tracker/dist/v2/tracker.full.min.js","track");\n  track("init", "'.concat(
              l,
              '");\n  track("enablePageView");track(\'enableTrackVisibleContentImpressions\', true);'
            ),
          f =
            '!function (w, d, t) {\n    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};\n    ttq.load(\''.concat(
              s,
              "');\n    ttq.page();\n  }(window, document, 'ttq');"
            );
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (n || a || o) &&
              (0, r.jsx)("link", {
                rel: "preconnect",
                href: "https://www.googletagmanager.com",
                crossOrigin: "anonymous",
              }),
            n &&
              (0, r.jsx)(i(), {
                defer: !0,
                strategy: "lazyOnload",
                id: "google-tracking",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(n),
              }),
            (n || a) &&
              (0, r.jsx)(i(), {
                defer: !0,
                strategy: "lazyOnload",
                id: "google-analytics",
                dangerouslySetInnerHTML: { __html: c },
              }),
            o &&
              (0, r.jsx)(i(), {
                defer: !0,
                strategy: "lazyOnload",
                id: "google-tag-manager",
                dangerouslySetInnerHTML: { __html: u },
              }),
            t &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("link", {
                    rel: "preconnect",
                    href: "https://connect.facebook.net",
                    crossOrigin: "anonymous",
                  }),
                  (0, r.jsx)(i(), {
                    defer: !0,
                    strategy: "lazyOnload",
                    id: "facebook-pixel",
                    dangerouslySetInnerHTML: { __html: d },
                  }),
                  (0, r.jsx)("noscript", {
                    children: (0, r.jsx)("img", {
                      alt: "",
                      height: "1",
                      width: "1",
                      style: { display: "none" },
                      src: "https://www.facebook.com/tr?id=".concat(
                        t,
                        "&ev=PageView&noscript=1"
                      ),
                    }),
                  }),
                ],
              }),
            l &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("link", {
                    rel: "preconnect",
                    href: "https://cdn.tekoapis.com",
                    crossOrigin: "anonymous",
                  }),
                  (0, r.jsx)("link", {
                    rel: "preconnect",
                    href: "https://footprint-ingestor.tekoapis.com",
                    crossOrigin: "anonymous",
                  }),
                  (0, r.jsx)("link", {
                    rel: "preconnect",
                    href: "https://tracking.tekoapis.com",
                    crossOrigin: "anonymous",
                  }),
                  (0, r.jsx)(i(), {
                    defer: !0,
                    strategy: "lazyOnload",
                    id: "teko-tracking",
                    dangerouslySetInnerHTML: { __html: p },
                  }),
                ],
              }),
            s &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("link", {
                    rel: "preconnect",
                    href: "https://analytics.tiktok.com",
                    crossOrigin: "anonymous",
                  }),
                  (0, r.jsx)(i(), {
                    defer: !0,
                    strategy: "lazyOnload",
                    id: "tiktok-pixel",
                    dangerouslySetInnerHTML: { __html: f },
                  }),
                ],
              }),
          ],
        });
      };
    },
    31181: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { __N_SSP: () => i, default: () => a });
      var r = n(37465);
      n(88494);
      var o = n(8834),
        i = !0;
      let a = (e) => (0, r.jsx)(o.V, { ...e });
    },
    67241: (e) => {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (n) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (e) {
                  n = a;
                }
              })();
              var l = [],
                c = !1,
                u = -1;
              function d() {
                c &&
                  r &&
                  ((c = !1),
                  r.length ? (l = r.concat(l)) : (u = -1),
                  l.length && p());
              }
              function p() {
                if (!c) {
                  var e = s(d);
                  c = !0;
                  for (var t = l.length; t; ) {
                    for (r = l, l = []; ++u < t; ) r && r[u].run();
                    (u = -1), (t = l.length);
                  }
                  (r = null),
                    (c = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (t) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function h() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                l.push(new f(e, t)), 1 !== l.length || c || s(p);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = h),
                (o.addListener = h),
                (o.once = h),
                (o.off = h),
                (o.removeListener = h),
                (o.removeAllListeners = h),
                (o.emit = h),
                (o.prependListener = h),
                (o.prependOnceListener = h),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    88993: (e, t) => {
      "use strict";
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Doctype =
          t.CDATA =
          t.Tag =
          t.Style =
          t.Script =
          t.Comment =
          t.Directive =
          t.Text =
          t.Root =
          t.isTag =
          t.ElementType =
            void 0),
        (function (e) {
          (e.Root = "root"),
            (e.Text = "text"),
            (e.Directive = "directive"),
            (e.Comment = "comment"),
            (e.Script = "script"),
            (e.Style = "style"),
            (e.Tag = "tag"),
            (e.CDATA = "cdata"),
            (e.Doctype = "doctype");
        })((n = t.ElementType || (t.ElementType = {}))),
        (t.isTag = function (e) {
          return e.type === n.Tag || e.type === n.Script || e.type === n.Style;
        }),
        (t.Root = n.Root),
        (t.Text = n.Text),
        (t.Directive = n.Directive),
        (t.Comment = n.Comment),
        (t.Script = n.Script),
        (t.Style = n.Style),
        (t.Tag = n.Tag),
        (t.CDATA = n.CDATA),
        (t.Doctype = n.Doctype);
    },
    99692: function (e, t, n) {
      "use strict";
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }).apply(this, arguments);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cloneNode =
          t.hasChildren =
          t.isDocument =
          t.isDirective =
          t.isComment =
          t.isText =
          t.isCDATA =
          t.isTag =
          t.Element =
          t.Document =
          t.NodeWithChildren =
          t.ProcessingInstruction =
          t.Comment =
          t.Text =
          t.DataNode =
          t.Node =
            void 0);
      var a = n(88993),
        s = new Map([
          [a.ElementType.Tag, 1],
          [a.ElementType.Script, 1],
          [a.ElementType.Style, 1],
          [a.ElementType.Directive, 1],
          [a.ElementType.Text, 3],
          [a.ElementType.CDATA, 4],
          [a.ElementType.Comment, 8],
          [a.ElementType.Root, 9],
        ]),
        l = (function () {
          function e(e) {
            (this.type = e),
              (this.parent = null),
              (this.prev = null),
              (this.next = null),
              (this.startIndex = null),
              (this.endIndex = null);
          }
          return (
            Object.defineProperty(e.prototype, "nodeType", {
              get: function () {
                var e;
                return null !== (e = s.get(this.type)) && void 0 !== e ? e : 1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "parentNode", {
              get: function () {
                return this.parent;
              },
              set: function (e) {
                this.parent = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "previousSibling", {
              get: function () {
                return this.prev;
              },
              set: function (e) {
                this.prev = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "nextSibling", {
              get: function () {
                return this.next;
              },
              set: function (e) {
                this.next = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.cloneNode = function (e) {
              return void 0 === e && (e = !1), w(this, e);
            }),
            e
          );
        })();
      t.Node = l;
      var c = (function (e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.data = n), r;
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "nodeValue", {
            get: function () {
              return this.data;
            },
            set: function (e) {
              this.data = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(l);
      t.DataNode = c;
      var u = (function (e) {
        function t(t) {
          return e.call(this, a.ElementType.Text, t) || this;
        }
        return o(t, e), t;
      })(c);
      t.Text = u;
      var d = (function (e) {
        function t(t) {
          return e.call(this, a.ElementType.Comment, t) || this;
        }
        return o(t, e), t;
      })(c);
      t.Comment = d;
      var p = (function (e) {
        function t(t, n) {
          var r = e.call(this, a.ElementType.Directive, n) || this;
          return (r.name = t), r;
        }
        return o(t, e), t;
      })(c);
      t.ProcessingInstruction = p;
      var f = (function (e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (r.children = n), r;
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "firstChild", {
            get: function () {
              var e;
              return null !== (e = this.children[0]) && void 0 !== e ? e : null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "lastChild", {
            get: function () {
              return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "childNodes", {
            get: function () {
              return this.children;
            },
            set: function (e) {
              this.children = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(l);
      t.NodeWithChildren = f;
      var h = (function (e) {
        function t(t) {
          return e.call(this, a.ElementType.Root, t) || this;
        }
        return o(t, e), t;
      })(f);
      t.Document = h;
      var g = (function (e) {
        function t(t, n, r, o) {
          void 0 === r && (r = []),
            void 0 === o &&
              (o =
                "script" === t
                  ? a.ElementType.Script
                  : "style" === t
                  ? a.ElementType.Style
                  : a.ElementType.Tag);
          var i = e.call(this, o, r) || this;
          return (i.name = t), (i.attribs = n), i;
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "tagName", {
            get: function () {
              return this.name;
            },
            set: function (e) {
              this.name = e;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "attributes", {
            get: function () {
              var e = this;
              return Object.keys(this.attribs).map(function (t) {
                var n, r;
                return {
                  name: t,
                  value: e.attribs[t],
                  namespace:
                    null === (n = e["x-attribsNamespace"]) || void 0 === n
                      ? void 0
                      : n[t],
                  prefix:
                    null === (r = e["x-attribsPrefix"]) || void 0 === r
                      ? void 0
                      : r[t],
                };
              });
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(f);
      function m(e) {
        return (0, a.isTag)(e);
      }
      function y(e) {
        return e.type === a.ElementType.CDATA;
      }
      function x(e) {
        return e.type === a.ElementType.Text;
      }
      function v(e) {
        return e.type === a.ElementType.Comment;
      }
      function b(e) {
        return e.type === a.ElementType.Directive;
      }
      function k(e) {
        return e.type === a.ElementType.Root;
      }
      function w(e, t) {
        if ((void 0 === t && (t = !1), x(e))) n = new u(e.data);
        else if (v(e)) n = new d(e.data);
        else if (m(e)) {
          var n,
            r = t ? C(e.children) : [],
            o = new g(e.name, i({}, e.attribs), r);
          r.forEach(function (e) {
            return (e.parent = o);
          }),
            null != e.namespace && (o.namespace = e.namespace),
            e["x-attribsNamespace"] &&
              (o["x-attribsNamespace"] = i({}, e["x-attribsNamespace"])),
            e["x-attribsPrefix"] &&
              (o["x-attribsPrefix"] = i({}, e["x-attribsPrefix"])),
            (n = o);
        } else if (y(e)) {
          var r = t ? C(e.children) : [],
            s = new f(a.ElementType.CDATA, r);
          r.forEach(function (e) {
            return (e.parent = s);
          }),
            (n = s);
        } else if (k(e)) {
          var r = t ? C(e.children) : [],
            l = new h(r);
          r.forEach(function (e) {
            return (e.parent = l);
          }),
            e["x-mode"] && (l["x-mode"] = e["x-mode"]),
            (n = l);
        } else if (b(e)) {
          var c = new p(e.name, e.data);
          null != e["x-name"] &&
            ((c["x-name"] = e["x-name"]),
            (c["x-publicId"] = e["x-publicId"]),
            (c["x-systemId"] = e["x-systemId"])),
            (n = c);
        } else throw Error("Not implemented yet: ".concat(e.type));
        return (
          (n.startIndex = e.startIndex),
          (n.endIndex = e.endIndex),
          null != e.sourceCodeLocation &&
            (n.sourceCodeLocation = e.sourceCodeLocation),
          n
        );
      }
      function C(e) {
        for (
          var t = e.map(function (e) {
              return w(e, !0);
            }),
            n = 1;
          n < t.length;
          n++
        )
          (t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
        return t;
      }
      (t.Element = g),
        (t.isTag = m),
        (t.isCDATA = y),
        (t.isText = x),
        (t.isComment = v),
        (t.isDirective = b),
        (t.isDocument = k),
        (t.hasChildren = function (e) {
          return Object.prototype.hasOwnProperty.call(e, "children");
        }),
        (t.cloneNode = w);
    },
    54702: (e) => {
      e.exports = {
        CASE_SENSITIVE_TAG_NAMES: [
          "animateMotion",
          "animateTransform",
          "clipPath",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussainBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "foreignObject",
          "linearGradient",
          "radialGradient",
          "textPath",
        ],
      };
    },
    21465: (e, t, n) => {
      var r,
        o = "html",
        i = "head",
        a = "body",
        s = /<([a-zA-Z]+[0-9]?)/,
        l = /<head.*>/i,
        c = /<body.*>/i,
        u = function () {
          throw Error(
            "This browser does not support `document.implementation.createHTMLDocument`"
          );
        },
        d = function () {
          throw Error(
            "This browser does not support `DOMParser.prototype.parseFromString`"
          );
        };
      if ("function" == typeof window.DOMParser) {
        var p = new window.DOMParser();
        u = d = function (e, t) {
          return (
            t && (e = "<" + t + ">" + e + "</" + t + ">"),
            p.parseFromString(e, "text/html")
          );
        };
      }
      if (document.implementation) {
        var f = n(19626).isIE,
          h = document.implementation.createHTMLDocument(
            f() ? "html-dom-parser" : void 0
          );
        u = function (e, t) {
          return (
            t
              ? (h.documentElement.getElementsByTagName(t)[0].innerHTML = e)
              : (h.documentElement.innerHTML = e),
            h
          );
        };
      }
      var g = document.createElement("template");
      g.content &&
        (r = function (e) {
          return (g.innerHTML = e), g.content.childNodes;
        }),
        (e.exports = function (e) {
          var t,
            n,
            p,
            f,
            h = e.match(s);
          switch ((h && h[1] && (t = h[1].toLowerCase()), t)) {
            case o:
              return (
                (n = d(e)),
                !l.test(e) &&
                  (p = n.getElementsByTagName(i)[0]) &&
                  p.parentNode.removeChild(p),
                !c.test(e) &&
                  (p = n.getElementsByTagName(a)[0]) &&
                  p.parentNode.removeChild(p),
                n.getElementsByTagName(o)
              );
            case i:
            case a:
              if (((f = u(e).getElementsByTagName(t)), c.test(e) && l.test(e)))
                return f[0].parentNode.childNodes;
              return f;
            default:
              if (r) return r(e);
              return u(e, a).getElementsByTagName(a)[0].childNodes;
          }
        });
    },
    36570: (e, t, n) => {
      var r = n(21465),
        o = n(19626).formatDOM,
        i = /<(![a-zA-Z\s]+)>/;
      e.exports = function (e) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if ("" === e) return [];
        var t,
          n = e.match(i);
        return n && n[1] && (t = n[1]), o(r(e), null, t);
      };
    },
    19626: (e, t, n) => {
      for (
        var r,
          o = n(54702),
          i = n(99692),
          a = o.CASE_SENSITIVE_TAG_NAMES,
          s = i.Comment,
          l = i.Element,
          c = i.ProcessingInstruction,
          u = i.Text,
          d = {},
          p = 0,
          f = a.length;
        p < f;
        p++
      )
        d[(r = a[p]).toLowerCase()] = r;
      function h(e) {
        for (var t, n = {}, r = 0, o = e.length; r < o; r++)
          n[(t = e[r]).name] = t.value;
        return n;
      }
      e.exports = {
        formatAttributes: h,
        formatDOM: function e(t, n, r) {
          n = n || null;
          for (var o = [], i = 0, a = t.length; i < a; i++) {
            var p,
              f,
              g = t[i];
            switch (g.nodeType) {
              case 1:
                (f = new l(
                  d[(p = (p = g.nodeName).toLowerCase())] || p,
                  h(g.attributes)
                )).children = e(g.childNodes, f);
                break;
              case 3:
                f = new u(g.nodeValue);
                break;
              case 8:
                f = new s(g.nodeValue);
                break;
              default:
                continue;
            }
            var m = o[i - 1] || null;
            m && (m.next = f),
              (f.parent = n),
              (f.prev = m),
              (f.next = null),
              o.push(f);
          }
          return (
            r &&
              (((f = new c(
                r.substring(0, r.indexOf(" ")).toLowerCase(),
                r
              )).next = o[0] || null),
              (f.parent = n),
              o.unshift(f),
              o[1] && (o[1].prev = o[0])),
            o
          );
        },
        isIE: function () {
          return /(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent);
        },
      };
    },
    77798: (e) => {
      var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        n = /\n/g,
        r = /^\s*/,
        o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        i = /^:\s*/,
        a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        s = /^[;\s]*/,
        l = /^\s+|\s+$/g;
      function c(e) {
        return e ? e.replace(l, "") : "";
      }
      e.exports = function (e, l) {
        if ("string" != typeof e)
          throw TypeError("First argument must be a string");
        if (!e) return [];
        l = l || {};
        var u = 1,
          d = 1;
        function p(e) {
          var t = e.match(n);
          t && (u += t.length);
          var r = e.lastIndexOf("\n");
          d = ~r ? e.length - r : d + e.length;
        }
        function f() {
          var e = { line: u, column: d };
          return function (t) {
            return (t.position = new h(e)), y(r), t;
          };
        }
        function h(e) {
          (this.start = e),
            (this.end = { line: u, column: d }),
            (this.source = l.source);
        }
        h.prototype.content = e;
        var g = [];
        function m(t) {
          var n = Error(l.source + ":" + u + ":" + d + ": " + t);
          if (
            ((n.reason = t),
            (n.filename = l.source),
            (n.line = u),
            (n.column = d),
            (n.source = e),
            l.silent)
          )
            g.push(n);
          else throw n;
        }
        function y(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return p(r), (e = e.slice(r.length)), n;
          }
        }
        function x(e) {
          var t;
          for (e = e || []; (t = v()); ) !1 !== t && e.push(t);
          return e;
        }
        function v() {
          var t = f();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              "" != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), "" === e.charAt(n - 1)))
              return m("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (d += 2),
              p(r),
              (e = e.slice(n)),
              (d += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        return (
          y(r),
          (function () {
            var e,
              n = [];
            for (
              x(n);
              (e = (function () {
                var e = f(),
                  n = y(o);
                if (n) {
                  if ((v(), !y(i))) return m("property missing ':'");
                  var r = y(a),
                    l = e({
                      type: "declaration",
                      property: c(n[0].replace(t, "")),
                      value: r ? c(r[0].replace(t, "")) : "",
                    });
                  return y(s), l;
                }
              })());

            )
              !1 !== e && (n.push(e), x(n));
            return n;
          })()
        );
      };
    },
    50610: (e, t, n) => {
      "use strict";
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function o(e, t, n, r, o, i, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = o),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = a);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {};
      [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ].forEach(function (e) {
        i[e] = new o(e, 0, !1, e, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t =
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n,
                  r,
                  o =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                if (null != o) {
                  var i = [],
                    a = !0,
                    s = !1;
                  try {
                    for (
                      o = o.call(e);
                      !(a = (n = o.next()).done) &&
                      (i.push(n.value), 2 !== i.length);
                      a = !0
                    );
                  } catch (e) {
                    (s = !0), (r = e);
                  } finally {
                    try {
                      a || null == o.return || o.return();
                    } finally {
                      if (s) throw r;
                    }
                  }
                  return i;
                }
              })(e, 2) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return r(e, 2);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === n &&
                      e.constructor &&
                      (n = e.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(e);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return r(e, 2);
                }
              })(e, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            n = t[0],
            a = t[1];
          i[n] = new o(n, 1, !1, a, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            i[e] = new o(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          i[e] = new o(e, 2, !1, e, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (e) {
          i[e] = new o(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          i[e] = new o(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          i[e] = new o(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          i[e] = new o(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          i[e] = new o(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var a = /[\-\:]([a-z])/g,
        s = function (e) {
          return e[1].toUpperCase();
        };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (e) {
        var t = e.replace(a, s);
        i[t] = new o(t, 1, !1, e, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach(function (e) {
          var t = e.replace(a, s);
          i[t] = new o(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(a, s);
          i[t] = new o(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          i[e] = new o(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (i.xlinkHref = new o(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          i[e] = new o(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var l = n(89032),
        c = l.CAMELCASE,
        u = l.SAME,
        d = l.possibleStandardNames,
        p = RegExp.prototype.test.bind(
          RegExp(
            "^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          )
        ),
        f = Object.keys(d).reduce(function (e, t) {
          var n = d[t];
          return (
            n === u
              ? (e[t] = t)
              : n === c
              ? (e[t.toLowerCase()] = t)
              : (e[t] = n),
            e
          );
        }, {});
      (t.BOOLEAN = 3),
        (t.BOOLEANISH_STRING = 2),
        (t.NUMERIC = 5),
        (t.OVERLOADED_BOOLEAN = 4),
        (t.POSITIVE_NUMERIC = 6),
        (t.RESERVED = 0),
        (t.STRING = 1),
        (t.getPropertyInfo = function (e) {
          return i.hasOwnProperty(e) ? i[e] : null;
        }),
        (t.isCustomAttribute = p),
        (t.possibleStandardNames = f);
    },
    89032: (e, t) => {
      (t.SAME = 0),
        (t.CAMELCASE = 1),
        (t.possibleStandardNames = {
          accept: 0,
          acceptCharset: 1,
          "accept-charset": "acceptCharset",
          accessKey: 1,
          action: 0,
          allowFullScreen: 1,
          alt: 0,
          as: 0,
          async: 0,
          autoCapitalize: 1,
          autoComplete: 1,
          autoCorrect: 1,
          autoFocus: 1,
          autoPlay: 1,
          autoSave: 1,
          capture: 0,
          cellPadding: 1,
          cellSpacing: 1,
          challenge: 0,
          charSet: 1,
          checked: 0,
          children: 0,
          cite: 0,
          class: "className",
          classID: 1,
          className: 1,
          cols: 0,
          colSpan: 1,
          content: 0,
          contentEditable: 1,
          contextMenu: 1,
          controls: 0,
          controlsList: 1,
          coords: 0,
          crossOrigin: 1,
          dangerouslySetInnerHTML: 1,
          data: 0,
          dateTime: 1,
          default: 0,
          defaultChecked: 1,
          defaultValue: 1,
          defer: 0,
          dir: 0,
          disabled: 0,
          disablePictureInPicture: 1,
          disableRemotePlayback: 1,
          download: 0,
          draggable: 0,
          encType: 1,
          enterKeyHint: 1,
          for: "htmlFor",
          form: 0,
          formMethod: 1,
          formAction: 1,
          formEncType: 1,
          formNoValidate: 1,
          formTarget: 1,
          frameBorder: 1,
          headers: 0,
          height: 0,
          hidden: 0,
          high: 0,
          href: 0,
          hrefLang: 1,
          htmlFor: 1,
          httpEquiv: 1,
          "http-equiv": "httpEquiv",
          icon: 0,
          id: 0,
          innerHTML: 1,
          inputMode: 1,
          integrity: 0,
          is: 0,
          itemID: 1,
          itemProp: 1,
          itemRef: 1,
          itemScope: 1,
          itemType: 1,
          keyParams: 1,
          keyType: 1,
          kind: 0,
          label: 0,
          lang: 0,
          list: 0,
          loop: 0,
          low: 0,
          manifest: 0,
          marginWidth: 1,
          marginHeight: 1,
          max: 0,
          maxLength: 1,
          media: 0,
          mediaGroup: 1,
          method: 0,
          min: 0,
          minLength: 1,
          multiple: 0,
          muted: 0,
          name: 0,
          noModule: 1,
          nonce: 0,
          noValidate: 1,
          open: 0,
          optimum: 0,
          pattern: 0,
          placeholder: 0,
          playsInline: 1,
          poster: 0,
          preload: 0,
          profile: 0,
          radioGroup: 1,
          readOnly: 1,
          referrerPolicy: 1,
          rel: 0,
          required: 0,
          reversed: 0,
          role: 0,
          rows: 0,
          rowSpan: 1,
          sandbox: 0,
          scope: 0,
          scoped: 0,
          scrolling: 0,
          seamless: 0,
          selected: 0,
          shape: 0,
          size: 0,
          sizes: 0,
          span: 0,
          spellCheck: 1,
          src: 0,
          srcDoc: 1,
          srcLang: 1,
          srcSet: 1,
          start: 0,
          step: 0,
          style: 0,
          summary: 0,
          tabIndex: 1,
          target: 0,
          title: 0,
          type: 0,
          useMap: 1,
          value: 0,
          width: 0,
          wmode: 0,
          wrap: 0,
          about: 0,
          accentHeight: 1,
          "accent-height": "accentHeight",
          accumulate: 0,
          additive: 0,
          alignmentBaseline: 1,
          "alignment-baseline": "alignmentBaseline",
          allowReorder: 1,
          alphabetic: 0,
          amplitude: 0,
          arabicForm: 1,
          "arabic-form": "arabicForm",
          ascent: 0,
          attributeName: 1,
          attributeType: 1,
          autoReverse: 1,
          azimuth: 0,
          baseFrequency: 1,
          baselineShift: 1,
          "baseline-shift": "baselineShift",
          baseProfile: 1,
          bbox: 0,
          begin: 0,
          bias: 0,
          by: 0,
          calcMode: 1,
          capHeight: 1,
          "cap-height": "capHeight",
          clip: 0,
          clipPath: 1,
          "clip-path": "clipPath",
          clipPathUnits: 1,
          clipRule: 1,
          "clip-rule": "clipRule",
          color: 0,
          colorInterpolation: 1,
          "color-interpolation": "colorInterpolation",
          colorInterpolationFilters: 1,
          "color-interpolation-filters": "colorInterpolationFilters",
          colorProfile: 1,
          "color-profile": "colorProfile",
          colorRendering: 1,
          "color-rendering": "colorRendering",
          contentScriptType: 1,
          contentStyleType: 1,
          cursor: 0,
          cx: 0,
          cy: 0,
          d: 0,
          datatype: 0,
          decelerate: 0,
          descent: 0,
          diffuseConstant: 1,
          direction: 0,
          display: 0,
          divisor: 0,
          dominantBaseline: 1,
          "dominant-baseline": "dominantBaseline",
          dur: 0,
          dx: 0,
          dy: 0,
          edgeMode: 1,
          elevation: 0,
          enableBackground: 1,
          "enable-background": "enableBackground",
          end: 0,
          exponent: 0,
          externalResourcesRequired: 1,
          fill: 0,
          fillOpacity: 1,
          "fill-opacity": "fillOpacity",
          fillRule: 1,
          "fill-rule": "fillRule",
          filter: 0,
          filterRes: 1,
          filterUnits: 1,
          floodOpacity: 1,
          "flood-opacity": "floodOpacity",
          floodColor: 1,
          "flood-color": "floodColor",
          focusable: 0,
          fontFamily: 1,
          "font-family": "fontFamily",
          fontSize: 1,
          "font-size": "fontSize",
          fontSizeAdjust: 1,
          "font-size-adjust": "fontSizeAdjust",
          fontStretch: 1,
          "font-stretch": "fontStretch",
          fontStyle: 1,
          "font-style": "fontStyle",
          fontVariant: 1,
          "font-variant": "fontVariant",
          fontWeight: 1,
          "font-weight": "fontWeight",
          format: 0,
          from: 0,
          fx: 0,
          fy: 0,
          g1: 0,
          g2: 0,
          glyphName: 1,
          "glyph-name": "glyphName",
          glyphOrientationHorizontal: 1,
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphOrientationVertical: 1,
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphRef: 1,
          gradientTransform: 1,
          gradientUnits: 1,
          hanging: 0,
          horizAdvX: 1,
          "horiz-adv-x": "horizAdvX",
          horizOriginX: 1,
          "horiz-origin-x": "horizOriginX",
          ideographic: 0,
          imageRendering: 1,
          "image-rendering": "imageRendering",
          in2: 0,
          in: 0,
          inlist: 0,
          intercept: 0,
          k1: 0,
          k2: 0,
          k3: 0,
          k4: 0,
          k: 0,
          kernelMatrix: 1,
          kernelUnitLength: 1,
          kerning: 0,
          keyPoints: 1,
          keySplines: 1,
          keyTimes: 1,
          lengthAdjust: 1,
          letterSpacing: 1,
          "letter-spacing": "letterSpacing",
          lightingColor: 1,
          "lighting-color": "lightingColor",
          limitingConeAngle: 1,
          local: 0,
          markerEnd: 1,
          "marker-end": "markerEnd",
          markerHeight: 1,
          markerMid: 1,
          "marker-mid": "markerMid",
          markerStart: 1,
          "marker-start": "markerStart",
          markerUnits: 1,
          markerWidth: 1,
          mask: 0,
          maskContentUnits: 1,
          maskUnits: 1,
          mathematical: 0,
          mode: 0,
          numOctaves: 1,
          offset: 0,
          opacity: 0,
          operator: 0,
          order: 0,
          orient: 0,
          orientation: 0,
          origin: 0,
          overflow: 0,
          overlinePosition: 1,
          "overline-position": "overlinePosition",
          overlineThickness: 1,
          "overline-thickness": "overlineThickness",
          paintOrder: 1,
          "paint-order": "paintOrder",
          panose1: 0,
          "panose-1": "panose1",
          pathLength: 1,
          patternContentUnits: 1,
          patternTransform: 1,
          patternUnits: 1,
          pointerEvents: 1,
          "pointer-events": "pointerEvents",
          points: 0,
          pointsAtX: 1,
          pointsAtY: 1,
          pointsAtZ: 1,
          prefix: 0,
          preserveAlpha: 1,
          preserveAspectRatio: 1,
          primitiveUnits: 1,
          property: 0,
          r: 0,
          radius: 0,
          refX: 1,
          refY: 1,
          renderingIntent: 1,
          "rendering-intent": "renderingIntent",
          repeatCount: 1,
          repeatDur: 1,
          requiredExtensions: 1,
          requiredFeatures: 1,
          resource: 0,
          restart: 0,
          result: 0,
          results: 0,
          rotate: 0,
          rx: 0,
          ry: 0,
          scale: 0,
          security: 0,
          seed: 0,
          shapeRendering: 1,
          "shape-rendering": "shapeRendering",
          slope: 0,
          spacing: 0,
          specularConstant: 1,
          specularExponent: 1,
          speed: 0,
          spreadMethod: 1,
          startOffset: 1,
          stdDeviation: 1,
          stemh: 0,
          stemv: 0,
          stitchTiles: 1,
          stopColor: 1,
          "stop-color": "stopColor",
          stopOpacity: 1,
          "stop-opacity": "stopOpacity",
          strikethroughPosition: 1,
          "strikethrough-position": "strikethroughPosition",
          strikethroughThickness: 1,
          "strikethrough-thickness": "strikethroughThickness",
          string: 0,
          stroke: 0,
          strokeDasharray: 1,
          "stroke-dasharray": "strokeDasharray",
          strokeDashoffset: 1,
          "stroke-dashoffset": "strokeDashoffset",
          strokeLinecap: 1,
          "stroke-linecap": "strokeLinecap",
          strokeLinejoin: 1,
          "stroke-linejoin": "strokeLinejoin",
          strokeMiterlimit: 1,
          "stroke-miterlimit": "strokeMiterlimit",
          strokeWidth: 1,
          "stroke-width": "strokeWidth",
          strokeOpacity: 1,
          "stroke-opacity": "strokeOpacity",
          suppressContentEditableWarning: 1,
          suppressHydrationWarning: 1,
          surfaceScale: 1,
          systemLanguage: 1,
          tableValues: 1,
          targetX: 1,
          targetY: 1,
          textAnchor: 1,
          "text-anchor": "textAnchor",
          textDecoration: 1,
          "text-decoration": "textDecoration",
          textLength: 1,
          textRendering: 1,
          "text-rendering": "textRendering",
          to: 0,
          transform: 0,
          typeof: 0,
          u1: 0,
          u2: 0,
          underlinePosition: 1,
          "underline-position": "underlinePosition",
          underlineThickness: 1,
          "underline-thickness": "underlineThickness",
          unicode: 0,
          unicodeBidi: 1,
          "unicode-bidi": "unicodeBidi",
          unicodeRange: 1,
          "unicode-range": "unicodeRange",
          unitsPerEm: 1,
          "units-per-em": "unitsPerEm",
          unselectable: 0,
          vAlphabetic: 1,
          "v-alphabetic": "vAlphabetic",
          values: 0,
          vectorEffect: 1,
          "vector-effect": "vectorEffect",
          version: 0,
          vertAdvY: 1,
          "vert-adv-y": "vertAdvY",
          vertOriginX: 1,
          "vert-origin-x": "vertOriginX",
          vertOriginY: 1,
          "vert-origin-y": "vertOriginY",
          vHanging: 1,
          "v-hanging": "vHanging",
          vIdeographic: 1,
          "v-ideographic": "vIdeographic",
          viewBox: 1,
          viewTarget: 1,
          visibility: 0,
          vMathematical: 1,
          "v-mathematical": "vMathematical",
          vocab: 0,
          widths: 0,
          wordSpacing: 1,
          "word-spacing": "wordSpacing",
          writingMode: 1,
          "writing-mode": "writingMode",
          x1: 0,
          x2: 0,
          x: 0,
          xChannelSelector: 1,
          xHeight: 1,
          "x-height": "xHeight",
          xlinkActuate: 1,
          "xlink:actuate": "xlinkActuate",
          xlinkArcrole: 1,
          "xlink:arcrole": "xlinkArcrole",
          xlinkHref: 1,
          "xlink:href": "xlinkHref",
          xlinkRole: 1,
          "xlink:role": "xlinkRole",
          xlinkShow: 1,
          "xlink:show": "xlinkShow",
          xlinkTitle: 1,
          "xlink:title": "xlinkTitle",
          xlinkType: 1,
          "xlink:type": "xlinkType",
          xmlBase: 1,
          "xml:base": "xmlBase",
          xmlLang: 1,
          "xml:lang": "xmlLang",
          xmlns: 0,
          "xml:space": "xmlSpace",
          xmlnsXlink: 1,
          "xmlns:xlink": "xmlnsXlink",
          xmlSpace: 1,
          y1: 0,
          y2: 0,
          y: 0,
          yChannelSelector: 1,
          z: 0,
          zoomAndPan: 1,
        });
    },
    37464: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      t.__esModule = !0;
      var o = r(n(10069)),
        i = n(20394);
      t.default = function (e, t) {
        var n = {};
        return (
          e &&
            "string" == typeof e &&
            o.default(e, function (e, r) {
              e && r && (n[i.camelCase(e, t)] = r);
            }),
          n
        );
      };
    },
    20394: (e, t) => {
      "use strict";
      (t.__esModule = !0), (t.camelCase = void 0);
      var n = /^--[a-zA-Z0-9-]+$/,
        r = /-([a-z])/g,
        o = /^[^-]+$/,
        i = /^-(webkit|moz|ms|o|khtml)-/,
        a = function (e, t) {
          return t.toUpperCase();
        },
        s = function (e, t) {
          return t + "-";
        };
      t.camelCase = function (e, t) {
        var l;
        return (void 0 === t && (t = {}), !(l = e) || o.test(l) || n.test(l))
          ? e
          : ((e = e.toLowerCase()),
            t.reactCompat || (e = e.replace(i, s)),
            e.replace(r, a));
      };
    },
    10069: (e, t, n) => {
      var r = n(77798);
      e.exports = function (e, t) {
        var n,
          o,
          i,
          a = null;
        if (!e || "string" != typeof e) return a;
        for (
          var s = r(e), l = "function" == typeof t, c = 0, u = s.length;
          c < u;
          c++
        )
          (o = (n = s[c]).property),
            (i = n.value),
            l ? t(o, i, n) : i && (a || (a = {}), (a[o] = i));
        return a;
      };
    },
    4831: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => o });
      var r = n(44440);
      r.domToReact, r.htmlToDOM, r.attributesToProps, r.Element;
      let o = r;
    },
  },
  (e) => {
    e.getEagerSharedForChunkId &&
      e.getEagerSharedForChunkId(95405, e.initConsumes),
      e.getEagerRemotesForChunkId &&
        e.getEagerRemotesForChunkId(95405, e.initRemotes);
    var t = (t) => e((e.s = t)),
      n = (n) =>
        e.own_remote
          .then(() =>
            Promise.all([
              Promise.all(e.initRemotes),
              Promise.all(e.initConsumes),
            ])
          )
          .then(() => t(n));
    e.O(0, [92888, 40179], () => n(2218)), (_N_E = e.O());
  },
]);
