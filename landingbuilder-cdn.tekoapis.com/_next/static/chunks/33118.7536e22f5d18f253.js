"use strict";
(self.webpackChunkhost_app = self.webpackChunkhost_app || []).push([
  [33118],
  {
    33118: (e, n, t) => {
      t.r(n), t.d(n, { LoadingOverlay: () => b });
      var i = t(37465),
        r = t(81194),
        o = t.n(r),
        l = t(88494),
        c = t.n(l);
      function s(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          )
        );
      }
      function a() {
        let e = s([
          "\n  position: static;\n  display: inline-block;\n  opacity: 1;\n",
        ]);
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        let e = s([
          "\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  animation: loadingCircle 0.8s infinite linear;\n  line-height: 0;\n\n  @keyframes loadingCircle {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = s(["\n  line-height: 1;\n"]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      let d = () =>
          (0, i.jsx)(h, {
            children: (0, i.jsx)(p, {
              role: "img",
              "aria-label": "loading",
              style: { fontSize: 48 },
              children: (0, i.jsx)(m, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1024 1024",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                children: (0, i.jsx)("path", {
                  d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z",
                }),
              }),
            }),
          }),
        h = o().div(a()),
        p = o().span(f()),
        m = o().svg(u());
      function g() {
        var e, n;
        let t =
          ((e = [
            "\n  position: fixed;\n  z-index: 999999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  color: #7367f0;\n  background-color: #ffffff;\n  opacity: ",
            ";\n  display: grid;\n  place-items: center;\n  transition: opacity 0.2s ease-in-out;\n",
          ]),
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } })
          ));
        return (
          (g = function () {
            return t;
          }),
          t
        );
      }
      let b = c().memo((e) => {
          let { loading: n = !0, extendTime: t = 0 } = e,
            [r, o] = (0, l.useState)(n),
            [c, s] = (0, l.useState)(n),
            [a, f] = (0, l.useState)({}),
            u = () => {
              f({ overflow: document.body.style.overflow }),
                (document.body.style.overflow = "hidden");
            },
            h = () => {
              (document.body.style.overflow = a.overflow || ""), f({});
            };
          return ((0, l.useEffect)(() => {
            n
              ? u()
              : setTimeout(() => {
                  o(!1);
                }, t);
          }, [t, n]),
          (0, l.useEffect)(() => {
            r
              ? s(!0)
              : setTimeout(() => {
                  h(), s(!1);
                }, 200);
          }, [r]),
          c)
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(v, {
                  $loading: r,
                  children: (0, i.jsx)(d, {}),
                }),
              })
            : null;
        }),
        v = o().div(g(), (e) => {
          let { $loading: n } = e;
          return n ? 1 : 0;
        });
    },
  },
]);
