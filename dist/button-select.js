import { jsx as i } from "react/jsx-runtime";
import { Button as u } from "./button.js";
const f = ({
  options: r,
  selectedOptionId: c,
  isFullWidth: l = !1,
  onSelectedOptionIdChange: d,
  className: n,
  ...t
}) => r.length === 0 ? null : /* @__PURE__ */ i(
  "div",
  {
    role: "radiogroup",
    "aria-label": t["aria-label"],
    className: `
        flex flex-row gap-2
        justify-center 
        ${l ? "w-full" : "w-auto"} 
        ${n || ""}
      `,
    ...t,
    children: r.map((e) => {
      const a = c === e.id;
      return /* @__PURE__ */ i(
        u,
        {
          role: "radio",
          "aria-checked": a,
          tabIndex: a ? 0 : -1,
          className: l ? "flex-1" : "w-max",
          type: a ? "primary" : "outlined",
          variant: "primary",
          onClick: () => {
            a || d(e.id);
          },
          children: e.text
        },
        e.id
      );
    })
  }
);
f.displayName = "Button Select";
export {
  f as ButtonSelect,
  f as default
};
