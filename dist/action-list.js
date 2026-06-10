import { jsx as s, jsxs as l } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { c as t } from "./utils-BtlgVD4m.js";
import { D as f } from "./ActionList.methods-CTAni2-B.js";
const m = o(
  ({ items: a, className: n, ...r }, i) => /* @__PURE__ */ s(
    "div",
    {
      ref: i,
      className: t("flex flex-col gap-0.5", n),
      ...r,
      children: a.map((e, c) => /* @__PURE__ */ l(
        f,
        {
          onClick: e.onClick,
          variant: e.variant,
          className: "flex items-center justify-between gap-2",
          children: [
            /* @__PURE__ */ s("span", { className: "flex-1 text-left font-normal", children: e.label }),
            e.icon && /* @__PURE__ */ s("span", { className: "flex size-4 items-center justify-center shrink-0", children: e.icon }),
            !e.icon && /* @__PURE__ */ s("div", { className: "size-4 shrink-0" })
          ]
        },
        c
      ))
    }
  )
);
m.displayName = "ActionList";
export {
  m as ActionList,
  m as default
};
