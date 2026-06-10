import { jsx as r, jsxs as g } from "react/jsx-runtime";
import { forwardRef as u, useMemo as m } from "react";
import { c as b } from "./utils-BtlgVD4m.js";
import { c as n } from "./index-BKG9JlYH.js";
import { F as x, a as v, b as w, c as s } from "./x-icon-GrsPFdqe.js";
const p = n(
  "flex items-center align-middle w-full text-xs font-bold leading-[1.2]",
  {
    variants: {
      variant: {
        default: "text-gi-dark-gray",
        info: "text-gi-blue",
        error: "text-gi-red",
        warning: "text-gi-orange",
        success: "text-gi-green"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), h = n(
  "flex items-center justify-center border rounded-full h-8 w-8 mr-2 [&_svg]:size-3 [&_svg_*]:fill-current [&_svg_*]:stroke-none  ",
  {
    variants: {
      variant: {
        default: "border-gi-dark-gray/10",
        info: "border-gi-blue/10",
        error: "border-gi-red/10",
        warning: "border-gi-orange/10",
        success: "border-gi-green/10"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), t = {
  default: s,
  info: s,
  success: w,
  warning: v,
  error: x
}, M = u(
  ({ className: o, variant: e = "default", LeftIcon: a, children: i, ...d }, f) => {
    const l = m(() => {
      const c = a || (t[e] ?? t.default);
      return /* @__PURE__ */ r(
        c,
        {
          "aria-hidden": "true",
          focusable: "false",
          className: "h-3 w-3 shrink-0 block"
        }
      );
    }, [a, e]);
    return /* @__PURE__ */ g(
      "div",
      {
        ref: f,
        ...d,
        "data-slot": "info-message",
        className: b(p({ variant: e, className: o })),
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              "aria-hidden": "true",
              className: h({ variant: e }),
              children: l
            }
          ),
          /* @__PURE__ */ r("div", { children: i })
        ]
      }
    );
  }
);
M.displayName = "InfoMessage";
export {
  M as InfoMessage,
  M as default
};
