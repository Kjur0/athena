import * as n from "react";
import { u as B, P as C, c as _, a as I, b as q } from "./index-BjfsKMCT.js";
import { u as P } from "./index-DLcqcWxM.js";
import { u as K, R as T, c as w, I as U } from "./index-DcQzjOqd.js";
import { u as V } from "./index-BZPx6jYI.js";
import { P as j } from "./index-Bxhh615u.js";
import { jsx as u, jsxs as z } from "react/jsx-runtime";
var E = "Radio", [H, k] = _(E), [W, X] = H(E), g = n.forwardRef(
  (t, d) => {
    const {
      __scopeRadio: o,
      name: s,
      checked: e = !1,
      required: r,
      disabled: a,
      value: l = "on",
      onCheck: f,
      form: R,
      ...v
    } = t, [p, m] = n.useState(null), i = P(d, (y) => m(y)), c = n.useRef(!1), h = p ? R || !!p.closest("form") : !0;
    return /* @__PURE__ */ z(W, { scope: o, checked: e, disabled: a, children: [
      /* @__PURE__ */ u(
        C.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": e,
          "data-state": N(e),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: l,
          ...v,
          ref: i,
          onClick: I(t.onClick, (y) => {
            e || f?.(), h && (c.current = y.isPropagationStopped(), c.current || y.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ u(
        A,
        {
          control: p,
          bubbles: !c.current,
          name: s,
          value: l,
          checked: e,
          required: r,
          disabled: a,
          form: R,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
g.displayName = E;
var G = "RadioIndicator", S = n.forwardRef(
  (t, d) => {
    const { __scopeRadio: o, forceMount: s, ...e } = t, r = X(G, o);
    return /* @__PURE__ */ u(j, { present: s || r.checked, children: /* @__PURE__ */ u(
      C.span,
      {
        "data-state": N(r.checked),
        "data-disabled": r.disabled ? "" : void 0,
        ...e,
        ref: d
      }
    ) });
  }
);
S.displayName = G;
var Y = "RadioBubbleInput", A = n.forwardRef(
  ({
    __scopeRadio: t,
    control: d,
    checked: o,
    bubbles: s = !0,
    ...e
  }, r) => {
    const a = n.useRef(null), l = P(a, r), f = V(o), R = q(d);
    return n.useEffect(() => {
      const v = a.current;
      if (!v) return;
      const p = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (f !== o && i) {
        const c = new Event("click", { bubbles: s });
        i.call(v, o), v.dispatchEvent(c);
      }
    }, [f, o, s]), /* @__PURE__ */ u(
      C.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: o,
        ...e,
        tabIndex: -1,
        ref: l,
        style: {
          ...e.style,
          ...R,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
A.displayName = Y;
function N(t) {
  return t ? "checked" : "unchecked";
}
var J = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], b = "RadioGroup", [Q] = _(b, [
  w,
  k
]), x = w(), D = k(), [Z, $] = Q(b), M = n.forwardRef(
  (t, d) => {
    const {
      __scopeRadioGroup: o,
      name: s,
      defaultValue: e,
      value: r,
      required: a = !1,
      disabled: l = !1,
      orientation: f,
      dir: R,
      loop: v = !0,
      onValueChange: p,
      ...m
    } = t, i = x(o), c = K(R), [h, y] = B({
      prop: r,
      defaultProp: e ?? null,
      onChange: p,
      caller: b
    });
    return /* @__PURE__ */ u(
      Z,
      {
        scope: o,
        name: s,
        required: a,
        disabled: l,
        value: h,
        onValueChange: y,
        children: /* @__PURE__ */ u(
          T,
          {
            asChild: !0,
            ...i,
            orientation: f,
            dir: c,
            loop: v,
            children: /* @__PURE__ */ u(
              C.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": f,
                "data-disabled": l ? "" : void 0,
                dir: c,
                ...m,
                ref: d
              }
            )
          }
        )
      }
    );
  }
);
M.displayName = b;
var O = "RadioGroupItem", F = n.forwardRef(
  (t, d) => {
    const { __scopeRadioGroup: o, disabled: s, ...e } = t, r = $(O, o), a = r.disabled || s, l = x(o), f = D(o), R = n.useRef(null), v = P(d, R), p = r.value === e.value, m = n.useRef(!1);
    return n.useEffect(() => {
      const i = (h) => {
        J.includes(h.key) && (m.current = !0);
      }, c = () => m.current = !1;
      return document.addEventListener("keydown", i), document.addEventListener("keyup", c), () => {
        document.removeEventListener("keydown", i), document.removeEventListener("keyup", c);
      };
    }, []), /* @__PURE__ */ u(
      U,
      {
        asChild: !0,
        ...l,
        focusable: !a,
        active: p,
        children: /* @__PURE__ */ u(
          g,
          {
            disabled: a,
            required: r.required,
            checked: p,
            ...f,
            ...e,
            name: r.name,
            ref: v,
            onCheck: () => r.onValueChange(e.value),
            onKeyDown: I((i) => {
              i.key === "Enter" && i.preventDefault();
            }),
            onFocus: I(e.onFocus, () => {
              m.current && R.current?.click();
            })
          }
        )
      }
    );
  }
);
F.displayName = O;
var ee = "RadioGroupIndicator", L = n.forwardRef(
  (t, d) => {
    const { __scopeRadioGroup: o, ...s } = t, e = D(o);
    return /* @__PURE__ */ u(S, { ...e, ...s, ref: d });
  }
);
L.displayName = ee;
var ie = M, de = F, ce = L;
export {
  de as I,
  ie as R,
  ce as a
};
