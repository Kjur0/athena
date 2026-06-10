import { jsx as i } from "react/jsx-runtime";
import { R as m } from "./index-BR3ZLWYo.js";
import { forwardRef as p } from "react";
import { c as s } from "./utils-BtlgVD4m.js";
const d = p(({ className: r, orientation: o = "vertical", ...a }, t) => /* @__PURE__ */ i(
  m,
  {
    "data-slot": "radio-group",
    orientation: o,
    ref: t,
    className: s(
      "grid gap-2 text-gi-primary",
      o === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-cols-1",
      r
    ),
    ...a
  }
));
d.displayName = "RadioGroup";
export {
  d as RadioGroup,
  d as default
};
