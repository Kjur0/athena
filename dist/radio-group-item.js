import { jsx as r } from "react/jsx-runtime";
import { I as t, a as s } from "./index-BR3ZLWYo.js";
import { forwardRef as d } from "react";
import { c as i } from "./utils-BtlgVD4m.js";
import { c } from "./createLucideIcon-D4r5Phnh.js";
const l = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], n = c("circle", l), m = d(({ className: e, ...a }, o) => /* @__PURE__ */ r(
  t,
  {
    ref: o,
    "data-slot": "radio-group-item",
    className: i(
      "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r(
      s,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center",
        children: /* @__PURE__ */ r(
          n,
          {
            className: i(
              "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2",
              "fill-gi-primary text-gi-primary"
            ),
            strokeWidth: 1
          }
        )
      }
    )
  }
));
m.displayName = "RadioGroupItem";
export {
  m as RadioGroupItem,
  m as default
};
