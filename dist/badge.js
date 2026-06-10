import { jsx as r, jsxs as m } from "react/jsx-runtime";
import * as o from "react";
import { forwardRef as u, useMemo as x } from "react";
import { F as h, a as N, b as w, c as R } from "./x-icon-GrsPFdqe.js";
import { c as n } from "./utils-BtlgVD4m.js";
import { c as k } from "./index-BKG9JlYH.js";
const z = ({
  title: t,
  titleId: e,
  ...i
}, s) => /* @__PURE__ */ o.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: s, "aria-labelledby": e, ...i }, t ? /* @__PURE__ */ o.createElement("title", { id: e }, t) : null, /* @__PURE__ */ o.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.7692 8C14.7692 6.20469 14.0563 4.48262 12.7869 3.21314C11.5174 1.94366 9.79531 1.23077 8 1.23077C6.20469 1.23077 4.48262 1.94366 3.21314 3.21314C1.94366 4.48262 1.23077 6.20469 1.23077 8C1.23077 8.88895 1.40581 9.76926 1.74599 10.5905C2.08618 11.4118 2.58457 12.1583 3.21314 12.7869C3.84171 13.4154 4.58819 13.9138 5.40946 14.254C6.23074 14.5942 7.11105 14.7692 8 14.7692C8.88895 14.7692 9.76926 14.5942 10.5905 14.254C11.4118 13.9138 12.1583 13.4154 12.7869 12.7869C13.4154 12.1583 13.9138 11.4118 14.254 10.5905C14.5942 9.76926 14.7692 8.88895 14.7692 8ZM9.41106 5.71875C9.65138 5.47843 10.0409 5.47843 10.2812 5.71875C10.5216 5.95907 10.5216 6.34862 10.2812 6.58894L8.87019 8L10.2812 9.41106C10.5216 9.65138 10.5216 10.0409 10.2812 10.2812C10.0409 10.5216 9.65138 10.5216 9.41106 10.2812L8 8.87019L6.58894 10.2812C6.34862 10.5216 5.95907 10.5216 5.71875 10.2812C5.47843 10.0409 5.47843 9.65138 5.71875 9.41106L7.12981 8L5.71875 6.58894C5.47843 6.34862 5.47843 5.95907 5.71875 5.71875C5.95907 5.47843 6.34862 5.47843 6.58894 5.71875L8 7.12981L9.41106 5.71875ZM16 8C16 9.05058 15.7931 10.0911 15.391 11.0617C14.989 12.0322 14.3999 12.9142 13.6571 13.6571C12.9142 14.3999 12.0322 14.989 11.0617 15.391C10.0911 15.7931 9.05058 16 8 16C6.94943 16 5.90891 15.7931 4.9383 15.391C3.96778 14.989 3.08577 14.3999 2.34295 13.6571C1.60013 12.9142 1.01101 12.0322 0.608974 11.0617C0.206937 10.0911 0 9.05058 0 8C4.89064e-08 5.87827 0.842658 3.84324 2.34295 2.34295C3.84324 0.842658 5.87827 0 8 0C10.1217 0 12.1568 0.842658 13.6571 2.34295C15.1573 3.84324 16 5.87827 16 8Z", fill: "currentColor" })), _ = u(z), F = k(
  "inline-flex items-center rounded-full font-medium shrink-0 transition-colors [&_svg]:shrink-0 [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        default: "",
        info: "",
        success: "",
        warning: "",
        error: ""
      },
      variant: {
        primary: "",
        secondary: "",
        outlined: "border",
        ghost: "bg-transparent"
      },
      size: {
        small: "py-1.5 px-1.5 text-[0.65em] gap-0.75",
        regular: "py-1.5 px-2.5 text-[0.8em] gap-1",
        big: "py-2 px-3 text-[0.9em] gap-1.25"
      }
    },
    compoundVariants: [
      {
        type: "default",
        variant: "primary",
        className: "bg-gi-primary text-white"
      },
      {
        type: "default",
        variant: "secondary",
        className: "bg-gi-ash text-gi-primary"
      },
      {
        type: "default",
        variant: "outlined",
        className: "border-gi-ash text-gi-primary bg-transparent"
      },
      {
        type: "default",
        variant: "ghost",
        className: "text-gi-primary bg-transparent"
      },
      { type: "info", variant: "primary", className: "bg-gi-blue text-white" },
      {
        type: "info",
        variant: "secondary",
        className: "bg-gi-blue/10 text-gi-blue"
      },
      {
        type: "info",
        variant: "outlined",
        className: "border-gi-blue text-gi-blue bg-transparent"
      },
      {
        type: "info",
        variant: "ghost",
        className: "text-gi-blue bg-transparent"
      },
      {
        type: "success",
        variant: "primary",
        className: "bg-gi-green text-white"
      },
      {
        type: "success",
        variant: "secondary",
        className: "bg-gi-green/10 text-gi-green"
      },
      {
        type: "success",
        variant: "outlined",
        className: "border-gi-green text-gi-green bg-transparent"
      },
      {
        type: "success",
        variant: "ghost",
        className: "text-gi-green bg-transparent"
      },
      {
        type: "warning",
        variant: "primary",
        className: "bg-gi-orange text-white"
      },
      {
        type: "warning",
        variant: "secondary",
        className: "bg-gi-orange/10 text-gi-orange"
      },
      {
        type: "warning",
        variant: "outlined",
        className: "border-gi-orange text-gi-orange bg-transparent"
      },
      {
        type: "warning",
        variant: "ghost",
        className: "text-gi-orange bg-transparent"
      },
      { type: "error", variant: "primary", className: "bg-gi-red text-white" },
      {
        type: "error",
        variant: "secondary",
        className: "bg-gi-red/10 text-gi-red"
      },
      {
        type: "error",
        variant: "outlined",
        className: "border-gi-red text-gi-red bg-transparent"
      },
      {
        type: "error",
        variant: "ghost",
        className: "text-gi-red bg-transparent"
      }
    ],
    defaultVariants: {
      type: "default",
      variant: "secondary",
      size: "regular"
    }
  }
), L = {
  info: R,
  success: w,
  warning: N,
  error: h
}, M = u(
  ({
    className: t,
    type: e = "default",
    variant: i = "secondary",
    size: s = "regular",
    children: g,
    LeftIcon: l,
    isDismissible: c = !1,
    onDismiss: f,
    dataTestId: y,
    ...b
  }, v) => {
    const p = x(() => {
      if (l) return l;
      if (e === "default") return null;
      const a = L[e];
      return a ? /* @__PURE__ */ r(a, {}) : null;
    }, [l, e]), d = {
      small: "size-3",
      regular: "size-3.5",
      big: "size-5"
    }, C = d[s] ?? d.regular;
    return /* @__PURE__ */ m(
      "span",
      {
        ref: v,
        "data-testid": y,
        className: n(
          "group relative inline-flex items-center gap-1.25",
          c && "pr-1"
        ),
        children: [
          /* @__PURE__ */ m(
            "span",
            {
              className: n(F({ type: e, variant: i, size: s, className: t })),
              ...b,
              children: [
                p && /* @__PURE__ */ r(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: n(
                      "flex items-center justify-center shrink-0",
                      "h-[0.8em] w-[0.9em] leading-none self-center",
                      "[&_svg]:size-full [&_svg]:block"
                    ),
                    children: p
                  }
                ),
                /* @__PURE__ */ r("span", { className: "leading-none", children: g })
              ]
            }
          ),
          c && /* @__PURE__ */ r(
            "button",
            {
              type: "button",
              "aria-label": `Dismiss ${g}`,
              onClick: (a) => {
                a.preventDefault(), a.stopPropagation(), f?.();
              },
              className: n(
                "flex items-center justify-center shrink-0 rounded-full text-gi-gray/80",
                "transition-all duration-300 ease hover:brightness-80",
                "will-change-transform transform-gpu cursor-pointer block size-full overflow-visible",
                C
              ),
              children: /* @__PURE__ */ r(_, { "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
M.displayName = "Badge";
export {
  M as Badge,
  M as default
};
