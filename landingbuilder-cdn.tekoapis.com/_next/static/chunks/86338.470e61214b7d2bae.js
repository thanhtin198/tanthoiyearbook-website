"use strict";
(self.webpackChunkhost_app = self.webpackChunkhost_app || []).push([
  [86338],
  {
    48399: (e, r, o) => {
      var t = o(88494),
        n = Symbol.for("react.element"),
        p = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        _ =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      function a(e, r, o) {
        var t,
          p = {},
          a = null,
          l = null;
        for (t in (void 0 !== o && (a = "" + o),
        void 0 !== r.key && (a = "" + r.key),
        void 0 !== r.ref && (l = r.ref),
        r))
          s.call(r, t) && !f.hasOwnProperty(t) && (p[t] = r[t]);
        if (e && e.defaultProps)
          for (t in (r = e.defaultProps)) void 0 === p[t] && (p[t] = r[t]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: l,
          props: p,
          _owner: _.current,
        };
      }
      (r.Fragment = p), (r.jsx = a), (r.jsxs = a);
    },
    86338: (e, r, o) => {
      e.exports = o(48399);
    },
  },
]);
