import { jsxs as r, jsx as n } from "react/jsx-runtime";
import { c as E } from "./index-BKG9JlYH.js";
import { c as i } from "./utils-BtlgVD4m.js";
const F = E(
  "px-3 py-2 w-[346px] h-[122px] text-gi-primary rounded-3xl border-[1px] ",
  {
    variants: {
      variant: {
        default: "border-gi-primary/10 hover:border-gi-primary/20 focus:border-gi-primary/20 focus:outline-1 duration-300 ease-in-out",
        disabled: "focus:ring-0 focus:outline-none text-gi-gray cursor-not-allowed",
        error: "border-gi-red focus:ring-0 focus:outline-none"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), k = {
  default: "text-gi-primary",
  error: "text-gi-primary",
  disabled: "text-gi-primary/50"
};
function H({
  className: g,
  isError: s,
  label: h,
  disabled: a,
  errorText: l,
  helper: y,
  isRequired: c,
  value: v,
  onChange: d,
  characterLimit: e,
  characterLimitVisibility: b,
  dataTestId: N,
  ...V
}) {
  const u = !!(s && l), w = u ? l : y, t = typeof e == "number", o = t ? e : void 0, x = v ?? "", m = t && typeof o == "number" ? x.slice(0, o) : x, C = m.length, j = u, T = !!b && t, f = a ? "disabled" : s ? "error" : "default";
  function z(B) {
    if (a)
      return;
    const p = B.target.value;
    if (t && typeof e == "number") {
      const S = p.slice(0, e);
      d(S);
      return;
    }
    d(p);
  }
  const A = i(
    "text-[14px]",
    j ? "text-gi-red" : "text-gi-primary/50"
  );
  return /* @__PURE__ */ r("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ r("p", { className: i("font-bold", k[f]), children: [
      h,
      c && /* @__PURE__ */ n("span", { className: "text-gi-red ml-1 size-4", children: "*" }),
      ""
    ] }),
    /* @__PURE__ */ n(
      "textarea",
      {
        disabled: a,
        value: m,
        required: c,
        onChange: z,
        maxLength: t ? e : void 0,
        "data-slot": "textarea",
        "data-testid": N,
        className: i(
          F({
            variant: f,
            className: g
          })
        ),
        ...V
      }
    ),
    /* @__PURE__ */ r("div", { className: "flex justify-between items-start text-[14px] mt-1 min-h-4", children: [
      /* @__PURE__ */ n("p", { className: A, children: w }),
      T ? /* @__PURE__ */ r("p", { className: "text-gi-primary/50 text-[14px]", children: [
        C,
        "/",
        o
      ] }) : null
    ] })
  ] });
}
export {
  H as TextArea,
  H as default
};
