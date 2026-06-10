import { jsxs as y, jsx as d } from "react/jsx-runtime";
import { forwardRef as I, useState as $, useRef as k, useEffect as m } from "react";
const E = (a) => a ? {
  left: a.offsetLeft,
  width: a.offsetWidth
} : { left: 0, width: 0 }, N = I(
  ({
    value: a,
    onValueChange: i,
    items: r,
    size: c = "regular",
    isFullWidth: l = !1,
    dataTestId: u,
    className: b = "",
    ...x
  }, p) => {
    const [f, h] = $({ left: 0, width: 0 }), o = k([]);
    m(() => {
      const e = r.findIndex((t) => t.value === a), n = o.current[e];
      h(E(n));
    }, [a, r, c, l]);
    const v = (e) => {
      const n = r.findIndex((w) => w.value === a);
      let t = null;
      switch (e.key) {
        case "ArrowRight":
          t = (n + 1) % r.length;
          break;
        case "ArrowLeft":
          t = (n - 1 + r.length) % r.length;
          break;
        case "Home":
          t = 0;
          break;
        case "End":
          t = r.length - 1;
          break;
        default:
          return;
      }
      e.preventDefault();
      const s = r[t];
      i(s.value), o.current[t]?.focus();
    }, g = c === "large" ? "text-lg pt-4 pb-3 px-3" : "text-base pt-3 pb-2 px-3";
    return /* @__PURE__ */ y(
      "div",
      {
        ref: p,
        role: "tablist",
        "aria-orientation": "horizontal",
        onKeyDown: v,
        "data-testid": u,
        className: `relative border-b-4 border-slate-200 ${l ? "w-full flex" : "w-max inline-flex"} ${b}`,
        ...x,
        children: [
          r.map((e, n) => {
            const t = e.value === a;
            return /* @__PURE__ */ d(
              "button",
              {
                id: `tab-${e.value}`,
                ref: (s) => {
                  o.current[n] = s;
                },
                role: "tab",
                "aria-selected": t,
                "aria-controls": `panel-${e.value}`,
                tabIndex: t ? 0 : -1,
                onClick: () => i(e.value),
                className: `
                ${g}
                ${l ? "flex-1" : ""}
                flex items-center justify-center
                text-gi-primary font-bold
                relative z-10 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-primary
              `,
                children: e.label
              },
              e.value
            );
          }),
          /* @__PURE__ */ d(
            "div",
            {
              className: "absolute bottom-[-4px] h-[4px] bg-gi-primary transition-all duration-300 ease",
              style: {
                left: `${f.left}px`,
                width: `${f.width}px`
              },
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
N.displayName = "Tabs";
export {
  N as Tabs,
  N as default
};
