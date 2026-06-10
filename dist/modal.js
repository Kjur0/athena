import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { forwardRef as T, useRef as w, useId as V, useState as z, useEffect as u } from "react";
import { c as L } from "./utils-BtlgVD4m.js";
import { c as i } from "./index-BKG9JlYH.js";
import { c as M } from "./createLucideIcon-D4r5Phnh.js";
const K = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], S = M("x", K), _ = i(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 transition-opacity duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100",
        closed: "opacity-0"
      }
    }
  }
), q = i(
  "relative w-[512px] max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl border border-gi-dark-ash transition-all duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100 scale-100",
        closed: "opacity-0 scale-95"
      }
    }
  }
), A = i(
  "flex items-start justify-between text-gi-primary"
), F = i("flex justify-end gap-3 mt-6"), P = T(
  ({
    title: E,
    description: f,
    children: m,
    actions: y,
    isOpen: e,
    isClosable: n = !0,
    isCloseOnOverlayClick: N = !0,
    onClose: o,
    className: j,
    dataTestId: I,
    ...v
  }, R) => {
    const h = w(null), p = w(null), x = V(), [c, b] = z(e);
    u(() => {
      e && b(!0);
    }, [e]);
    const D = (t) => {
      t.target === t.currentTarget && (e || b(!1));
    };
    return u(() => {
      if (e)
        return document.body.style.overflow = "hidden", () => {
          document.body.style.overflow = "";
        };
    }, [e]), u(() => {
      if (!e || !c) return;
      const t = h.current;
      p.current = document.activeElement;
      const s = t.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), l = s[0], g = s[s.length - 1];
      l?.focus();
      const k = (a) => {
        if (a.key === "Escape" && n) {
          o();
          return;
        }
        if (a.key === "Tab") {
          if (s.length === 0) {
            a.preventDefault(), t.focus();
            return;
          }
          a.shiftKey ? document.activeElement === l && (a.preventDefault(), g?.focus()) : document.activeElement === g && (a.preventDefault(), l?.focus());
        }
      };
      return document.addEventListener("keydown", k), () => {
        document.removeEventListener("keydown", k), p.current?.focus();
      };
    }, [e, c, n, o]), c ? /* @__PURE__ */ r(
      "div",
      {
        className: _({ state: e ? "open" : "closed" }),
        onTransitionEnd: D,
        ref: R,
        onClick: () => {
          N && n && o();
        },
        children: /* @__PURE__ */ d(
          "div",
          {
            ref: h,
            ...v,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": x,
            tabIndex: -1,
            "data-testid": I,
            className: L(
              q({ state: e ? "open" : "closed" }),
              j
            ),
            onClick: (t) => {
              t.stopPropagation(), v.onClick?.(t);
            },
            children: [
              /* @__PURE__ */ d("div", { className: A(), children: [
                /* @__PURE__ */ d("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ r("h2", { id: x, className: "font-semibold break-words", children: E }),
                  f && /* @__PURE__ */ r("p", { className: "text-[14px] mt-2 break-words text-gi-gray", children: f })
                ] }),
                n && /* @__PURE__ */ r(
                  "button",
                  {
                    type: "button",
                    onClick: o,
                    "aria-label": "Close modal",
                    className: "flex items-center cursor-pointer justify-center size-8 rounded-full shrink-0 transition hover:bg-gi-secondary/10 focus:outline-none focus:ring-2 focus:ring-gi-secondary/40 focus:ring-offset-2",
                    children: /* @__PURE__ */ r(S, { className: "size-5 fill-gi-primary" })
                  }
                )
              ] }),
              m && /* @__PURE__ */ r("div", { className: "mt-2 break-words text-gi-primary", children: m }),
              y && /* @__PURE__ */ r("div", { className: F(), children: y })
            ]
          }
        )
      }
    ) : null;
  }
);
P.displayName = "Modal";
export {
  P as Modal,
  P as default
};
