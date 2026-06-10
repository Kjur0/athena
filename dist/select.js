import { jsx as o, jsxs as m } from "react/jsx-runtime";
import * as f from "react";
import { forwardRef as w, useState as E, useRef as h, useCallback as p } from "react";
import { c as v } from "./utils-BtlgVD4m.js";
import { a as N, b as P, c as k } from "./ActionList.methods-CTAni2-B.js";
const M = ({
  title: l,
  titleId: a,
  ...i
}, e) => /* @__PURE__ */ f.createElement("svg", { width: 14, height: 16, viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: e, "aria-labelledby": a, ...i }, l ? /* @__PURE__ */ f.createElement("title", { id: a }, l) : null, /* @__PURE__ */ f.createElement("path", { d: "M6.46966 11.9211L0.396437 5.84786C0.103531 5.55496 0.103531 5.08008 0.396437 4.78721L1.10478 4.07886C1.39719 3.78646 1.87109 3.7859 2.16419 4.07761L7 8.89077L11.8358 4.07761C12.1289 3.7859 12.6028 3.78646 12.8952 4.07886L13.6035 4.78721C13.8964 5.08011 13.8964 5.55499 13.6035 5.84786L7.53034 11.9211C7.23744 12.214 6.76256 12.214 6.46966 11.9211Z", fill: "#004554" })), S = w(M), T = w(
  ({
    value: l,
    placeholder: a,
    size: i = "regular",
    openOn: e = "click",
    children: g,
    isDisabled: t = !1,
    dataTestId: C,
    className: x,
    trigger: b,
    ...L
  }, y) => {
    const [R, s] = E(!1), n = h(null), c = h(!1), u = p(() => {
      t || e !== "hover" || (n.current && clearTimeout(n.current), c.current || (c.current = !0, s(!0)));
    }, [t, e]), d = p(() => {
      e === "hover" && (n.current && clearTimeout(n.current), n.current = setTimeout(() => {
        c.current = !1, s(!1);
      }, 150));
    }, [e]);
    return /* @__PURE__ */ o(
      "div",
      {
        className: "relative inline-block min-w-32",
        onPointerEnter: u,
        onPointerLeave: d,
        children: /* @__PURE__ */ m(N, { open: R, onOpenChange: (r) => {
          c.current = r, s(r);
        }, modal: !1, children: [
          /* @__PURE__ */ o(P, { asChild: !0, disabled: t, children: b || /* @__PURE__ */ m(
            "div",
            {
              ref: y,
              role: "button",
              tabIndex: t ? -1 : 0,
              "data-testid": C,
              className: v(
                "flex w-full items-center justify-between gap-2 rounded-full bg-gi-ash px-3 py-2 text-gi-primary font-bold transition-all duration-300 ease",
                i === "small" ? "h-8" : "h-10",
                t ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                x
              ),
              onPointerDown: (r) => {
                (t || e === "hover") && r.preventDefault();
              },
              onClick: (r) => {
                (t || e === "hover") && r.preventDefault();
              },
              ...L,
              children: [
                /* @__PURE__ */ o("div", { className: "truncate text-left flex-1 pointer-events-none select-none", children: l || a }),
                /* @__PURE__ */ o(S, {})
              ]
            }
          ) }),
          /* @__PURE__ */ o(
            k,
            {
              onPointerEnter: u,
              onPointerLeave: d,
              sideOffset: 4,
              className: v(
                "min-w-[var(--radix-dropdown-menu-trigger-width)]",
                "before:absolute before:-top-[12px] before:left-0 before:h-[12px] before:w-full before:content-['']"
              ),
              onCloseAutoFocus: (r) => e === "hover" && r.preventDefault(),
              children: g
            }
          )
        ] })
      }
    );
  }
);
T.displayName = "Select";
export {
  T as Select,
  T as default
};
