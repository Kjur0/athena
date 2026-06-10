import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as g, useId as m } from "react";
import { c as p } from "./utils-BtlgVD4m.js";
const h = g(
  ({
    title: l,
    actions: r,
    actionsPosition: t = "right",
    children: i,
    className: o,
    dataTestId: s,
    ...c
  }, f) => {
    const d = `section_title_${m()}`, n = r && t === "right", x = r && t === "bottom";
    return /* @__PURE__ */ a(
      "section",
      {
        ref: f,
        "data-testid": s,
        "aria-labelledby": d,
        className: p(
          "w-full flex flex-col border border-gi-ash rounded-[48px]",
          o
        ),
        ...c,
        children: [
          /* @__PURE__ */ a("header", { className: "flex flex-col w-full p-6 gap-4", children: [
            /* @__PURE__ */ a("div", { className: "flex flex-row items-center justify-between w-full", children: [
              /* @__PURE__ */ e(
                "h2",
                {
                  id: d,
                  className: "text-gi-light-primary font-extrabold text-[24px]/[120%]",
                  children: l
                }
              ),
              n && /* @__PURE__ */ e(
                "div",
                {
                  role: "group",
                  "aria-label": `Actions for ${l}`,
                  className: "flex flex-row items-center gap-3",
                  children: r
                }
              )
            ] }),
            x && /* @__PURE__ */ e(
              "div",
              {
                role: "group",
                "aria-label": `Actions for ${l}`,
                className: "flex flex-row items-center gap-3",
                children: r
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: "flex flex-col w-full border-gi-ash rounded-[48px] bg-gi-ash p-6 gap-4", children: /* @__PURE__ */ e("div", { className: "text-gi-light-primary bg-background rounded-[32px] border py-4.5 px-6 border-gi-dark-ash", children: i }) })
        ]
      }
    );
  }
);
h.displayName = "Section";
export {
  h as Section,
  h as default
};
