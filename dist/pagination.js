import { jsxs as w, jsx as r } from "react/jsx-runtime";
import * as c from "react";
import { forwardRef as x, useMemo as L } from "react";
import { c as R } from "./utils-BtlgVD4m.js";
import { Button as u } from "./button.js";
const S = ({
  title: e,
  titleId: t,
  ...n
}, i) => /* @__PURE__ */ c.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: i, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ c.createElement("title", { id: t }, e) : null, /* @__PURE__ */ c.createElement("path", { d: "M4.23486 7.43507C3.92236 7.74757 3.92236 8.25507 4.23486 8.56757L9.03486 13.3676C9.34736 13.6801 9.85486 13.6801 10.1674 13.3676C10.4799 13.0551 10.4799 12.5476 10.1674 12.2351L5.93236 8.00007L10.1649 3.76507C10.4774 3.45257 10.4774 2.94507 10.1649 2.63257C9.85236 2.32007 9.34486 2.32007 9.03236 2.63257L4.23236 7.43257L4.23486 7.43507Z", fill: "currentColor" })), B = x(S), b = ({
  title: e,
  titleId: t,
  ...n
}, i) => /* @__PURE__ */ c.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: i, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ c.createElement("title", { id: t }, e) : null, /* @__PURE__ */ c.createElement("path", { d: "M11.7651 8.56493C12.0776 8.25243 12.0776 7.74493 11.7651 7.43243L6.96514 2.63243C6.65264 2.31993 6.14514 2.31993 5.83264 2.63243C5.52014 2.94493 5.52014 3.45243 5.83264 3.76493L10.0676 7.99993L5.83514 12.2349C5.52264 12.5474 5.52264 13.0549 5.83514 13.3674C6.14764 13.6799 6.65514 13.6799 6.96764 13.3674L11.7676 8.56743L11.7651 8.56493Z", fill: "currentColor" })), C = x(b), v = "...", g = (e, t) => {
  const n = t - e + 1;
  return Array.from({ length: n }, (i, o) => o + e);
}, E = (e, t, n) => {
  const o = t, a = Math.max(e - n, 1), l = Math.min(e + n, o), d = a > 2, f = l < o - 1;
  return {
    shouldShowLeftDots: d,
    shouldShowRightDots: f,
    leftSiblingIndex: a,
    rightSiblingIndex: l
  };
};
function M(e, t, n = 1) {
  if (n + 5 >= t)
    return g(1, t);
  const {
    shouldShowLeftDots: o,
    shouldShowRightDots: a,
    leftSiblingIndex: l,
    rightSiblingIndex: d
  } = E(e, t, n);
  if (!o && a) {
    const h = 3 + 2 * n;
    return [...g(1, h), v, t];
  }
  if (o && !a) {
    const h = 3 + 2 * n, m = g(
      t - h + 1,
      t
    );
    return [1, v, ...m];
  }
  const f = g(l, d);
  return [1, v, ...f, v, t];
}
const D = x(
  ({
    page: e,
    totalPages: t,
    onChange: n,
    isOnlyActions: i = !1,
    isFullWidth: o = !1,
    siblingCount: a = 1,
    dataTestId: l,
    className: d,
    ...f
  }, h) => {
    const m = L(() => M(e, t, a), [e, t, a]), p = () => {
      n(e + 1);
    }, y = () => {
      n(e - 1);
    };
    return /* @__PURE__ */ w(
      "nav",
      {
        ref: h,
        "aria-label": "Pagination",
        "data-testid": l,
        className: R(
          "flex items-center",
          o ? "w-full justify-between" : "w-auto gap-2",
          d
        ),
        ...f,
        children: [
          /* @__PURE__ */ w(
            u,
            {
              type: "outlined",
              variant: "primary",
              disabled: e === 1,
              isIconButton: i,
              onClick: y,
              "aria-label": "Previous",
              children: [
                /* @__PURE__ */ r("div", {}),
                /* @__PURE__ */ r(B, {}),
                /* @__PURE__ */ r("div", {})
              ]
            }
          ),
          !i && /* @__PURE__ */ r("ul", { className: "flex items-center gap-2 m-0 p-0 list-none", children: m.map((s, I) => typeof s == "string" ? /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(
            u,
            {
              type: "ghost",
              variant: "primary",
              className: "pointer-events-none",
              "aria-hidden": "true",
              "aria-label": "More Pages",
              isIconButton: !0,
              children: "…"
            }
          ) }, `dots-${I}`) : /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(
            u,
            {
              type: s === e ? "primary" : "ghost",
              variant: "primary",
              onClick: () => n(s),
              isIconButton: !0,
              "aria-current": s === e ? "page" : void 0,
              children: s
            }
          ) }, `page-${s}`)) }),
          /* @__PURE__ */ w(
            u,
            {
              type: "outlined",
              variant: "primary",
              disabled: e === t,
              isIconButton: i,
              "aria-label": "Next",
              onClick: p,
              children: [
                /* @__PURE__ */ r("div", {}),
                /* @__PURE__ */ r(C, {}),
                /* @__PURE__ */ r("div", {})
              ]
            }
          )
        ]
      }
    );
  }
);
D.displayName = "Pagination";
export {
  D as Pagination,
  D as default
};
