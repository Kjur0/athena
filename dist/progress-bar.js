import { jsx as r } from "react/jsx-runtime";
import { forwardRef as g } from "react";
import { c as u } from "./utils-BtlgVD4m.js";
import { c as e } from "./index-BKG9JlYH.js";
const m = e(
  "w-full overflow-hidden rounded-full bg-gi-ash",
  {
    variants: {
      size: {
        small: "h-2",
        regular: "h-4"
      }
    },
    defaultVariants: {
      size: "regular"
    }
  }
), f = e(
  "h-full transition-[width] duration-300 ease rounded-full",
  {
    variants: {
      variant: {
        default: "bg-gi-primary",
        info: "bg-gi-blue",
        success: "bg-gi-green",
        warning: "bg-gi-orange",
        error: "bg-gi-red"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), c = g(
  ({ className: s, value: i, size: t, variant: l, dataTestId: o, ...n }, d) => {
    const a = Math.min(100, Math.max(0, i));
    return /* @__PURE__ */ r(
      "div",
      {
        ref: d,
        "data-slot": "progress-bar",
        "data-testid": o,
        className: u(m({ size: t, className: s })),
        role: "progressbar",
        "aria-valuenow": a,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        ...n,
        children: /* @__PURE__ */ r(
          "div",
          {
            className: f({ variant: l }),
            style: { width: `${a}%` }
          }
        )
      }
    );
  }
);
c.displayName = "ProgressBar";
export {
  c as ProgressBar,
  c as default
};
