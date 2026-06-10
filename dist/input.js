import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { forwardRef as T, useId as U, useState as S, useRef as X, useImperativeHandle as Y, useEffect as Z } from "react";
import { c as n } from "./utils-BtlgVD4m.js";
const _ = (m, u, c) => m && !u ? "some text" : c, L = T(
  ({
    className: m,
    type: u,
    label: c,
    helper: j,
    errorText: B,
    isError: l,
    isRequired: I,
    isDisabled: e,
    LeftIcon: o,
    RightIcon: d,
    prefix: f,
    suffix: g,
    dataTestId: y,
    value: r,
    onChange: O,
    onFocus: b,
    onBlur: H,
    placeholder: W,
    defaultValue: $,
    id: q,
    ...z
  }, A) => {
    const G = U(), p = q ?? G, v = `${p}-description`, [J, w] = S(!1), [K, N] = S(
      r ?? $ ?? ""
    ), x = X(null);
    Y(A, () => x.current), Z(() => {
      r !== void 0 && N(r ?? "");
    }, [r]);
    const M = (i) => {
      if (e) return;
      const F = i.target.value;
      r === void 0 && N(F), O?.(F);
    }, P = (i) => {
      w(!0), b?.(i);
    }, Q = (i) => {
      w(!1), H?.(i);
    }, R = () => {
      e || x.current?.focus();
    }, k = r !== void 0 ? r ?? "" : K, V = String(k), a = V.length > 0, h = l ? B ?? null : j ?? null, C = !J && (a || e);
    return /* @__PURE__ */ s("div", { className: "w-full space-y-1.5 text-left", "data-testid": y, children: [
      c ? /* @__PURE__ */ s(
        "label",
        {
          htmlFor: p,
          className: n(
            "text-sm font-medium block transition-all duration-300 ease",
            l ? "text-gi-red" : "text-gi-primary",
            e && "opacity-50 cursor-not-allowed"
          ),
          children: [
            c,
            I ? /* @__PURE__ */ t("span", { className: "text-gi-red ml-1", children: "*" }) : null
          ]
        }
      ) : null,
      /* @__PURE__ */ s(
        "div",
        {
          className: n(
            "flex items-center w-full min-h-10 px-3 bg-white border rounded-3xl transition-all duration-300 ease",
            !l && !e && "border-gi-primary/10 hover:border-gi-primary/33 focus-within:border-gi-primary/33 cursor-text",
            l && "border-gi-red",
            e && "border-gi-primary/10 cursor-not-allowed bg-white",
            m
          ),
          onClick: R,
          children: [
            o ? /* @__PURE__ */ t(
              "div",
              {
                className: n(
                  "shrink-0 mr-2 flex items-center",
                  e ? "opacity-30" : "text-gi-primary"
                ),
                children: o
              }
            ) : null,
            /* @__PURE__ */ s(
              "div",
              {
                className: "relative flex-1 flex items-center overflow-hidden h-full",
                "data-testid": "input-click-wrapper",
                children: [
                  C ? /* @__PURE__ */ s(
                    "div",
                    {
                      className: n(
                        "absolute inset-y-0 left-0 flex items-center pointer-events-none w-full",
                        !o && "pl-1",
                        !d && "pr-1"
                      ),
                      children: [
                        f && a ? /* @__PURE__ */ t("span", { className: "text-sm mr-0.2 text-gi-primary/50 select-none", children: f }) : null,
                        /* @__PURE__ */ t(
                          "span",
                          {
                            className: n(
                              "text-sm truncate",
                              !a && e ? "text-gi-primary/30" : "text-gi-primary"
                            ),
                            children: _(e, a, V)
                          }
                        ),
                        g && a ? /* @__PURE__ */ t("span", { className: "text-sm ml-0.2 text-gi-primary/50 select-none", children: g }) : null
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ t(
                    "input",
                    {
                      ...z,
                      id: p,
                      ref: x,
                      type: u,
                      value: k,
                      onChange: M,
                      onFocus: P,
                      onBlur: Q,
                      disabled: e,
                      placeholder: W,
                      "data-testid": y,
                      "aria-invalid": !!l,
                      "aria-describedby": h && !e ? v : void 0,
                      className: n(
                        "flex-1 bg-transparent text-sm text-gi-primary outline-none placeholder:text-gi-primary/30 py-3 w-full",
                        C && "text-transparent placeholder:text-transparent",
                        e && "cursor-not-allowed",
                        !o && "pl-1",
                        !d && "pr-1"
                      )
                    }
                  )
                ]
              }
            ),
            d ? /* @__PURE__ */ t(
              "div",
              {
                "data-testid": "right-icon-container",
                className: n(
                  "shrink-0 ml-2 flex items-center",
                  e ? "opacity-30" : "text-gi-primary"
                ),
                children: d
              }
            ) : null
          ]
        }
      ),
      h && !e ? /* @__PURE__ */ t("div", { className: "min-h-5", children: /* @__PURE__ */ t(
        "p",
        {
          id: v,
          className: n(
            "text-[14px] leading-tight transition-all duration-300 ease",
            l ? "text-gi-red" : "text-gi-primary/50"
          ),
          children: h
        }
      ) }) : null
    ] });
  }
);
L.displayName = "Input";
export {
  L as Input,
  L as default
};
