import { jsx as i, jsxs as R, Fragment as H } from "react/jsx-runtime";
import * as u from "react";
import { useId as G } from "react";
import { u as S } from "./index-DLcqcWxM.js";
import { P as _, u as K, a as w, b as L, c as U } from "./index-BjfsKMCT.js";
import { u as X } from "./index-BZPx6jYI.js";
import { P as $ } from "./index-Bxhh615u.js";
import { c as J } from "./utils-BtlgVD4m.js";
var y = "Checkbox", [Q] = U(y), [V, E] = Q(y);
function W(t) {
  const {
    __scopeCheckbox: a,
    checked: r,
    children: d,
    defaultChecked: o,
    disabled: e,
    form: c,
    name: l,
    onCheckedChange: p,
    required: m,
    value: k = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = t, [b, g] = K({
    prop: r,
    defaultProp: o ?? !1,
    onChange: p,
    caller: y
  }), [C, x] = u.useState(null), [v, n] = u.useState(null), s = u.useRef(!1), I = C ? !!c || !!C.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), P = {
    checked: b,
    disabled: e,
    setChecked: g,
    control: C,
    setControl: x,
    name: l,
    form: c,
    value: k,
    hasConsumerStoppedPropagationRef: s,
    required: m,
    defaultChecked: h(o) ? !1 : o,
    isFormControl: I,
    bubbleInput: v,
    setBubbleInput: n
  };
  return /* @__PURE__ */ i(
    V,
    {
      scope: a,
      ...P,
      children: Y(f) ? f(P) : d
    }
  );
}
var B = "CheckboxTrigger", M = u.forwardRef(
  ({ __scopeCheckbox: t, onKeyDown: a, onClick: r, ...d }, o) => {
    const {
      control: e,
      value: c,
      disabled: l,
      checked: p,
      required: m,
      setControl: k,
      setChecked: f,
      hasConsumerStoppedPropagationRef: b,
      isFormControl: g,
      bubbleInput: C
    } = E(B, t), x = S(o, k), v = u.useRef(p);
    return u.useEffect(() => {
      const n = e?.form;
      if (n) {
        const s = () => f(v.current);
        return n.addEventListener("reset", s), () => n.removeEventListener("reset", s);
      }
    }, [e, f]), /* @__PURE__ */ i(
      _.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": h(p) ? "mixed" : p,
        "aria-required": m,
        "data-state": O(p),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: c,
        ...d,
        ref: x,
        onKeyDown: w(a, (n) => {
          n.key === "Enter" && n.preventDefault();
        }),
        onClick: w(r, (n) => {
          f((s) => h(s) ? !0 : !s), C && g && (b.current = n.isPropagationStopped(), b.current || n.stopPropagation());
        })
      }
    );
  }
);
M.displayName = B;
var T = u.forwardRef(
  (t, a) => {
    const {
      __scopeCheckbox: r,
      name: d,
      checked: o,
      defaultChecked: e,
      required: c,
      disabled: l,
      value: p,
      onCheckedChange: m,
      form: k,
      ...f
    } = t;
    return /* @__PURE__ */ i(
      W,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: e,
        disabled: l,
        required: c,
        onCheckedChange: m,
        name: d,
        form: k,
        value: p,
        internal_do_not_use_render: ({ isFormControl: b }) => /* @__PURE__ */ R(H, { children: [
          /* @__PURE__ */ i(
            M,
            {
              ...f,
              ref: a,
              __scopeCheckbox: r
            }
          ),
          b && /* @__PURE__ */ i(
            D,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
T.displayName = y;
var q = "CheckboxIndicator", A = u.forwardRef(
  (t, a) => {
    const { __scopeCheckbox: r, forceMount: d, ...o } = t, e = E(q, r);
    return /* @__PURE__ */ i(
      $,
      {
        present: d || h(e.checked) || e.checked === !0,
        children: /* @__PURE__ */ i(
          _.span,
          {
            "data-state": O(e.checked),
            "data-disabled": e.disabled ? "" : void 0,
            ...o,
            ref: a,
            style: { pointerEvents: "none", ...t.style }
          }
        )
      }
    );
  }
);
A.displayName = q;
var F = "CheckboxBubbleInput", D = u.forwardRef(
  ({ __scopeCheckbox: t, ...a }, r) => {
    const {
      control: d,
      hasConsumerStoppedPropagationRef: o,
      checked: e,
      defaultChecked: c,
      required: l,
      disabled: p,
      name: m,
      value: k,
      form: f,
      bubbleInput: b,
      setBubbleInput: g
    } = E(F, t), C = S(r, g), x = X(e), v = L(d);
    u.useEffect(() => {
      const s = b;
      if (!s) return;
      const I = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        I,
        "checked"
      ).set, j = !o.current;
      if (x !== e && N) {
        const z = new Event("click", { bubbles: j });
        s.indeterminate = h(e), N.call(s, h(e) ? !1 : e), s.dispatchEvent(z);
      }
    }, [b, x, e, o]);
    const n = u.useRef(h(e) ? !1 : e);
    return /* @__PURE__ */ i(
      _.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: c ?? n.current,
        required: l,
        disabled: p,
        name: m,
        value: k,
        form: f,
        ...a,
        tabIndex: -1,
        ref: C,
        style: {
          ...a.style,
          ...v,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
D.displayName = F;
function Y(t) {
  return typeof t == "function";
}
function h(t) {
  return t === "indeterminate";
}
function O(t) {
  return h(t) ? "indeterminate" : t ? "checked" : "unchecked";
}
const Z = ({
  className: t,
  label: a,
  secondaryLabel: r,
  id: d,
  ...o
}) => {
  const e = G(), c = d ?? e, l = `${c}-description`;
  return /* @__PURE__ */ R("div", { className: "flex items-start group", children: [
    /* @__PURE__ */ i(
      T,
      {
        id: c,
        "data-slot": "checkbox",
        "aria-describedby": r ? l : void 0,
        className: J(
          "peer shrink-0 rounded-xs border shadow-xs transition-all outline-none",
          "size-3.5 border-input dark:bg-gi-primary/30",
          "focus-visible:ring-2 focus-visible:ring-gi-primary focus-visible:ring-offset-2 ring-offset-background",
          "data-[state=checked]:bg-gi-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-gi-dark-ash",
          "aria-invalid:border-gi-red aria-invalid:ring-gi-red/20 dark:aria-invalid:ring-gi-red/40",
          "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          t
        ),
        ...o,
        children: /* @__PURE__ */ i(
          A,
          {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none"
          }
        )
      }
    ),
    /* @__PURE__ */ R("div", { className: "flex flex-col ml-2 select-none", children: [
      /* @__PURE__ */ i(
        "label",
        {
          htmlFor: c,
          className: "font-medium text-sm leading-3.5 text-gi-primary mb-1.5 cursor-pointer peer-disabled:cursor-not-allowed",
          children: a
        }
      ),
      r && /* @__PURE__ */ i("span", { id: l, className: "text-gi-gray text-sm leading-5", children: r })
    ] })
  ] });
};
Z.displayName = "Checkbox";
export {
  Z as Checkbox,
  Z as default
};
