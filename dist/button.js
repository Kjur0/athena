import { jsx as b, jsxs as P, Fragment as R } from "react/jsx-runtime";
import * as n from "react";
import { forwardRef as N, isValidElement as V, cloneElement as C } from "react";
import { c as O } from "./index-DLcqcWxM.js";
import { c as j } from "./utils-BtlgVD4m.js";
import { c as z } from "./index-BKG9JlYH.js";
var A = /* @__PURE__ */ Symbol.for("react.lazy"), h = n[" use ".trim().toString()];
function B(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function S(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === A && "_payload" in e && B(e._payload);
}
// @__NO_SIDE_EFFECTS__
function I(e) {
  const a = /* @__PURE__ */ D(e), t = n.forwardRef((i, r) => {
    let { children: o, ...l } = i;
    S(o) && typeof h == "function" && (o = h(o._payload));
    const d = n.Children.toArray(o), s = d.find(W);
    if (s) {
      const y = s.props.children, u = d.map((p) => p === s ? n.Children.count(y) > 1 ? n.Children.only(null) : n.isValidElement(y) ? y.props.children : null : p);
      return /* @__PURE__ */ b(a, { ...l, ref: r, children: n.isValidElement(y) ? n.cloneElement(y, void 0, u) : null });
    }
    return /* @__PURE__ */ b(a, { ...l, ref: r, children: o });
  });
  return t.displayName = `${e}.Slot`, t;
}
var $ = /* @__PURE__ */ I("Slot");
// @__NO_SIDE_EFFECTS__
function D(e) {
  const a = n.forwardRef((t, i) => {
    let { children: r, ...o } = t;
    if (S(r) && typeof h == "function" && (r = h(r._payload)), n.isValidElement(r)) {
      const l = H(r), d = F(o, r.props);
      return r.type !== n.Fragment && (d.ref = i ? O(i, l) : l), n.cloneElement(r, d);
    }
    return n.Children.count(r) > 1 ? n.Children.only(null) : null;
  });
  return a.displayName = `${e}.SlotClone`, a;
}
var T = /* @__PURE__ */ Symbol("radix.slottable");
function W(e) {
  return n.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === T;
}
function F(e, a) {
  const t = { ...a };
  for (const i in a) {
    const r = e[i], o = a[i];
    /^on[A-Z]/.test(i) ? r && o ? t[i] = (...d) => {
      const s = o(...d);
      return r(...d), s;
    } : r && (t[i] = r) : i === "style" ? t[i] = { ...r, ...o } : i === "className" && (t[i] = [r, o].filter(Boolean).join(" "));
  }
  return { ...e, ...t };
}
function H(e) {
  let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, t = a && "isReactWarning" in a && a.isReactWarning;
  return t ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = a && "isReactWarning" in a && a.isReactWarning, t ? e.props.ref : e.props.ref || e.ref);
}
const Z = ({
  title: e,
  titleId: a,
  ...t
}, i) => /* @__PURE__ */ n.createElement("svg", { className: "animate-spin shrink-0 w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "{true} ", ref: i, "aria-labelledby": a, ...t }, e ? /* @__PURE__ */ n.createElement("title", { id: a }, e) : null, /* @__PURE__ */ n.createElement("path", { d: "M7.14667 13.2666C6.42022 13.1495 5.72586 12.8834 5.10726 12.4849C4.48866 12.0864 3.95921 11.5643 3.5522 10.9513C3.1452 10.3382 2.86944 9.64764 2.74229 8.92289C2.61513 8.19813 2.63932 7.4549 2.81334 6.73995C3.03483 5.74733 3.54363 4.84187 4.27629 4.13648C5.00894 3.4311 5.93303 2.95699 6.93334 2.77328C7.63529 2.63005 8.3589 2.62972 9.06099 2.77229C9.76307 2.91486 10.4292 3.19742 11.0197 3.60311C11.6102 4.00879 12.1129 4.52928 12.4978 5.13351C12.8827 5.73775 13.1419 6.41333 13.26 7.11995C13.2947 7.36046 13.4135 7.58088 13.5954 7.74201C13.7773 7.90315 14.0104 7.99454 14.2533 7.99995H14.34C14.4707 8.00192 14.6002 7.97582 14.7199 7.92343C14.8397 7.87103 14.9467 7.79356 15.0339 7.69624C15.1211 7.59892 15.1865 7.48402 15.2255 7.3593C15.2645 7.23458 15.2762 7.10295 15.26 6.97328C15.0703 5.63152 14.5126 4.36854 13.6487 3.32453C12.7848 2.28052 11.6485 1.4963 10.3659 1.0589C9.08332 0.621502 7.70463 0.548037 6.38284 0.846658C5.06104 1.14528 3.84784 1.8043 2.87787 2.7506C1.9079 3.69689 1.2191 4.89344 0.887914 6.20745C0.556727 7.52146 0.596105 8.90155 1.00168 10.1945C1.40725 11.4875 2.16316 12.6429 3.18551 13.5323C4.20786 14.4217 5.45667 15.0105 6.79334 15.2333C6.94074 15.2595 7.0921 15.2532 7.23681 15.2148C7.38151 15.1764 7.51606 15.1068 7.63103 15.0109C7.746 14.915 7.83859 14.7951 7.90233 14.6596C7.96607 14.5241 7.99941 14.3763 8.00001 14.2266C7.99717 13.9907 7.9093 13.7637 7.75254 13.5873C7.59578 13.411 7.38065 13.2971 7.14667 13.2666Z", fill: "currentColor" })), w = N(Z), Y = z(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ease-[ease] shrink-0 outline-none focus-visible:ring-gi-secondary/50 focus-visible:ring-[3px] data-[disabled=true]:pointer-events-none [&_svg]:size-4 [&_svg]:overflow-visible [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        primary: "data-[disabled=true]:border-transparent",
        outlined: "border data-[disabled=true]:bg-transparent",
        ghost: "data-[disabled=true]:border-transparent"
      },
      variant: {
        primary: "",
        secondary: "",
        danger: "",
        ngoSecondary: "",
        ngoPrimary: "",
        ngoOption: ""
      },
      size: {
        small: "h-8 px-3 text-xs gap-1.5 has-[>svg]:px-2.5",
        regular: "h-10 px-4 py-2 has-[>svg]:px-3",
        "ngo-small": "h-8 px-3 text-xs gap-2 has-[>svg]:px-3",
        "ngo-regular": "h-10 px-4 py-2 has-[>svg]:px-4"
      },
      isIconButton: {
        true: "p-0"
      }
    },
    compoundVariants: [
      {
        type: "primary",
        variant: "primary",
        className: "bg-gi-primary text-white hover:bg-gi-primary-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white"
      },
      {
        type: "primary",
        variant: "ngoPrimary",
        className: "bg-gi-navy text-white hover:bg-gi-navy-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white"
      },
      {
        type: "primary",
        variant: "ngoSecondary",
        className: "bg-gi-blue text-white hover:bg-gi-blue-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white"
      },
      {
        type: "primary",
        variant: "ngoOption",
        className: "bg-gi-light-gray-dark text-gi-navy hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-gi-navy"
      },
      {
        type: "primary",
        variant: "secondary",
        className: "bg-gi-secondary text-white hover:bg-gi-secondary-hover data-[disabled=true]:bg-gi-gray-hover data-[disabled=true]:text-white"
      },
      {
        type: "primary",
        variant: "danger",
        className: "bg-gi-red text-white hover:bg-gi-red-hover data-[disabled=true]:bg-gi-gray-hover data-[disabled=true]:text-white"
      },
      {
        type: "outlined",
        variant: "primary",
        className: "border-gi-primary text-gi-primary bg-transparent hover:bg-gi-ash data-[disabled=true]:border-gi-gray data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "secondary",
        className: "border-gi-secondary text-gi-secondary bg-transparent hover:bg-gi-secondary/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "danger",
        className: "border-gi-red text-gi-red bg-transparent hover:bg-gi-red/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "ngoSecondary",
        className: "border-gi-blue text-gi-blue bg-transparent hover:bg-gi-blue/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "ngoPrimary",
        className: "border-gi-navy text-gi-navy bg-transparent hover:bg-gi-navy/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "ngoOption",
        className: "border-gi-light-gray-dark text-gi-navy bg-transparent hover:bg-gi-dark-ash/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "primary",
        className: "bg-gi-ash text-gi-primary hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-dark-gray"
      },
      {
        type: "ghost",
        variant: "secondary",
        className: "bg-gi-secondary/10 text-gi-secondary hover:bg-gi-secondary/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "danger",
        className: "bg-gi-red/10 text-gi-red hover:bg-gi-red/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "ngoSecondary",
        className: "bg-gi-blue/10 text-gi-blue hover:bg-gi-blue/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "ngoPrimary",
        className: "bg-gi-navy/10 text-gi-navy hover:bg-gi-navy/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "ngoOption",
        className: "bg-gi-light-gray-dark/10 text-gi-navy hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
      },
      {
        isIconButton: !0,
        size: "regular",
        className: "w-10 h-10"
      },
      {
        isIconButton: !0,
        size: "small",
        className: "w-8 h-8"
      }
    ],
    defaultVariants: {
      type: "primary",
      variant: "primary",
      size: "regular"
    }
  }
), M = N(
  ({
    className: e,
    type: a,
    variant: t,
    size: i,
    isIconButton: r,
    asChild: o = !1,
    LeftIcon: l,
    RightIcon: d,
    isLoading: s,
    htmlType: y = "button",
    children: u,
    disabled: p,
    onClick: E,
    ..._
  }, v) => {
    const c = p || s, k = (g) => {
      if (c) {
        g.preventDefault(), g.stopPropagation();
        return;
      }
      E?.(g);
    }, m = (g) => C(
      g,
      {
        "aria-hidden": !0,
        focusable: "false"
      }
    ), f = (g) => r && s ? /* @__PURE__ */ b(w, {}) : /* @__PURE__ */ P(R, { children: [
      s ? /* @__PURE__ */ b(w, {}) : l && m(l),
      g,
      !s && d && m(d)
    ] }), x = {
      className: j(
        Y({ type: a, variant: t, size: i, isIconButton: r, className: e }),
        s && "cursor-wait"
      ),
      disabled: c,
      "aria-disabled": c,
      "aria-busy": s,
      "aria-live": "polite",
      "data-disabled": c,
      onClick: k,
      ..._
    };
    if (o && V(u)) {
      const g = u;
      return /* @__PURE__ */ b($, { ref: v, ...x, children: C(g, {
        children: f(g.props.children)
      }) });
    }
    return /* @__PURE__ */ b("button", { ref: v, type: y, ...x, children: f(u) });
  }
);
M.displayName = "Button";
export {
  M as Button,
  M as default
};
