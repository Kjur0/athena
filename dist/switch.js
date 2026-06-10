import { jsxs as I, jsx as i } from "react/jsx-runtime";
import * as a from "react";
import { forwardRef as M } from "react";
import { u as H, P as x, a as j, b as z, c as A } from "./index-BjfsKMCT.js";
import { u as y } from "./index-DLcqcWxM.js";
import { u as U } from "./index-BZPx6jYI.js";
import { c as C } from "./utils-BtlgVD4m.js";
var m = "Switch", [q] = A(m), [L, O] = q(m), P = a.forwardRef(
  (t, o) => {
    const {
      __scopeSwitch: e,
      name: s,
      checked: r,
      defaultChecked: b,
      required: d,
      disabled: n,
      value: l = "on",
      onCheckedChange: w,
      form: c,
      ...v
    } = t, [u, p] = a.useState(null), S = y(o, (h) => p(h)), k = a.useRef(!1), g = u ? c || !!u.closest("form") : !0, [f, B] = H({
      prop: r,
      defaultProp: b ?? !1,
      onChange: w,
      caller: m
    });
    return /* @__PURE__ */ I(L, { scope: e, checked: f, disabled: n, children: [
      /* @__PURE__ */ i(
        x.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": f,
          "aria-required": d,
          "data-state": _(f),
          "data-disabled": n ? "" : void 0,
          disabled: n,
          value: l,
          ...v,
          ref: S,
          onClick: j(t.onClick, (h) => {
            B((T) => !T), g && (k.current = h.isPropagationStopped(), k.current || h.stopPropagation());
          })
        }
      ),
      g && /* @__PURE__ */ i(
        N,
        {
          control: u,
          bubbles: !k.current,
          name: s,
          value: l,
          checked: f,
          required: d,
          disabled: n,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
P.displayName = m;
var R = "SwitchThumb", E = a.forwardRef(
  (t, o) => {
    const { __scopeSwitch: e, ...s } = t, r = O(R, e);
    return /* @__PURE__ */ i(
      x.span,
      {
        "data-state": _(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...s,
        ref: o
      }
    );
  }
);
E.displayName = R;
var D = "SwitchBubbleInput", N = a.forwardRef(
  ({
    __scopeSwitch: t,
    control: o,
    checked: e,
    bubbles: s = !0,
    ...r
  }, b) => {
    const d = a.useRef(null), n = y(d, b), l = U(e), w = z(o);
    return a.useEffect(() => {
      const c = d.current;
      if (!c) return;
      const v = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        v,
        "checked"
      ).set;
      if (l !== e && p) {
        const S = new Event("click", { bubbles: s });
        p.call(c, e), c.dispatchEvent(S);
      }
    }, [l, e, s]), /* @__PURE__ */ i(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: e,
        ...r,
        tabIndex: -1,
        ref: n,
        style: {
          ...r.style,
          ...w,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
N.displayName = D;
function _(t) {
  return t ? "checked" : "unchecked";
}
var F = P, W = E;
const X = M(({ className: t, ...o }, e) => /* @__PURE__ */ i(
  F,
  {
    ref: e,
    "data-slot": "switch",
    className: C(
      "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gi-primary data-[state=unchecked]:bg-input",
      t
    ),
    ...o,
    children: /* @__PURE__ */ i(
      W,
      {
        "data-slot": "switch-thumb",
        className: C(
          "bg-background pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-px"
        )
      }
    )
  }
));
X.displayName = "Switch";
export {
  X as Switch,
  X as default
};
